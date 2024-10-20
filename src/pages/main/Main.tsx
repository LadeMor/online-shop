import Container from "../../components/container/Container";
import ProductList from "../../components/product-list/ProductList";
import "./Main.scss";

import preview1 from "../../assets/images/main-preview/preview1.png";
import star from "../../assets/images/main-preview/preview-star.svg";

import versace from "../../assets/images/brand-logos/versace_logo.png";
import zara from "../../assets/images/brand-logos/zara_logo.png";
import gucci from "../../assets/images/brand-logos/gucci_logo.png";
import prada from "../../assets/images/brand-logos/prada_logo.png";
import calvin_klein from "../../assets/images/brand-logos/calvin_klein_logo.png";

import product1 from "../../assets/images/product-list/arrivals/product1.png";
import product2 from "../../assets/images/product-list/arrivals/product2.png";
import product3 from "../../assets/images/product-list/arrivals/product3.png";
import product4 from "../../assets/images/product-list/arrivals/product4.png";
import product5 from "../../assets/images/product-list/top-selling/image7.png";
import product6 from "../../assets/images/product-list/top-selling/image8.png";
import product7 from "../../assets/images/product-list/top-selling/image9.png";
import product8 from "../../assets/images/product-list/top-selling/image10.png";

import { useState } from "react";

const Main = () => {

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

    const [topSelling, setTopSelling] = useState([
        {
            id: 1,
            coverPhotoUrl: product5,
            name: "Vertical Striped Shirt",
            rating: 5,
            price: 232,
            discountAmount: 20
        },
        {
            id: 2,
            coverPhotoUrl: product6,
            name: "Courage Graphic T-shirt",
            rating: 4,
            price: 145,
            discountAmount: 0
        },
        {
            id: 3,
            coverPhotoUrl: product7,
            name: "Loose Fit Bermuda Shorts",
            rating: 3,
            price: 80,
            discountAmount: 0
        },
        {
            id: 4,
            coverPhotoUrl: product8,
            name: "Faded Skinny Jeans",
            rating: 4.5,
            price: 210,
            discountAmount: 0
        },
    ])
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
                <h1 className="section-title">NEW ARRIVALS</h1>
                <ProductList list={productList}/>
            </section>
            <div className="horizontal-line-wrapper">
                <div className="horizontal-line"></div>
            </div>
            <section id="top-selling">
                <h1 className="section-title">TOP SELLING</h1>
                <ProductList list={topSelling}/>
            </section>
        </Container>
    );
}

export default Main;