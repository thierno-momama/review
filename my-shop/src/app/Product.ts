export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id:1,
        name: "Iphone 13",
        price: 100,
        description: "Quel iPhone acheter en 2023 ?iPhone 14 Pro Max En substance, il s'agit du même smartphone, mais en plus grand. L'iPhone 14 Pro Max dispose ainsi d'un écran ProMotion de 6,7 pouces, contre 6,1 pouces pour le 14 Pro. Le Max est également plus grand et plus lourd."
    },
    {
        id:2,
        name: "Iphone 14",
        price: 1200,
        description: "Quel iPhone acheter en 2023 ?iPhone 14 Pro Max En substance, il s'agit du même smartphone, mais en plus grand. L'iPhone 14 Pro Max dispose ainsi d'un écran ProMotion de 6,7 pouces, contre 6,1 pouces pour le 14 Pro. Le Max est également plus grand et plus lourd."
    },
    {
        id:3,
        name: "Iphone 15",
        price: 1500,
        description: "Quel iPhone acheter en 2023 ?iPhone 14 Pro Max En substance, il s'agit du même smartphone, mais en plus grand. L'iPhone 14 Pro Max dispose ainsi d'un écran ProMotion de 6,7 pouces, contre 6,1 pouces pour le 14 Pro. Le Max est également plus grand et plus lourd."
    }
];