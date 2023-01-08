import classes from './header.module.scss';
import logo from '../Assets/Group 114.png';
import circle from '../Assets/Ellipse 16.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const [menu, setMenu] = useState(false)

    const menuBtn = () => {
        setMenu(current => !current)
    }

    return (
        <nav>
            <div className={classes.header}>
                <img src={logo} alt="Varal" className={classes.logo} />
                <div className={classes.header_right}>
                    <button className={classes.m_size} onClick={menuBtn}>
                        <i class="fa-sharp fa-solid fa-bars"></i>
                    </button>
                    <ul className={menu ? classes.lists : classes.dnone}>
                        <NavLink>
                            <li>
                                Home
                            </li>
                        </NavLink>
                        <NavLink>
                            <li>
                                Service
                            </li>
                        </NavLink>
                        <NavLink>
                            <li>
                                Pricing
                            </li>
                        </NavLink>
                        <NavLink>
                            <li>
                                About Us
                            </li>
                        </NavLink>
                        <NavLink>
                            <li>
                                <button>Start a Company</button>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <form>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder='Search a Term | Topic' />
                <img src={circle} alt='' className={classes.circle}/>
            </form>
        </nav>
    )
}

export default Header;