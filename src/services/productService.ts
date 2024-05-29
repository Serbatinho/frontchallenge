import axios from 'axios';

interface Product {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
}

export const fetchProducts = async (page: number, rows: number): Promise<Product[]> => {
    const { data } = await axios.get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=id&orderBy=DESC`);
    return data.products;
};