import React, { Component } from 'react'

export class breaking_news extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <iframe title = 'none' src="https://public.domo.com/cards/bWxVg" id = 'breaking-news-chart'></iframe>
                
            </div>
        )
    }
}

export default breaking_news
