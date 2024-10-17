import React from 'react'
// Component
import { AdsBar } from '../custom/AdsBar'
// Icons
import { FiveStarIcon } from '@/utils/icons.util'
import Verified from '@/assets/images/image_icons/Verified.svg'
// Image Pattern
import PinkShape from '@/assets/images/patterns/pinkShape.svg'
import BlueShape from '@/assets/images/patterns/blueShape.svg'
// Person Images 
import Person7 from '@/assets/images/people/person7.svg';
import Person8 from '@/assets/images/people/person8.svg';

export const ReviewSection = () => {
    return (
        <main className='mt-20'>

            {/* Review Card */}
            <section className='flex justify-center flex-wrap gap-5 mt-24'>

                {/* Card 1*/}
                <div className='relative glass_effect flex flex-col rounded-xl gap-7 border border-white/10 p-11 w-[607px] h-[388px]'>
                    {/* Review Info */}
                    <span>
                        <FiveStarIcon />
                        <p className='mt-2'>One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.</p>
                    </span>

                    {/* Line Break */}
                    <hr className="border-0 h-px bg-gradient-to-r from-white to-transparent" />

                    {/* Reviewer Info */}
                    <span className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img src={Person7} alt='Game Character' />
                            <span>
                                <p className='text-lg font-medium'>Arlene McCoy</p>
                                <p className='text-xs font-medium'>McDonald's</p>
                            </span>
                        </div>
                        <p className='flex items-center gap-1'>
                            <img src={Verified} alt='Game Character' />
                            Verified
                        </p>
                    </span>

                    {/* Float Shapes */}
                    <span className='absolute flex gap-5 -top-12 right-5'>
                        <img src={PinkShape} alt='Game Character' />
                        <img src={BlueShape} alt='Game Character' />
                    </span>
                </div>

                {/* Card 2*/}
                <div className='relative glass_effect flex flex-col rounded-xl gap-7 border border-white/10 p-11 w-[607px] h-[388px]'>
                    {/* Review Info */}
                    <span>
                        <FiveStarIcon />
                        <p className='mt-2'>Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.</p>
                    </span>

                    {/* Line Break */}
                    <hr className="border-0 h-px bg-gradient-to-r from-white to-transparent" />

                    {/* Reviewer Info */}
                    <span className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img src={Person8} alt='Game Character' />
                            <span>
                                <p className='text-lg font-medium'>Mohamed Mohamed</p>
                                <p className='text-xs font-medium'>Software Developer</p>
                            </span>
                        </div>
                        <p className='flex items-center gap-1'>
                            <img src={Verified} alt='Game Character' />
                            Verified
                        </p>
                    </span>

                    {/* Float Shapes */}
                    <span className='absolute flex gap-5 -top-12 right-5'>
                        <img src={PinkShape} alt='Game Character' />
                        <img src={BlueShape} alt='Game Character' />
                    </span>
                </div>

                {/* Flash Color */}
                <div className='absolute rounded-full bg-secondaryBackgroundColor right-0 shrink-0 w-96 h-96 -z-20 blur-[250px]'></div>
            </section>
            <div className="glass_effect flex items-center overflow-hidden relative my-6 h-[90px]">
                <AdsBar />
            </div>
        </main>
    )
}