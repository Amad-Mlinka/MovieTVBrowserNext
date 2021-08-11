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
      <div className="content">
        <div className="movieRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
        </div>
        <div className="tvRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
        </div>
      </div>
    </>

  )
}
