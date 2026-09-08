export type Dictionary = {
  dir: "rtl" | "ltr";

  nav: {
    home: string;
    categories: string;
  };

  hero: {
    cta: string;
  };

  // ... باقي الخصائص
};

export const dictionaries: Record<"ar" | "fr", Dictionary> = {
  ar: {
    dir: "rtl",

    nav: {
      home: "الرئيسية",
      categories: "التصنيفات",
    },

    // ...
  },

  fr: {
    dir: "ltr",

    nav: {
      home: "Accueil",
      categories: "Catégories",
    },

    // ...
  },export type Dictionary = {
  dir: "rtl" | "ltr";

  nav: {
    home: string;
    categories: string;
  };

  hero: {
    cta: string;
  };

  sections: {
    new: string;
    bestseller: string;
  };

  trust: {
    delivery: string;
    cod: string;
    exchange: string;
    secure: string;
    support: string;
  };

  product: {
    addToCart: string;
    buyNow: string;
    outOfStock: string;
    inStock: string;
    quantity: string;
    color: string;
    size: string;
    description: string;
    specs: string;
    reviews: string;
    related: string;
    askWhatsapp: string;
  };

  cart: {
    title: string;
    empty: string;
    subtotal: string;
    delivery: string;
    total: string;
    checkout: string;
    remove: string;
    continueShopping: string;
  };

  checkout: {
    title: string;
    fullName: string;
    phone: string;
    wilaya: string;
    commune: string;
    address: string;
    notes: string;
    deliveryMethod: string;
    home: string;
    office: string;
    payment: string;
    cod: string;
    submit: string;
  };

  confirmation: {
    title: string;
    orderNumber: string;
    total: string;
  };

  search: {
    placeholder: string;
    filters: {
      category: string;
      price: string;
    };
  };
};
};
