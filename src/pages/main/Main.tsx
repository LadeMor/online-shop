import Container from "../../components/container/Container";
import "./Main.scss";

import preview1 from "../../assets/images/main-preview/preview1.png";
import star from "../../assets/images/main-preview/preview-star.svg";

import versace from "../../assets/images/brand-logos/versace_logo.png";
import zara from "../../assets/images/brand-logos/zara_logo.png";
import gucci from "../../assets/images/brand-logos/gucci_logo.png";
import prada from "../../assets/images/brand-logos/prada_logo.png";
import calvin_klein from "../../assets/images/brand-logos/calvin_klein_logo.png";

import product1 from "../../assets/images/product-list/product1.png";
import product2 from "../../assets/images/product-list/product2.png";
import product3 from "../../assets/images/product-list/product3.png";
import product4 from "../../assets/images/product-list/product4.png";

import full_star from "../../assets/images/product-list/full_star.png";
import half_star from "../../assets/images/product-list/half_star.png";
import { useState } from "react";

const Main = () => {

    const productPlaceholder = Array(4).fill(null);

    const [productList, setProductList] = useState([
        {
            id: 1,
            coverPhotoUrl: product1,
            name: "T-shirt with Tape Details",
            rating: 4.5,
            price: 120,
            discountAmount: 0
        },
        {
            id: 2,
            coverPhotoUrl: product2,
            name: "Skinny Fit Jeans",
            rating: 3.5,
            price: 260,
            discountAmount: 20
        },
        {
            id: 3,
            coverPhotoUrl: product3,
            name: "Checkered Shirt",
            rating: 4.5,
            price: 180,
            discountAmount: 0
        },
        {
            id: 4,
            coverPhotoUrl: product4,
            name: "Sleeve Striped T-shirt",
            rating: 4.5,
            price: 160,
            discountAmount: 30
        },
    ])

    const renderRatingStart = (rating: number) => {
        const fullStar = <img src={full_star} alt="Full star" />;
        const halfStar = <img src={half_star} alt="Half star" />
        let starsLayout = [];

        if(Number.isInteger(rating)){
            for (let index = 1; index < rating; index++) {
                starsLayout.push(fullStar);
            }
        }else{
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
        <Container>
            <section id="main-preview">
                <div className="main-preview__description">
                    <h1 className="main-preview__title">FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE</h1>
                    <p className="main-preview__text">
                        Browse through our diverse range of meticulously crafted garments, designed<br />
                        to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className="main-preview__button">Shop Now</button>
                    <div className="main-preview__info">
                        <div className="main-preview__info-item">
                            <h2>200+</h2>
                            <p className="main-preview__info-item__text">International Brands</p>
                        </div>
                        <span className="vertical-line"></span>
                        <div className="main-preview__info-item">
                            <h2>2,000+</h2>
                            <p className="main-preview__info-item__text">High-Quality Products</p>
                        </div>
                        <span className="vertical-line desktop-line"></span>
                        <div className="main-preview__info-item">
                            <h2>30,000+</h2>
                            <p className="main-preview__info-item__text">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="main-preview__photo">
                    <img src={preview1} alt="Photo models" className="main-preview__models" />
                    <img src={star} alt="Vector star" className="preview-photo__star star1" />
                    <img src={star} alt="Vector star" className="preview-photo__star star2" />
                </div>
            </section>
            <section id="brand-banner">
                <img src={versace} alt="Versace logo" className="brand-banner__versace" />
                <img src={zara} alt="Zara logo" className="brand-banner__zara" />
                <img src={gucci} alt="Gucci logo" className="brand-banner__gucci" />
                <img src={prada} alt="Prada logo" className="brand-banner__prada" />
                <img src={calvin_klein} alt="Calvin Klein logo" className="brand-banner__calvin_klein" />
            </section>
            <section id="arrivals">
                <h1 className="arrivals__title">NEW ARRIVALS</h1>
                <div className="product-list-wrapper">
                    <div className="product-list">
                        {productList.map((product, index) => (
                            <div className="product-list__item" key={product.id}>
                                <img className="product-list__item__main-image" src={product.coverPhotoUrl} alt={product.name} />
                                <div className="product-list__item__info">
                                    <h1>{product.name}</h1>
                                    <div className="product-list__item__rating">
                                        <div className="product-list__item__stars">
                                            {/* <img src={full_star} alt="Full star" />
                                            <img src={full_star} alt="Full star" />
                                            <img src={full_star} alt="Full star" />
                                            <img src={full_star} alt="Full star" />
                                            <img src={half_star} alt="Half star" /> */}
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
                        ))}
                    </div>
                    <div className="product-list__button">
                        <button>View All</button>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Main;