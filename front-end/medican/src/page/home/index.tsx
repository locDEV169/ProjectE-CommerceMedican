/* eslint-disable jsx-a11y/alt-text */
import { Slider } from "antd";
import { default as React, Fragment } from "react";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
// import CardView from '../../components/card-view'
// import { SLUG_URL } from '../../constants/slug'
// import BannerLayout from '../../layouts/banner'
import FooterLayout from "../../layouts/footer";
import HeaderLayout from "../../layouts/header";
import "./style.scss";

interface ProductData {
    id?: number | string;
    name?: string;
    note?: string;
    image?: string;
}
const slideImages = [
    {
        url: "images/slide_2.jpg",
        caption: "Slide 1",
    },
    {
        url: "images/slide_3.jpg",
        caption: "Slide 2",
    },
    {
        url: "images/slide_4.jpg",
        caption: "Slide 3",
    },
];

function cardView(cardData: ProductData) {
    return (
        <div className="cell" key={cardData.id}>
            <div className="product-thumb-swoosh master">
                {/* <Link to={`/products/${SLUG_URL(cardData.name || '')}/${cardData.id}`} className='swoosh'> */}
                <Link to={`/`} className="swoosh">
                    <img
                        alt="Purifier Logic+ A2 Biosafety Cabinet on Stand"
                        src={cardData.image?.split(",")[0]}
                    />
                </Link>
                <h5>
                    <Link to={`/}`}>{cardData.name}</Link>
                </h5>
                <p>{cardData.note}</p>
            </div>
        </div>
    );
}

export default function HomePage() {
    const PRODUCT_API = `products`;
    const numberRenderProduct = 4;
    return (
        <Fragment>
            <HeaderLayout />
            {/* <BannerLayout /> */}
            {renderSlider()}
            <div className="stripe">
                <div className="row">
                    <section id="featured-products" className="article">
                        <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4">
                            {/* <CardView cardView={cardView} urlApi={PRODUCT_API} lengthRender={numberRenderProduct} /> */}
                        </div>
                    </section>
                </div>
            </div>
            <FooterLayout />
        </Fragment>
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function renderSlider() {
    return (
        <section id="promo-carousel">
            <div
                className="orbit row collapse"
                role="region"
                aria-label="Labconco promotions"
                data-orbit=""
                data-auto-play="true"
                data-timer-delay="10000"
                data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;"
                data-resize="vaq30g-orbit"
                id="vaq30g-orbit"
                data-e="c4tr2f-e"
                data-events="resize"
            >
                <div className="orbit-wrapper columns">
                    <div className="orbit-controls">
                        <button className="orbit-previous">
                            <span className="show-for-sr">Previous Slide</span>
                            <i className="material-icons">chevron_left</i>
                        </button>
                        <button className="orbit-next">
                            <span className="show-for-sr">Next Slide</span>
                            <i className="material-icons">chevron_right</i>
                        </button>
                    </div>
                    <ul
                        className="orbit-container text-center"
                        style={{ height: "468.712px" }}
                    >
                        <li
                            className="orbit-slide"
                            id="54"
                            data-slide="0"
                            style={{
                                position: "relative",
                                top: "0px",
                            }}
                        >
                            <a href="/">
                                <p>
                                    <img
                                        alt="Biosafety cabinet safety knowledge - lab equipment"
                                        src="https://www.labconco.com/images/cms/content/washer-banner-v6.jpg"
                                    />
                                </p>
                            </a>
                        </li>
                        <li
                            className="orbit-slide"
                            id="62"
                            data-slide="1"
                            style={{
                                position: "relative",
                                top: "0px",
                                display: "none",
                            }}
                        >
                            <a href="/">
                                <p>
                                    <img
                                        alt=""
                                        src="https://www.labconco.com/images/cms/content/AESite_20210209.jpg"
                                    />
                                </p>
                            </a>
                        </li>
                        <li
                            className="orbit-slide"
                            id="64"
                            data-slide="2"
                            style={{
                                position: "relative",
                                top: "0px",
                                display: "none",
                            }}
                        >
                            <a href="/">
                                <p>
                                    <img
                                        alt="Browse our new site for lab planning professionals"
                                        src="https://www.labconco.com/images/cms/content/logic-vue-banner-v6.png"
                                    />
                                </p>
                            </a>
                        </li>
                        <li
                            className="orbit-slide is-active"
                            id="63"
                            data-slide="3"
                            style={{
                                position: "relative",
                                top: "0px",
                                display: "none",
                            }}
                            aria-live="polite"
                        >
                            <a href="/">
                                <p>
                                    <img
                                        alt="New Logic Vue Large Class II Safety Enclosure"
                                        src="https://www.labconco.com/images/cms/content/Labconco_Banner_Covid19_20200320-quarter.jpg"
                                    />
                                </p>
                            </a>
                        </li>
                        <li
                            className="orbit-slide"
                            id="59"
                            data-slide="4"
                            style={{
                                position: "relative",
                                top: "0px",
                                display: "none",
                            }}
                        >
                            <a href="/">
                                <p>
                                    <img
                                        alt="COVID-19 Lab Handling Recommendations"
                                        src="https://www.labconco.com/images/cms/content/Labconco_Banner_Covid19_20200320-quarter.jpg"
                                    />
                                </p>
                            </a>
                        </li>
                    </ul>{" "}
                </div>
            </div>
        </section>
    );
}
