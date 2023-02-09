
export interface IItem {
    id: number,
    name: string,
    category: string,
    image: string,
    cost: string,
    rating: number,
    stock: number
}

const ITEMS: ReadonlyArray<IItem> = [
    {
        "id": 1,
        "name": "Camera",
        "category": "electronics",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/camera.jpg",
        "cost": "1",
        "rating": 4,
        "stock": 10
    },
    {
        "id": 2,
        "name": "Drone",
        "category": "electronics",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/drone.jpg",
        "cost": "2",
        "rating": 5,
        "stock": 6
    },
    {
        "id": 3,
        "name": "Headset",
        "category": "electronics",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/headset.jpg",
        "cost": "0.25",
        "rating": 2,
        "stock": 24
    },
    {
        "id": 4,
        "name": "Shoes",
        "category": "clothing",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg",
        "cost": "0.25",
        "rating": 5,
        "stock": 3
    },
    {
        "id": 5,
        "name": "Sunglasses",
        "category": "clothing",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/sunglasses.jpg",
        "cost": "0.10",
        "rating": 4,
        "stock": 12
    },
    {
        "id": 6,
        "name": "Watch",
        "category": "clothing",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/watch.jpg",
        "cost": "1.25",
        "rating": 4,
        "stock": 0
    },
    {
        "id": 7,
        "name": "Puzzle Cube",
        "category": "toys",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/cube.jpg",
        "cost": "0.05",
        "rating": 4,
        "stock": 15
    },
    {
        "id": 8,
        "name": "Train Set",
        "category": "toys",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/train.jpg",
        "cost": "0.20",
        "rating": 4,
        "stock": 0
    },
    {
        "id": 9,
        "name": "Robot Set",
        "category": "toys",
        "image": "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/robots.jpg",
        "cost": "0.15",
        "rating": 3,
        "stock": 12
    }
]

export default ITEMS;
