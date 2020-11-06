import React from 'react'
import TweetElement from '../components/tweet.js'
import word_cloud_img from '../assets/karachi_wordcloud.png'
import MainParagraph from '../components/mainParagraph'

function Home({onClick}){

  
        return (
			<div id='home-content' onClick={onClick}>
				<div className='Tweets'>
					<TweetElement
						TweetID={'1307146933513998337'}
						className='Tweet'
					/>
					<TweetElement
						TweetID={'1307139737434587137'}
						className='Tweet'
					/>
					<TweetElement
						TweetID={'1307137757366681600'}
						className='Tweet'
					/>
				</div>

				<div className='AppBody-right'>
					<div className = 'wordCloud-container'>
						<img
							className='wordCloud'
							src={word_cloud_img}
							alt='WordCloud'
						/>
					</div>
					<MainParagraph className='main-par' />
				</div>
			</div>
		)
    
}

export default Home

