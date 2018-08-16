import React ,{Component} from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView,AsyncStorage,StyleSheet,Platform} from "react-native";

import {AddButton} from './components';


  export default class App extends Component{
    constructor(props){
      super(props);

      this.todo = this.todo.bind(this);
    }

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
    

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.topContainer}>
          <View style={styles.top}>
          
            <View style={styles.topLeft}>
              <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.topRight}>
              <AddButton text={"Add"}/>
            </View>    

          </View>

          </View>
          <View style={styles.bot}>

          <View style={styles.seperator}></View>
          
          <ScrollView>
          {this.todo('doktora gidip heyet raporu')}

          {this.todo('aleyküm')}
          {this.todo('aleyküm')}

          {this.todo('aleykümsadaleysdsd-sds--')}



          </ScrollView>
          
          </View>
            
        
        </View>
      );
    }
    
  }

// TODO Styles Will go to another js file
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
    width:1000,
    backgroundColor:'black',
    overflow:'hidden'
  },
});
