import classes from './learningSetUp.module.scss';

import img1 from '../Assets/Group.png';
import img2 from '../Assets/ILLUSTRATION 03  1.png';
import img3 from '../Assets/Group-1.png';
import img4 from '../Assets/Group-2.png';
import arrow from '../Assets/Vector.png';
import circle1 from '../Assets/Ellipse 14.png';
import circle2 from '../Assets/Ellipse 19.png';
import circle3 from '../Assets/Ellipse 15.png';
import circle4 from '../Assets/Ellipse 7.png';
import circle5 from '../Assets/Ellipse 11.png';

function LearningSetUp() {
    return (
        <section className={classes.learningsetup}>
            <img src={circle1} alt='' className={classes.circle1}/>
            <img src={circle2} alt='' className={classes.circle2}/>
            <img src={circle3} alt='' className={classes.circle3}/>
            <img src={circle4} alt='' className={classes.circle4}/>
            <img src={circle5} alt='' className={classes.circle5}/>
            <div className={classes.learningTitle}>
                <p>Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</p>
                <span>Claim a Free Quote</span>
            </div>
            <div className={classes.card1}>
                <img src={img1} alt='' />
                <div>
                    <h3>Advice & Guidance</h3>
                    <p>All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.</p>
                    <span>Learn more <img src={arrow} alt=''/></span>
                </div>
            </div>
            <div className={classes.card2}>
                <img src={img2} alt='' />
                <div>
                    <h3>Bank Account Setup</h3>
                    <p>There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent's strategies and have changed local requirements overnight in the past. But we are here to help you.</p>
                    <span>Learn more <img src={arrow} alt=''/></span>
                </div>
            </div>
            <div className={classes.card3}>
                <img src={img3} alt='' />
                <div>
                    <h3>Registration Document Perparation</h3>
                    <p>Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</p>
                    <span>Learn more <img src={arrow} alt=''/></span>
                </div>
            </div>
            <div className={classes.card4}>
                <img src={img4} alt='' />
                <div>
                    <h3>UAE Company Visas</h3>
                    <p>Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.</p>
                    <span>Learn more <img src={arrow} alt=''/></span>
                </div>
            </div>
            <div className={classes.moreServices}>
                <p>We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE.</p>
                <span>More about our services <img src={arrow} alt=''/></span>
            </div>
        </section>
    )
}

export default LearningSetUp;