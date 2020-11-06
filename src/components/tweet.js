import {TwitterTweetEmbed} from 'react-twitter-embed'
import React from 'react'




function Tweet(props) {
    
    return (
        <div className = {props.className}>
            <TwitterTweetEmbed tweetId={props.TweetID}/> 
        </div>
    )

}

export default Tweet
