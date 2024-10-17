import React from 'react'
import StarIcon from '@/assets/images/patterns/start_icon.svg'

export const AdsBar = () => {
    return (
        <div className="Bungee_font flex gap-12 text-3xl whitespace-nowrap animate-marquee">
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                GAMING SPANNING
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                ACTION - PACKED
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                MIND - BENDING
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                COLLECTION OF GAMES
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                GAMING SPANNING
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                ACTION - PACKED
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                MIND - BENDING
            </span>
            <span className="flex items-center gap-5">
                <img src={StarIcon} alt="Icon Star" />
                COLLECTION OF GAMES
            </span>
        </div>
    )
}