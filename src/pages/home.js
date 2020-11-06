import React from 'react'
import TweetElement from '../components/tweet.js'
import word_cloud_img from '../assets/karachi_wordcloud.png'
import MainParagraph from '../components/mainParagraph'

function Home({ onClick }) {
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
				<div className='wordCloud-container'>
					<map name='infographic'>
						<area
							shape='rect'
							coords='230,360,622,470'
							href='https://twitter.com/search?q=%23Karachi'
							target='_blank'
							alt='Karachi'
						/>

						<area
							shape='rect'
							coords='490,60,550,370'
							href='https://twitter.com/search?q=%23Islamabad'
							target='_blank'
							alt='Islamabad'
						/>

						<area
							shape='rect'
							coords='280,160,460,270'
							href='https://twitter.com/search?q=%23Sindh'
							target='_blank'
							alt='Sindh'
						/>
					</map>
					<img
						usemap='#infographic'
						src={word_cloud_img}
						alt='WordCloud'
						className = 'wordCloud'
					/>
				</div>

				<MainParagraph className='main-par' />
			</div>
		</div>
	)
}

export default Home
