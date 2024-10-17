import React from 'react'
import StarIcon from '@/assets/images/patterns/start_icon.svg'

export const AdsBar = () => {
    const styles = {
        ContainerStyle: `Bungee_font flex gap-12 text-xl md:text-3xl whitespace-nowrap animate-marquee`,
        TextStyle: `flex items-center gap-5`
    }
    return (
        <div className={styles.ContainerStyle}>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                GAMING SPANNING
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                ACTION - PACKED
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                MIND - BENDING
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                COLLECTION OF GAMES
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                GAMING SPANNING
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                ACTION - PACKED
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                MIND - BENDING
            </span>
            <span className={styles.TextStyle}>
                <img src={StarIcon} alt="Icon Star" />
                COLLECTION OF GAMES
            </span>
        </div>
    )
}