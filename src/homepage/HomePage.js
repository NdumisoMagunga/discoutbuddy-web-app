import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
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
import { Segment, Button, Divider,Grid, Image } from 'semantic-ui-react';
import Products from '../product/Product1';
import Stores from '../store/Store1';
import Carousel1 from '../products carousel/ProductsCarousel';
import LandingScroll from '../products carousel/Dash';
import SubMenu from './SubMenu';
import Category from './Category';


class Home extends Component{
     constructor(props) {
    super(props);
  
  }

  componentWillMount(){
   
  }
   
    render(){
  
     return (
      <Grid>
        
        <Grid.Row>
              <Grid.Column computer={3} >
              <Grid.Column computer={3} >
                <Container className="container">
                  <Category/>
                </Container>
                </Grid.Column>  
              </Grid.Column>
              <Grid.Column computer={10}>
              
                 
              <Grid.Row>
                <Grid.Column>
                  <LandingScroll />
                </Grid.Column>
            </Grid.Row>
             
                  <Divider hidden></Divider>
                <Segment color="red" className='container'>
                  <Divider horizontal>All Discounts around you</Divider>
                  <Products/>
                  <Divider hidden></Divider>
                  <Divider horizontal>Stores Around</Divider>
                  <Divider hidden></Divider>
                  <Stores/>
                  <Divider hidden></Divider>
              </Segment>
              </Grid.Column>
              <Grid.Column computer={3} />
        </Grid.Row>           
      </Grid>
    );
    }
}



export default connect(null,actions)(Home);