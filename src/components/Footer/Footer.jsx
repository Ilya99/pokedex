import React, { Component } from 'react'
import { Container } from 'reactstrap'
import './Footer.styl'

export default class Footer extends Component {
  render () {
    return (
      <Container>
        <p className='copy'>© 2019 PokeDex</p>
      </Container>
    )
  }
}
