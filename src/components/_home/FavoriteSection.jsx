import React from 'react'
// Component
import { AdsBar } from '../custom/AdsBar'
// Images
import Game1 from '@/assets/images/slide_game/game1.png'
import Game2 from '@/assets/images/slide_game/game3.png'
import Game3 from '@/assets/images/slide_game/game2.png'
import ADSPhoto from '@/assets/images/for_hero/ads.png'

export const FavoriteSection = (props) => {
    const styles = {
        FlashStyle: `absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 -z-20 blur-[250px]`,
    }
    return (
        <main className='mt-20'>

            <header className='flex flex-col justify-center items-center gap-3 text-center'>
                <p className='Bungee_font text-5xl sm:text-7xl uppercase max-w-[718px]'>
                    choose your <span className='background_text'>favorite</span> games
                </p>
                <p className='max-w-[518px]'>Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.</p>
            </header>

            {/* Flash Color */}
            <div className={styles.FlashStyle}></div>

            {/* Image Slider */}
            <section className='flex justify-between overflow-clip gap-3 sm:gap-9 items-baseline mt-5 sm:mt-10'>
                <div>
                    <img src={Game1} alt='Game Image' />
                </div>
                <div className='relative'>
                    <img src={Game2} alt='Game Image' />
                    <p className='hidden md:block Bungee_font uppercase absolute bottom-0 2xl:bottom-1 w-full text-center md:text-lg lg:text-2xl xl:text-3xl'>{props.GameTitle}</p>
                </div>
                <div>
                    <img src={Game3} alt='Game Image' />
                </div>
            </section>

            {/* Buttons */}
            <span className='Bungee_font flex justify-center uppercase sm:text-xl mt-5 sm:mt-20'>
                <button className='bg_pattern w-44 sm:w-[232px] h-10 sm:h-[74px] hover:scale-105 transition-all ease-in-out duration-300'>View All</button>
                <button className='hidden sm:block bg_pattern_trans w-[232px] h-[74px] hover:scale-105 transition-all ease-in-out duration-300'><span className='background_text'>Play now</span></button>
            </span>

            {/* ADS Section */}
            <article className='flex justify-center w-full mt-10 sm:mt-28'>

                {/* Flash Color */}
                <div className={`${styles.FlashStyle} right-0`}></div>
                <div className='absolute rounded-full bg-secondaryBackgroundColor/50 shrink-0 w-96 h-96 right-0 -z-20 blur-[250px]'></div>
                <div className={`${styles.FlashStyle} left-0`}></div>

                <div className='glass_effect relative flex flex-col-reverse lg:flex-row justify-between items-center mx-5 xl:mx-36 w-full 2xl:h-[556px] rounded-xl border border-white/10'>
                    {/* Photo */}
                    <span className='hidden xl:block'>
                        <img src={ADSPhoto} alt='ADS Photo' className='absolute bottom-0 left-0 w-1/2 2xl:w-auto' />
                    </span>
                    <img src={ADSPhoto} alt='ADS Photo' className='xl:hidden' />
                    {/* Info */}
                    <span className='flex flex-col p-5 lg:p-0 gap-5 sm:gap-10 xl:mx-10'>
                        <p className='Bungee_font p-5 lg:p-0 lg:max-w-[530px] vsm:text-3xl sm:text-5xl uppercase'>Discover the Virtual Reality Gaming </p>
                        <p className=' max-w-[460px] text-sm vsm:text-base'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.</p>
                        <button className='hidden sm:block Bungee_font uppercase text-xl bg_pattern_trans w-[232px] h-[74px] hover:scale-105 transition-all ease-in-out duration-300'><span className='background_text'>Play now</span></button>
                    </span>
                </div>
            </article>

            <div className="flex items-center overflow-hidden relative lg:my-6 h-14 md:h-[90px]">
                <AdsBar />
            </div>
        </main>
    )
}