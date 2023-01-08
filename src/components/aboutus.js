import classes from './aboutus.module.scss';
import data from '../data/about.json';
import playImg from '../Assets/Group 117.png';
import img1 from '../Assets/dungeon.png';
import img2 from '../Assets/Vector-2.png';
import img3 from '../Assets/Vector-1.png';
import semiCircle from '../Assets/Group 100.png';
import circle1 from '../Assets/Ellipse 16.png';
import circle2 from '../Assets/Ellipse 24.png';

const img = [img1, img2, img3]

function AboutUs() {

    const aboutCard = data.map((elem, i) => {
        return (
            <div key={i} className={classes.detailsAboutSub}>
                <img src={img[i]} alt='' />
                <h3>{elem.title}</h3>
                <p>{elem.context}</p>
                <span>{elem.get}</span>
            </div>
        )
    })

    return (
        <section className={classes.aboutUs}>
            <img src={semiCircle} alt='' className={classes.semiCircle}/>
            <img src={circle1} alt='' className={classes.circle1}/>
            <img src={circle2} alt='' className={classes.circle2}/>
            <div className={classes.offshoreContainer}>
                <h3 className={classes.offshoreVideo}>Watch the video about UAE or Offshore Company Registration</h3>
                <div className={classes.playImgContainer}>
                    <img src={playImg} alt='play button' />
                </div>
            </div>
            <div className={classes.dedicatedContainer}>
                <h3>
                    <span className={classes.forUnderline}>Dedicated</span>
                    <span>to our mission we are</span>
                </h3>
                <p>Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</p>
            </div>
            <div className={classes.detailAboutContainer}>
                {aboutCard}
            </div>
        </section>
    )
}

export default AboutUs;