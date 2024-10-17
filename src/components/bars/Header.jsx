import React from 'react'
// Images
import Logo from '@/assets/images/Logo.png'
import CircleDot from '@/assets/images/image_icons/dot.svg'
// Icons
import { CartIcon } from '@/utils/icons.util'

export const Header = () => {
    const styles = {
        HoverStyle: `hover:scale-110 cursor-pointer transition-all ease-in-out duration-300`,
    }
    return (
        <header className='flex justify-around items-center mt-8'>

            {/* Logo */}
            <span className='Bungee_font flex items-center text-2xl sm:text-3xl gap-2'>
                <img src={Logo} alt='Logo Icon' />
                BOARD
            </span>

            {/* Nav Bar */}
            <span>
                <ul className='hidden lg:flex uppercase gap-10 text-lg'>
                    <li className={`${styles.HoverStyle} font-extrabold`}>Products</li>
                    <li className={styles.HoverStyle}>Apps & Games</li>
                    <li className={styles.HoverStyle}>features</li>
                    <li className={styles.HoverStyle}>Support</li>
                    <li className={styles.HoverStyle}>about</li>
                </ul>
            </span>

            {/* Cart */}
            <span className={`${styles.HoverStyle} relative`}>
                <CartIcon />
                <img
                    src={CircleDot}
                    className='absolute -right-1 top-0 w-3 animate-pulse'
                    alt='CircleDot Icon'
                />
            </span>

        </header>
    )
}