export const categories = [
  {
    id: 1,
    name: "Burger",
    icon: "🍔",
  },
  {
    id: 2,
    name: "Donat",
    icon: "🍩",
  },
  {
    id: 3,
    name: "Pizza",
    icon: "🍕",
  },
  {
    id: 4,
    name: "Mexican",
    icon: "🌮",
  },
  {
    id: 5,
    name: "Asian",
    icon: "🍜",
  },
  {
    id: 6,
    name: "Italian",
    icon: "🍝",
  },
  {
    id: 7,
    name: "Chinese",
    icon: "🥡",
  },
  {
    id: 8,
    name: "Indian",
    icon: "🍛",
  },
  {
    id: 10,
    name: "Japanese",
    icon: "🍣",
  },
  {
    id: 11,
    name: "Thai",
    icon: " 🍲",
  },
];

export const feactures = {
  feactures_restaurants: {
    title: "Featured Restaurants",
    description: "Discover the best restaurants in your city",

    restaurants: [
      {
        id: 121,
        name: "McDonald's",
        image: require("../../assets/dishes/dish1.png"),
        description: "Un lugar acogedor con vistas panorámicas.",
        address: "Calle Principal 123, Ciudad",
        type: "Free Delivery",
        logo: require("../../assets/restaurants/mcdonals.png"),
        colorLogo: "#DA291C",
        stars: 4.5,
        time: "30-40 min",
        reviews: 120,
        tag: ["Fast Food", "Burgers", "Chicken"],
        dishes: {
          recommended: [
            {
              id: 1,
              name: "Filete de Res",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 25.99,
              restaurant: "McDonald's",
              image: require("../../assets/dishes/dish4.png"),
              reviews: 50,
              stars: 4.8,
              extras: [
                {
                  image: "🥔",
                  name: "Puré de papa",
                  price: 5.99,
                },
                {
                  image: "🍅",
                  name: "Ensalada mixta",
                  price: 4.99,
                },
              ],
            },
            {
              id: 2,
              name: "Salmón al Horno",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 22.99,
              restaurant: "McDonald's",
              image: require("../../assets/dishes/dish7.png"),
              reviews: 45,
              stars: 4.7,
              extras: [
                {
                  image: "🍚",
                  name: "Arroz blanco",
                  price: 3.99,
                },
                {
                  image: "🥦",
                  name: "Verduras al vapor",
                  price: 4.99,
                },
              ],
            },
            {
              id: 3,
              name: "Tiramisú",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 9.99,
              restaurant: "McDonald's",
              image: require("../../assets/dishes/dish6.png"),
              reviews: 60,
              stars: 4.9,
              extras: [],
            },
          ],
          best_discounts: [
            {
              id: 4,
              name: "Pasta Carbonara",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 18.99,
              restaurant: "McDonald's",
              image: require("../../assets/dishes/dish7.png"),
              reviews: 40,
              stars: 4.6,
              extras: [
                {
                  image: "🍞",
                  name: "Pan de ajo",
                  price: 3.49,
                },
                {
                  image: "🥗",
                  name: "Ensalada César",
                  price: 4.99,
                },
              ],
            },
            {
              id: 5,
              name: "Pizza Margherita",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 16.99,
              image: require("../../assets/dishes/dish8.png"),
              reviews: 55,
              restaurant: "McDonald's",
              stars: 4.7,
              extras: [
                {
                  image: "🥤",
                  name: "Refresco grande",
                  price: 2.99,
                },
                {
                  image: "🍟",
                  name: "Papas fritas",
                  price: 3.99,
                },
              ],
            },
            {
              id: 6,
              name: "Ensalada César",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 14.99,
              image: require("../../assets/dishes/dish9.png"),
              reviews: 35,
              restaurant: "McDonald's",
              stars: 4.5,
              extras: [
                {
                  image: "🍞",
                  name: "Panecillo integral",
                  price: 1.99,
                },
                {
                  image: "🥣",
                  name: "Sopa de verduras",
                  price: 3.49,
                },
              ],
            },
          ],
          ofertas_dishes: [
            {
              id: 19,
              name: "Hamburguesa Gourmet",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 21.99,
              discount: 15.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish8.png"),
              reviews: 45,
              restaurant: "Starbucks",
              stars: 4.6,
              extras: [
                {
                  image: "🍟",
                  name: "Papas fritas trufadas",
                  price: 5.99,
                },
              ],
            },
            {
              id: 20,
              name: "Ramen de Temporada",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 18.99,
              restaurant: "Starbucks",
              discount: 15.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish1.png"),
              reviews: 55,
              stars: 4.7,
              extras: [
                {
                  image: "🥟",
                  name: "Gyozas al vapor",
                  price: 3.99,
                },
              ],
            },
            {
              id: 21,
              name: "Ensalada de Quinoa",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 15.99,

              discount: 12.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish5.png"),
              reviews: 30,
              restaurant: "Starbucks",
              stars: 4.5,
              extras: [
                {
                  image: "🍹",
                  name: "Batido de frutas",
                  price: 3.49,
                },
                {
                  image: "🥤",
                  name: "Refresco natural",
                  price: 2.99,
                },
              ],
            },
          ],
        },
      },
      {
        id: 122,
        name: "Starbucks",
        image: require("../../assets/dishes/dish2.png"),
        description: "Especializado en cocina internacional.",
        address: "Avenida Principal 456, Ciudad",
        logo: require("../../assets/restaurants/starbucks.png"),
        colorLogo: "#036635",
        stars: 4.3,
        type: "Free Delivery",
        reviews: 95,
        time: "20-30 min",
        tag: ["Coffee", "Tea", "Past Bakery"],
        dishes: {
          recommended: [
            {
              id: 7,
              name: "Sushi Variado",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 28.99,
              restaurant: "Starbucks",
              image: require("../../assets/dishes/dish5.png"),
              reviews: 65,
              stars: 4.8,
              extras: [
                {
                  image: "🍣",
                  name: "Sopa de miso",
                  price: 3.99,
                },
                {
                  image: "🍤",
                  name: "Edamame",
                  price: 5.99,
                },
              ],
            },
            {
              id: 8,
              name: "Paella Marinera",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 32.99,
              image: require("../../assets/dishes/dish2.png"),
              reviews: 50,
              stars: 4.7,
              restaurant: "Starbucks",
              extras: [
                {
                  image: "🥖",
                  name: "Pan con alioli",
                  price: 4.49,
                },
                {
                  image: "🥗",
                  name: "Ensalada verde",
                  price: 4.99,
                },
              ],
            },
            {
              id: 9,
              name: "Tarta de Chocolate",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 12.99,
              restaurant: "McDonald's",
              image: require("../../assets/dishes/dish8.png"),
              reviews: 40,
              stars: 4.9,
              extras: [
                {
                  image: "🍦",
                  name: "Helado de vainilla",
                  price: 3.99,
                },
                {
                  image: "🍓",
                  name: "Frutas frescas",
                  price: 4.99,
                },
              ],
            },
          ],
          best_discounts: [
            {
              id: 10,
              name: "Hamburguesa Gourmet",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 21.99,
              image: require("../../assets/dishes/dish8.png"),
              reviews: 45,
              restaurant: "Starbucks",
              stars: 4.6,
              extras: [
                {
                  image: "🍟",
                  name: "Papas fritas trufadas",
                  price: 5.99,
                },
              ],
            },
            {
              id: 11,
              name: "Ramen de Temporada",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 18.99,
              restaurant: "Starbucks",
              image: require("../../assets/dishes/dish1.png"),
              reviews: 55,
              stars: 4.7,
              extras: [
                {
                  image: "🥟",
                  name: "Gyozas al vapor",
                  price: 3.99,
                },
              ],
            },
            {
              id: 12,
              name: "Ensalada de Quinoa",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              restaurant: "Starbucks",
              price: 15.99,
              image: require("../../assets/dishes/dish5.png"),
              reviews: 30,
              stars: 4.5,
              extras: [
                {
                  image: "🍹",
                  name: "Batido de frutas",
                  price: 3.49,
                },
                {
                  image: "🥤",
                  name: "Refresco natural",
                  price: 2.99,
                },
              ],
            },
          ],
          ofertas_dishes: [
            {
              id: 19,
              name: "Hamburguesa Gourmet",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 21.99,
              discount: 15.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish8.png"),
              reviews: 45,
              restaurant: "Starbucks",
              stars: 4.6,
              extras: [
                {
                  image: "🍟",
                  name: "Papas fritas trufadas",
                  price: 5.99,
                },
              ],
            },
            {
              id: 20,
              name: "Ramen de Temporada",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 18.99,
              restaurant: "Starbucks",
              discount: 15.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish1.png"),
              reviews: 55,
              stars: 4.7,
              extras: [
                {
                  image: "🥟",
                  name: "Gyozas al vapor",
                  price: 3.99,
                },
              ],
            },
            {
              id: 21,
              name: "Ensalada de Quinoa",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 15.99,

              discount: 12.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish5.png"),
              reviews: 30,
              restaurant: "Starbucks",
              stars: 4.5,
              extras: [
                {
                  image: "🍹",
                  name: "Batido de frutas",
                  price: 3.49,
                },
                {
                  image: "🥤",
                  name: "Refresco natural",
                  price: 2.99,
                },
              ],
            },
          ],
        },
      },
      {
        id: 123,
        name: "Pizza Hut",
        image: require("../../assets/dishes/dish3.png"),
        description: "Cocina tradicional con un toque moderno.",
        address: "Plaza Principal 789, Ciudad",
        logo: require("../../assets/restaurants/pizzahut.png"),
        stars: 4.7,
        colorLogo: "#FFC529",
        type: "Free Delivery",
        reviews: 110,
        time: "25-35 min",
        tag: ["Pizza", "Pasta", "Italian"],
        dishes: {
          recommended: [
            {
              id: 13,
              name: "Cochinita Pibil",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 24.99,
              restaurant: "Pizza Hut",
              image: require("../../assets/dishes/dish10.png"),
              reviews: 70,
              stars: 4.9,
              extras: [
                {
                  image: "🍚",
                  name: "Arroz blanco",
                  price: 4.99,
                },
                {
                  image: "🌽",
                  name: "Tortillas de maíz",
                  price: 2.99,
                },
              ],
            },
            {
              id: 14,
              name: "Parrillada Argentina",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 29.99,
              image: require("../../assets/dishes/dish11.png"),
              reviews: 55,
              restaurant: "Pizza Hut",
              stars: 4.8,
              extras: [
                {
                  image: "🥗",
                  name: "Ensalada criolla",
                  price: 3.49,
                },
                {
                  image: "🍟",
                  name: "Papas fritas",
                  price: 4.99,
                },
              ],
            },
            {
              id: 15,
              name: "Flan de Coco",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 10.99,
              image: require("../../assets/dishes/dish12.png"),
              reviews: 45,
              stars: 4.7,
              restaurant: "Pizza Hut",
              extras: [
                {
                  image: "🍦",
                  name: "Helado de vainilla",
                  price: 3.99,
                },
                {
                  image: "🍓",
                  name: "Frutas frescas",
                  price: 4.99,
                },
              ],
            },
          ],
          best_discounts: [
            {
              id: 16,
              name: "Tacos al Pastor",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 2.99,
              restaurant: "Pizza Hut",
              image: require("../../assets/dishes/dish12.png"),
              reviews: 80,
              stars: 4.9,
              extras: [
                {
                  image: "🥑",
                  name: "Guacamole",
                  price: 1.99,
                },
                {
                  image: "🌶",
                  name: "Salsa picante",
                  price: 0.99,
                },
              ],
            },
            {
              id: 17,
              name: "Pad Thai",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 15.99,
              restaurant: "Pizza Hut",
              image: require("../../assets/dishes/dish5.png"),
              reviews: 70,
              stars: 4.8,
              extras: [
                {
                  image: "🍤",
                  name: "Rollitos de primavera",
                  price: 3.49,
                },
                {
                  image: "🥤",
                  name: "Refresco de jengibre",
                  price: 2.99,
                },
              ],
            },
            {
              id: 18,
              name: "Ceviche Peruano",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 12.99,
              restaurant: "Pizza Hut",
              image: require("../../assets/dishes/dish14.png"),
              reviews: 65,
              stars: 4.7,
              extras: [
                {
                  image: "🌽",
                  name: "Cancha",
                  price: 2.99,
                },
                {
                  image: "🌽",
                  name: "Choclo",
                  price: 1.99,
                },
              ],
            },
          ],
          ofertas_dishes: [
            {
              id: 19,
              name: "Hamburguesa Gourmet",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 21.99,
              discount: 15.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish8.png"),
              reviews: 45,
              restaurant: "Starbucks",
              stars: 4.6,
              extras: [
                {
                  image: "🍟",
                  name: "Papas fritas trufadas",
                  price: 5.99,
                },
              ],
            },
            {
              id: 20,
              name: "Ramen de Temporada",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 18.99,
              restaurant: "Starbucks",
              discount: 15.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish1.png"),
              reviews: 55,
              stars: 4.7,
              extras: [
                {
                  image: "🥟",
                  name: "Gyozas al vapor",
                  price: 3.99,
                },
              ],
            },
            {
              id: 21,
              name: "Ensalada de Quinoa",
              description:
                "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
              price: 15.99,

              discount: 12.99,
              porcentajedescount: 30,
              image: require("../../assets/dishes/dish5.png"),
              reviews: 30,
              restaurant: "Starbucks",
              stars: 4.5,
              extras: [
                {
                  image: "🍹",
                  name: "Batido de frutas",
                  price: 3.49,
                },
                {
                  image: "🥤",
                  name: "Refresco natural",
                  price: 2.99,
                },
              ],
            },
          ],
        },
      },
    ],
  },
  Populardishes: {
    title: "Popular Dishes",
    description: "Discover the most popular dishes in your city",
    dishes: [
      {
        id: 16,
        restaurant: "Taquería Lupita",
        name: "Tacos al Pastor",
        description:
          "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
        price: 2.99,
        image: require("../../assets/dishes/dish4.png"),
        reviews: 80,
        stars: 4.9,
        extras: [
          {
            image: "🥑",
            name: "Guacamole",
            price: 1.99,
          },
          {
            image: "🌶",
            name: "Salsa picante",
            price: 0.99,
          },
        ],
      },
      {
        id: 17,
        name: "Pad Thai",
        description:
          "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
        price: 15.99,
        restaurant: "Thai Garden",
        image: require("../../assets/dishes/dish5.png"),
        reviews: 70,
        stars: 4.8,
        extras: [
          {
            image: "🍤",
            name: "Rollitos de primavera",
            price: 3.49,
          },
          {
            image: "🥤",
            name: "Refresco de jengibre",
            price: 2.99,
          },
        ],
      },
      {
        id: 18,
        name: "Ceviche Peruano",
        description:
          "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
        price: 12.99,
        restaurant: "La Mar",
        image: require("../../assets/dishes/dish1.png"),
        reviews: 65,
        stars: 4.7,
        extras: [
          {
            image: "🌽",
            name: "Cancha",
            price: 2.99,
          },
          {
            image: "🌽",
            name: "Choclo",
            price: 1.99,
          },
        ],
      },
    ],
  },
  ofertas_dishes: {
    title: "Offers",
    description: "Discover the best offers in your city",
    ofertas: [
      {
        id: 19,
        name: "Hamburguesa Gourmet",
        description:
          "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
        price: 21.99,
        discount: 15.99,
        porcentajedescount: 30,
        image: require("../../assets/dishes/dish8.png"),
        reviews: 45,
        restaurant: "Starbucks",
        stars: 4.6,
        extras: [
          {
            image: "🍟",
            name: "Papas fritas trufadas",
            price: 5.99,
          },
        ],
      },
      {
        id: 20,
        name: "Ramen de Temporada",
        description:
          "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
        price: 18.99,
        restaurant: "Starbucks",
        discount: 15.99,
        porcentajedescount: 30,
        image: require("../../assets/dishes/dish1.png"),
        reviews: 55,
        stars: 4.7,
        extras: [
          {
            image: "🥟",
            name: "Gyozas al vapor",
            price: 3.99,
          },
        ],
      },
      {
        id: 21,
        name: "Ensalada de Quinoa",
        description:
          "Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.",
        price: 15.99,

        discount: 12.99,
        porcentajedescount: 30,
        image: require("../../assets/dishes/dish5.png"),
        reviews: 30,
        restaurant: "Starbucks",
        stars: 4.5,
        extras: [
          {
            image: "🍹",
            name: "Batido de frutas",
            price: 3.49,
          },
          {
            image: "🥤",
            name: "Refresco natural",
            price: 2.99,
          },
        ],
      },
    ],
  },
};
