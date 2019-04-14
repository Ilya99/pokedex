import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Content from 'components/Content/Content'

export default class App extends Component {
  render () {
    return (
      <Container fluid>
        <Header />
        <Content />
        <Footer />
      </Container>
    )
  }
}