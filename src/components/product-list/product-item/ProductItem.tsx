import "./ProductItem.scss";

import full_star from "../../../assets/images/product-list/full_star.png";
import half_star from "../../../assets/images/product-list/half_star.png";

interface Product {
    id: number,
    coverPhotoUrl: string,
    name: string,
    rating: number,
    price: number,
    discountAmount: number
}

interface ProductItemProp {
    product: Product
}

const ProductItem: React.FC<ProductItemProp> = ({ product }) => {

    const renderRatingStart = (rating: number) => {
        const fullStar = <img src={full_star} alt="Full star" />;
        const halfStar = <img src={half_star} alt="Half star" />
        let starsLayout = [];

        if (Number.isInteger(rating)) {
            for (let index = 1; index < rating; index++) {
                starsLayout.push(fullStar);
            }
        } else {
            let integerPart = Math.floor(rating);
            for (let index = 1; index < integerPart; index++) {
                starsLayout.push(fullStar);
            }
            starsLayout.push(halfStar);
        }

        return starsLayout;
    }

    const discountCalculation = (price: number, discount: number) => {
        return price - ((price * 20) / 100);
    }

    return (
        <div className="product-list__item" key={product.id}>
            <img className="product-list__item__main-image" src={product.coverPhotoUrl} alt={product.name} />
            <div className="product-list__item__info">
                <h1>{product.name}</h1>
                <div className="product-list__item__rating">
                    <div className="product-list__item__stars">
                        {renderRatingStart(product.rating)}
                    </div>
                    <p>{product.rating}/<span className="light-text">5</span></p>
                </div>
                <div className="product-list__item__price-wrapper">
                    <h2 className="product-list__item__price">
                        ${product.discountAmount > 0 ? discountCalculation(product.price, product.discountAmount) : product.price}
                    </h2>
                    {
                        product.discountAmount > 0 ?
                            <>
                                <h2 className="product-list__item__price old-price">${product.price}</h2>
                                <p className="product-list__item__price-discount">-20%</p>
                            </>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductItem;