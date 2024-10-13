import Container from "../../components/container/Container";
import "./Main.scss";

import preview1 from "../../assets/images/main-preview/preview1.png";
import star from "../../assets/images/main-preview/preview-star.svg";

import versace from "../../assets/images/brand-logos/versace_logo.png";
import zara from "../../assets/images/brand-logos/zara_logo.png";
import gucci from "../../assets/images/brand-logos/gucci_logo.png";
import prada from "../../assets/images/brand-logos/prada_logo.png";
import calvin_klein from "../../assets/images/brand-logos/calvin_klein_logo.png";

const Main = () => {
    return(
        <Container>
            <section id="main-preview">
                <div className="main-preview__description">
                    <h1 className="main-preview__title">FIND CLOTHES<br/>THAT MATCHES<br/>YOUR STYLE</h1>
                    <p className="main-preview__text">
                        Browse through our diverse range of meticulously crafted garments, designed<br/>
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
                    <img src={preview1} alt="Photo models" className="main-preview__models"/>
                    <img src={star} alt="Vector star" className="preview-photo__star star1"/>
                    <img src={star} alt="Vector star" className="preview-photo__star star2"/>
                </div>
            </section>
            <section id="brand-banner">
                <img src={versace} alt="Versace logo" className="brand-banner__versace" />
                <img src={zara} alt="Zara logo" className="brand-banner__zara"/>
                <img src={gucci} alt="Gucci logo" className="brand-banner__gucci"/>
                <img src={prada} alt="Prada logo" className="brand-banner__prada"/>
                <img src={calvin_klein} alt="Calvin Klein logo" className="brand-banner__calvin_klein"/>
            </section>
        </Container>
    );
}

export default Main;