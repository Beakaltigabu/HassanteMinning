const galleryData = [
    // Iron Ore Section
    {
        id: 1,
        category: 'iron',
        title: 'High-Grade Iron Ore',
        description: 'Premium magnetite iron ore with 65% Fe content',
        image: {
            webp: 'assets/images/webp/IronOre/iron-1.webp',
            fallback: 'assets/images/minerals/IronOre/iron-1.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 2,
        category: 'iron',
        title: 'Raw Iron Ore Deposits',
        description: 'Natural hematite iron ore formations with rich mineral content',
        image: {
            webp: 'assets/images/webp/IronOre/iron-2.webp',
            fallback: 'assets/images/minerals/IronOre/iron-2.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 3,
        category: 'iron',
        title: 'Processed Iron Ore',
        description: 'Refined iron ore pellets ready for industrial use',
        image: {
            webp: 'assets/images/webp/IronOre/iron-3.webp',
            fallback: 'assets/images/minerals/IronOre/iron-3.jpg'
        },
        location: 'Moyale'
    },

    // Lithium Section
    {
        id: 4,
        category: 'lithium',
        title: 'Raw Lithium Deposits',
        description: 'High-quality lithium ore formations',
        image: {
            webp: 'assets/images/webp/lithium/lithuim-1.webp',
            fallback: 'assets/images/minerals/lithium/lithuim-1.jpg'
        },
        location: 'Dawa'
    },
    {
        id: 5,
        category: 'lithium',
        title: 'Processed Lithium',
        description: 'Refined lithium ready for battery production',
        image: {
            webp: 'assets/images/webp/lithium/lithium-2.webp',
            fallback: 'assets/images/minerals/lithium/lithium-2.jpg'
        },
        location: 'Dawa'
    },
    {
        id: 6,
        category: 'lithium',
        title: 'Premium Lithium Sample',
        description: 'High-grade lithium specimens',
        image: {
            webp: 'assets/images/webp/lithium/lithium-3.webp',
            fallback: 'assets/images/minerals/lithium/lithium-3.jpg'
        },
        location: 'Dawa'
    },

    // Gold Section
    {
        id: 7,
        category: 'gold',
        title: 'Raw Gold Ore',
        description: 'Natural gold-bearing ore samples',
        image: {
            webp: 'assets/images/webp/gold/gold-1.webp',
            fallback: 'assets/images/minerals/gold/gold-1.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 8,
        category: 'gold',
        title: 'Processed Gold',
        description: 'Refined gold specimens',
        image: {
            webp: 'assets/images/webp/gold/gold-2.webp',
            fallback: 'assets/images/minerals/gold/gold-2.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 9,
        category: 'gold',
        title: 'Premium Gold Sample',
        description: 'High-grade gold deposits',
        image: {
            webp: 'assets/images/webp/gold/gold3.webp',
            fallback: 'assets/images/minerals/gold/gold3.jpg'
        },
        location: 'Moyale'
    },

    // Copper Section
    {
        id: 10,
        category: 'copper',
        title: 'Raw Copper Ore',
        description: 'Natural copper ore formations',
        image: {
            webp: 'assets/images/webp/copper/copper-1.webp',
            fallback: 'assets/images/minerals/copper/copper-1.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 11,
        category: 'copper',
        title: 'Processed Copper',
        description: 'Refined copper samples',
        image: {
            webp: 'assets/images/webp/copper/copper-2.webp',
            fallback: 'assets/images/minerals/copper/copper-2.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 12,
        category: 'copper',
        title: 'Premium Copper',
        description: 'High-grade copper specimens',
        image: {
            webp: 'assets/images/webp/copper/copper-3.webp',
            fallback: 'assets/images/minerals/copper/copper-3.jpg'
        },
        location: 'Moyale'
    },

    // Amethyst Section
    {
        id: 13,
        category: 'amethyst',
        title: 'Raw Amethyst',
        description: 'Natural amethyst crystal formations',
        image: {
            webp: 'assets/images/webp/amethyst/amethyst-1.webp',
            fallback: 'assets/images/minerals/amethyst/amethyst-1.jpg'
        },
        location: 'Dawa'
    },
    {
        id: 14,
        category: 'amethyst',
        title: 'Processed Amethyst',
        description: 'Polished amethyst specimens',
        image: {
            webp: 'assets/images/webp/amethyst/amethyst-2.webp',
            fallback: 'assets/images/minerals/amethyst/amethyst-2.jpg'
        },
        location: 'Dawa'
    },
    {
        id: 15,
        category: 'amethyst',
        title: 'Premium Amethyst',
        description: 'High-quality amethyst crystals',
        image: {
            webp: 'assets/images/webp/amethyst/amethyst-3.webp',
            fallback: 'assets/images/minerals/amethyst/amethyst-3.jpg'
        },
        location: 'Dawa'
    },

    // Chromite Section
    {
        id: 16,
        category: 'chromite',
        title: 'Raw Chromite Deposits',
        description: 'High-grade chromite ore formations',
        image: {
            webp: 'assets/images/webp/chromite/chromite-1.webp',
            fallback: 'assets/images/minerals/chromite/chromite-1.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 17,
        category: 'chromite',
        title: 'Processed Chromite',
        description: 'Refined chromite samples ready for industrial use',
        image: {
            webp: 'assets/images/webp/chromite/chromite-2.webp',
            fallback: 'assets/images/minerals/chromite/chromite-2.jpg'
        },
        location: 'Moyale'
    },
    {
        id: 18,
        category: 'chromite',
        title: 'Premium Chromite',
        description: 'High-quality chromite specimens',
        image: {
            webp: 'assets/images/webp/chromite/chromite-3.webp',
            fallback: 'assets/images/minerals/chromite/chromite-3.jpg'
        },
        location: 'Moyale'
    }
];

export default galleryData;
