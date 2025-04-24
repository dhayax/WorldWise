import React from 'react'
import styles from './Sidebar.module.css'
import Logo from './Logo'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <Outlet/>
        <p>List of cites</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
            </p>

        </footer>
    </div>
  )
}
