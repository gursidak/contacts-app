import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import styles from '../styles/Layout.module.css'; // Import a CSS module for styling

type Props = {

    children : React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
        {children}

        </div>
        <Footer />

    </div>
  )
}

export default Layout