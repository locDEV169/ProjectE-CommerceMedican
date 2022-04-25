import { default as React } from "react";
import "./style.scss";
import api from "../../constants/api";

export default function CheckPage() {
  api.get("user/1").then((response) => console.log(response));

  return (
    <div className="article">
      <h1>Quote Cart Checkout</h1>
      <p>Please review your data before clicking "Submit Request for Quote."</p>
      <p>
        If you have an immediate deadline, or if you have other questions or
        comments, please let us know in the "Comments" field.
      </p>
      <form action="/quote/checkout" method="post">
        <div className="grid-x grid-margin-x">
          <div className="large-8 cell">
            <div id="quote_questions">
              <p>
                <b>Please answer the following questions</b>
              </p>
              <p>
                Fields marked with <span className="hint">*</span> are required.
              </p>
              <p>
                <label className="align_right_long" htmlFor="contact_method">
                  <span className="hint">*</span> How would you like to be
                  contacted?{" "}
                </label>
                <select id="contact_method" name="contact_method">
                  <option value="">Select Contact Method...</option>
                  <option value="Email" id="email">
                    Email
                  </option>
                  <option value="Phone" id="phone">
                    Phone
                  </option>
                  <option value="Fax" id="fax">
                    Fax
                  </option>
                </select>
                <span className="hint"></span>
              </p>

              <p>
                <label className="align_right_long" htmlFor="quote_use">
                  <span className="hint">*</span> How will this quote be used?{" "}
                </label>
                <select id="use" name="use">
                  <option value="" id="">
                    Select Quote Use...
                  </option>
                  <option
                    value="Purchase within 30 days"
                    id="immediate_purchase"
                  >
                    Purchase within 30 days
                  </option>
                  <option
                    value="Purchase within 90 days"
                    id="purchase_within_90_days"
                  >
                    Purchase within 90 days
                  </option>
                  <option
                    value="Purchase within 12 months"
                    id="purchase_within_12_months"
                  >
                    Purchase within 12 months
                  </option>
                  <option value="Budgetary reference" id="budgetary_reference">
                    Budgetary reference
                  </option>
                  <option value="other" id="other">
                    Other
                  </option>
                </select>
                <span className="hint"></span>
              </p>

              <p>
                <label htmlFor="comment" className="align_right_long">
                  Comments:{" "}
                </label>
                <textarea
                  rows={6}
                  cols={35}
                  name="comment"
                  id="comment"
                ></textarea>
              </p>

              <p>
                <label htmlFor="contact_immediately">
                  <input
                    type="checkbox"
                    id="contact_immediately"
                    value="Y"
                    name="contact_immediately"
                  />{" "}
                  Please have a Labconco representative contact me immediately.
                </label>
              </p>
            </div>

            <fieldset>
              <table className="cart hover unstriped stack">
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Catalog #</th>
                    <th>Description</th>
                    <th>Qty</th>
                  </tr>
                  <tr>
                    <td className="item-remove"></td>
                    <td className="item-image">
                      <img src="/images/cms/thumb/axiom_on_stand_304411101_rgb_20201222_web.jpg" />
                    </td>
                    <td className="item-sku">304410001 </td>
                    <td className="item-description">
                      <a href="/product/4-purifier-axiom-class-ii-c1-biosafety-cabinet-with-10-sash-opening/8664">
                        4' Purifier Axiom Class II C1 Biosafety Cabinet with 10"
                        sash opening
                      </a>
                    </td>
                    <td>4 </td>
                  </tr>
                  <tr>
                    <td className="item-remove"></td>
                    <td className="item-image">
                      <img src="/images/cms/thumb/axiom_on_stand_304411101_rgb_20201222_web.jpg" />
                    </td>
                    <td className="item-sku">304410041 </td>
                    <td className="item-description">
                      <a href="/product/4-purifier-axiom-class-ii-c1-biosafety-cabinet-with-10-sash-opening-5/8668">
                        4' Purifier Axiom Class II C1 Biosafety Cabinet with 10"
                        sash opening
                      </a>
                    </td>
                    <td>1 </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </div>
          <div className="large-4 cell">
            <div id="quote_profile" className="gray-card">
              <b>Submitted by</b>
              <hr />
              <p>
                Mr. Loc Nguyen
                <br />
                ABC
                <br />
                hoang dieu
                <br />
                Danang, Danang 123456
                <br />
                Phone: 0787138846
                <br />
                loc16910@gmail.com
                <br />
              </p>
              <a href="/profile/personal" className="button info">
                Change
              </a>
              <br />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Submit Request for Quote"
          name="submit"
          className="button alert"
        />
      </form>
    </div>
  );
}
