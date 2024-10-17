import React, { Fragment } from 'react'
import { Header, HeroSection, FavoriteSection, TopGameSection, ReviewSection, Footer } from '@/components'
import '@/styles/home/homepage.css'

export const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <FavoriteSection GameTitle='sneak peeks' />
            <TopGameSection />
            <ReviewSection />
            <Footer />
        </Fragment>
    )
}