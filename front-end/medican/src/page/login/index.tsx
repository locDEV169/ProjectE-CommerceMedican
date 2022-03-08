import { default as React } from 'react'
import './style.scss'

export default function LoginPage() {
    return (
        <div id='article'>
            <div className="grid-x grid-margin-x">
                <div className="large-8 cell">


                    <h2>Benefits to Being a Registered Labconco User</h2>

                    <ul>
                        <li><strong>Download information</strong>. One registration provides immediate access to hundreds of PDFs, CAD drawings and more.</li>
                        <li><strong>Save time</strong>. No need to re-enter your information; simply login to quickly download documents and complete forms.</li>
                        <li><strong>Stay connected</strong>. Access your account any time to change your contact information and view your previous requests for quote and purchases.</li>
                    </ul>
                    <p>Thank you for registering with Labconco.</p>


                </div>
                <div className="large-4 cell">
                    <div className="callout secondary">
                        <h5>Log in to Labconco</h5>
                        <form action="https://www.labconco.com/login" id="login_form" className="" data-abide="" method="post" accept-charset="utf-8" data-e="d6mpxq-e">

                            <div data-abide-error="" className="alert callout" style={{ display: 'none' }}>
                                <p><i className="material-icons">error</i> Please review the information you provided.</p>
                            </div>

                            <div className="row">
                                <div className="columns">
                                    <label>Email
                                        <input id="email" name="email" type="text" value="" pattern="email" />
                                        <span className="form-error">Email address is required.</span>
                                    </label>
                                </div>
                                <div className="columns">
                                    <a href="https://www.labconco.com/profile/forgot_password" className="show-for-medium" style={{ fontSize: '0.7em', float: 'right' }}>Forgot or don't know your password?</a>
                                    <label>Password
                                        <input id="password" name="password" type="password" value="" />
                                        <span className="form-error">Password is required.</span>
                                    </label>
                                    <div className="show-for-small-only"><a href="/profile/forgot_password">Forgot or don't know password?</a></div>
                                </div>
                                <div className="columns">
                                    <input type="submit" value="Log in" name="login" className="show-for-medium button" />
                                    <input type="submit" value="Log in" name="login" className="show-for-small-only button expanded" />
                                    <p>Not Registered? <a href="https://www.labconco.com/profile/register">Register now!</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
