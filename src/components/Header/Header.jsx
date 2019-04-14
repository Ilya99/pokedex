import React, { Component } from 'react'
import { Container } from 'reactstrap'
import logo from 'global/images/logo.png'
import './header.styl'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div>
        <Container>
          <img className='logo' src={logo} />
        </Container>
      </div>
    )
  }
}
