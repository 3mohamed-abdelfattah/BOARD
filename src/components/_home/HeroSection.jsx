import React from 'react'
// Images
import HeroImage from '@/assets/images/for_hero/Art.png'
// Components
import { AdsBar } from '../custom/AdsBar'
// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const HeroSection = () => {

    const styles = {
        InfoSectionStyle: `flex flex-col xl:flex-row lg:pl-28 pt-10 lg:pt-36 z-40 lg:max-w-3xl text-center lg:text-left`,
        CounterNumber: `Bungee_font text-xl vsm:text-3xl`,
        CounterText: `text-sm sm:text-lg capitalize`
    }

    return (
        <main className='overflow-hidden'>

            {/* Hero Image & Flash Color */}
            <img src={HeroImage} alt='Hero Image' className='background_image hidden lg:block absolute top-0 right-0 contrast-[1.15] -z-10' data-aos="fade-left" data-aos-duration="3000" />
            <div className='absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 -z-20 blur-[250px]'></div>

            {/* Info Section */}
            <section className={styles.InfoSectionStyle}>
                <span>
                    {/* Texts*/}
                    <span className='flex flex-col gap-4'>
                        <p className='Bungee_font uppercase text-5xl sm:text-7xl px-3' data-aos="fade-right" data-aos-duration="2000">Let your <br /> mind <span className='background_text'>explore</span> new world</p>
                        <p className='sm:text-lg lg:max-w-2xl sm:leading-[34.642px] sm:tracking-[0.749px]' data-aos="fade-right" data-aos-duration="3000">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular game play, possibly as a hobby.</p>
                    </span>

                    {/* Buttons */}
                    <span className='Bungee_font flex justify-center lg:justify-normal uppercase text-xl mt-8' data-aos="fade-right" data-aos-duration="3000">
                        <button className='bg_pattern w-[232px] h-[74px] hover:scale-105 transition-all ease-in-out duration-300'>Buy now</button>
                        <button className='hidden sm:block bg_pattern_trans w-[232px] h-[74px] hover:scale-105 transition-all ease-in-out duration-300'><span className='background_text'>Play now</span></button>
                    </span>

                    {/* Counters */}
                    <span className='flex justify-center lg:justify-normal text-xl mt-16 gap-8'>
                        <span className='flex flex-col gap-1 items-center' data-aos="fade-right" data-aos-duration="3000">
                            <p className={styles.CounterNumber}>300+</p>
                            <p className={styles.CounterText}>Unique style</p>
                        </span>
                        <span className='flex flex-col gap-1 items-center' data-aos="fade-right" data-aos-duration="2500">
                            <p className={`${styles.CounterNumber} background_text`}>200+</p>
                            <p className={styles.CounterText}>Project finished</p>
                        </span>
                        <span className='flex flex-col gap-1 items-center' data-aos="fade-right" data-aos-duration="2000">
                            <p className={styles.CounterNumber}>500+</p>
                            <p className={styles.CounterText}>Happy customer</p>
                        </span>
                    </span>
                </span>
                <img src={HeroImage} alt='Hero Image' className='background_image block w-full lg:hidden contrast-[1.15] -z-10 scale-x-[-1]' />
            </section>

            <div className="glass_effect flex items-center overflow-hidden relative lg:my-6 h-14 md:h-[90px] -rotate-1">
                <AdsBar />
            </div>
        </main>
    )
}