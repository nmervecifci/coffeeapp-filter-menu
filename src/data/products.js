// products.js - Aromalı Filtre Kahveler ve Filtre Seçenekleri

// Filtre Seçenekleri
export const filterOptions = {
  // Öne Çıkan Özellikler Filtresi
  featuredFilters: [
    { id: "bestseller", name: "Çok Satan", count: 7 },
    { id: "lowPrice", name: "Çok Al Az Öde", count: 9 },
    { id: "freeShipping", name: "Kargo Bedava", count: 1 },
    { id: "mediumRoast", name: "Orta Kavrum", count: 14 },
    { id: "starProduct", name: "Yıldızlı Ürün", count: 8 },
  ],

  // Öğütülme Seçimi Filtresi
  grindFilters: [
    { id: "whole", name: "Çekirdek", count: 14 },
    { id: "frenchPress", name: "French Press", count: 14 },
    { id: "machine", name: "Makine (kağıt filtre, metal filtre)", count: 14 },
    { id: "mokaPot", name: "Moka Pot", count: 14 },
  ],

  // Fiyat Aralığı Filtresi
  priceRangeFilters: [
    { id: "price0-100", name: "0 - 100 ₺", min: 0, max: 100 },
    { id: "price100-300", name: "100 - 300 ₺", min: 100, max: 300 },
    { id: "price300-500", name: "300 - 500 ₺", min: 300, max: 500 },
    { id: "price500plus", name: "500 ₺ ve üzeri", min: 500, max: 999999 },
  ],

  // Gramaj Filtresi
  weightFilters: [
    { id: "weight250", name: "250 G", count: 5, value: 250 },
    { id: "weight500", name: "500 G", count: 5, value: 500 },
    { id: "weight750", name: "750 G", count: 2, value: 750 },
    { id: "weight1250", name: "1250 G", count: 1, value: 1250 },
  ],
};

