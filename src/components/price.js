import classes from './price.module.scss';
import data from '../data/price.json';

import circle1 from '../Assets/Ellipse 7.png';
import circle2 from '../Assets/Ellipse 12.png';
import circle3 from '../Assets/Ellipse 11.png';
import circle4 from '../Assets/Ellipse 25.png';
import semiCircle from '../Assets/Group 100.png'

function Price() {

    const priceList = data.map((elem, i) => {

        const mainList = elem.lists.map((items, i) => {
            return (
                <ul key={i}>
                    <li><i class="fa-regular fa-circle-check"></i>{items}</li>
                </ul>
            )
        })

        return (
            <div key={i} className={classes.priceSubContainer}>
                <h3>{elem.name}</h3>
                <div className={classes.priceText}>
                    <span className={classes.amount}>{elem.price}</span>
                    <span className={classes.oneTimeTxt}> One Time Payment</span>
                </div>
                <p>{elem.newCompany}</p>
                <div>
                    {mainList}
                </div>
                <button>Continue</button>
            </div>
        )
    })

    return (
        <section className={classes.price} id='price'>
            <img src={circle1} alt='' className={classes.circle1} />
            <img src={circle2} alt='' className={classes.circle2} />
            <img src={circle3} alt='' className={classes.circle3} />
            <img src={circle4} alt='' className={classes.circle4} />
            <div className={classes.semiCirclerContainer}>
                <img src={semiCircle} alt='' className={classes.semiCircle} />
            </div>
            <p className={classes.priceHeading}>
                Most
                <span> popular affordable pricing </span>
                per jurisdictions are brought to you to kick off your adventure.
            </p>
            <div className={classes.priceContainer}>
                {priceList}
            </div>
        </section>
    )
}

export default Price;