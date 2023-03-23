import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/homebanner/Banner'
import BannerBtext from '../Components/textb/BannerBtext'
import Slider from '../Components/slider/Slider'
import Wrapshover from '../Components/Wrapshover/Wrapshover'
import Works from '../Components/Works/Works'
import Styling from '../Components/Styling/Styling'
import Wrapslist from '../Components/Wrapslist/Wrapslist'
import Features from '../Components/Features/Features'
import Faq from '../Components/Faqs/Faq'
import Footer from '../Components/footer/Footer'


function Home() {
    return (
        <>
            <Header />
            <Banner />
            <BannerBtext />
            <Slider />
            <Wrapshover />
            <Works />
            <Styling />
            <Wrapslist />
            <Features />
            <Faq />
            <Footer />
        </>
    )
}

export default Home