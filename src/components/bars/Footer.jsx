import React from 'react'
// Component
import { AdsBar } from '../custom/AdsBar'
// Images
import Logo from '@/assets/images/Logo.png'
// Icons
import { AsusIcon, CanonIcon, FacebookIcon, GithubIcon, InstagramIcon, MicrosoftIcon, RobloxIcon, TwitchIcon, TwitterIcon } from '@/utils/icons.util'

export const Footer = () => {
    return (
        <footer className='relative mt-32'>
            <div className="glass_effect flex items-center overflow-hidden relative my-6 h-[90px] z-10">
                <AdsBar />
            </div>

            <section className='footer_background absolute top-16 flex flex-col justify-center items-start p-2 vsm:pl-14 w-full'>

                <div className='flex gap-10 lg:gap-28 xl:gap-32'>
                    {/* Logo & Description */}
                    <div>
                        <span className='flex font-bold text-3xl gap-2'>
                            <img src={Logo} alt='Logo Icon' />
                            board
                        </span>
                        <p className='vsm:w-80 mt-8'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .</p>
                    </div>

                    {/* company */}
                    <div className='hidden md:flex flex-col gap-8 capitalize'>
                        <p className='text-lg font-bold uppercase'>company</p>
                        <p>products</p>
                        <p>apps & games</p>
                        <p>features</p>
                    </div>

                    {/* help */}
                    <div className='hidden sm:flex flex-col gap-8 capitalize'>
                        <p className='text-lg font-bold uppercase'>help</p>
                        <p>support</p>
                        <p>about</p>
                        <p>contact us</p>
                    </div>

                    {/* resources */}
                    <div className='hidden sm:flex flex-col gap-8 capitalize'>
                        <p className='text-lg font-bold uppercase'>resources</p>
                        <p>youtube playlist</p>
                        <p>how to - blog</p>
                        <p>terms & conditions</p>
                    </div>
                </div>

                {/* Company Logos */}
                <span className='flex flex-wrap gap-6 items-center mt-10'>
                    <TwitchIcon />
                    <RobloxIcon />
                    <AsusIcon />
                    <CanonIcon />
                    <MicrosoftIcon />
                </span>

                {/* Social Logos */}
                <span className='flex gap-3 items-center mt-7'>
                    <TwitterIcon />
                    <span className='bg_pattern flex justify-center items-center rounded-full w-7 h-7'>
                        <FacebookIcon />
                    </span>
                    <InstagramIcon />
                    <GithubIcon />
                    <p className='text-xs'>© Copyright 2023, All Rights Reserved by board</p>
                </span>
            </section>

        </footer>
    )
}