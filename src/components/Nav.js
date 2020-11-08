import React from 'react'
import { AppBar } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import DisplayTime from '../components/time'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloseIcon from '@material-ui/icons/Close'


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: '1vw',
		width: '20vw',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
		// '@media (max-width: 600px)': {
		// 	width: '12ch',
		// },
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},

	navElements: {
		minWidth: '0px',
		margin: '0 2vw',
		fontSize: '1rem',
		'&:hover': {
			transform: 'scale(1.25)',
			transition: 'all 0.25s ease',
		},
	},

	mobileNavElements: {
		margin: '0vh auto',
		padding: '2vh 0px',
		'&:hover': {
			transform: 'scale(1.25)',
			transition: 'all 0.25s ease',
		},
	},

	hidden: {
		display: 'none',
	},
}))

function Nav({getClickedState}) {
	const classes = useStyles()
	const screen_size_small = useMediaQuery('(max-width: 1159px)')
  	const [clicked, setClicked] = React.useState(false)

	React.useEffect(() => {
		getClickedState(setClicked)
	}, [])
 
  return (
		<div>
			<div className={classes.root}>
					<AppBar position='fixed' color='primary'>
						<Toolbar>
							{screen_size_small && (
								<IconButton
									edge='start'
									className={classes.menuButton}
									color='inherit'
									aria-label='open drawer'
									onClick={() =>
										setClicked(prevClicked => !prevClicked)
									}
								>
									{clicked ? <CloseIcon/> : <MenuIcon />}
								</IconButton>
							)}
							<img
								src='https://media.discordapp.net/attachments/757033381396480013/761738130771804180/X24_Resized_and_transparent.png'
								id='logo'
								alt='logo'
							/>

							<div id='title'>Karachi 24</div>

							<DisplayTime />

							{screen_size_small || (
								<Tabs value={false}>
									<NavTabs classes={classes.navElements} />
								</Tabs>
							)}

							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder='Search…'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
							  inputProps={{ 'aria-label': 'search' }}
							  style = {{fontSize: '1.5vw'}}
								/>
							</div>
						</Toolbar>
					</AppBar>
				</div>
			{screen_size_small && <MobileNav clicked={clicked} />}
		</div>
  )
}


function NavTabs({classes}) {
  return (
    <>
      <Tab
          label='Home'
          href='/home'
          className={classes}
        />

        <Tab
          label='About'
          href='/about'
          className={classes}
        />

        <Tab
          label='Breaking News'
          href='/breaking-news'
          className={classes}
        />

        <Tab
          label='Contact'
          href='/contact'
          className={classes}
        />
    </>
  )
}




function MobileNav({ clicked }) {
  const classes = useStyles()

  return (
		<div id={clicked ? 'mobile-nav' : 'mobile-nav mobile-nav-unclicked'}>
			<Tabs orientation='vertical' value={false}>
				<NavTabs classes={clicked ? classes.mobileNavElements: classes.hidden}/>
			</Tabs>
		</div>
  )
}

export default Nav



/* import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            isClicked_about: false,
            isClicked_breaking_news: false,
            isClicked_contact: false,
            isClicked_home: true
        }
    }

    render() {
    
        return (
            <div className = {this.props.containerName}>


               
                <ul className = {`${this.props.className}_elem_1`}> 
                    <Link to = '/home' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_home ? '0px solid white': 'none', fontSize: this.state.isClicked_home && this.props.header ?'5vh': ''}} onClick = {() => this.setState({
                        isClicked_about: false,
                        isClicked_breaking_news: false, 
                        isClicked_contact: false,
                        isClicked_home: true
                    }, window.scrollTo(0,0))}>
                        Home
                    </Link>
                </ul>
            
            
                <ul className = {`${this.props.className}_elem_2`} >
                    <Link to = '/breaking-news' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_breaking_news ? '0px solid white': 'none', fontSize: this.state.isClicked_breaking_news && this.props.header ?'5vh': ''}} onClick = {() => this.setState({
                        isClicked_breaking_news: true,
                        isClicked_about: false,
                        isClicked_contact: false,
                        isClicked_home: false
                    })}>
                        Breaking News
                    </Link>
                </ul>
            

            
                <ul className = {`${this.props.className}_elem_3`}>
                    <Link to = '/about' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_about ? '0px solid white': 'none', fontSize: this.state.isClicked_about && this.props.header ?'5vh': ''}} onClick = {() => this.setState({
                        isClicked_about: true,
                        isClicked_breaking_news: false, 
                        isClicked_contact: false,
                        isClicked_home: false
                    })}>
                        About
                    </Link>
                </ul>
            

        
                <ul className = {`${this.props.className}_elem_4`}>
                    <Link to = '/contact' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_contact ? '0px solid white': 'none', fontSize: this.state.isClicked_contact && this.props.header ? '5vh': ''}} onClick = {() => this.setState({
                        isClicked_about: false,
                        isClicked_breaking_news: false, 
                        isClicked_contact: true,
                        isClicked_home: false
                    })}>
                        Contact
                    </Link>
                </ul>


            
            </div>
        )
    }

}



 */
