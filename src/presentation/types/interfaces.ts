// types.ts
export type RootStackParamList = {
  RestaurantStack: { params: { data: RestaurantData }; screen: string };

  // Otras rutas pueden ser definidas aquí
};

export interface RestaurantData {
  id: number;
  name: string;
  image: any;
  description: string;
  address: string;
  logo: any;
  colorLogo: string;
  latitude: number;
  longitude: number;
  type: string;
  stars: number;
  time: string;
  reviews: number;
  tag: string[];
  dishes: {
    recommended: {
      id: number;
      name: string;
      restaurant: string;
      description: string;
      price: number;

      stars: number;
      reviews: number;
      image: any;
      extras: { name: string; price: number; image: string }[];
    }[];
    best_discounts: {
      id: number;
      name: string;
      restaurant: string;
      description: string;
      price: number;
      image: any;
      stars: number;
      reviews: number;
      extras: { name: string; price: number; image: string }[];
    }[];
    ofertas_dishes: {
      id: number;
      name: string;
      restaurant: string;
      description: string;
      price: number;
      discount: number;
      porcentajedescount: number;
      image: any;
      stars: number;
      reviews: number;
      extras: { name: string; price: number; image: string }[];
    }[];
  };
}

export interface OfertasDishes {
  id: number;
  name: string;
  restaurant: string;
  description: string;
  price: number;
  discount: number;
  porcentajedescount: number;
  image: any;
  stars: number;
  reviews: number;
  extras: { name: string; price: number; image: string }[];
}

export type RootStackParamList2 = {
  RestaurantStack: { params: { data: DishData }; screen: string };
};

export interface DishData {
  id: number;
  name: string;
  restaurant: string;
  description: string;
  latitude: number;
  longitude: number;
  price: number;
  image: any;
  stars: number;
  reviews: number;
  extras: { name: string; price: number; image: string }[];
}
