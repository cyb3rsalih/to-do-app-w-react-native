import React,{Component} from 'react';

import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class AddButton extends Component{
    render(){
        return(
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.props.onPress} style={[styles.center,styles.button]} >
                    <Text style={styles.buttonText}>{this.props.text}</Text>  
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        //backgroundColor:'pink',
        borderRadius:30,
        marginVertical:60,
        borderColor:'black',
        borderWidth:1,
        marginRight:5,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        flex:1,
    },
    buttonText:{
        fontSize:14,
        fontWeight:'700'
    },
  });
  