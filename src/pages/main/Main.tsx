import Container from "../../components/container/Container";
import "./Main.scss";

import preview1 from "../../assets/images/main-preview/preview1.png";
import star from "../../assets/images/main-preview/preview-star.svg";

const Main = () => {
    return(
        <Container>
            <section id="main-preview">
                <div className="main-preview-description">
                    <h1 className="main-preview-description-title">FIND CLOTHES<br/>THAT MATCHES<br/>YOUR STYLE</h1>
                    <p className="main-preview-description-text">
                        Browse through our diverse range of meticulously crafted garments, designed<br/>
                        to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className="main-preview-btn">Shop Now</button>
                    <div className="description-info">
                        <div className="description-info-item">
                            <h2>200+</h2>
                            <p>International Brands</p>
                        </div>
                        <div className="description-info-item">
                            <h2>2,000+</h2>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="description-info-item">
                            <h2>30,000+</h2>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="main-preview-photo">
                    <img src={preview1} alt="Photo models" className="main-preview-models"/>
                    <img src={star} alt="Vector star" className="preview-photo-star"/>
                    <img src={star} alt="Vector star" className="preview-photo-star"/>
                </div>
            </section>
        </Container>
    );
}

export default Main;