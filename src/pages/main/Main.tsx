import Container from "../../components/container/Container";
import "./Main.scss";

import preview1 from "../../assets/images/main-preview/preview1.png";
import star from "../../assets/images/main-preview/preview-star.svg";

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
        </Container>
    );
}

export default Main;