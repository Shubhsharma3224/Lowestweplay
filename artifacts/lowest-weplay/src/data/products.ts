export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  desc: string;
  link: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "10k-red",
    name: "10K RED PACKET CC",
    image: "https://i.ibb.co/cSKD3KTJ/Gemini-Generated-Image-yy0rgmyy0rgmyy0r.png",
    price: 479,
    mrp: 1199,
    desc: "10,000 coins + 1000 bonus",
    link: "https://razorpay.me/@fluxfinds?amount=wwXoG29foDWgJuGJgtb%2BRw%3D%3D"
  },
  {
    id: "50k-red",
    name: "50K RED PACKET CC",
    image: "https://i.ibb.co/S4mD86b7/Gemini-Generated-Image-vtkas1vtkas1vtka.png",
    price: 1299,
    mrp: 5399,
    desc: "50,000 coins + 50,000 bonus",
    link: "https://razorpay.me/@fluxfinds?amount=N6UC2nLxOlAFTrRn0HmYgw%3D%3D",
    badge: "POPULAR"
  },
  {
    id: "10k-gold",
    name: "10K GOLD CC",
    image: "https://i.ibb.co/67QGZVkC/Gemini-Generated-Image-md8zx9md8zx9md8z.png",
    price: 479,
    mrp: 1199,
    desc: "10,000 coins + 1000 bonus",
    link: "https://razorpay.me/@fluxfinds?amount=wwXoG29foDWgJuGJgtb%2BRw%3D%3D"
  },
  {
    id: "50k-gold",
    name: "50K GOLD CC",
    image: "https://i.ibb.co/vCN4LnQz/Gemini-Generated-Image-79nvx179nvx179nv.png",
    price: 1299,
    mrp: 5399,
    desc: "50,000 coins + 5000 bonus + 1 Broad Absolute",
    link: "https://razorpay.me/@fluxfinds?amount=N6UC2nLxOlAFTrRn0HmYgw%3D%3D",
    badge: "BEST VALUE"
  },
  {
    id: "100k-gold",
    name: "100K GOLD CC",
    image: "https://i.ibb.co/HT2nQycN/Gemini-Generated-Image-si6wdtsi6wdtsi6w-1.png",
    price: 2199,
    mrp: 12000,
    desc: "1 Lakh coins + 10,000 bonus + 2 Broad Absolute",
    link: "https://razorpay.me/@fluxfinds?amount=PJ6ahFrCviFu2k0RR%2FxHaQ%3D%3D"
  },
  {
    id: "250k-gold",
    name: "250K GOLD CC",
    image: "https://i.ibb.co/7xmFjMhF/Gemini-Generated-Image-si6wdtsi6wdtsi6w.png",
    price: 4200,
    mrp: 27000,
    desc: "2.5 Lakh coins + 25,000 bonus + 5 Broad Absolute",
    link: "https://razorpay.me/@fluxfinds?amount=oh4Guho1gKcvyRP5As1tWg%3D%3D"
  },
  {
    id: "500k-gold",
    name: "500K GOLD CC",
    image: "https://i.ibb.co/3m27gLp0/Gemini-Generated-Image-n9tkkdn9tkkdn9tk.png",
    price: 5999,
    mrp: 50000,
    desc: "5 Lakh coins + 50,000 bonus + 10 Broad Absolute",
    link: "https://razorpay.me/@fluxfinds?amount=Uj2fVBg%2FvclD1RF0o2z%2BbA%3D%3D",
    badge: "WHALE PACK"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(p => p.id === id);
};
