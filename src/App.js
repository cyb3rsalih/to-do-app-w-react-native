/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,AsyncStorage} from 'react-native';

import {MyButton} from './components'

const items = [];

export default class App extends Component {
  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDO : '',
  }

  addItem(){
   // console.warn(this.state.toDO)

    items.push(this.state.toDO)


    this.setState({toDO:''})
  }



  renderItem(item){
    return(
    <View key={Date.now()} style={styles.item}> 
      <Text style={styles.itemText}>
        {item}
      </Text>
    </View>
    );
  }


  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.topOf}>
          <View style={styles.left}>
            <TextInput value={this.state.toDO} onChangeText={(v) => this.setState({toDO:v}) } placeholder={'Yapılacaklarım'} style={styles.input}></TextInput>
          </View>
          <View style={styles.right}>
            <MyButton onPress={this.addItem} text={'Ekle'} />
          </View>
        </View>
        <View style={{backgroundColor:'black',height:0.5,marginHorizontal:10}}></View>
        <ScrollView>
          {
            items.map(((item) => this.renderItem(item)))
          }

        </ScrollView>

        
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  topOf:{
    //backgroundColor:'red',
    height:100,
    marginTop: Platform.OS == 'ios' ? 21 : 0,
    flexDirection:'row',
    padding:8
  },
  left:{
    //backgroundColor:'yellow',
    flex:4,
    marginRight:8,
    justifyContent:'center'
  },
  right:{
  //backgroundColor:'pink',
  flex:1
},
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
  },
  input:{
    height:50,
    paddingLeft:10,
    fontSize:20,
    backgroundColor:'#f4f4f4',
    borderRadius:20,
    borderColor:'grey',
    borderWidth:1,
  
  }
});

