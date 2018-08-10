import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,AsyncStorage} from 'react-native';

import {MyButton,ToDo} from './components'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  //var items = '{"Notes":[{"ID":"1","note":"selam"},{"ID":"2","note":"aleykim"}]}';

export default class App extends Component{
  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
    this.iniitalFunc = this.iniitalFunc.bind(this);
    this.seeItems = this.seeItems.bind(this);

  }

  state = {
    toDO : '',
    notes:'',
  }

  iniitalFunc(){
    var initialValue = '{"Notes":[{"ID":"1","note":"selam"},{"ID":"2","note":"aleykim"}]}';
    AsyncStorage.setItem("notes",initialValue);
  }

  seeItems(){
    var notes = AsyncStorage.getItem("notes");

    AsyncStorage.getItem("notes").then((value) => {
      this.setState({"notes": value});
  });

    //Jnotes = JSON.parse(notes);
    //Xnotes = notes.toString();
    //alert(Jnotes.Notes[0].ID);
    //alert(Xnotes);
  }


  addItem(){  
  
      var date = Date.now().toString();

      // When app starts we have taken Notes and convert it Jnotes
      // Now we will take our new todo item and add to our Jnotes after J it.
      //var notes = AsyncStorage.getItem("notes");
      AsyncStorage.getItem("notes").then((value) => {
        this.setState({"savingNote": value});
    });
     var saving;
    sleep(500).then(() => {
      saving = (this.state.savingNote);
    
    });
    this.setState.aq = saving;
    //asvar Jnotes = JSON.parse(saving);
    
      
      //myObj = this.state.toDO;
  
      //Jnotes['Notes'].unshift({"ID":date,"note": myObj});
      //sendNote = JSON.stringify(Jnotes);
      //AsyncStorage.setItem("notes",sendNote);
      // Unshift means we add new item top of the list

      // Clear the text area
      this.setState({toDO:''});
   
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
            <MyButton onPress={this.addItem} text={'Ekle'} />
          </View>
        </View>
        <View style={{backgroundColor:'black',height:0.5,marginHorizontal:10}}></View>
     <View style={{height:300}}>

           <MyButton onPress={this.iniitalFunc} text={'INITIAL'} />
            <MyButton onPress={this.seeItems} text={'SEE'} />
            <Text style={{flex:1}}>
              {this.state.notes}
            </Text>
            <Text style={{flex:1}}>
              {this.state.aq}
            </Text>


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

