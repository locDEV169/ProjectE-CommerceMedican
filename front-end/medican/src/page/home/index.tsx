/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { default as React, Fragment } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import ImageSlider from "../../components/image-slider/ImageSlider";
// import CardView from '../../components/card-view'
// import { SLUG_URL } from '../../constants/slug'
// import BannerLayout from '../../layouts/banner'
import FooterLayout from "../../layouts/footer";
import HeaderLayout from "../../layouts/header";
import CardView from './../../components/card-view/index';
import { SliderData } from './../../components/image-slider/SliderData';
import "./style.scss";

interface ProductData {
    id?: number | string;
    productName?: string;
    description?: string;
    image?: string;
}

function cardView(cardData: ProductData) {
    return (
        <div className="cell" key={cardData.id}>
            <div className="product-thumb-swoosh master">
                {/* <Link to={`/products/${SLUG_URL(cardData.name || '')}/${cardData.id}`} className='swoosh'> */}
                <Link to={`/`} className="swoosh">
                    <img
                        alt="Purifier Logic+ A2 Safety Cabinet on Stand"
                        src={cardData.image?.split(",")[0]}
                    />
                </Link>
                <h5>
                    <Link to={`/}`} style={{textTransform: 'capitalize'}}>{cardData.productName}</Link>
                </h5>
                <p>{ReactHtmlParser(cardData.description || '')}</p>
            </div>
        </div>
    );
}

export default function HomePage() {
    const PRODUCT_API = `/products/list-products`;
    const numberRenderProduct = 4;
    return (
        <Fragment>
            <HeaderLayout />
            {/* <BannerLayout /> */}
            <ImageSlider slides={SliderData} />
            <div className="stripe">
                <div className="row">
                    <section id="featured-products" className="article">
                        <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4">
                            <CardView cardView={cardView} urlApi={PRODUCT_API} lengthRender={numberRenderProduct} />
                        </div>
                    </section>
                </div>
            </div>
            <FooterLayout />
        </Fragment>
    );
}
