document.addEventListener('DOMContentLoaded', function () {

    const causes = [
        {
            id: 1,
            title: 'Rwenzori Reforestation Initiative',
            category: 'Environment',
            location: 'Kasese & Bunyangabu',
            raised: 7500,
            goal: 10000,
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
            description: 'Planting indigenous trees and promoting community forest stewardship to combat erosion, landslides, and environmental degradation.'
        },
        {
            id: 2,
            title: 'Flood and Landslide Early Warning Systems',
            category: 'Climate Resilience',
            location: 'Bundibugyo & Ntoroko',
            raised: 4500,
            goal: 10000,
            image: 'assets/images/causes/floors.jpg',
            description: 'Supporting community-based monitoring, alert systems, and disaster preparedness to protect vulnerable households.'
        },
        {
            id: 3,
            title: 'Climate-Smart Livelihoods Program',
            category: 'Livelihoods',
            location: 'All Districts',
            raised: 6000,
            goal: 10000,
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
            description: 'Training farmers in sustainable agriculture, soil conservation, and alternative livelihood options that protect the environment.'
        },
        {
            id: 4,
            title: 'Community Clean Water and Sanitation Action',
            category: 'Humanitarian',
            location: 'Ntoroko',
            raised: 3200,
            goal: 8000,
            image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?auto=format&fit=crop&w=900&q=80',
            description: 'Promoting clean water protection, sanitation awareness, and community-led hygiene initiatives.'
        },
        {
            id: 5,
            title: 'Youth Climate Champions Program',
            category: 'Education',
            location: 'All Districts',
            raised: 2800,
            goal: 7000,
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
            description: 'Empowering young people with climate knowledge, leadership skills, and community action opportunities.'
        },
        {
            id: 6,
            title: 'Peaceful Coexistence and Natural Resource Dialogue',
            category: 'Community',
            location: 'Rwenzori Region',
            raised: 4100,
            goal: 9000,
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
            description: 'Facilitating dialogue between communities and leaders on responsible natural resource use and peaceful coexistence.'
        }
    ];

    const upcomingEvents = [
        {
            id: 1,
            day: '18',
            month: 'Oct 2026',
            title: 'Community Tree Planting and Soil Conservation Day',
            time: '8:00 AM - 2:00 PM',
            location: 'Kasese District',
            category: 'Environment',
            audience: 'Open to Volunteers',
            description: 'Join community members, local leaders, and volunteers in planting indigenous trees and promoting soil conservation practices.'
        },
        {
            id: 2,
            day: '07',
            month: 'Nov 2026',
            title: 'Flood and Landslide Early Warning Training',
            time: '9:00 AM - 4:00 PM',
            location: 'Bundibugyo',
            category: 'Training',
            audience: 'Community Leaders',
            description: 'A practical training session for community leaders and volunteers on identifying risks and strengthening local early warning systems.'
        },
        {
            id: 3,
            day: '28',
            month: 'Nov 2026',
            title: 'Youth Climate Champions Forum',
            time: '10:00 AM - 3:00 PM',
            location: 'Ntoroko',
            category: 'Youth',
            audience: 'Youth & Students',
            description: 'A forum bringing together young people to discuss climate action, environmental leadership, and community-based solutions.'
        },
        {
            id: 4,
            day: '05',
            month: 'Dec 2026',
            title: 'GFO Community Resilience Fair & Anniversary Celebration',
            time: '9:00 AM - 5:00 PM',
            location: 'Bunyangabu',
            category: 'Anniversary',
            audience: 'Public Event',
            description: 'Celebrating the founding of Green Focus Organization and showcasing community projects, local innovations, and partnerships.'
        }
    ];

    const pastEvents = [
        {
            id: 5,
            day: '05',
            month: 'Jun 2026',
            title: 'World Environment Day Community Clean-Up',
            time: '7:00 AM - 12:00 PM',
            location: 'Ntoroko Town',
            description: 'Volunteers and community members participated in a clean-up campaign to protect waterways and raise environmental awareness.'
        },
        {
            id: 6,
            day: '12',
            month: 'Mar 2026',
            title: 'Wetland Restoration and Conservation Walk',
            time: '8:00 AM - 1:00 PM',
            location: 'Kasese District',
            description: 'A conservation walk and awareness event focused on protecting wetlands, which support flood control and water regulation.'
        },
        {
            id: 7,
            day: '09',
            month: 'Aug 2026',
            title: 'Community Dialogue on Natural Resources and Peaceful Coexistence',
            time: '2:00 PM - 6:00 PM',
            location: 'Bundibugyo',
            description: 'A dialogue session bringing together community members and leaders to discuss responsible natural resource use.'
        }
    ];

    const galleryItems = [
        {
            id: 1,
            category: 'Reforestation',
            title: 'Tree Planting in Kasese',
            caption: 'Community members planting indigenous seedlings to restore degraded slopes.',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 2,
            category: 'Community',
            title: 'Community Outreach',
            caption: 'Engaging local communities in environmental protection and resilience planning.',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 3,
            category: 'Training',
            title: 'Climate Resilience Training',
            caption: 'Training local leaders on climate adaptation and early warning systems.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 4,
            category: 'Events',
            title: 'Awareness Campaign',
            caption: 'Community gathering to promote environmental stewardship and peace.',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 5,
            category: 'Field Work',
            title: 'Field Assessment',
            caption: 'Assessing landscape risks and environmental conditions in Rwenzori communities.',
            image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 6,
            category: 'Reforestation',
            title: 'Green Cover Restoration',
            caption: 'Restoring vegetation cover to reduce erosion and protect water sources.',
            image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 7,
            category: 'Community',
            title: 'Volunteer Action',
            caption: 'Volunteers supporting local environmental and humanitarian initiatives.',
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 8,
            category: 'Training',
            title: 'Capacity Building',
            caption: 'Equipping community members with practical climate and livelihood skills.',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
        },
        {
            id: 9,
            category: 'Field Work',
            title: 'Landscape Conservation',
            caption: 'Protecting the natural environment that supports communities and biodiversity.',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
        }
    ];

    const founders = [
        {
            name: 'Muhindo Herman',
            initials: 'MH',
            image: 'assets/images/team/herman.jpg',
            role: 'Founder & Director',
            bio: "Provides strategic leadership and coordinates the organization's vision, partnerships, and community-focused environmental programs.",
            tags: ['Leadership', 'Partnerships', 'Strategy']
        },
        {
            name: 'Kule Michael',
            initials: 'KM',
            image: '',
            role: 'Co-Founder',
            bio: "Supports operations, field coordination, and implementation of practical solutions that strengthen community resilience.",
            tags: ['Operations', 'Field Work', 'Programs']
        },
        {
            name: 'Baluku Frendick',
            initials: 'BF',
            image: '',
            role: 'Co-Founder',
            bio: "Works closely with communities, local leaders, and volunteers to promote participation and peaceful coexistence.",
            tags: ['Community', 'Mobilization', 'Peacebuilding']
        }
    ];

    const teamUnits = [
        {
            title: 'Programs & Projects',
            icon: 'fa-solid fa-diagram-project',
            description: 'Plans and implements reforestation, climate resilience, livelihood support, and humanitarian response projects.',
            points: ['Project planning', 'Field implementation', 'Community reporting']
        },
        {
            title: 'Climate & Environment',
            icon: 'fa-solid fa-cloud-sun',
            description: 'Focuses on environmental protection, disaster risk reduction, and climate adaptation strategies.',
            points: ['Tree planting', 'Early warning systems', 'Ecosystem restoration']
        },
        {
            title: 'Community Mobilization',
            icon: 'fa-solid fa-people-group',
            description: 'Engages local communities, youth, women, and leaders in collective action and peaceful coexistence.',
            points: ['Village meetings', 'Youth engagement', 'Volunteer mobilization']
        },
        {
            title: 'Partnerships & Communications',
            icon: 'fa-solid fa-handshake',
            description: 'Builds relationships with development partners, local leaders, media, and technical experts.',
            points: ['Stakeholder engagement', 'Communications', 'Fundraising support']
        },
        {
            title: 'Monitoring & Learning',
            icon: 'fa-solid fa-chart-line',
            description: 'Tracks project results, collects community feedback, and improves program quality.',
            points: ['Impact tracking', 'Community feedback', 'Lessons learned']
        },
        {
            title: 'Volunteer Network',
            icon: 'fa-solid fa-users',
            description: 'Community volunteers support events, outreach, tree planting, clean-ups, and awareness campaigns.',
            points: ['Event volunteers', 'Community champions', 'Youth ambassadors']
        }
    ];

    const blogPosts = [
        {
            slug: 'community-led-early-warning-systems',
            title: 'Community-Led Early Warning Systems Are Strengthening Resilience in the Rwenzori Region',
            category: 'Climate',
            date: 'September 28, 2026',
            author: 'Green Focus Team',
            image: 'assets/images/blog/climate.jpg',
            excerpt: 'Communities in Kasese, Bundibugyo, Ntoroko, and Bunyangabu face increasing risks from floods, landslides, and climate-related shocks.',
            content: [
                'Communities in the Rwenzori Region are increasingly exposed to floods, landslides, and other climate-related shocks. These risks affect homes, farms, roads, water sources, and livelihoods.',
                'Green Focus Organization believes that effective early warning systems must be community-led. Local people understand their environment, local risk points, and communication channels.',
                'GFO works with community leaders, volunteers, and technical partners to strengthen local preparedness. This includes identifying risk zones, training community monitors, and supporting simple alert systems.',
                'By connecting communities with practical knowledge and local action, we can reduce disaster losses and protect vulnerable households.'
            ]
        },
        {
            slug: 'restoring-trees-restoring-hope',
            title: 'Restoring Trees, Restoring Hope: Reforestation Action in Kasese',
            category: 'Environment',
            date: 'September 12, 2026',
            author: 'Green Focus Team',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
            excerpt: 'Tree planting is more than an environmental activity. It is a community effort to protect slopes, restore water sources, and build resilience.',
            content: [
                'Reforestation is one of the most practical ways to protect vulnerable landscapes in the Rwenzori Region.',
                'Trees help stabilize soil, reduce erosion, protect water sources, and improve local microclimates. They also provide long-term benefits to farming communities.',
                'Green Focus Organization promotes the planting of indigenous trees and works with community members to ensure seedling care and survival.',
                'Restoring trees is not only about the environment. It is about restoring hope, strengthening community action, and building a safer future.'
            ]
        },
        {
            slug: 'climate-smart-agriculture-bunyangabu',
            title: 'Climate-Smart Agriculture: Supporting Farmers in Bunyangabu',
            category: 'Livelihoods',
            date: 'August 30, 2026',
            author: 'Green Focus Team',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
            excerpt: 'Farmers are adopting sustainable practices that protect the environment while improving food security and household income.',
            content: [
                'Agriculture is central to livelihoods in the Rwenzori Region, but climate variability is making farming more challenging.',
                'Green Focus Organization supports farmers with climate-smart agriculture practices that protect soil, conserve water, and improve productivity.',
                'These practices include mulching, agroforestry, contour farming, and diversified livelihood options.',
                'When farmers are empowered with practical skills, they can protect the environment while improving food security and household resilience.'
            ]
        },
        {
            slug: 'local-leadership-environmental-protection',
            title: 'Why Local Leadership Matters in Environmental Protection',
            category: 'Community',
            date: 'August 15, 2026',
            author: 'Green Focus Team',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
            excerpt: 'Sustainable solutions begin with communities. GFO works with local leaders to ensure environmental action is inclusive and locally owned.',
            content: [
                'Environmental protection is most sustainable when it is led by local communities.',
                'Local leaders, women, youth, and community structures play a vital role in mobilizing action and resolving challenges.',
                'Green Focus Organization works with local leaders to ensure that environmental initiatives are inclusive, practical, and owned by the community.',
                'Local leadership strengthens trust, improves participation, and increases the chances of long-term success.'
            ]
        },
        {
            slug: 'preparing-for-flood-landslide-risks',
            title: 'Preparing Communities for Flood and Landslide Risks',
            category: 'Climate',
            date: 'July 18, 2026',
            author: 'Green Focus Team',
            image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80',
            excerpt: 'GFO is supporting communities with practical preparedness tools, local monitoring, and awareness campaigns.',
            content: [
                'Floods and landslides are among the most serious climate risks in the Rwenzori Region.',
                'Preparedness can save lives and reduce damage to property, farms, and infrastructure.',
                'Green Focus Organization supports communities with awareness campaigns, local risk mapping, and simple preparedness tools.',
                'Through community action and partnership, we can build stronger resilience against climate-related disasters.'
            ]
        }
    ];

    const donationImpacts = [
        {
            amount: '$25',
            icon: 'fa-solid fa-seedling',
            description: 'Plants indigenous trees and supports community maintenance training.'
        },
        {
            amount: '$50',
            icon: 'fa-solid fa-tower-broadcast',
            description: 'Supports basic community flood and landslide early warning tools.'
        },
        {
            amount: '$100',
            icon: 'fa-solid fa-users',
            description: 'Helps sponsor climate-smart agriculture training for local farmers.'
        },
        {
            amount: '$250',
            icon: 'fa-solid fa-hand-holding-heart',
            description: 'Supports a community resilience outreach activity in a vulnerable area.'
        }
    ];

    function causeCard(cause) {
        const progress = Math.min(100, Math.round((cause.raised / cause.goal) * 100));

        return `
            <article class="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col">
                <div class="h-56 overflow-hidden">
                    <img src="${cause.image}"
                         alt="${cause.title}"
                         loading="lazy"
                         class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                </div>

                <div class="p-6 flex flex-col flex-1">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                            ${cause.category}
                        </span>

                        <span class="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                            ${cause.location}
                        </span>
                    </div>

                    <h3 class="font-heading font-bold text-xl text-emerald-900 mb-3">
                        ${cause.title}
                    </h3>

                    <p class="text-gray-600 text-sm mb-5 flex-1">
                        ${cause.description}
                    </p>

                    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                        <div class="bg-emerald-600 h-2.5 rounded-full" style="width:${progress}%"></div>
                    </div>

                    <div class="flex justify-between text-sm font-semibold text-gray-700 mb-6">
                        <span>Raised: $${cause.raised.toLocaleString()}</span>
                        <span>Goal: $${cause.goal.toLocaleString()}</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <a href="donate.html?cause=${encodeURIComponent(cause.title)}"
                           class="text-center bg-emerald-900 text-white py-3 rounded-xl hover:bg-emerald-600 transition font-semibold">
                            Donate
                        </a>

                        <a href="contact.html?subject=Cause%20Partnership"
                           class="text-center border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white py-3 rounded-xl transition font-semibold">
                            Partner
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    function eventCard(event, type = 'upcoming') {
        const dateBackground = type === 'upcoming' ? 'bg-emerald-600' : 'bg-gray-700';

        const actionButtons = type === 'upcoming'
            ? `
                <div class="flex flex-col sm:flex-row gap-3">
                    <a href="contact.html?subject=Event%20Registration"
                       class="bg-emerald-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition text-center">
                        Register Interest
                    </a>

                    <a href="gallery.html"
                       class="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-6 py-3 rounded-xl font-semibold transition text-center">
                        View Gallery
                    </a>
                </div>
            `
            : `
                <a href="gallery.html"
                   class="inline-flex items-center text-emerald-600 font-semibold hover:text-amber-600 transition">
                    View Related Gallery
                    <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            `;

        return `
            <article class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition duration-300">
                <div class="md:w-44 ${dateBackground} text-white flex flex-col items-center justify-center p-6 text-center">
                    <span class="font-heading text-5xl font-bold">${event.day}</span>
                    <span class="uppercase tracking-wide">${event.month}</span>

                    ${
                        type === 'upcoming'
                            ? `<span class="mt-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">${event.category}</span>`
                            : `<span class="mt-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">Completed</span>`
                    }
                </div>

                <div class="p-6 md:p-8 flex-1">
                    <h3 class="font-heading font-bold text-2xl text-emerald-900 mb-3">
                        ${event.title}
                    </h3>

                    <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span>
                            <i class="fa-solid fa-clock mr-1 text-emerald-600"></i>
                            ${event.time}
                        </span>

                        <span>
                            <i class="fa-solid fa-location-dot mr-1 text-emerald-600"></i>
                            ${event.location}
                        </span>

                        ${
                            type === 'upcoming'
                                ? `
                                    <span>
                                        <i class="fa-solid fa-user-group mr-1 text-emerald-600"></i>
                                        ${event.audience}
                                    </span>
                                `
                                : ''
                        }
                    </div>

                    <p class="text-gray-600 mb-6">
                        ${event.description}
                    </p>

                    ${actionButtons}
                </div>
            </article>
        `;
    }

    function postCard(post) {
        return `
            <article class="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col">
                <a href="blog-post.html?slug=${post.slug}" class="block h-52 overflow-hidden">
                    <img src="${post.image}"
                         alt="${post.title}"
                         loading="lazy"
                         class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                </a>

                <div class="p-6 flex flex-col flex-1">
                    <div class="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                        <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                            ${post.category}
                        </span>

                        <span>${post.date}</span>
                    </div>

                    <h3 class="font-heading font-bold text-xl text-emerald-900 mb-3 group-hover:text-emerald-600 transition">
                        <a href="blog-post.html?slug=${post.slug}">
                            ${post.title}
                        </a>
                    </h3>

                    <p class="text-gray-600 text-sm mb-5 flex-1">
                        ${post.excerpt}
                    </p>

                    <a href="blog-post.html?slug=${post.slug}"
                       class="inline-flex items-center text-emerald-600 font-semibold hover:text-amber-600 transition">
                        Read More
                        <i class="fa-solid fa-arrow-right ml-2 text-sm"></i>
                    </a>
                </div>
            </article>
        `;
    }

    function galleryCard(item) {
        return `
            <figure class="gallery-item bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                    data-category="${item.category}"
                    data-image="${item.image}"
                    data-title="${item.title}"
                    data-caption="${item.caption}">

                <div class="h-64 overflow-hidden">
                    <img src="${item.image}"
                         alt="${item.title}"
                         loading="lazy"
                         class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                </div>

                <figcaption class="p-5">
                    <span class="text-xs font-bold px-3 py-1 rounded-full ${
                        item.category === 'Reforestation'
                            ? 'bg-emerald-100 text-emerald-700'
                            : item.category === 'Community'
                                ? 'bg-amber-100 text-amber-700'
                                : item.category === 'Training'
                                    ? 'bg-blue-100 text-blue-700'
                                    : item.category === 'Events'
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'bg-gray-100 text-gray-700'
                    }">
                        ${item.category}
                    </span>

                    <h3 class="font-heading font-bold text-lg text-emerald-900 mt-3">
                        ${item.title}
                    </h3>

                    <p class="text-gray-600 text-sm mt-1">
                        ${item.caption}
                    </p>
                </figcaption>
            </figure>
        `;
    }

    function renderHome() {
        const homeFeaturedCauses = document.getElementById('home-featured-causes');
        const homeUpcomingEvents = document.getElementById('home-upcoming-events');
        const homeLatestPosts = document.getElementById('home-latest-posts');

        if (homeFeaturedCauses) {
            homeFeaturedCauses.innerHTML = causes.slice(0, 3).map(causeCard).join('');
        }

        if (homeUpcomingEvents) {
            homeUpcomingEvents.innerHTML = upcomingEvents.slice(0, 2).map(event => eventCard(event, 'upcoming')).join('');
        }

        if (homeLatestPosts) {
            homeLatestPosts.innerHTML = blogPosts.slice(0, 3).map(postCard).join('');
        }
    }

    function renderCauses() {
        const causesGrid = document.getElementById('causes-grid');

        if (causesGrid) {
            causesGrid.innerHTML = causes.map(causeCard).join('');
        }
    }

    function renderEvents() {
        const upcomingContainer = document.getElementById('upcoming-events');
        const pastContainer = document.getElementById('past-events');

        if (upcomingContainer) {
            upcomingContainer.innerHTML = upcomingEvents.map(event => eventCard(event, 'upcoming')).join('');
        }

        if (pastContainer) {
            pastContainer.innerHTML = pastEvents.map(event => eventCard(event, 'past')).join('');
        }
    }

    function renderGallery() {
        const galleryFilters = document.getElementById('gallery-filters');
        const galleryGrid = document.getElementById('gallery-grid');

        if (!galleryFilters || !galleryGrid) return;

        const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

        galleryFilters.innerHTML = categories.map(category => `
            <button type="button"
                    data-gallery-filter="${category}"
                    class="px-5 py-2 rounded-full font-semibold shadow transition ${
                        category === 'All'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-emerald-600 hover:text-white'
                    }">
                ${category}
            </button>
        `).join('');

        galleryGrid.innerHTML = galleryItems.map(galleryCard).join('');

        function filterGallery(category) {
            const filtered = category === 'All'
                ? galleryItems
                : galleryItems.filter(item => item.category === category);

            galleryGrid.innerHTML = filtered.map(galleryCard).join('');

            document.querySelectorAll('[data-gallery-filter]').forEach(button => {
                const isActive = button.dataset.galleryFilter === category;

                button.className = `px-5 py-2 rounded-full font-semibold shadow transition ${
                    isActive
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-emerald-600 hover:text-white'
                }`;
            });
        }

        document.querySelectorAll('[data-gallery-filter]').forEach(button => {
            button.addEventListener('click', function () {
                filterGallery(this.dataset.galleryFilter);
            });
        });

        galleryGrid.addEventListener('click', function (event) {
            const item = event.target.closest('.gallery-item');

            if (!item) return;

            openLightbox(item);
        });
    }

    function renderTeam() {
        const foundersGrid = document.getElementById('founders-grid');
        const teamUnitsGrid = document.getElementById('team-units-grid');

        if (foundersGrid) {
            foundersGrid.innerHTML = founders.map(member => `
                <div class="bg-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">

                    <div class="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-5 bg-emerald-100 border-4 border-white shadow-lg">

                        ${
                            member.image
                                ? `
                                    <img src="${member.image}"
                                         alt="${member.name}"
                                         loading="lazy"
                                         class="absolute inset-0 w-full h-full object-cover object-center"
                                         onerror="this.style.display='none'; this.parentElement.querySelector('[data-initials]').classList.remove('hidden');">

                                    <div data-initials
                                         class="hidden absolute inset-0 flex items-center justify-center bg-emerald-900 text-white text-2xl sm:text-3xl font-bold">
                                        ${member.initials}
                                    </div>
                                `
                                : `
                                    <div class="absolute inset-0 flex items-center justify-center bg-emerald-900 text-white text-2xl sm:text-3xl font-bold">
                                        ${member.initials}
                                    </div>
                                `
                        }

                    </div>

                    <h3 class="font-heading font-bold text-xl text-emerald-900">
                        ${member.name}
                    </h3>

                    <p class="text-emerald-600 font-medium text-sm mb-4">
                        ${member.role}
                    </p>

                    <p class="text-gray-600 text-sm mb-5">
                        ${member.bio}
                    </p>

                    <div class="flex flex-wrap justify-center gap-2">
                        ${member.tags.map(tag => `
                            <span class="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        if (teamUnitsGrid) {
            teamUnitsGrid.innerHTML = teamUnits.map(unit => `
                <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                    <div class="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                        <i class="text-emerald-600 text-xl ${unit.icon}"></i>
                    </div>

                    <h3 class="font-heading font-bold text-xl text-emerald-900 mb-3">
                        ${unit.title}
                    </h3>

                    <p class="text-gray-600 text-sm mb-4">
                        ${unit.description}
                    </p>

                    <ul class="space-y-2 text-sm text-gray-600">
                        ${unit.points.map(point => `
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-emerald-600 mt-1"></i>
                                <span>${point}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('');
        }
    }

    function renderBlog() {
        const featuredPost = document.getElementById('featured-post');
        const blogFilters = document.getElementById('blog-filters');
        const blogGrid = document.getElementById('blog-grid');

        if (!featuredPost || !blogFilters || !blogGrid) return;

        const featured = blogPosts[0];

        featuredPost.innerHTML = `
            <article class="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 mb-16">
                <div class="h-72 lg:h-auto overflow-hidden">
                    <img src="${featured.image}"
                         alt="${featured.title}"
                         class="w-full h-full object-cover hover:scale-105 transition duration-700">
                </div>

                <div class="p-8 lg:p-12 flex flex-col justify-center">
                    <span class="bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full inline-block w-fit mb-4">
                        Featured Post
                    </span>

                    <h2 class="font-heading font-bold text-3xl text-emerald-900 mb-4">
                        ${featured.title}
                    </h2>

                    <p class="text-gray-600 mb-6">
                        ${featured.excerpt}
                    </p>

                    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                        <span>
                            <i class="fa-regular fa-calendar mr-1"></i>
                            ${featured.date}
                        </span>

                        <span>
                            <i class="fa-regular fa-user mr-1"></i>
                            ${featured.author}
                        </span>

                        <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                            ${featured.category}
                        </span>
                    </div>

                    <a href="blog-post.html?slug=${featured.slug}"
                       class="inline-flex items-center text-emerald-600 font-bold hover:text-amber-600 transition text-lg">
                        Continue Reading
                        <i class="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </article>
        `;

        const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

        blogFilters.innerHTML = categories.map(category => `
            <button type="button"
                    data-blog-filter="${category}"
                    class="px-5 py-2 rounded-full font-semibold shadow transition ${
                        category === 'All'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-emerald-600 hover:text-white'
                    }">
                ${category}
            </button>
        `).join('');

        function applyBlogFilter(category) {
            const filtered = category === 'All'
                ? blogPosts
                : blogPosts.filter(post => post.category === category);

            blogGrid.innerHTML = filtered.map(postCard).join('');

            document.querySelectorAll('[data-blog-filter]').forEach(button => {
                const isActive = button.dataset.blogFilter === category;

                button.className = `px-5 py-2 rounded-full font-semibold shadow transition ${
                    isActive
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-emerald-600 hover:text-white'
                }`;
            });
        }

        document.querySelectorAll('[data-blog-filter]').forEach(button => {
            button.addEventListener('click', function () {
                applyBlogFilter(this.dataset.blogFilter);
            });
        });

        applyBlogFilter('All');
    }

    function renderBlogPost() {
        const blogPostRoot = document.getElementById('blog-post-root');

        if (!blogPostRoot) return;

        function upsertMeta(attribute, name, content) {
            let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);

            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }

            meta.setAttribute('content', content);
        }

        function upsertCanonical(url) {
            let canonical = document.head.querySelector('link[rel="canonical"]');

            if (!canonical) {
                canonical = document.createElement('link');
                canonical.rel = 'canonical';
                document.head.appendChild(canonical);
            }

            canonical.href = url;
        }

        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');

        const post = blogPosts.find(item => item.slug === slug);

        if (!post) {
            blogPostRoot.innerHTML = `
                <div class="max-w-3xl mx-auto text-center py-20 px-4">
                    <h1 class="font-heading text-3xl font-bold text-emerald-900 mb-4">
                        Post Not Found
                    </h1>

                    <p class="text-gray-600 mb-8">
                        Sorry, the article you are looking for could not be found.
                    </p>

                    <a href="blog.html"
                       class="inline-flex items-center bg-emerald-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition">
                        <i class="fa-solid fa-arrow-left mr-2"></i>
                        Back to Blog
                    </a>
                </div>
            `;

            return;
        }

        document.title = `${post.title} | Green Focus Organization`;

        const canonicalUrl = `${window.location.origin}${window.location.pathname}?slug=${post.slug}`;

        upsertCanonical(canonicalUrl);
        upsertMeta('name', 'description', post.excerpt);
        upsertMeta('property', 'og:title', `${post.title} | Green Focus Organization`);
        upsertMeta('property', 'og:description', post.excerpt);
        upsertMeta('property', 'og:url', canonicalUrl);
        upsertMeta('property', 'og:type', 'article');
        upsertMeta('property', 'og:image', post.image);
        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:title', `${post.title} | Green Focus Organization`);
        upsertMeta('name', 'twitter:description', post.excerpt);
        upsertMeta('name', 'twitter:image', post.image);

        const relatedPosts = blogPosts
            .filter(item => item.slug !== post.slug)
            .slice(0, 3);

        blogPostRoot.innerHTML = `
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                <div class="mb-10">
                    <img src="${post.image}"
                         alt="${post.title}"
                         class="w-full h-[420px] object-cover rounded-3xl shadow-xl">
                </div>

                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                    <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                        ${post.category}
                    </span>

                    <span>
                        <i class="fa-regular fa-calendar mr-1"></i>
                        ${post.date}
                    </span>

                    <span>
                        <i class="fa-regular fa-user mr-1"></i>
                        ${post.author}
                    </span>
                </div>

                <div class="max-w-none">
                    ${post.content.map(paragraph => `
                        <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                            ${paragraph}
                        </p>
                    `).join('')}
                </div>

                <div class="mt-12 flex flex-col sm:flex-row gap-4">
                    <a href="blog.html"
                       class="inline-flex items-center justify-center bg-emerald-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition">
                        <i class="fa-solid fa-arrow-left mr-2"></i>
                        Back to Blog
                    </a>

                    <a href="donate.html"
                       class="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                        Support Our Work
                    </a>
                </div>

                <div class="mt-20">
                    <h2 class="font-heading text-3xl font-bold text-emerald-900 mb-8">
                        Related Posts
                    </h2>

                    <div class="grid md:grid-cols-3 gap-8">
                        ${relatedPosts.map(postCard).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function renderDonationImpacts() {
        const donationImpactsContainer = document.getElementById('donation-impacts');

        if (!donationImpactsContainer) return;

        donationImpactsContainer.innerHTML = donationImpacts.map(impact => `
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="text-emerald-600 ${impact.icon}"></i>
                </div>

                <div>
                    <h3 class="font-bold text-emerald-900">
                        ${impact.amount}
                    </h3>

                    <p class="text-gray-600 text-sm">
                        ${impact.description}
                    </p>
                </div>
            </div>
        `).join('');
    }

    function initHeroSlider() {
        const slides = document.querySelectorAll('[data-hero-slide]');

        if (!slides.length) return;

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, slideIndex) => {
                if (slideIndex === index) {
                    slide.classList.remove('hidden');
                } else {
                    slide.classList.add('hidden');
                }
            });

            currentSlide = index;
        }

        showSlide(0);

        setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 7000);
    }

    function initEventTabs() {
        const tabButtons = document.querySelectorAll('[data-event-tab]');
        const tabPanels = document.querySelectorAll('[data-event-panel]');

        if (!tabButtons.length || !tabPanels.length) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                const target = this.dataset.eventTab;

                tabButtons.forEach(tabButton => {
                    tabButton.classList.remove('bg-emerald-600', 'text-white');
                    tabButton.classList.add('text-gray-600', 'hover:text-emerald-600');
                });

                this.classList.add('bg-emerald-600', 'text-white');
                this.classList.remove('text-gray-600', 'hover:text-emerald-600');

                tabPanels.forEach(panel => {
                    if (panel.dataset.eventPanel === target) {
                        panel.classList.remove('hidden');
                    } else {
                        panel.classList.add('hidden');
                    }
                });
            });
        });
    }

    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                const answer = this.closest('.faq-item').querySelector('.faq-answer');
                answer.classList.toggle('hidden');
            });
        });
    }

    function initForms() {
        const forms = document.querySelectorAll('[data-form]');

        forms.forEach(form => {
            if (form.dataset.form === 'donation') return;

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                const successMessage = form.querySelector('[data-success]');

                if (successMessage) {
                    successMessage.classList.remove('hidden');

                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                    }, 6000);
                }

                form.reset();
            });
        });
    }

    function initContactSubject() {
        const contactSubject = document.getElementById('contact-subject');

        if (!contactSubject) return;

        const params = new URLSearchParams(window.location.search);
        const subject = params.get('subject');

        if (!subject) return;

        const hasOption = Array.from(contactSubject.options).some(option => option.value === subject);

        if (!hasOption) {
            const option = new Option(subject, subject, true, true);
            contactSubject.add(option);
        } else {
            contactSubject.value = subject;
        }
    }

    function initDonationPage() {
        const donationForm = document.querySelector('[data-form="donation"]');

        if (!donationForm) return;

        const params = new URLSearchParams(window.location.search);
        const cause = params.get('cause');
        const donationCause = document.getElementById('donation-cause');

        if (cause && donationCause) {
            donationCause.textContent = `Selected Cause: ${cause}`;
            donationCause.classList.remove('hidden');
        }

        let selectedAmount = 50;
        let frequency = 'One-Time';

        const amountButtons = document.querySelectorAll('[data-donation-amount]');
        const frequencyButtons = document.querySelectorAll('[data-donation-frequency]');
        const customAmount = document.getElementById('custom-amount');
        const successMessage = document.getElementById('donation-success');

        function setAmountStyles() {
            amountButtons.forEach(button => {
                const isActive = Number(button.dataset.donationAmount) === selectedAmount && !customAmount.value;

                button.className = `border-2 py-3 rounded-xl font-bold transition ${
                    isActive
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-emerald-900 border-gray-300 hover:border-emerald-600'
                }`;
            });
        }

        function setFrequencyStyles() {
            frequencyButtons.forEach(button => {
                const isActive = button.dataset.donationFrequency === frequency;

                button.className = `border-2 py-3 rounded-xl font-semibold transition ${
                    isActive
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-600'
                }`;
            });
        }

        amountButtons.forEach(button => {
            button.addEventListener('click', function () {
                selectedAmount = Number(this.dataset.donationAmount);
                customAmount.value = '';
                setAmountStyles();
            });
        });

        frequencyButtons.forEach(button => {
            button.addEventListener('click', function () {
                frequency = this.dataset.donationFrequency;
                setFrequencyStyles();
            });
        });

        if (customAmount) {
            customAmount.addEventListener('input', function () {
                selectedAmount = Number(this.value) || 0;
                setAmountStyles();
            });
        }

        setAmountStyles();
        setFrequencyStyles();

        donationForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const finalAmount = customAmount && customAmount.value
                ? Number(customAmount.value)
                : selectedAmount;

            if (successMessage) {
                successMessage.textContent = `Thank you for your ${frequency.toLowerCase()} donation intent of $${finalAmount || 0}. Please contact us to complete payment options.`;
                successMessage.classList.remove('hidden');

                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 8000);
            }

            donationForm.reset();
            selectedAmount = 50;
            customAmount.value = '';
            setAmountStyles();
        });
    }

    function initLightbox() {
        const lightbox = document.getElementById('gallery-lightbox');

        if (!lightbox) return;

        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');

        window.openLightbox = function (item) {
            lightboxImage.src = item.dataset.image;
            lightboxImage.alt = item.dataset.title;
            lightboxTitle.textContent = item.dataset.title;
            lightboxCaption.textContent = item.dataset.caption;

            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            if (lightboxClose) {
                lightboxClose.focus();
            }
        };

        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
        }

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });
    }

    renderHome();
    renderCauses();
    renderEvents();
    renderGallery();
    renderTeam();
    renderBlog();
    renderBlogPost();
    renderDonationImpacts();

    initHeroSlider();
    initEventTabs();
    initFAQ();
    initForms();
    initContactSubject();
    initDonationPage();
    initLightbox();
});