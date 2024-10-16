import React from 'react'
// Images
import Logo from '@/assets/images/Logo.png'
import CircleDot from '@/assets/images/patterns/Ellipse.png'
// Icons
import { CartIcon } from '@/utils/icons.util'

export const Header = () => {
    return (
        <header className='flex justify-around items-center mt-8'>

            {/* Logo */}
            <span className='flex font-bold text-3xl gap-2'>
                <img src={Logo} alt='Logo Icon' />
                board
            </span>

            {/* Nav Bar */}
            <span>
                <ul className='flex uppercase gap-10 text-lg'>
                    <li className='font-extrabold'>Products</li>
                    <li>Apps & Games</li>
                    <li>features</li>
                    <li>Support</li>
                    <li>about</li>
                </ul>
            </span>

            {/* Cart */}
            <span className='relative'>
                <CartIcon />
                <img src={CircleDot} alt='CircleDot Icon' className='absolute right-0 top-2 w-2' />
            </span>

        </header>
    )
}