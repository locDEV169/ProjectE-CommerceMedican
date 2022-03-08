/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import CardView from '../../components/card-view'
// import { SLUG_URL } from '../../constants/slug'
interface CategoryData {
    id?: string | number
    name?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MenuView(categoryData: CategoryData) {
    return (
                <li key={categoryData.id}>
                    {/* <Link to={`/category/${SLUG_URL(categoryData.name!)}/${categoryData.id}`}>{categoryData.name}</Link> */}
                    <Link to={`/`}>{categoryData.name}</Link>
                </li>
    )
}
export default function HeaderLayout() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const CATEGORIES_API = `categories`
    const [isloading, setisloading] = useState(false)

    return (
        <>
            <div id='about-nav' className='top-nav-panel'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>About Labconco</li>
                                <li>
                                    <a href='/company/how-we-give'>How We Give Back</a>
                                </li>
                                <li>
                                    <a href='/company/green-initiatives'>Our Green Initiatives</a>
                                </li>
                                <li>
                                    <a href='/company/our-story'>Our Story</a>
                                </li>
                                <li>
                                    <a href='/company/our-values'>Our Values</a>
                                </li>
                                <li>
                                    <a href='/company/our-promise'>Our Promise</a>
                                </li>
                                <li>
                                    <a href='/portfolios'>Our Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Career Opportunities</li>
                                <li>
                                    <a href='/careers'>Working at Labconco</a>
                                </li>
                                <li>
                                    <a href='/careers/available-positions'>Apply Online</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>GSA Purchasing</li>
                                <li>
                                    <a href='/company/gsa-contracts'>GSA Contracts</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>{/* <p><em>TBD - Column 4</em></p> */}</div>
                    </div>
                </div>
            </div>
            <div id='header-one'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='shrink cell show-for-medium'>
                            <ul
                                className='dropdown menu'
                                id='google-translate-nav'
                                data-dropdown-menu
                                data-disable-hover='false'
                                data-click-open='false'
                                role='menubar'
                                data-e='c4mm4x-e'>
                                <li
                                    role='menuitem'
                                    className='is-dropdown-submenu-parent opens-right'
                                    aria-haspopup='true'
                                    aria-label='en'>
                                    <a href='/#' className='add-arrow lang-current notranslate'>
                                        en
                                    </a>
                                    <ul
                                        className='menu submenu is-dropdown-submenu first-sub vertical'
                                        id='google-translate-list'
                                        data-submenu
                                        role='menu'>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ar)' data-lang-code='ar'>
                                                Arabic
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|bg)' data-lang-code='bg'>
                                                Bulgarian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|bn)' data-lang-code='bn'>
                                                Bengali
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ca)' data-lang-code='ca'>
                                                Catalan
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|cs)' data-lang-code='cs'>
                                                Czech
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|cy)' data-lang-code='cy'>
                                                Welsh
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|da)' data-lang-code='da'>
                                                Danish
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|en)' data-lang-code='en'>
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|de)' data-lang-code='de'>
                                                German
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|el)' data-lang-code='el'>
                                                Greek
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|es)' data-lang-code='es'>
                                                Spanish
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|et)' data-lang-code='et'>
                                                Estonian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|fa)' data-lang-code='fa'>
                                                Persian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|fi)' data-lang-code='fi'>
                                                Finnish
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|fr)' data-lang-code='fr'>
                                                French
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|hi)' data-lang-code='hi'>
                                                Hindi
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|hr)' data-lang-code='hr'>
                                                Croatian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|id)' data-lang-code='id'>
                                                Indonesian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|it)' data-lang-code='it'>
                                                Italian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|iw)' data-lang-code='iw'>
                                                Hebrew
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ja)' data-lang-code='ja'>
                                                Japanese
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|km)' data-lang-code='km'>
                                                Khmer
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ko)' data-lang-code='ko'>
                                                Korean
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|mn)' data-lang-code='mn'>
                                                Mongolian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|mr)' data-lang-code='mr'>
                                                Marathi
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ms)' data-lang-code='ms'>
                                                Malay
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|nl)' data-lang-code='nl'>
                                                Dutch
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|no)' data-lang-code='no'>
                                                Norwegian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|pa)' data-lang-code='pa'>
                                                Punjabi
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|pl)' data-lang-code='pl'>
                                                Polish
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|pt)' data-lang-code='pt'>
                                                Portuguese
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ro)' data-lang-code='ro'>
                                                Romanian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ru)' data-lang-code='ru'>
                                                Russian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|sk)' data-lang-code='sk'>
                                                Slovak
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|sl)' data-lang-code='sl'>
                                                Slovenian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|sv)' data-lang-code='sv'>
                                                Swedish
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ta)' data-lang-code='ta'>
                                                Tamil
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|te)' data-lang-code='te'>
                                                Telugu
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|th)' data-lang-code='th'>
                                                Thai
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|tr)' data-lang-code='tr'>
                                                Turkish
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|uk)' data-lang-code='uk'>
                                                Ukrainian
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|ur)' data-lang-code='ur'>
                                                Urdu
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|vi)' data-lang-code='vi'>
                                                Vietnamese
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|zh-CN)' data-lang-code='zh-CN'>
                                                Chinese Simplified
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.labconco.com/#googtrans(en|zh-TW)' data-lang-code='zh-TW'>
                                                Chinese Traditional
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='auto cell'>
                            <ul
                                className='dropdown menu align-right'
                                id='user-nav'
                                data-dropdown-menu
                                data-disable-hover='false'
                                data-click-open='false'
                                role='menubar'
                                data-e='vb0tgc-e'>
                                <li className='show-for-medium' role='menuitem'>
                                    <a href='/company' className='user-nav-about'>
                                        About Labconco
                                    </a>
                                </li>
                                <li className='show-for-medium' role='menuitem'>
                                    <a href='/careers'>Careers</a>
                                </li>
                                <li className='show-for-medium' role='menuitem'>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                                <li className='chat' role='menuitem'>
                                    {/* BEGIN ProvideSupport.com Text Chat Link Code */}
                                    {/* <div id="ciIZOj" style={{zIndex: 100, position: 'absolute'}} /><div id="scIZOj" style={{display: 'inline'}}><a href="#" onclick="psIZOjow(); return false;" alt="Live chat offline" title="Live chat offline" aria-label="Live chat offline"><span id="psIZOjl"><span className="offline">Chat Offline</span></span></a></div><div id="sdIZOj" style={{display: 'none'}} /><noscript>&lt;div style="display:inline"&gt;&lt;a href="http://www.providesupport.com?messenger=172ejj0988vpv0bymlafavhsrq"&gt;Live Help Chat&lt;/a&gt;&lt;/div&gt;</noscript> */}
                                    {/* END ProvideSupport.com Text Chat Link Code */}
                                </li>
                                <li
                                    role='menuitem'
                                    className='is-dropdown-submenu-parent opens-left'
                                    aria-haspopup='true'
                                    aria-label='Cart'>
                                    <a href='/#' className='user-nav-cart' data-toggle='mini-cart'>
                                        Cart
                                    </a>
                                    <ul
                                        className='menu submenu is-dropdown-submenu first-sub vertical'
                                        id='mini-cart'
                                        data-submenu
                                        role='menu'>
                                        <li role='menuitem' className='is-submenu-item is-dropdown-submenu-item'>
                                            <a href='/cart'>Items to Purchase: 0</a>
                                        </li>
                                        <li role='menuitem' className='is-submenu-item is-dropdown-submenu-item'>
                                            <a href='/quote'>Items for Quote: 0</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='user-nav-account show-for-medium' role='menuitem'>
                                    <Link to='/login'>Login</Link>
                                    <a href='/profile/register' id='user-nav-register'>
                                        Register
                                    </a>
                                </li>{' '}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='header-two' className='show-for-xlarge'>
                <div className='row'>
                    <Link to='/' id='logo' className='float-left'>
                        <img src='https://www.labconco.com/assets/ui/labconco-logo-380.png' />
                    </Link>
                    <ul className='menu float-right' id='top-nav'>
                        <li>
                            <a onClick={() => setisloading(!isloading)}>Products</a>
                        </li>
                        <li>
                            <a href='/#'>Markets</a>
                        </li>
                        <li>
                            <a href='/literature'>Resources</a>
                        </li>
                        <li>
                            <a href='/sales-and-support'>Sales &amp; Support</a>
                        </li>
                        <li>
                            <a href='/news'>News &amp; Events</a>
                        </li>
                        <li>
                            <a href='/services'>Services</a>
                        </li>
                        <li>
                            <a href='/search/search-results.php'>
                                <i className='fa fa-search' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {isloading && (
                <div id='products-nav' className='top-nav-panel' style={{ display: 'block' }}>
                    <div className='row'>
                        <div className='grid-x grid-margin-x'>
                        <div className='cell auto' >
                            <ul className='vertical menu'>
                                <li className='menu-text'>Products</li>
                                {/* <CardView cardView={MenuView} urlApi={CATEGORIES_API} /> */}
                            </ul>
                         </div>
                        </div>
                    </div>
                </div>
            )}
            <div id='markets-nav' className='top-nav-panel'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>
                                    <a href='/markets'>Markets</a>
                                </li>
                                <li>
                                    <a href='/architects'>Architects and Engineers</a>
                                </li>
                                <li>
                                    <a href='/biopharma'>Biopharma</a>
                                </li>
                                <li>
                                    <a href='/clinical'>Clinical</a>
                                </li>
                                <li>
                                    <a href='/forensics'>Forensics</a>
                                </li>
                                <li>
                                    <a href='/pharmacy'>Pharmacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='resources-nav' className='top-nav-panel active'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Literature</li>
                                <li>
                                    <a href='/resources/brochures'>Brochures</a>
                                </li>
                                <li>
                                    <a href='/resources/manuals'>User's Manuals</a>
                                </li>
                                <li>
                                    <a href='/resources/spanish'>En Español</a>
                                </li>
                                <li>
                                    <a href='/resources/white-papers'>White Papers</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Technical Resources</li>
                                <li>
                                    <a href='/resources/3-part-specs'>3-Part Specs</a>
                                </li>
                                <li>
                                    <a href='/resources/app-notes'>Application Notes</a>
                                </li>
                                <li>
                                    <a href='/resources/cad'>CAD Drawings</a>
                                </li>
                                <li>
                                    <a href='/resources/revit'>Revit Models</a>
                                </li>
                                <li>
                                    <a href='/resources/declarations-of-conformity'>Declarations of Conformity</a>
                                </li>
                                <li>
                                    <a href='/resources/iq'>IQ/OQ</a>
                                </li>
                                <li>
                                    <a href='/resources/sds'>Safety Data Sheets</a>
                                </li>
                                <li>
                                    <a href='/resources/software-apps'>Software &amp; Apps</a>
                                </li>
                                <li>
                                    <a href='/resources/tech-manuals'>Technical Manuals</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Media</li>
                                <li>
                                    <a href='/articles/category/articles'>Articles</a>
                                </li>
                                <li>
                                    <a href='/articles/category/infographics'>Infographics</a>
                                </li>
                                <li>
                                    <a href='/resources/video'>Videos</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <p>TBD?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sales-support-nav' className='top-nav-panel'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Sales</li>
                                <li>
                                    <a href='/sales-and-support/us-and-canada-sales'>US &amp; Canada Sales</a>
                                </li>
                                <li>
                                    <a href='/sales-and-support/international-sales'>International Sales</a>
                                </li>
                                <li>
                                    <a href='/sales-and-support/gsa-contracts'>GSA Contracts</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Support</li>
                                <li>
                                    <a href='/sales-and-support/us-and-canada-customer-service'>
                                        US &amp; Canada Customer Service
                                    </a>
                                </li>
                                <li>
                                    <a href='/sales-and-support/international-customer-service'>International Customer Service</a>
                                </li>
                                <li>
                                    <a href='/sales-and-support/international-support'>International Support</a>
                                </li>
                                <li>
                                    <a href='/sales-and-support/product-service'>Product Service</a>
                                </li>
                                <li>
                                    <a href='/sales-and-support/product-specialists'>Application Specialists</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Distributors</li>
                                <li>
                                    <a href='/distributors/category/global'>Global</a>
                                </li>
                                <li>
                                    <a href='/distributors/category/united-states'>US &amp; Canada</a>
                                </li>
                                <li>
                                    <a href='/distributors/category/united-states-construction-renovation-projects'>
                                        US - Construction/Renovation Projects
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Project Support</li>
                                <li>
                                    <a href='/sales-and-support/project-management'>Project Management</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='news-events-nav' className='top-nav-panel'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>News</li>
                                <li>
                                    <a href='/news/category/blog'>Blog</a>
                                </li>
                                <li>
                                    <a href='/news/category/promotions'>Promotions</a>
                                </li>
                                <li>
                                    <a href='/news/category/press-releases'>Press Releases</a>
                                </li>
                                <li>
                                    <a href='/news/category/product-announcements'>Product Announcements</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Events</li>
                                <li>
                                    <a href='/events/category/trade-shows'>Trade Shows</a>
                                </li>
                                <li>
                                    <a href='/events/category/webinars'>Webinars</a>
                                </li>
                                <li>
                                    <a href='/events/category/seminars-and-workshops'>Seminars &amp; Workshops</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <p>TBD</p>
                        </div>
                        <div className='cell auto'>
                            <p>TBD</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='services-nav' className='top-nav-panel'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Services</li>
                                <li>
                                    <a href='/services/architect-binder'>Architectural Resource Binder</a>
                                </li>
                                <li>
                                    <a href='/services/request-chemical-assessment'>Chemical Assessment Report</a>
                                </li>
                                <li>
                                    <a href='/services/chemical-guide-for-filtered-enclosures'>
                                        Chemical Reference Guide for Ductless Hoods
                                    </a>
                                </li>
                                <li>
                                    <a href='/services/filter-reminder'>Filter Replacement Reminder</a>
                                </li>
                                <li>
                                    <a href='/services/waterprofile-test-kit'>Water Profile Test Kit</a>
                                </li>
                                <li>
                                    <a href='/services/xpress-inventory'>48-Hour XPress</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <ul className='vertical menu'>
                                <li className='menu-text'>Product Registration</li>
                                <li>
                                    <a href='/services/product-registration'>Product Registration Form</a>
                                </li>
                            </ul>
                        </div>
                        <div className='cell auto'>
                            <p>TBD</p>
                        </div>
                        <div className='cell auto'>
                            <p>TBD</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='search-nav' className='top-nav-panel'>
                <div className='row'>
                    <div className='grid-x grid-margin-x'>
                        <div className='large-2 large-offset-2 cell text-right'>
                            <h2>Search</h2>
                        </div>
                        <div className='large-4 cell'>
                            <form method='get' action='/search/search-results.php'>
                                <div className='input-group'>
                                    <input
                                        type='text'
                                        name='zoom_query'
                                        maxLength={48}
                                        placeholder='Keyword or Catalog Number'
                                        id='top-search-query'
                                        className='input-group-field'
                                        data-cmc3-omnisearch
                                    />
                                    <div className='input-group-button'>
                                        <button type='submit' className='button' id='top-search-submit'>
                                            <i className='fa fa-search' aria-hidden='true' />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div id='header-two-mobile' className='hide-for-xlarge'>
                <div className='row'>
                    <a href='/' id='logo-mobile' className='float-left'>
                        <img src='https://www.labconco.com/assets/ui/labconco-logo-380.png' />
                    </a>
                    <button
                        className='float-right'
                        id='top-nav-mobile-button'
                        data-toggle='top-nav-mobile top-nav-mobile-button'
                        data-toggler='.active'
                        aria-expanded='false'
                        data-e='zmnio9-e'>
                        <i className='material-icons'>menu</i>
                    </button>
                </div>
            </div>
            <ul
                className='menu vertical'
                id='top-nav-mobile'
                data-toggler
                data-animate='hinge-in-from-top hinge-out-from-top'
                style={{ display: 'none' }}
                aria-expanded='false'
                data-e='ysf0yf-e'>
                <li className='user-nav-account show-for-medium'>
                    <a href='/login'>Login</a>
                    <a href='/profile/register' id='user-nav-register'>
                        Register
                    </a>
                </li>{' '}
                <li>
                    <a href='/category'>Products</a>
                </li>
                <li>
                    <a href='/markets'>Markets</a>
                </li>
                <li>
                    <a href='/literature'>Resources</a>
                </li>
                <li>
                    <a href='/sales-and-support'>Sales &amp; Support</a>
                </li>
                <li>
                    <a href='/news'>News</a>
                </li>
                <li>
                    <a href='/events'>Events</a>
                </li>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/company'>About Labconco</a>
                </li>
                <li>
                    <a href='/contact'>Contact Us</a>
                </li>
                <li className='top-nav-mobile-search'>
                    <form method='get' action='/search/search-results.php'>
                        <label>Search</label>
                        <div className='input-group'>
                            <input
                                type='text'
                                name='zoom_query'
                                maxLength={48}
                                placeholder='Keyword or Catalog Number'
                                id='top-search-query'
                                className='input-group-field'
                            />
                            <div className='input-group-button'>
                                <button type='submit' className='button' id='top-search-submit'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                </button>
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
        </>
    )
}