// Kahve Ürünleri
export const products = [
  {
    id: 1,
    title: "Irish Cream Aromalı Filtre Kahve",
    description:
      "İrlanda kreması aromalı filtre kahve, tatlı ve kremsi lezzet profili",
    price: 325.99,
    pricePerUnit: "325.99 TL / Adet",
    originalPrice: 350.99,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "İrlandalı Lezzetler",
    rating: 4.9,
    reviewCount: 34,
    stock: 25,
    weight: 250, // Gram
    featuredTags: ["bestseller", "starProduct"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["ÇOK SATAN ÜRÜN", "YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 2,
    title: "Fındık Aromalı Filtre Kahve",
    description: "Tatlı fındık aromasıyla zenginleştirilmiş özel filtre kahve",
    price: 330.99,
    pricePerUnit: "330.99 TL / Adet",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Fındık Serisi",
    rating: 4.8,
    reviewCount: 13,
    stock: 15,
    weight: 250, // Gram
    featuredTags: ["lowPrice", "bestseller"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["EN İYİ FİYAT"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 3,
    title: "Çikolata Aromalı Filtre Kahve",
    description:
      "Zengin çikolata aroması ile harmanlanmış premium filtre kahve",
    price: 325.99,
    pricePerUnit: "325.99 TL / Adet",
    originalPrice: 345.99,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Çikolatalı Serisi",
    rating: 4.2,
    reviewCount: 10,
    stock: 20,
    weight: 250, // Gram
    featuredTags: ["starProduct"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta-Koyu Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 4,
    title: "Vanilya Aromalı Filtre Kahve",
    description:
      "Tatlı vanilya aromasıyla zenginleştirilmiş yumuşak içimli filtre kahve",
    price: 326.99,
    pricePerUnit: "326.99 TL / Adet",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Vanilya Serisi",
    rating: 4.3,
    reviewCount: 11,
    stock: 18,
    weight: 250, // Gram
    featuredTags: ["starProduct"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 5,
    title: "Hindistan Cevizi Aromalı Filtre Kahve",
    description:
      "Tropikal hindistan cevizi aromasıyla tatlandırılmış özel filtre kahve",
    price: 328.99,
    pricePerUnit: "328.99 TL / Adet",
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1587734361993-d2ec195f0632?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1587734361993-d2ec195f0632?w=500",
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Tropikal Serisi",
    rating: 4.5,
    reviewCount: 8,
    stock: 12,
    weight: 250, // Gram
    featuredTags: ["lowPrice"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: [], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 6,
    title: "Karamel Aromalı Filtre Kahve",
    description:
      "Zengin karamel aromasıyla harmanlanmış yumuşak içimli filtre kahve",
    price: 327.99,
    pricePerUnit: "327.99 TL / Adet",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Tatlı Serisi",
    rating: 4.7,
    reviewCount: 15,
    stock: 22,
    weight: 250, // Gram
    featuredTags: ["bestseller"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["ÇOK SATAN ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 7,
    title: "Tarçın Aromalı Filtre Kahve",
    description:
      "Sıcak tarçın aromasıyla zenginleştirilmiş baharatlı filtre kahve",
    price: 330.99,
    pricePerUnit: "330.99 TL / Adet",
    originalPrice: 350.99,
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Baharatlı Serisi",
    rating: 4.4,
    reviewCount: 9,
    stock: 14,
    weight: 250, // Gram
    featuredTags: ["lowPrice"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta-Koyu Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: [], // Ürün Rozetleri
    freeShipping: true, // Kargo Bedava
  },
  {
    id: 8,
    title: "Aromalı Filtre Kahveler Fırsat Seti 2'li",
    description: "İrish Cream ve Fındık Aromalı 2'li set, özel fiyat avantajı",
    price: 631.99,
    pricePerUnit: "316.00 TL / Adet",
    originalPrice: 656.98,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Set Ürünler",
    rating: 4.8,
    reviewCount: 32,
    stock: 10,
    weight: 500, // Gram (2x250g)
    featuredTags: ["lowPrice", "bestseller"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["ÇOK SATAN ÜRÜN"], // Ürün Rozetleri
    freeShipping: true, // Kargo Bedava
  },
  {
    id: 9,
    title: "Aromalı Filtre Kahve Seti 5'li 250G",
    description: "5 farklı aromada kahve çekirdeği içeren premium set",
    price: 1526.99,
    pricePerUnit: "305.40 TL / Adet",
    originalPrice: 1625.95,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
      "https://images.unsplash.com/photo-1587734361993-d2ec195f0632?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Set Ürünler",
    rating: 4.9,
    reviewCount: 47,
    stock: 5,
    weight: 1250, // Gram (5x250g)
    featuredTags: ["lowPrice", "bestseller", "freeShipping"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["EN İYİ FİYAT", "KARGO BEDAVA"], // Ürün Rozetleri
    freeShipping: true, // Kargo Bedava
  },
  {
    id: 10,
    title: "Aromalı Filtre Kahve Tanışma Seti Irish Cream",
    description: "Irish Cream aromalı 3'lü tanışma seti, özel fiyat avantajı",
    price: 879.99,
    pricePerUnit: "293.33 TL / Adet",
    originalPrice: 977.97,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Set Ürünler",
    rating: 4.8,
    reviewCount: 49,
    stock: 8,
    weight: 750, // Gram (3x250g)
    featuredTags: ["bestseller", "starProduct"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["ÇOK SATAN ÜRÜN", "YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 11,
    title: "Aromalı Filtre Kahve Tanışma Seti İrish Cream ve Vanilya",
    description:
      "Irish Cream ve Vanilya aromalı 3'lü tanışma seti, özel fiyat avantajı",
    price: 879.99,
    pricePerUnit: "293.33 TL / Adet",
    originalPrice: 977.97,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Set Ürünler",
    rating: 4.8,
    reviewCount: 32,
    stock: 12,
    weight: 750, // Gram (3x250g)
    featuredTags: ["bestseller", "starProduct"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["ÇOK SATAN ÜRÜN", "YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 12,
    title: "Karamelli Filtre Kahve 500G",
    description: "Büyük paket, zengin karamel aromalı premium filtre kahve",
    price: 589.99,
    pricePerUnit: "589.99 TL / Adet",
    originalPrice: 655.98,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Büyük Paketler",
    rating: 4.7,
    reviewCount: 18,
    stock: 9,
    weight: 500, // Gram
    featuredTags: ["lowPrice", "mediumRoast"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 13,
    title: "Çikolata Aromalı Filtre Kahve 500G",
    description: "Büyük paket, zengin çikolata aromalı premium filtre kahve",
    price: 589.99,
    pricePerUnit: "589.99 TL / Adet",
    originalPrice: 655.98,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd0d65?w=500",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Büyük Paketler",
    rating: 4.6,
    reviewCount: 14,
    stock: 7,
    weight: 500, // Gram
    featuredTags: ["lowPrice", "mediumRoast"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
  {
    id: 14,
    title: "Irish Cream Aromalı Filtre Kahve 500G",
    description: "Büyük paket, zengin Irish Cream aromalı premium filtre kahve",
    price: 589.99,
    pricePerUnit: "589.99 TL / Adet",
    originalPrice: 655.98,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
    productImages: [
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500",
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?w=500",
    ],
    category: "Aromalı Filtre Kahveler",
    subcategory: "Büyük Paketler",
    rating: 4.8,
    reviewCount: 22,
    stock: 15,
    weight: 500, // Gram
    featuredTags: ["bestseller", "lowPrice", "mediumRoast"], // Öne Çıkan Özellikler
    isArabica: true, // %100 Arabica
    roastLevel: "Orta Kavrum",
    grindOptions: ["whole", "frenchPress", "machine", "mokaPot"], // Öğütme Seçenekleri
    badges: ["ÇOK SATAN ÜRÜN", "YILDIZLI ÜRÜN"], // Ürün Rozetleri
    freeShipping: false, // Kargo Bedava
  },
];

// Kategori Görselleri
export const categoryImages = [
  {
    id: "taze-espresso",
    title: "Taze Espresso Kahve",
    image: "https://example.com/images/categories/taze-espresso.jpg",
  },
  {
    id: "aromali-filtre",
    title: "Aromalı Filtre Kahveler",
    image: "https://example.com/images/categories/aromali-filtre.jpg",
  },
  {
    id: "kahve-kokteyl",
    title: "Kahve ve Kokteyl Şurupları",
    image: "https://example.com/images/categories/kahve-kokteyl.jpg",
  },
  {
    id: "taze-blend",
    title: "Taze Blend Filtre Kahveler",
    image: "https://example.com/images/categories/taze-blend.jpg",
  },
  {
    id: "bitki-meyve",
    title: "Doğal ve Taze Bitki & Meyve Çayları",
    image: "https://example.com/images/categories/bitki-meyve.jpg",
  },
  {
    id: "chai-tea",
    title: "Chai Tea Latte Tozu",
    image: "https://example.com/images/categories/chai-tea.jpg",
  },
  {
    id: "sicak-cikolata",
    title: "Sıcak Çikolata Tozları",
    image: "https://example.com/images/categories/sicak-cikolata.jpg",
  },
  {
    id: "sahlep",
    title: "Doğal Şahlep Tozu",
    image: "https://example.com/images/categories/sahlep.jpg",
  },
];

// Ürün Sıralama Seçenekleri
export const sortOptions = [
  { id: "popularity", name: "Çok Satanlar" },
  { id: "priceAsc", name: "Fiyat (Düşükten Yükseğe)" },
  { id: "priceDesc", name: "Fiyat (Yüksekten Düşüğe)" },
  { id: "rating", name: "Puana Göre" },
  { id: "newest", name: "Yeni Gelenler" },
];
