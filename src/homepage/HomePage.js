import React, {Component} from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  Container
} from 'reactstrap';
import { Segment, Button, Divider,Grid, Image } from 'semantic-ui-react'
import Products from '../product/Product1'
import Stores from '../store/Store1'
import Carousel1 from '../products/Products'
import LandingScroll from '../products/Dash';
import SubMenu from './SubMenu'


class Home extends Component{
     constructor(props) {
    super(props);
  
  }
   
    render(){
  
     return (
      <Grid>
        <Grid.Row>
            <Grid.Column>
              <LandingScroll />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column computer={3} />
              <Grid.Column computer={10}>
              
                  <Carousel1/>  
                  <Divider hidden></Divider>
                <Segment color="red" className='container'>
                  <Divider horizontal>All Discounts around you</Divider>
                  <Products/>
                  <Divider horizontal>Stores Around</Divider>
                  <Stores/>
              </Segment>
              </Grid.Column>
              <Grid.Column computer={3} />
        </Grid.Row>           
      </Grid>
    );
    }
}

export default Home;