/* eslint-disable jsx-a11y/alt-text */
import { default as React, Fragment } from 'react'
import { Link } from 'react-router-dom'
// import CardView from '../../components/card-view'
// import { SLUG_URL } from '../../constants/slug'
// import BannerLayout from '../../layouts/banner'
import FooterLayout from '../../layouts/footer'
import HeaderLayout from '../../layouts/header'
import './style.scss'

interface ProductData {
    id?: number | string
    name?: string
    note?: string
    image?: string
}

function cardView(cardData: ProductData) {
    return (
        <div className='cell' key={cardData.id}>
            <div className='product-thumb-swoosh master'>
                {/* <Link to={`/products/${SLUG_URL(cardData.name || '')}/${cardData.id}`} className='swoosh'> */}
                <Link to={`/`} className='swoosh'>
                    <img alt='Purifier Logic+ A2 Biosafety Cabinet on Stand' src={cardData.image?.split(',')[0]} />
                </Link>
                <h5>
                    <Link to={`/}`}>{cardData.name}</Link>
                </h5>
                <p>{cardData.note}</p>
            </div>
        </div>
    )
}

export default function HomePage() {
    const PRODUCT_API = `products`
    const numberRenderProduct = 4
    return (
        <Fragment>
            <HeaderLayout />
            {/* <BannerLayout /> */}
            <div className='stripe'>
                <div className='row'>
                    <section id='featured-products' className='article'>
                        <div className='grid-x grid-margin-x small-up-1 medium-up-2 large-up-4'>
                            {/* <CardView cardView={cardView} urlApi={PRODUCT_API} lengthRender={numberRenderProduct} /> */}
                        </div>
                    </section>
                </div>
            </div>
            <FooterLayout />
        </Fragment>
    )
}
