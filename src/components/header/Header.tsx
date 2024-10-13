import Container from "../container/Container";

import "./Header.scss";

import discount_cross from "../../assets/icons/Vector.svg";
import shop_logo from "../../assets/images/SHOP.CO.png";
import search from "../../assets/icons/Search.svg";
import cart from "../../assets/icons/Cart.svg";
import person from "../../assets/icons/Person.svg";
import arrow_down from "../../assets/icons/Arrow_down.svg";
import burger from "../../assets/icons/Burger.svg";
import mobile_search from "../../assets/icons/Mobile search.svg";

const Header = () => {
    return (
        <>
            <div className="dicount-background">
                <Container>
                    <div className="discount-main-wrapper">
                        <p>Sign up and get 20% off to your first order. <span className="discount-main-wrapper__sign">Sign Up Now</span></p>
                        <img src={discount_cross} alt="cross" className="discount-main-wrapper__cross"/>
                    </div>
                </Container>
            </div>
            <div className="header-background">
                <Container>
                    <header>
                        <div className="header-main-logo-wrapper">
                            <img src={burger} className="header-main-logo-wrapper__burger"/>
                            <img src={shop_logo} alt="Shop.com logo" className="header-main-logo"/>
                        </div>
                        <div className="header-links">
                            <span className="header-links__link-arrow">
                                <a href="#">Shop</a>
                                <img src={arrow_down}/>
                            </span>
                            <a href="#">On Sale</a>
                            <a href="#">New Arrivals</a>
                            <a href="#">Brands</a>
                        </div>
                        <div className="header-search-bar">
                            <img src={search} alt="search"/>
                            <input type="text" placeholder="Search for products..."/>
                        </div>
                        <div className="header-icons">
                            <img src={mobile_search} alt="Search" className="header-icons__mobile-search"/>
                            <img src={cart} alt="cart"/>
                            <img src={person} alt="person"/>
                        </div>
                    </header>
                </Container>
            </div>
        </>
    );
}

export default Header;