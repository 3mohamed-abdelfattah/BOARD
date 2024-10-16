import React from 'react'
// Images
import HeroImage from '../../assets/images/for_hero/Art.png'

export const HeroSection = () => {
    return (
        <main className=''>

            {/* Hero Image */}
            <img src={HeroImage} alt='Hero Image' className='background_image absolute top-0 -right-20 contrast-[1.15] -z-10' />
            <div className='absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 -z-20 blur-[292px]'></div>

            <section className='pl-28 pt-36 z-40 max-w-3xl'>
                <span className='flex flex-col gap-4'>
                    <p className='Bungee_font uppercase text-7xl'>Let your mind <span className='background_text'>explore</span> new world</p>
                    <p className='text-lg max-w-2xl leading-[34.642px] tracking-[0.749px]'>Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular game play, possibly as a hobby.</p>
                </span>

                <span className='Bungee_font flex uppercase text-xl mt-8'>
                    <button className='bg_pattern w-[232px] h-[74px]'>Buy now</button>
                    <button className='bg_pattern_trans w-[232px] h-[74px]'><span className='background_text'>Play now</span></button>
                </span>
            </section>
        </main>
    )
}