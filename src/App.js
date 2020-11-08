import React from 'react';
import './styles/App.css';
import Home from './pages/home.js'
import About from './pages/about.js'
import BreakingNews from './pages/breaking_news'
import Contact from './pages/contact'
import ContactSubmit from './pages/contact_submit'
import Nav from './components/Nav'
import Footer from './components/footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  //This is to get the setClicked function back from nav so we can pass it to other components
  let setClicked = () => console.log()
  function getData(data) {
    setClicked = data
  }

  return (
		<Router>
			<div className='App'>
				<Nav getClickedState={getData} />

				<Switch>
					<Route
						path='/home'
						component={() => <Home onClick={() => setClicked()} />}
					/>
					<Route
						path='/about'
						component={() => <About onClick={() => setClicked()} />}
					/>
					<Route
						path='/breaking-news'
						component={() => (
							<BreakingNews onClick={() => setClicked()} />
						)}
					/>
					<Route
						path='/contact'
						exact
						component={() => (
							<Contact onClick={() => setClicked()} />
						)}
					/>
					<Route
						path='/contact-submit'
						component={() => <ContactSubmit onClick={() => setClicked()} />}
					/>
					<Route
						path='/'
						component={() => <Home onClick={() => setClicked()} />}
					/>
				</Switch>

				<Footer />
			</div>
		</Router>
  )
}

export default App
