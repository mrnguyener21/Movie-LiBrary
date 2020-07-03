import React from 'react'
import styles from './SideBar.module.scss'

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.discover}>
                <h3 className={styles.title}>Discover</h3>
            </div>
            <div className={styles.genre}>
                <h3 className={styles.title}>Genre</h3>
            </div>
            
        </div>
    )
}

export default SideBar;
