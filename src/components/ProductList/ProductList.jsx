import React from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {id: 1, title: 'Основной пакет', price: 100000, description: 'описание'},
    {id: 3, title: 'Последний шанс', price: 150000, description: 'описание'},
    {id: 4, title: 'Отсрочка', price: 200000, description: 'описание'},
]

const ProductList = () => {
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem product={item} className={'item'}></ProductItem>
            ))}
        </div>
    );
};

export default ProductList;