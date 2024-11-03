import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>Job-Monster</h1>
            <div className={styles.list_item}>
                <ul>
                    <li>Activity</li>
                    <li>Opportunity</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
