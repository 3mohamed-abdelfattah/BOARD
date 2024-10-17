import React, { Fragment } from 'react'
import { Header, HeroSection, FavoriteSection } from '@/components'
import '@/styles/home/homepage.css'

export const HomePage = () => {

    const styles = {
        mainContainer: ``
    }

    return (
        <Fragment>
            <Header />
            <HeroSection />
            <FavoriteSection />
        </Fragment>
    )
}