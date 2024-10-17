import React from 'react'
// Images
import Game1 from '@/assets/images/slide_game/game1.png'
import Game2 from '@/assets/images/slide_game/game3.png'
import Game3 from '@/assets/images/slide_game/game2.png'

export const FavoriteSection = (props) => {
    return (
        <main className='mt-20'>

            <header className='flex flex-col justify-center items-center gap-3 text-center'>
                <p className='Bungee_font text-6xl uppercase max-w-[718px]'>
                    choose your <span className='background_text'>favorite</span> games
                </p>
                <p className='max-w-[518px]'>Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.</p>
            </header>

            {/* Image Slider */}
            <section className='flex justify-between items-baseline mt-10'>
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

        </main>
    )
}
