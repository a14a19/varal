import classes from './heroBanner.module.scss';
import illustration from '../Assets/ILLUSTRATION.png';
import circle1 from '../Assets/Ellipse 14.png';
import circle2 from '../Assets/Ellipse 21.png';

function HeroBanner() {
    return (
        <section className={classes.heroBanner}>
            <img src={circle1} alt='' className={classes.circle1}/>
            <img src={circle2} alt='' className={classes.circle2}/>
            <h3 className={classes.quotes}>Claim a Free Quote</h3>
            <h1 className={classes.heroTitle}>
                <span>Get started </span>
                on fulfilling your Dubai or UAE dream.
            </h1>
            <div className={classes.imgContainer}>
                <img src={illustration} alt='Illustration' />
            </div>
            <div>
                <h3 className={classes.heroSubTitle}>UAE & Offshore Company</h3>
                <p className={classes.para}>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
            </div>
            <div className={classes.btnContainer}>
                <button className={classes.btn1}>Start a Company</button>
                <button className={classes.btn2}>Renew a Company</button>
            </div>
        </section>
    )
}

export default HeroBanner;