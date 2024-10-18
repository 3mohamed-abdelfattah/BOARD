import React from 'react'
// Images
import Logo from '@/assets/images/Logo.png'
import CircleDot from '@/assets/images/image_icons/dot.svg'
// Icons
import { CartIcon } from '@/utils/icons.util'
// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const Header = () => {
    const styles = {
        HoverStyle: `hover:scale-110 cursor-pointer transition-transform ease-in-out duration-300`,
    }
    return (
        <header className='flex justify-around items-center mt-8 animate-fadeInDown'>

            {/* Logo */}
            <span className='Bungee_font flex items-center text-2xl sm:text-3xl gap-2 animate-bounce'>
                <img
                    src={Logo}
                    alt='Logo Icon'
                    className='transition-transform duration-500 ease-in-out transform hover:rotate-12 hover:scale-105'
                />
                BOARD
            </span>

            {/* Nav Bar */}
            <span>
                <ul className='hidden lg:flex uppercase gap-10 text-lg' data-aos="fade-left" data-aos-duration="2000">
                    <li className={`${styles.HoverStyle} font-extrabold hover:text-secondaryBackgroundColor transition-colors duration-300`}>
                        Products
                    </li>
                    <li className={`${styles.HoverStyle} hover:text-secondaryBackgroundColor transition-colors duration-300`}>
                        Apps & Games
                    </li>
                    <li className={`${styles.HoverStyle} hover:text-secondaryBackgroundColor transition-colors duration-300`}>
                        Features
                    </li>
                    <li className={`${styles.HoverStyle} hover:text-secondaryBackgroundColor transition-colors duration-300`}>
                        Support
                    </li>
                    <li className={`${styles.HoverStyle} hover:text-secondaryBackgroundColor transition-colors duration-300`}>
                        About
                    </li>
                </ul>
            </span>

            {/* Cart */}
            <span className={`${styles.HoverStyle} relative`} data-aos="fade-left" data-aos-duration="3000">
                <CartIcon className='transition-transform duration-500 ease-in-out transform hover:scale-125' />
                <img
                    src={CircleDot}
                    className='absolute -right-1 top-0 w-3 animate-pulse'
                    alt='CircleDot Icon'
                />
            </span>

        </header>
    )
}
