import React from 'react'
// Component
import { AdsBar } from '../custom/AdsBar'
// Character Images 
import Character1 from '@/assets/images/game_character/character1.png'
import Character2 from '@/assets/images/game_character/character2.png'
import Character3 from '@/assets/images/game_character/character3.png'
import Character4 from '@/assets/images/game_character/character4.png'
import Character5 from '@/assets/images/game_character/character5.png'
import Character6 from '@/assets/images/game_character/character6.png'
// Person Images 
import Person1 from '@/assets/images/people/person1.svg';
import Person2 from '@/assets/images/people/person2.svg';
import Person3 from '@/assets/images/people/person3.svg';
import Person4 from '@/assets/images/people/person4.svg';
import Person5 from '@/assets/images/people/person5.svg';
import Person6 from '@/assets/images/people/person6.svg';

export const TopGameSection = () => {
    const styles = {
        ButtonStyle: `bg_pattern_trans w-[232px] h-[74px]`,
        LiveStyle: `bg_pattern uppercase font-bold mt-10 h-14`,
        CardStyle: `glass_effect flex flex-col rounded-xl border border-white/10 p-1 vsm:p-5 mx-2 vsm:mx-0`,
        FlashStyle: `absolute rounded-full bg-secondaryBackgroundColor shrink-0 w-96 h-96 -z-20 blur-[250px]`,
    }
    return (
        <main className='mt-20'>

            <header className='flex flex-col justify-center items-center gap-10 text-center'>
                <p className='Bungee_font text-5xl sm:text-7xl uppercase max-w-[718px]'>
                    Welcome to the top <span className='background_text'>games</span>
                </p>

                {/* Buttons */}
                <span className='Bungee_font flex flex-wrap gap-2 justify-center uppercase text-xl'>
                    <button className='bg_pattern w-[232px] h-[74px]'>Newest games</button>
                    <button className={styles.ButtonStyle}><span className='background_text'>Latest games</span></button>
                    <button className={styles.ButtonStyle}><span className='background_text'>Fight games</span></button>
                    <button className={styles.ButtonStyle}><span className='background_text'>sport games</span></button>
                </span>
            </header>

            {/* Game Card */}
            <section className='relative flex justify-center flex-wrap gap-5 mt-10 sm:mt-24'>

                {/* Card 1 */}
                <div className={styles.CardStyle}>
                    <img src={Character1} alt='Game Character' />
                    <p className='text-2xl my-6 capitalize'>Master Chief</p>
                    <span className='flex items-center gap-3'>
                        <img src={Person1} alt='Game Character' />
                        <span>
                            <p className='text-lg font-medium'>Cameron Williamson</p>
                            <p className='text-xs font-medium'>Gillette</p>
                        </span>
                    </span>
                    <button className={styles.LiveStyle}>Live Demo</button>
                </div>

                {/* Card 2 */}
                <div className={styles.CardStyle}>
                    <img src={Character2} alt='Game Character' />
                    <p className='text-2xl my-6 capitalize'>Lara Croft</p>
                    <span className='flex items-center gap-3'>
                        <img src={Person2} alt='Game Character' />
                        <span>
                            <p className='text-lg font-medium'>Dianne Russell</p>
                            <p className='text-xs font-medium'>Louis Vuitton</p>
                        </span>
                    </span>
                    <button className={styles.LiveStyle}>Live Demo</button>
                </div>

                {/* Card 3 */}
                <div className={styles.CardStyle}>
                    <img src={Character3} alt='Game Character' />
                    <p className='text-2xl my-6 capitalize'>Geralt of Rivia</p>
                    <span className='flex items-center gap-3'>
                        <img src={Person3} alt='Game Character' />
                        <span>
                            <p className='text-lg font-medium'>Jane Cooper</p>
                            <p className='text-xs font-medium'>MasterCard</p>
                        </span>
                    </span>
                    <button className={styles.LiveStyle}>Live Demo</button>
                </div>

                {/* Card 4 */}
                <div className={styles.CardStyle}>
                    <img src={Character4} alt='Game Character' />
                    <p className='text-2xl my-6 capitalize'>Link</p>
                    <span className='flex items-center gap-3'>
                        <img src={Person4} alt='Game Character' />
                        <span>
                            <p className='text-lg font-medium'>Cody Fisher</p>
                            <p className='text-xs font-medium'>The Walt Disney Company</p>
                        </span>
                    </span>
                    <button className={styles.LiveStyle}>Live Demo</button>
                </div>

                {/* Card 5 */}
                <div className={styles.CardStyle}>
                    <img src={Character5} alt='Game Character' />
                    <p className='text-2xl my-6 capitalize'>Kratos</p>
                    <span className='flex items-center gap-3'>
                        <img src={Person5} alt='Game Character' />
                        <span>
                            <p className='text-lg font-medium'>Wade Warren</p>
                            <p className='text-xs font-medium'>Gillette</p>
                        </span>
                    </span>
                    <button className={styles.LiveStyle}>Live Demo</button>
                </div>

                {/* Card 6 */}
                <div className={styles.CardStyle}>
                    <img src={Character6} alt='Game Character' />
                    <p className='text-2xl my-6 capitalize'>Samus Aran</p>
                    <span className='flex items-center gap-3'>
                        <img src={Person6} alt='Game Character' />
                        <span>
                            <p className='text-lg font-medium'>Robert Fox</p>
                            <p className='text-xs font-medium'>l'oreal</p>
                        </span>
                    </span>
                    <button className={styles.LiveStyle}>Live Demo</button>
                </div>


                {/* Flash Color */}
                <div className={`${styles.FlashStyle} left-0 bottom-0`}></div>
                <div className={`${styles.FlashStyle} right-0 top-0`}></div>

            </section>
            <div className="flex items-center overflow-hidden relative lg:my-6 h-14 md:h-[90px]">
                <AdsBar />
            </div>
        </main>
    )
}