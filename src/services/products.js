/*
TEMPLATE: 
 {
        name: "",
        price: ,
        size: [
            "xx-small",
            "x-small",
            "small",
            "medium",
            "large",
            "xx-large",
            "xxx-large",
        ],
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
        stock: 10,
        images: [],
        wishlist: false,
    },
*/

const products = [
  {
    name: "Aviator Jacket",
    id: 1,
    price: 80,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwf1c0494b/8182807/8182807-02-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw43382e57/8182807/8182807-02-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwae431309/8182807/8182807-02-4.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwbb62f787/8182807/8182807-02-6.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Skater Jeans",
    id: 2,
    price: 60,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw89111fd7/8182833/8182833-01-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwc42108c9/8182833/8182833-01-6.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw5b2d4838/8182833/8182833-01-7.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Mesh Corset Top",
    id: 3,
    price: 35,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw3d4c737a/8182847/8182847-04-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwdec357f5/8182847/8182847-04-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw6b5b89ca/8182847/8182847-04-4.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwb4390d5a/8182847/8182847-04-1.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Mesh Micro Skirt",
    id: 4,
    price: 35,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw6fe796a7/8182899/8182899-06-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw5919f759/8182899/8182899-06-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw47003a00/8182899/8182899-06-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwd53e0a3e/8182899/8182899-06-2.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Vegan Leather Blazer",
    id: 5,
    price: 100,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw4763d6c4/8183187/8183187-01-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwb6414f6e/8183187/8183187-01-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwfccf6b5f/8183187/8183187-01-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw068d02f1/8183187/8183187-01-4.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "White Shirt Dress",
    id: 6,
    price: 55,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw50d20971/8183113/8183113-01-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw537d7eab/8183113/8183113-01-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwaf21c9f6/8183113/8183113-01-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwe4c6932e/8183113/8183113-01-4.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Floral Demi Mesh Midi Dress",
    id: 7,
    price: 50,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw556062fc/8183149/8183149-03-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwe44f3eb4/8183149/8183149-03-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw2c0ca67d/8183149/8183149-03-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwd128c196/8183149/8183149-03-1.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Black Corset Mini Dress",
    id: 8,
    price: 40,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw0beda9f5/8183193/8183193-01-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwb9a25453/8183193/8183193-01-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw64634d85/8183193/8183193-01-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwb5255b10/8183193/8183193-01-4.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Beige Cargo Pants",
    id: 9,
    price: 55,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwfd1c1cd1/8182525/8182525-04-5.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw1823a91e/8182525/8182525-04-7.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwb2feadeb/8182525/8182525-04-4.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw48066bdb/8182525/8182525-04-6.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Lace Corset",
    id: 10,
    price: 40,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwdbe21cc6/8183196/8183196-01-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwac7d9a19/8183196/8183196-01-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dwd3d18878/8183196/8183196-01-4.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw5725bfe3/8183196/8183196-01-5.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Low Rise Jean",
    id: 11,
    price: 70,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw3648c80f/8183000/8183000-01-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw7ee00f32/8183000/8183000-01-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw7fa46d72/8183000/8183000-01-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw6cad7df9/8183000/8183000-01-6.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
  {
    name: "Half Zip Teddy Sweat",
    id: 12,
    price: 50,
    size: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "xx-large",
      "xxx-large",
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ad illum beatae iste minus vel voluptas voluptatem quidem pariatur nisi adipisci minima, eum accusamus alias odit sapiente, non nobis iusto.",
    stock: 10,
    images: [
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw5aae3fcb/8182920/8182920-01-2.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw7f2093c5/8182920/8182920-01-1.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw1d49682f/8182920/8182920-01-3.jpg?sw=640&sh=960&sm=fit",
      "https://supre.com.au/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-supre/default/dw2afaad1f/8182920/8182920-01-4.jpg?sw=640&sh=960&sm=fit",
    ],
    wishlist: false,
  },
];

export default products;
