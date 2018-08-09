import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,AsyncStorage} from 'react-native';

import {MyButton,ToDo} from './components'


  //var items = '{"Notes":[{"ID":"1","note":"selam"},{"ID":"2","note":"aleykim"}]}';
  var Jnotes;
  var notes = AsyncStorage.getItem("notes");
  if (notes.length > 12){
    Jnotes= JSON.parse(notes);
  }else{
    AsyncStorage.setItem("notes",'{"Notes":[{"ID":"123","note":"selamunaleykim"}]}'); // This line will work in the first time
    Jnotes = JSON.parse(notes);
    // {'Notes':[{'ID':'1','note':'aleykim'}]}
  }

export default class App extends Component{
  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDO : '',
  }

  addItem(){
    if(this.state.toDO){
      var date = Date.now().toString();

      // When app starts we have taken Notes and convert it Jnotes
      // Now we will take our new todo item and add to our Jnotes after J it.
      
          myObj = this.state.toDO;
          JmyObj = JSON.parse(myObj);
          Jnotes['Notes'].unshift({"ID":{date},"note": this.state.toDO});
          sendNote = JSON.stringify(Jnotes);
          AsyncStorage.setItem("notes",sendNote);
          // Unshift means we add new item top of the list

      // Clear the text area
      this.setState({toDO:''})
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.topOf}>
          <View style={styles.left}>
            <TextInput value={this.state.toDO} onChangeText={(v) => this.setState({toDO:v}) } placeholder={'Yapılacaklarım'} style={styles.input}>
            <Text>
             SELAMIN ALEYKİM
            </Text>
            
            </TextInput>
          </View>
          <View style={styles.right}>
            <MyButton onPress={this.addItem} text={'Ekle'} />
          </View>
        </View>
        <View style={{backgroundColor:'black',height:0.5,marginHorizontal:10}}></View>
     
        
        <ScrollView>
          
            {
              //items.map(((item) => <ToDo item={item} /> ))
            }
         
            
             <ToDo item={Jnotes.Notes[0].note} />
          

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

