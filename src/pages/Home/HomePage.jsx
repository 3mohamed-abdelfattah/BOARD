import React from 'react'

export const HomePage = () => {

    const styles = {
        mainContainer: `flex flex-col justify-center items-center h-screen bg-[#D6EFD8]`
    }

    return (
        <main className={styles.mainContainer}>
            <h1>Home PAge</h1>
        </main>
    )
}