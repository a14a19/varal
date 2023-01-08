import classes from './footer.module.scss';

import blogsImg from '../Assets/Vector-4.png';
import profile from '../Assets/Vector-3.png';
import subscribBtn from '../Assets/Group 34.png';
import facebook from '../Assets/Vector-5.png';
import instagram from '../Assets/Vector-6.png';
import linkedin from '../Assets/Vector-8.png';
import youtube from '../Assets/Vector-7.png';
import circle1 from '../Assets/Ellipse 27.png';
import circle2 from '../Assets/Ellipse 25.png';
import circle3 from '../Assets/Ellipse 15.png';
import circle4 from '../Assets/Ellipse 26.png';
import circle5 from '../Assets/Ellipse 27.png';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className={classes.footer}>
            <img src={circle1} alt='' className={classes.circle1}/>
            <img src={circle2} alt='' className={classes.circle2}/>
            <img src={circle3} alt='' className={classes.circle3}/>
            <img src={circle4} alt='' className={classes.circle4}/>
            <img src={circle5} alt='' className={classes.circle5}/>

                <aside className={classes.reviewAndBlog}>
                    <div className={classes.blogs}>
                        <h3 className={classes.footerH3}>Read about our blogs for more information on our processes</h3>
                        <div className={classes.blogContainer}>
                            <div className={classes.subBlogs}>
                                <img src={blogsImg} alt='Blogs' />
                                <div>
                                    <p>How to start a company formation in Dubai</p>
                                    <span>5 Minutes</span>
                                </div>
                            </div>
                            <div className={classes.subBlogs}>
                                <img src={blogsImg} alt='Blogs' />
                                <div>
                                    <p>How to start an Offshore company formation in Dubai</p>
                                    <span>5 Minutes</span>
                                </div>
                            </div>
                            <div className={classes.subBlogs}>
                                <img src={blogsImg} alt='Blogs' />
                                <div>
                                    <p>SEO Dubai: Who benefits the most?</p>
                                    <span>5 Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.review}>
                        <h3 className={classes.footerH3}>Satisfied We are When Our Customers Are Happy</h3>
                        <div className={classes.reviewContainer}>
                            <div className={classes.reviewSubContainer}>
                                <div className={classes.reviewImg}>
                                    <img src={profile} alt='Reviews' />
                                </div>
                                <div className={classes.reviewTxt}>
                                    <p>
                                        <span>"</span>I am very happy with them. I'll continue to use their services in future & highly recommend them to anyone.<span>"</span>
                                    </p>
                                    <h3>Muhib Abrar</h3>
                                </div>
                            </div>
                            <div className={classes.reviewSubContainer}>
                                <div className={classes.reviewImg}>
                                    <img src={profile} alt='Reviews' />
                                </div>
                                <div className={classes.reviewTxt}>
                                    <p>
                                        <span>"</span>Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity.<span>"</span>
                                    </p>
                                    <h3>Colin Saldahna</h3>
                                </div>
                            </div>
                            <div className={classes.reviewSubContainer}>
                                <div className={classes.reviewImg}>
                                    <img src={profile} alt='Reviews' />
                                </div>
                                <div className={classes.reviewTxt}>
                                    <p>
                                        <span>"</span>Your advise was so complete that I actually realized how beneficial this would be to my clients and my business.<span>"</span>
                                    </p>
                                    <h3>Mark Swann</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className={classes.servicesAndPolicies}>
                    <h3 className={classes.footerH33}>Get to know the whole us and more of our services</h3>
                    <div className={classes.subServicesAndPolicies}>
                        <div className={classes.services}>
                            <h3>Services</h3>
                            <ul>
                                <li>Products</li>
                                <li>Solutions</li>
                                <li>Assurance</li>
                                <li>FAQ</li>
                                <li>Working at Varal-Singhania</li>
                            </ul>
                        </div>
                        <div className={classes.policies}>
                            <h3>Policies</h3>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className={classes.about}>
                            <h3>About</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className={classes.address}>
                            <h3>Address</h3>
                            <ul>
                                <li>608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah</li>
                                <li>Lake Towers</li>
                                <li>Dubai</li>
                                <li>United Arab Emirates</li>
                                <br />
                                <li>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]</li>
                                <li>M: +971 55 794 2016</li>
                                <li>O: +971 4 447 2061</li>
                            </ul>
                        </div>
                        <div className={classes.subcrib}>
                            <h3>Subscribe Now</h3>
                            <ul>
                                <li className={classes.m_dnone}>Subscribe now to receive our Newsletters about amazing opportunities in Dubai</li>
                                <li className={classes.inputContainer}><input type="text" placeholder='Enter email address' /><img src={subscribBtn} alt='' /></li>
                                <li>
                                    <Link>
                                        <img src={facebook} alt='' />
                                    </Link>
                                    <Link>
                                        <img src={instagram} alt='' />
                                    </Link>
                                    <Link>
                                        <img src={linkedin} alt='' />
                                    </Link>
                                    <Link>
                                        <img src={youtube} alt='' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>Varaluae 2021 &copy; All Right Reserved</div>
        </footer>
    )
}

export default Footer;