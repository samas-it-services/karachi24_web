import React from 'react'


class Form extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
          <div className="contact-form">
            <h1 id = 'form-title'> Contact us!</h1>

            <form className="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                <label htmlFor="name" className = 'form-label'>Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1" className = 'form-label'>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                
                </div>
                <div className="form-group">
                <label htmlFor="message" className = 'form-label'>Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn-primary">Submit</button>
            </form>
            
          </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
      
    }
  
    handleSubmit(event) {
      this.props.history.push('/contact-submit')
    
    }
  }
  
export default Form;