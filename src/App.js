import React ,{Component} from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView,AsyncStorage,StyleSheet,Platform} from "react-native";


  export default class App extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.topContainer}>
          <View style={styles.top}>
          
            <View style={styles.topLeft}></View>
            <View style={styles.topRight}></View>    

          </View>

          </View>
          <View style={styles.bot}></View>
            
        
        </View>
      );
    }
    
  }





// TODO Styles Will go to another js file
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    marginTop:Platform.OS == 'ios' ? 21 : 0,
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  topContainer:{
    backgroundColor:'black',
    flex:1,
  },
  top:{
    flex:1,
    backgroundColor:'pink',
    flexDirection:'row'
  },
  topLeft:{
    flex:4,
    backgroundColor:'yellow',
  },
  topRight:{
    flex:1,
    backgroundColor:'green'
  },
  bot:{flex:3,
    backgroundColor:'red'
  },
});
