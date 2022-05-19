/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/iframe-has-title */
import "antd/es/button/style/index.css";
import "antd/es/notification/style/index.css";
import { default as React } from "react";

interface Product {
    productId?: number;
    productName?: string;
    image?: string;
    imageProduct?: string;
    catalog?: any;
    estimatedShippingWeight?: number;
    estimatedShippingWeightMetric?: number;
    dimensions?: string;
    dimensionsMetric?: string;
    electrical?: string;
    description?: string;
    feature?: string;
    products?: { referenceLink?: string };
    price?: number;
}
interface State {
    dataProduct: Product[];
}
interface Props {
    initialFilter?: { keyword?: string; page?: number };
    urlApi?: string;
}

function LeftSlide() {
    return (
        <div className="row">
            <div className="grid-x">
                <div className="large-3 cell small-order-2 large-order-1">
                    <div className="side-nav">
                        <div className="side-nav-head">Search this site</div>
                        <div className="side-nav-content">
                            <p>
                                Enter one or more keywords to search. Use
                                quotation marks around the "term" to search for
                                exact matches. Use of '*' and '?' wildcards is
                                also supported.
                            </p>
                            <p>
                                Not finding the number you are searching for?
                                Labconco has numerous catalog numbers for
                                equipment, accessories and replacement parts;
                                however, not all are listed on this website or
                                our dealers' websites. Please contact our
                                Product Service Department at 800-821-5525 or
                                816-333-8811 if you cannot find the part you
                                need here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SearchView(props: Props) {
    const CATALOG_API = `product`;
    return <div>{LeftSlide()}</div>;
}
