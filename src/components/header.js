import React from "react"
import "./header.css"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
// import ListItem from "@material-ui/core/ListItem"
import { Divider } from "@material-ui/core"

const StyledButton = withStyles({
  root: {
    overflow: "visible",
    position: "absolute",
    right: "25px",
    color: "white",
    padding: "0px",
    fontSize: "12px",
    minWidth: "0px",
    boxSizing: "border-box",
    minHeight: "0px",
    transition:
      "background-color 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, box - shadow 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic - bezier(0.4, 0, 0.2, 1) 0ms",
    fontWeight: 800,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans - serif',
    borderRadius: "4px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button)

const StyledList = withStyles({
  root: {
    overflow: "visible",
    fontSize: "12px",
    padding: "0px",
  },
})(List)

// const StyledListItem = withStyles({
//   root: {
//     textTransform: 'capitalize',
//     padding: '10px',
//   },
//   button: {
//     '&:hover': {},
//   },
// })(ListItem)

const StyledSwipeableDrawer = withStyles({
  paper: {
    background: "#2B2B2D",
    width: "180px",
  },
})(SwipeableDrawer)

const StyledDivider = withStyles({
  middle: {
    margin: "16px",
    backgroundColor: " rgb(0, 183, 255)",
    height: "2",
  },
})(Divider)

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      top: false,
      left: false,
      bottom: false,
      right: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    const sideList = (
      <div
        style={{ background: "#2B2B2D", color: "white" }}
        className="classes.list"
      >
        <h1 style={{ fontSize: "14px", marginLeft: "16px", marginTop: "20px" }}>
          Heroes
        </h1>
        <StyledDivider variant="middle" />
        <StyledList />
      </div>
    )

    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("./../images/Sun.png")} alt="LOGOVGWIKI" />
          </Link>
          <StyledButton onClick={this.toggleDrawer("right", true)} />
        </div>

        <StyledSwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          onOpen={this.toggleDrawer("right", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </StyledSwipeableDrawer>
      </div>
    )
  }
}

export default Header
