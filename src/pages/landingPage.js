import Header from '../components/header';
import HeroBanner from '../components/heroBanner';
import AboutUs from '../components/aboutus';
import LearningSetUp from '../components/learningSetUp';
import Price from '../components/price';
import Footer from '../components/footer';

import { BrowserRouter } from 'react-router-dom';

function LandingPage() {
    return (
        <BrowserRouter>
            <Header />
            <HeroBanner />
            <AboutUs />
            <LearningSetUp />
            <Price />
            <Footer />
        </BrowserRouter>
    )
}

export default LandingPage;