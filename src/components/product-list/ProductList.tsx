import React, {useState} from "react";
import "./ProductList.scss";
import ProductItem from "./product-item/ProductItem";

interface Product{
    id: number,
    coverPhotoUrl: string,
    name: string,
    rating: number,
    price: number,
    discountAmount: number
}

interface ProductListProps {
    list: Product[]; 
}
const ProductList: React.FC<ProductListProps> = ({list})  => {
    return(
        <div className="product-list-wrapper">
                    <div className="product-list">
                        {list.map((product, index) => (
                            <ProductItem product={product}/>
                        ))}
                    </div>
                    <div className="product-list__button">
                        <button>View All</button>
                    </div>
                </div>
    );
}

export default ProductList;