import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,AsyncStorage,TouchableOpacity} from 'react-native';

import {MyButton,ToDo} from './components';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


  //var items = '{"Notes":[{"ID":"1","note":"selam"},{"ID":"2","note":"aleykim"}]}';

export default class App extends Component{
  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);

  }

  state = {
    toDO : '',
    notes:'sdfs',
  };

  



  addItem(){  

      // Clear the text area
      this.setState({toDO:''});
   
}


clearItems(){  

AsyncStorage.clear();

}


getItem(){  
  async () => {
  const getValue = await AsyncStorage.getItem("notes");
  this.setState({notes: getValue});
}}

setItem(){  
  async () => {
    await AsyncStorage.setItem("notes", this.state.toDO);
  }};


  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.topOf}>
          <View style={styles.left}>
            <TextInput value={this.state.toDO} onChangeText={(v) => this.setState({toDO:v}) } placeholder={'Yapılacaklarım'} style={styles.input}>
           
            
            </TextInput>
          </View>
          <View style={styles.right}>
            <MyButton onPress={this.setItem} text={'Ekle'} />
          </View>
        </View>
        <View style={{backgroundColor:'black',height:0.5,marginHorizontal:10}}></View>


        <View style={{height:100,marginHorizontal:10,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1}} onPress={this.clearItems}><Text>Clear</Text></TouchableOpacity>
        <TouchableOpacity style={{flex:1}} onPress={this.getItem}><Text>GET</Text></TouchableOpacity>
        <TouchableOpacity style={{flex:1}} onPress={this.setItem}><Text>SET</Text></TouchableOpacity>
        <Text style={{flex:1}} >{this.state.notes}</Text>


        </View>

        <ScrollView>
          
            {
              //items.map(((item) => <ToDo item={item} /> ))
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
  input:{
    height:50,
    paddingLeft:10,
    fontSize:20,
    backgroundColor:'#f4f4f4',
    borderRadius:20,
    borderColor:'grey',
    borderWidth:1,
  
  },
});

