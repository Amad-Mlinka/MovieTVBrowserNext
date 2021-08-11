import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
     <header className={homeStyles.header}>
      <div className={homeStyles.heading}>
        Home
      </div>
     </header>
    </>

  )
}
