import React, { Fragment } from 'react'
import { Header, HeroSection, FavoriteSection, TopGameSection, ReviewSection } from '@/components'
import '@/styles/home/homePage.css'

export const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <FavoriteSection GameTitle='sneak peeks' />
            <TopGameSection />
            <ReviewSection />
        </Fragment>
    )
}