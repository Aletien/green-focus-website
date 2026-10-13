/* Public-site renderer for Green Focus Organization CMS.
   Add data-cms-key="page.section.field" to existing HTML elements to make them editable.
   Text is assigned with textContent (never injected as HTML). */
(function () {
  const cfg = window.GFO_CMS_CONFIG || {};
  if (!cfg.supabaseUrl || !cfg.supabaseAnonKey ||
      cfg.supabaseUrl.includes("YOUR_PROJECT_ID") ||
      cfg.supabaseAnonKey.includes("YOUR_SUPABASE")) return;
  const CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  function loadClient() {
    if (window.supabase && window.supabase.createClient) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = CDN; script.onload = resolve;
      script.onerror = reject; document.head.appendChild(script);
    });
  }
  loadClient().then(async () => {
    const client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    const { data, error } = await client.from("site_content")
      .select("content_key, content_value, content_type")
      .eq("published", true);
    if (error || !data) return;
    const values = new Map(data.map(row => [row.content_key, row]));
    document.querySelectorAll("[data-cms-key]").forEach(el => {
      const row = values.get(el.getAttribute("data-cms-key"));
      if (!row) return;
      const value = row.content_value || "";
      if (row.content_type === "image" && el.matches("img")) {
        el.src = value; el.removeAttribute("srcset");
      } else if (row.content_type === "background" ) {
        el.style.backgroundImage = "url(" + JSON.stringify(value).slice(1, -1) + ")";
      } else if (row.content_type === "link" && el.matches("a")) {
        el.href = value;
      } else {
        el.textContent = value;
      }
    });
  }).catch(() => {
    // The website remains usable with its original static content if CMS is unavailable.
  });
})();
