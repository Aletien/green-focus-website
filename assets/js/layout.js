(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = document.body.dataset.page || '';

        const navItems = [
            { id: 'home', label: 'Home', href: 'index.html' },
            { id: 'about', label: 'About', href: 'about.html' },
            { id: 'causes', label: 'Causes', href: 'causes.html' },
            { id: 'events', label: 'Events', href: 'events.html' },
            { id: 'gallery', label: 'Gallery', href: 'gallery.html' },
            { id: 'team', label: 'Team', href: 'team.html' },
            { id: 'blog', label: 'Blog', href: 'blog.html' },
            { id: 'contact', label: 'Contact', href: 'contact.html' }
        ];

        const desktopLinks = navItems.map(item => {
            const isActive = currentPage === item.id;

            return `
                <a href="${item.href}"
                   class="${isActive
                       ? 'text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1'
                       : 'text-gray-700 hover:text-emerald-600 font-medium'} transition">
                    ${item.label}
                </a>
            `;
        }).join('');

        const mobileLinks = navItems.map(item => {
            const isActive = currentPage === item.id;

            return `
                <a href="${item.href}"
                   class="block px-5 py-3 border-b border-gray-100 transition ${isActive
                       ? 'bg-emerald-50 text-emerald-600 font-semibold'
                       : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'}">
                    ${item.label}
                </a>
            `;
        }).join('');

        const header = `
            <div class="bg-emerald-900 text-white text-sm hidden md:block">
                <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                    <div class="flex flex-wrap items-center gap-6">
                        <span>
                            <i class="fa-solid fa-phone mr-2 text-amber-500"></i>
                            +256 788 227 476
                        </span>

                        <span>
                            <i class="fa-solid fa-envelope mr-2 text-amber-500"></i>
                            info@greenfocusorg.ug
                        </span>

                        <span>
                            <i class="fa-solid fa-location-dot mr-2 text-amber-500"></i>
                            Kamaiba Ward, Kasese District, Uganda
                        </span>
                    </div>

                    <div class="flex items-center gap-5">
                        <a href="about.html" class="hover:text-amber-400 transition">About GFO</a>
                        <a href="contact.html" class="hover:text-amber-400 transition">FAQ</a>
                        <a href="donate.html" class="hover:text-amber-400 transition font-semibold">Support Us</a>
                    </div>
                </div>
            </div>

            <nav class="bg-white shadow-md sticky top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center py-3 min-h-[92px] md:min-h-[112px]">

                        <a href="index.html" class="flex items-center" aria-label="Green Focus Organization Home">
                            <img src="assets/images/logo.jpeg"
                                 alt="Green Focus Organization"
                                 class="h-16 md:h-24 w-auto">
                        </a>

                        <div class="hidden lg:flex items-center space-x-5 xl:space-x-7">
                            ${desktopLinks}

                            <a href="donate.html"
                               class="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-lg">
                                Donate Now
                            </a>
                        </div>

                        <div class="lg:hidden">
                            <button id="mobile-menu-button"
                                    class="text-gray-700 hover:text-emerald-600 focus:outline-none"
                                    aria-label="Toggle Menu">
                                <i class="fa-solid fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="mobile-menu" class="hidden lg:hidden bg-white border-t shadow-xl">
                    <div class="px-5 py-4 bg-emerald-50 border-b border-emerald-100 flex justify-center">
                        <img src="assets/images/logo.jpeg"
                             alt="Green Focus Organization"
                             class="h-20 w-auto">
                    </div>

                    ${mobileLinks}

                    <a href="donate.html"
                       class="block px-5 py-4 text-amber-600 font-bold bg-amber-50 hover:bg-amber-100 transition">
                        Donate Now
                    </a>
                </div>
            </nav>
        `;

        const footer = `
            <footer class="bg-emerald-900 text-white pt-16 pb-8 mt-auto">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mb-12">

                        <div>
                            <div class="mb-4">
                                <div class="bg-white rounded-xl p-2 inline-block shadow">
                                    <img src="assets/images/logo.jpeg"
                                         alt="Green Focus Organization"
                                         class="h-20 md:h-24 w-auto">
                                </div>
                            </div>

                            <p class="text-emerald-100 text-sm leading-relaxed mb-6">
                                Green Focus Organization works with communities in Kasese, Bundibugyo,
                                Ntoroko, and Bunyangabu to protect the environment, strengthen resilience,
                                and promote sustainable livelihoods.
                            </p>

                            <div class="space-y-2 text-emerald-100 text-sm">
                                <p>
                                    <i class="fa-solid fa-phone mr-2 text-amber-500"></i>
                                    +256 788 227 476
                                </p>

                                <p>
                                    <i class="fa-solid fa-envelope mr-2 text-amber-500"></i>
                                    info@greenfocusorg.ug
                                </p>

                                <p>
                                    <i class="fa-solid fa-location-dot mr-2 text-amber-500"></i>
                                    Kamaiba Lower Central, Kamaiba Ward, Central Division, Kasese District, Uganda
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-heading font-bold text-lg mb-4">Quick Links</h3>

                            <ul class="space-y-3 text-emerald-100 text-sm">
                                <li><a href="index.html" class="hover:text-amber-400 transition">Home</a></li>
                                <li><a href="about.html" class="hover:text-amber-400 transition">About Us</a></li>
                                <li><a href="causes.html" class="hover:text-amber-400 transition">Causes</a></li>
                                <li><a href="events.html" class="hover:text-amber-400 transition">Events</a></li>
                                <li><a href="gallery.html" class="hover:text-amber-400 transition">Gallery</a></li>
                                <li><a href="team.html" class="hover:text-amber-400 transition">Team</a></li>
                                <li><a href="blog.html" class="hover:text-amber-400 transition">Blog</a></li>
                                <li><a href="contact.html" class="hover:text-amber-400 transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-heading font-bold text-lg mb-4">Get Involved</h3>

                            <ul class="space-y-3 text-emerald-100 text-sm">
                                <li>
                                    <a href="donate.html" class="hover:text-amber-400 transition">Donate Now</a>
                                </li>

                                <li>
                                    <a href="contact.html?subject=Volunteer%20Opportunity"
                                       class="hover:text-amber-400 transition">
                                        Become a Volunteer
                                    </a>
                                </li>

                                <li>
                                    <a href="contact.html?subject=Cause%20Partnership"
                                       class="hover:text-amber-400 transition">
                                        Partner With Us
                                    </a>
                                </li>

                                <li>
                                    <a href="events.html" class="hover:text-amber-400 transition">Upcoming Events</a>
                                </li>

                                <li>
                                    <a href="blog.html" class="hover:text-amber-400 transition">Read Our Stories</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-heading font-bold text-lg mb-4">Newsletter</h3>

                            <p class="text-emerald-100 text-sm mb-4">
                                Subscribe to receive updates, event announcements, and community impact stories.
                            </p>

                            <form data-form="newsletter" class="space-y-3">
                                <input type="email"
                                       required
                                       aria-label="Email address"
                                       placeholder="Your email address"
                                       class="w-full px-4 py-3 rounded-xl bg-emerald-800 border border-emerald-700 text-white placeholder-emerald-200 focus:outline-none focus:border-amber-500">

                                <button type="submit"
                                        class="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-xl font-semibold transition">
                                    Subscribe
                                </button>

                                <p data-success class="hidden text-amber-400 text-sm font-semibold">
                                    Thank you for subscribing.
                                </p>
                            </form>
                        </div>

                    </div>

                    <div class="border-t border-emerald-800 pt-8 text-center text-emerald-100 text-sm">
                        <p>
                            &copy; ${new Date().getFullYear()} Green Focus Organization (GFO). All rights reserved.
                        </p>

                        <p class="mt-2">
                            Established 5 December 2024 | Serving Kasese, Bundibugyo, Ntoroko, and Bunyangabu.
                        </p>
                    </div>
                </div>
            </footer>
        `;

        document.body.insertAdjacentHTML('afterbegin', header);
        document.body.insertAdjacentHTML('beforeend', footer);

        /* Accessibility: main content ID */
        const mainElement = document.querySelector('main');

        if (mainElement && !mainElement.id) {
            mainElement.id = 'main-content';
        }

        /* Accessibility: skip link */
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = `
            sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200]
            focus:bg-white focus:text-emerald-900 focus:px-4 focus:py-2 focus:rounded-lg
            focus:shadow-lg focus:outline focus:outline-2 focus:outline-amber-600
        `;

        document.body.insertAdjacentElement('afterbegin', skipLink);

        /* Mobile menu */
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');

                const icon = mobileMenuButton.querySelector('i');

                if (mobileMenu.classList.contains('hidden')) {
                    icon.className = 'fa-solid fa-bars text-2xl';
                } else {
                    icon.className = 'fa-solid fa-xmark text-2xl';
                }
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function () {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.querySelector('i').className = 'fa-solid fa-bars text-2xl';
                });
            });
        }

        /* Accessibility: current page */
        const currentFileName = window.location.pathname.split('/').pop() || 'index.html';

        document.querySelectorAll('nav a').forEach(link => {
            const href = link.getAttribute('href');

            if (
                href === currentFileName ||
                (currentPage === 'blog' && href === 'blog.html')
            ) {
                link.setAttribute('aria-current', 'page');
            }
        });

        /* SEO helper: Open Graph and Twitter tags */
        function upsertMeta(attribute, name, content) {
            let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);

            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }

            meta.setAttribute('content', content);
        }

        const pageTitle = document.title || 'Green Focus Organization';
        const pageDescription = document.head.querySelector('meta[name="description"]')?.content || '';
        const canonical = document.head.querySelector('link[rel="canonical"]')?.href || window.location.href;
        const ogImage = new URL('assets/images/og-cover.jpg', window.location.href).href;

        upsertMeta('property', 'og:site_name', 'Green Focus Organization');
        upsertMeta('property', 'og:type', 'website');
        upsertMeta('property', 'og:title', pageTitle);
        upsertMeta('property', 'og:description', pageDescription);
        upsertMeta('property', 'og:url', canonical);
        upsertMeta('property', 'og:image', ogImage);
        upsertMeta('property', 'og:locale', 'en_US');

        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:title', pageTitle);
        upsertMeta('name', 'twitter:description', pageDescription);
        upsertMeta('name', 'twitter:image', ogImage);

        /* SEO: Organization structured data */
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Green Focus Organization",
            "alternateName": "GFO",
            "description": "Green Focus Organization works with communities in Kasese, Bundibugyo, Ntoroko, and Bunyangabu to protect the environment, strengthen climate resilience, and promote sustainable livelihoods.",
            "url": "https://www.greenfocusorg.ug/",
            "logo": "https://www.greenfocusorg.ug/assets/images/logo.jpeg",
            "image": "https://www.greenfocusorg.ug/assets/images/logo.jpeg",
            "foundingDate": "2024-12-05",
            "founder": [
                {
                    "@type": "Person",
                    "name": "Muhindo Herman"
                },
                {
                    "@type": "Person",
                    "name": "Kule Michael"
                },
                {
                    "@type": "Person",
                    "name": "Baluku Frendick"
                }
            ],
            "areaServed": [
                "Kasese",
                "Bundibugyo",
                "Ntoroko",
                "Bunyangabu"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kamaiba Lower Central, Kamaiba Ward, Central Division",
                "addressLocality": "Kasese",
                "addressRegion": "Kasese District",
                "addressCountry": "UG"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+256 788 227 476",
                "contactType": "customer support",
                "email": "info@greenfocusorg.ug",
                "availableLanguage": ["English"]
            }
        };

        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.text = JSON.stringify(organizationSchema);
        document.head.appendChild(schemaScript);
    });
})();