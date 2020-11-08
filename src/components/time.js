import React, { Component } from 'react'


class DisplayTime extends Component {
    constructor(){
        super()
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
         
          })
        }, 1000)
      }

    render() {
        return (
            <div id = 'display-time'>
                {this.state.time}
            </div>
        )
    }
}

export default DisplayTime
