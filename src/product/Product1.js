import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
 import { Grid, Image, Header,Icon } from 'semantic-ui-react';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const cardStyle= {
  height:250
}

const imgStyle= {
  height: 200
}

class Product extends Component {
    constructor(props){
        super(props);
      }
    render(){
      var settings = {
        dots:true,
        prevArrow:<button><Icon size="large" name="angle arrow left"/></button>,
        nextArrow: <button><Icon size="large" name="angle arrow right"/></button>,
        infinite:true,
        slidesToShow:4,
        SlidesToSctroll:1,
        autoplay:false
      };
        
        return (
                 
                 
                  <div>
                      <Slider {...settings}>
                        { 
                            (()=>{
                            if(this.props.products.length > 0){
                                  return(
                                    
                            this.props.products.map(item=>{
                              
                                return(
                                
                                  <Grid.Column>
                                    <Card style={cardStyle}>
                                    <Link to ={"/singleproduct/"+item._id}> <CardImg style={imgStyle} src={item.image} top width="100%" alt="Card image cap" link="true"/></Link>
                                  <CardBody>
                                      <CardTitle>{item.productname}</CardTitle>
                                      <CardSubtitle></CardSubtitle>
                                      </CardBody>
                                      </Card>
                                      </Grid.Column> 
                                )
                            })
                                )
                          }
                          })()
                        }
                 </Slider>
                </div>
                
        )}
        
    }

 function matchStateToProps(state)
 {
    return{
      auth: state.auth,
      products: state.products
    }
 } 

export default  connect(matchStateToProps)(Product);