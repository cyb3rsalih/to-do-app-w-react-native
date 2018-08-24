import React ,{Component} from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView,AsyncStorage,StyleSheet,Platform,ActivityIndicator,FlatList} from "react-native";

import {AddButton} from './components';

export default class App extends Component{
  constructor(props){
    super(props);

    this.todo = this.todo.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateDatabase = this.updateDatabase.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  /* State note for carry the whole todo list as JSON array string
  state newNote for carry the new todo item */
  state = {
    data : [],
    newNote: '',
  };

  /* Add buttons OnPress
  This function firstly create unique key for next item
  fetch the current list as JSON object array
  take the new todo item and convert it to JSON object
  Add the new item to array and send it to Storage. 
  Updates the states.
  */
  addItem(){
    if(this.state.newNote){
      let date = Date.now().toString(); //unique key
      
      let newObj = { id: date, note: this.state.newNote}; 
      // New todo item

    this.setState({ data: [...this.state.data, newObj] }, () => this.updateDatabase() )
    // Add the new object to data array 
    }
  }

  // Add the whole list to Storage
  updateDatabase(){
    AsyncStorage.setItem("Notes",JSON.stringify(this.state.data)).then(this.setState({newNote:""}));
  }

  removeItem(index) {
    this.setState({
      data: this.state.data.filter((item, i) => item.id !== index)
    }, () => this.updateDatabase() );
  }

  /* This function works for each todo item */
  todo(item,id){ 
    return(
        
          <View  style={[styles.todoWrapper,styles.center]}>
            <View key={id} style={styles.todoLeft}>
              <Text style={[styles.todoText]}>{item}</Text>
            </View>
            <View style={styles.todoRight}>
              <TouchableOpacity  onPress={ () => this.removeItem(id)} style={styles.todoTouch}/>
            </View>
          
          </View>
        
      );
    };


  /* It will work first
  This function takes the current list from the Storage, If there is no data
  it creates a free one.
  */
  componentDidMount(){

  AsyncStorage.getItem("Notes").then( (value) => { value ? this.setState({data:JSON.parse(value)}) : this.setState({data:[]}); 
  });
    
  }
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topContainer}>
        <View style={styles.top}>
        
          <View style={styles.topLeft}>
            <TextInput 
            value={this.state.newNote} 
            onChangeText={(v) => this.setState({newNote:v}) }placeholder={'Things I will do'} 
            style={styles.textInput}
            autoFocus = {true}
            />
            
  
          </View>
          <View style={styles.topRight}>
            <AddButton onPress={this.addItem} text={"Add"}/>
          </View>    

        </View>
        </View>
        <View style={styles.bot}>
      
        <View style={styles.seperator}></View>
        
        <ScrollView>
          <FlatList
          inverted
          data={this.state.data}
          keyExtractor={(item, index) => item.id}
          renderItem={ ({item}) => this.todo(item.note,item.id)
          }
          />
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
    margin:15,
    marginBottom:5,
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