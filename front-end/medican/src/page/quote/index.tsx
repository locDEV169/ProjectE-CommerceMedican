/* eslint-disable jsx-a11y/alt-text */
import Cookies from "js-cookie";
import { default as React } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

function cartItem() {
    const checkLogin = () => {
        Cookies.get("user") == null
            ? (window.location.href = "/login")
            : (window.location.href = "/checkout");
    };

    return (
        <form id="cart_form">
            <fieldset>
                <table className="cart hover unstriped stack">
                    <tbody>
                        <tr>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th>Catalog #</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td className="item-remove">
                                <button
                                    className="button transparent short"
                                    name="update_quantity"
                                    type="submit"
                                    value="X"
                                >
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                            <td className="item-image">
                                <img src="https://www.labconco.com/images/cms/thumb/xstream_1105100-_rgb_web_jan11_2019-2.jpg" />
                            </td>
                            <td className="item-sku">110416000 </td>
                            <td className="item-description">
                                <a href="/product/4-protector-xstream-i-s-laboratory-hood/7615">
                                    4' Protector XStream I-S Laboratory Hood
                                </a>
                            </td>
                            <td>
                                <div className="grid-x">
                                    <div className="auto cell">
                                        <input
                                            className="qty float-right"
                                            name="quantity[1-7615]"
                                            type="text"
                                        />
                                    </div>
                                    <div className="shrink cell">
                                        <button
                                            className="button transparent short"
                                            name="update_quantity"
                                            type="submit"
                                            value="Update"
                                        >
                                            <i className="material-icons">
                                                refresh
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="item-description">
                                <a href="/product/4-protector-xstream-i-s-laboratory-hood/7615">
                                    1000 $
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="item-remove">
                                <button
                                    className="button transparent short"
                                    name="update_quantity"
                                    type="submit"
                                    value="X"
                                >
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                            <td className="item-image">
                                <img src="https://www.labconco.com/images/cms/thumb/3pmtitem.jpg" />
                            </td>
                            <td className="item-sku">6963200 </td>
                            <td className="item-description">
                                <a href="/product/4-protector-xstream-i-s-laboratory-hood/7615">
                                    2' Paramount Ductless Enclosure
                                </a>
                            </td>
                            <td>
                                <div className="grid-x">
                                    <div className="auto cell">
                                        <input
                                            className="qty float-right"
                                            name="quantity[1-7615]"
                                            type="text"
                                        />
                                    </div>
                                    <div className="shrink cell">
                                        <button
                                            className="button transparent short"
                                            name="update_quantity"
                                            type="submit"
                                            value="Update"
                                        >
                                            <i className="material-icons">
                                                refresh
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="item-description">
                                <a href="/product/4-protector-xstream-i-s-laboratory-hood/7615">
                                    4000 $
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
            <div className="checkout-navigation">
                <Link to="" className="button info">
                    <i className="material-icons">chevron_left</i> Continue
                    Browsing
                </Link>
                <Button
                    // type="submit"
                    value="Checkout"
                    name="checkout"
                    className="button alert float-right"
                    onClick={() => checkLogin()}
                >
                    Checkout <i className="material-icons">chevron_right</i>
                </Button>
            </div>
        </form>
    );
}

export default function QuotePage() {
    return (
        <div className="article">
            <h1>Your Quote</h1>
            <p>
                Click "Checkout" to request a quote. A Labconco representative
                will work with our network of dealers to deliver pricing
                information to you.
            </p>
            <p>
                Click "Continue Browsing" to add more items to your Quote Cart.
            </p>
            {cartItem()}
        </div>
    );
}
