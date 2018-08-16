import React ,{Component} from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView,AsyncStorage,StyleSheet,Platform,ActivityIndicator} from "react-native";

import {AddButton} from './components';

 /* This is for show the items,
 I cannot show items unless take them to a global variable*/
  const items =[]; 

  export default class App extends Component{
    constructor(props){
      super(props);

      this.todo = this.todo.bind(this);
      this.lab = this.lab.bind(this);
    
    
    }

    /* State note for carry the whole todo list as JSON array string
    state newNote for carry the new todo item */
    state = {
      note : '',
      newNote: '',
    };

    /* Enter the Add button this will work
    // This function firstly create unique key for next item
    // fetch the current list as JSON object array
    // take the new to do item and convert it to JSON object
    Add the new item to array and send it to Storage. */
    lab(){
      let date = Date.now().toString(); //unique key of each item

      allNotes = JSON.parse(this.state.note); // Take notes - It comes to state from componentDidMount
      
      let newObj = '{"id":"'+date+'","note":"'+this.state.newNote+'"}'; // New todo item JSON object

      allNotes.Notes.unshift(JSON.parse(newObj)); // Add the new to array
      //alert(JSON.stringify(allNotes))
      AsyncStorage.setItem("Notes",JSON.stringify(allNotes));  // Send the new array to Storage
    }

    /* This function works for each todo item */
    todo(item){ 
      return(
         
           <View style={[styles.todoWrapper,styles.center]}>

             <View style={styles.todoLeft}>
               <Text style={[styles.todoText]}>{item}</Text>
             </View>
             <View style={styles.todoRight}>
               <TouchableOpacity style={styles.todoTouch}/>
             </View>
            
           </View>
         
       );
     };


    /* It will work after rendering
    This function takes the current list from the Storage, If there is no data
    it creates a free one.
    */
    componentDidMount(){
      AsyncStorage.getItem("Notes").then((value) => {
      value ? this.setState({note:value}) : this.setState({note:'{"Notes":[]}'}); 
    });
    }


    render(){
       /* 
       Render method works twice because of componentDidMount's setState. 
       The first render there is no data in the state.note. 
       I put the function to in if statement to works only if there is data
     */
      if(this.state.note){
        // It takes the data and prepare to show. 
        // I send the each todo item to a const items object. 
        let notlar = JSON.parse(this.state.note);
        notlar.Notes.map( (x) => items.push(x.note));
      }
    
      return(
        <View style={styles.container}>
          <View style={styles.topContainer}>
          <View style={styles.top}>
          
            <View style={styles.topLeft}>
              <TextInput value={this.state.newNote} onChangeText={(v) => this.setState({newNote:v}) } placeholder={'Yapılacaklarım'} style={styles.textInput}>
             
              </TextInput>
            </View>
            <View style={styles.topRight}>
              <AddButton onPress={this.lab} text={"Add"}/>
            </View>    

          </View>
          </View>
          <View style={styles.bot}>
        
          <View style={styles.seperator}></View>
          
          <ScrollView>
           
            { 
              // This shows item
              items.map( (item) => this.todo(item) )
            }
          </ScrollView>
          </View>
          
        
        </View>
      );
    }
    
  }

// TODO Styles Will go to another js file
// Stylesheets, I try to make it seperate but cannot.
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    marginTop:Platform.OS == 'ios' ? 21 : 0,
    
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  topContainer:{
    //backgroundColor:'black',
    flex:1,
  },
  top:{
    flex:1,
    //backgroundColor:'pink',
    flexDirection:'row'
  },
  topLeft:{
    flex:10,
    //backgroundColor:'yellow',
  },
  topRight:{
    flex:4,
    //backgroundColor:'green'
  },
  bot:{flex:3,
    //backgroundColor:'red'
    justifyContent:'center',
    //salignItems:'center',
  },
  textInput:{
    flex:1,
    backgroundColor:'white',
    fontSize:25,
    marginVertical:60,
    marginHorizontal:10,
    borderRadius:20,
    paddingLeft:10,
    borderColor:'black',
    borderWidth:1,
  },
  todoWrapper:{
    height:80,
    backgroundColor:'white',
    margin:20,
    marginBottom:-5,
    borderRadius:30,
    flexDirection:'row',
    borderColor:'black',
    borderWidth:1,
    overflow:'hidden' // This is awesome
  },
  todoText:{
    fontSize:20,
    fontWeight:'200',
    padding:10,
    flex:1,
  },
  todoLeft:{
    flex:5,
    //backgroundColor:'black',
  },
  todoRight:{
    flex:1,
    backgroundColor:'pink',
    
  },
  todoTouch:{
    flex:1,
    backgroundColor:'#45aaf2',
  },
  seperator:{
    height:1,
    width:500,
    backgroundColor:'black',
    overflow:'hidden'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 },
});
