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
 
  }

  state = {
    toDO : '',
    notes:'sdfs',
  };

  


  initialFunc(){
    //let user = 'John Doe';
    let obj = {"notes":[ ]}
    //AsyncStorage.setItem('user',user);
    AsyncStorage.setItem('user',JSON.stringify(obj));
   
  }

  displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      let newObj = '{"id":"3","note":"ass"}'; // New todo will be like this
      let parsedNewObj = JSON.parse(newObj);
      parsed.notes.unshift(parsedNewObj); // It will pass tp
      alert(parsed.notes[0].note);
      //alert(user);
    } catch (error) {
      alert("error"+error);
    }
  }


  dData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      let newObj = '{"id":"6","note":"'+this.state.toDO+'"}'; // New todo will be like this
      let parsedNewObj = JSON.parse(newObj);
      parsed.notes.unshift(parsedNewObj); // It will pass tp
      alert(parsed.notes[0].note);
      //alert(user);
    } catch (error) {
      alert("error"+error);
    }
  }




addItem(){  
      // Clear the text area
      this.setState({toDO:''});
}


clearItems(){  

AsyncStorage.clear();

}




  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.topOf}>
          <View style={styles.left}>
            <TextInput value={this.state.toDO} onChangeText={(v) => this.setState({toDO:v}) } placeholder={'Yapılacaklarım'} style={styles.input}>
           
            
            </TextInput>
          </View>
          <View style={styles.right}>
            <MyButton onPress={this.dData} text={'Ekle'} />
          </View>
        </View>
        <View style={{backgroundColor:'black',height:0.5,marginHorizontal:10}}></View>


        <View style={{height:100,marginHorizontal:10,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1}} onPress={this.initialFunc}><Text>Save Data</Text></TouchableOpacity>
        <TouchableOpacity style={{flex:1}} onPress={this.displayData}><Text>Display Data</Text></TouchableOpacity>
        <Text style={{flex:1}} >{this.state.toDO}</Text>


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

