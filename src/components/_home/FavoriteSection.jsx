import React from 'react'
// Components
import { AdsBar } from '../custom/AdsBar'
// Images
import Game1 from '@/assets/images/slide_game/game1.png'
import Game2 from '@/assets/images/slide_game/game3.png'
import Game3 from '@/assets/images/slide_game/game2.png'
import ADSPhoto from '@/assets/images/for_hero/ads.png'

export const FavoriteSection = (props) => {
    return (
        <main className='mt-20'>

            <header className='flex flex-col justify-center items-center gap-3 text-center'>
                <p className='Bungee_font text-6xl uppercase max-w-[718px]'>
                    choose your <span className='background_text'>favorite</span> games
                </p>
                <p className='max-w-[518px]'>Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.</p>
            </header>

            {/* Flash Color */}
            <div className='absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 -z-20 blur-[250px]'></div>

            {/* Image Slider */}
            <section className='flex justify-between overflow-clip gap-9 items-baseline mt-10'>
                <div>
                    <img src={Game1} alt='Game Image' />
                </div>
                <div className='relative'>
                    <img src={Game2} alt='Game Image' />
                    <p className='Bungee_font uppercase absolute bottom-1 w-full text-center text-3xl'>{props.GameTitle}</p>
                </div>
                <div>
                    <img src={Game3} alt='Game Image' />
                </div>
            </section>

            {/* Buttons */}
            <span className='Bungee_font flex justify-center uppercase text-xl mt-20'>
                <button className='bg_pattern w-[232px] h-[74px]'>View All</button>
                <button className='bg_pattern_trans w-[232px] h-[74px]'><span className='background_text'>Play now</span></button>
            </span>

            {/* ADS Section */}
            <article className='flex justify-center w-full mt-28'>

                {/* Flash Color */}
                <div className='absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 right-0 -z-20 blur-[250px]'></div>
                <div className='absolute rounded-full bg-secondaryBackgroundColor/50 shrink-0 w-96 h-96 right-0 -z-20 blur-[250px]'></div>
                <div className='absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 left-0 -z-20 blur-[250px]'></div>

                <div className='glass_effect relative flex justify-between items-center mx-36 w-full h-[556px] rounded-xl border border-white/10'>
                    {/* Photo */}
                    <span>
                        <img src={ADSPhoto} alt='ADS Photo' className='absolute bottom-0 left-0' />
                    </span>
                    {/* Info */}
                    <span className='flex flex-col gap-10 mx-10'>
                        <p className='Bungee_font max-w-[530px] text-5xl uppercase'>Discover the Virtual Reality Gaming </p>
                        <p className=' max-w-[460px]'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.</p>
                        <button className='Bungee_font uppercase text-xl bg_pattern_trans w-[232px] h-[74px]'><span className='background_text'>Play now</span></button>
                    </span>
                </div>
            </article>

            <div className="flex items-center overflow-hidden relative my-6 h-[90px]">
                <AdsBar />
            </div>
        </main>
    )
}