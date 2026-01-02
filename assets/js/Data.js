// Données des produits iPhone - Prix en MAD (Dirham Marocain)
const productsData = [
    {
        id: 1,
        name: "iPhone 12",
        description: "iPhone 12 avec écran Super Retina XDR, puce A14 Bionic et double caméra.",
        price: 7689.00,
        image: "assets/images/iphone12.jpg",
        color: "#f5f5f7",
        bestSeller: true,
        storageOptions: [
            { size: "64", price: 2000.00 },
            { size: "128", price: 2200.00 },
            { size: "256", price: 2350.00 }
        ],
        colors: [
            { name: "Noir", hex: "#1a1a1a" },
            { name: "Blanc", hex: "#ffffff" },
            { name: "Rouge (PRODUCT RED)", hex: "#ff3b30" },
            { name: "Vert", hex: "#34c759" },
            { name: "Bleu", hex: "#00b4d8" },
            { name: "Violet", hex: "#9333ea" }
        ]
    },
    {
        id: 2,
        name: "iPhone 13",
        description: "iPhone 13 avec écran Super Retina XDR, puce A15 Bionic et double caméra avancée.",
        price: 8789.00,
        image: "assets/images/iphone13.jpg",
        color: "#f5f5f7",
        bestSeller: true,
        storageOptions: [
            { size: "128", price: 3150.00 },
            { size: "256", price: 3300.00 },
            { size: "512", price: 3500.00 }
        ],
        colors: [
            { name: "Noir (Midnight)", hex: "#0f0f0f" },
            { name: "Blanc (Starlight)", hex: "#f5f5f7" },
            { name: "Rouge (PRODUCT RED)", hex: "#ff3b30" },
            { name: "Bleu", hex: "#00b4d8" },
            { name: "Rose", hex: "#ff1493" },
            { name: "Vert", hex: "#34c759" }
        ]
    },
    {
        id: 3,
        name: "iPhone 14",
        description: "iPhone 14 avec écran Super Retina XDR, puce A15 Bionic et système photo amélioré.",
        price: 9889.00,
        image: "assets/images/IPHONE14.avif",
        color: "#f5f5f7",
        bestSeller: false,
        storageOptions: [
            { size: "128", price: 3800.00 },
            { size: "256", price: 3900.00 },
            { size: "512", price: 4000.00 }
        ],
        colors: [
            { name: "Noir (Midnight)", hex: "#0f0f0f" },
            { name: "Blanc (Starlight)", hex: "#f5f5f7" },
            { name: "Rouge", hex: "#ff3b30" },
            { name: "Bleu", hex: "#00b4d8" },
            { name: "Violet", hex: "#9333ea" },
            { name: "Jaune", hex: "#ffd700" }
        ]
    },
    {
        id: 4,
        name: "iPhone 15",
        description: "iPhone 15 avec écran Super Retina XDR, puce A16 Bionic et Dynamic Island.",
        price: 10989.00,
        image: "assets/images/iphone15.webp",
        color: "#f5f5f7",
        bestSeller: true,
        storageOptions: [
            { size: "128", price: 4500.00 },
            { size: "256", price: 4600.00 },
            { size: "512", price: 4900.00 }
        ],
        colors: [
            { name: "Noir", hex: "#1a1a1a" },
            { name: "Bleu", hex: "#00b4d8" },
            { name: "Vert", hex: "#34c759" },
            { name: "Jaune", hex: "#ffd700" },
            { name: "Rose", hex: "#ff1493" }
        ]
    },
    {
        id: 5,
        name: "iPhone 16",
        description: "iPhone 16 avec écran ProMotion, puce A17 Bionic et innovations révolutionnaires.",
        price: 13189.00,
        image: "assets/images/iphone16.jpg",
        bestSeller: false,
        storageOptions: [
            { size: "128", price: 6500.00 },
            { size: "256", price: 6800.00 },
            { size: "512", price: 6950.00 }
        ],
        colors: [
            { name: "Noir", hex: "#1a1a1a" },
            { name: "Blanc", hex: "#ffffff" },
            { name: "Bleu", hex: "#00b4d8" },
            { name: "Vert", hex: "#34c759" },
            { name: "Rose", hex: "#ff1493" }
        ]
    },
    {
        id: 6,
        name: "iPhone 17 Pro",
        description: "iPhone 17 Pro avec écran Super Retina XDR ProMotion, puce A18 Bionic ultra-rapide et triple caméra professionnelle.",
        price: 16489.00,
        image: "assets/images/Apple_iPhone_17_pro_couleurs_fuite_intro.jpg",
        color: "#1d1d1f",
        bestSeller: true,
        storageOptions: [
            { size: "256", price: 12489.00 },
            { size: "512", price: 13000.00 },
            { size: "1TB", price: 13500.00 }
        ],
        colors: [
            { name: "Noir Titane", hex: "#2a2a2a" },
            { name: "Argent Titane", hex: "#c0c0c0" },
            { name: "Bleu Titane", hex: "#1e90ff" }
        ]
    },
    {
        id: 7,
        name: "iPhone 17 Pro Max",
        description: "iPhone 17 Pro Max avec écran Super Retina XDR ProMotion, puce A18 Bionic ultra-rapide et quadruple caméra professionnelle.",
        price: 19689.00,
        image: "assets/images/Apple_iPhone_17_pro_couleurs_fuite_intro.jpg",
        color: "#1d1d1f",
        bestSeller: true,
        storageOptions: [
            { size: "256", price: 14100.00 },
            { size: "512", price: 14289.00 },
            { size: "1TB", price: 14500.00 }
        ],
        colors: [
            { name: "Noir Titane", hex: "#2a2a2a" },
            { name: "Argent Titane", hex: "#c0c0c0" },
            { name: "Bleu Titane", hex: "#1e90ff" }
        ]
    },
    {
        id: 8,
        name: "iPhone 16 Pro",
        description: "iPhone 16 Pro avec écran ProMotion, puce A17 Pro et triple caméra professionnelle.",
        price: 10000.00,
        image: "assets/images/BUjnMt43qGRgpsaBo2nvcC-1200-80.jpg",
        color: "#1d1d1f",
        bestSeller: false,
        storageOptions: [
            { size: "128", price: 10000.00 },
            { size: "256", price: 10500.00 },
            { size: "512", price: 11500.00 },
            { size: "1TB", price: 13000.00 }
        ],
        colors: [
            { name: "Noir Titane", hex: "#2a2a2a" },
            { name: "Blanc Titane", hex: "#f0f0f0" },
            { name: "Titane Naturel", hex: "#c9c4b1" },
            { name: "Titane Désert", hex: "#d9cdc0" }
        ]
    },
    {
        id: 9,
        name: "iPhone 16 Pro Max",
        description: "iPhone 16 Pro Max avec écran ProMotion, puce A17 Pro et quadruple caméra professionnelle.",
        price: 11500.00,
        image: "assets/images/BUjnMt43qGRgpsaBo2nvcC-1200-80.jpg",
        color: "#1d1d1f",
        bestSeller: false,
        storageOptions: [
            { size: "256", price: 11500.00 },
            { size: "512", price: 12500.00 },
            { size: "1TB", price: 14000.00 }
        ],
        colors: [
            { name: "Noir Titane", hex: "#2a2a2a" },
            { name: "Blanc Titane", hex: "#f0f0f0" },
            { name: "Titane Naturel", hex: "#c9c4b1" },
            { name: "Titane Désert", hex: "#d9cdc0" }
        ]
    }
];