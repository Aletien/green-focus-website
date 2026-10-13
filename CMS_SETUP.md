# Green Focus Organization CMS

This repository is a static HTML website deployed with GitHub Pages. The admin interface at `/admin/` uses Supabase for authentication, Postgres content storage, and image storage. Existing public pages and styling are preserved; only elements explicitly connected with a `data-cms-key` attribute change.

## Setup

1. Create a project at https://supabase.com and copy the Project URL and anon/publishable key from Project Settings > API.
2. Run `supabase/schema.sql` in the Supabase SQL Editor.
3. Create an administrator in Supabase Authentication > Users. Disable public sign-ups after the account is created. Assign this user's **app_metadata** `{"role":"admin"}` through a trusted Supabase administrative workflow, not user-editable user_metadata. Sign out and back in to refresh the token.
4. Replace the placeholders in `admin/config.js` and `assets/js/supabase-config.js`. Use only the public anon/publishable key. NEVER commit the Supabase service_role key.
5. Add a matching key to an existing HTML element, e.g. `<h1 data-cms-key="home.hero.title">Protecting the Rwenzori Region</h1>`. Create a content entry with that exact key in the admin. Supported types: text, image URL (for an img), link URL (for an anchor), and background image URL.
6. Add these scripts to each root-level public HTML page you want connected, before `</body>`: `<script src="assets/js/supabase-config.js"></script><script src="assets/js/cms.js"></script>`.
7. Review and merge the pull request. Keep your existing GitHub Pages deployment settings. The admin path will be your site's URL plus `/admin/`.

## Important limitations and safety

- This is the CMS admin/data foundation, not an automatic conversion of every hard-coded section. Existing HTML needs matching data-cms-key markers and script includes before a field can be edited in the admin and displayed publicly. Structured lists (events, blog posts, causes, team, gallery) need dedicated tables/renderers for full record management.
- If Supabase is unconfigured or unavailable, the existing static page content remains visible.
- Database and storage policies require `auth.jwt()->'app_metadata'->>'role' = 'admin'`. Assign roles only through trusted administrative tools.
- Test signed-out reads and denied write operations before production. Public images are readable to visitors, but uploading and deleting require the admin role.
