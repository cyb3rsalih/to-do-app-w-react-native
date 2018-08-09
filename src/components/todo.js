import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default class ToDo extends React.Component{

render(){
    return(
        <View key={this.props.item}  style={styles.item}> 
            <Text style={styles.itemText}>  {this.props.item}    </Text>
        </View>
    
    );
}
}
const styles = StyleSheet.create({
    item:{
      height:80,
      backgroundColor:'#f4f4f4',
      margin:10,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'black',
      borderWidth:0.8,
      marginHorizontal:20
    },
    itemText:{
      color:'black',
      fontSize:24
    }
  });
  
  