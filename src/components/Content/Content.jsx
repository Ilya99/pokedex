import React, { Component } from 'react'
import { Card, CardText, CardBody, CardTitle, CardImg, Row, Container } from 'reactstrap'
import './Content.styl'

export default class Content extends Component {
  render () {
    return (
      <Container>
        <Row className='comp justify-content-center'>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png' />
            <CardBody>
              <CardTitle>Bulbasaur №001</CardTitle>
              <CardText>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png' />
            <CardBody>
              <CardTitle>Ivysaur №002</CardTitle>
              <CardText>There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.</CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png' />
            <CardBody>
              <CardTitle>Venusaur №003</CardTitle>
              <CardText>There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.</CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png' />
            <CardBody>
              <CardTitle>Charmander №004</CardTitle>
              <CardText>The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.</CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png' />
            <CardBody>
              <CardTitle>Charmeleon №005</CardTitle>
              <CardText>Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color. </CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png' />
            <CardBody>
              <CardTitle>Charizard №006</CardTitle>
              <CardText>Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.</CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png' />
            <CardBody>
              <CardTitle>Squirtle №007</CardTitle>
              <CardText>Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.</CardText>
            </CardBody>
          </Card>
          <Card className='marka'>
            <CardImg src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png' />
            <CardBody>
              <CardTitle>Wartortle №008</CardTitle>
              <CardText>Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.</CardText>
            </CardBody>
          </Card>
        </Row>
      </Container>
    )
  }
}