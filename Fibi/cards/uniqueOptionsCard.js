import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,View,
        ImageBackground,Dimensions} from 'react-native';
import PropTypes from 'prop-types' ;
import { Card } from 'react-native-paper';


import { defaultStyles } from '../styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

var randomImg = [
    require('../images/Cinnamint.jpg'), require('../images/EasyMed.jpg'),    
    require('../images/EndlessRiver.jpg'), require('../images/GreenandBlue.jpg'), 
    require('../images/Limeade.jpg'),     
    require('../images/Mild.jpg'), require('../images/Mojito.jpg'),    
    require('../images/NeonLife.jpg'), require('../images/Ohhappiness.jpg'),
    require('../images/Quepal.jpg'), require('../images/SummerDog.jpg'),
    require('../images/TealLove.jpg')];

/*uniqueOptionsCard is used to show the special
 options on the main screen ranging from University
 Graduate school, GRE, SAT,stories, to gerneral questions */
export default class uniqueOptionsCard extends Component {

  //function used to open forum
  openForurm = () => {
    //handleClick is the function that was passed when
    //this class or component was called
    this.props.handleClick(this.props.option)  
  }


  render() {
    const {option,emoji} = this.props;
    return (
      <TouchableOpacity activeOpacity={0.3} 
          onPress={this.openForurm}>
          <ImageBackground
            source={ randomImg[Math.floor(Math.random()*randomImg.length)]}
            style={[styles.shadow,styles.imageContainer]}
            imageStyle={{ borderRadius: 10}}
          >
            <Text style={{fontSize:20}}>{emoji} </Text>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{option}</Text>
          </ImageBackground>
      </TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imageContainer: {
    //flex: 1,  
    borderRadius: 10,                        // take up all available space
    height: height*0.11,
    width: width * 0.4,
    alignItems:'center',
    justifyContent:'center'
},
});