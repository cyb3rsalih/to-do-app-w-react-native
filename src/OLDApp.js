
import {MyButton} from './components';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let x = '';



  //var items = '{"Notes":[{"ID":"1","note":"selam"},{"ID":"2","note":"aleykim"}]}';


let UID123_object = {
  name: 'Chris',
  age: 30,
  traits: {hair: 'brown', eyes: 'brown'},
};
// You only need to define what will be added or updated
let UID123_delta = {
  age: 31,
  traits: {eyes: 'blue', shoe_size: 10},
};


export default class App extends Component{
  constructor(props){
    super(props);

   // this.addItem = this.addItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.SendData = this.SendData.bind(this);
    this.lab = this.lab.bind(this);
    this.componentDidMount = this.componentDidMount(this);

  }
  

  state = {
    toDO : '',
  };

  
componentWillMount(){
  AsyncStorage.getItem('user', (err, result) => {
    this.setState({toDO:result});
  });
 
  }

  lab(){
   alert()
  }
  
    

  displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      alert(parsed.notes[0].note+" "+parsed.notes[0].id);
      //alert(user);
    } catch (error) {
      alert("error"+error);
    }
  }

  SendData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      //alert(this.state.xnote);
      this.setState({xnote:user});

      //alert(parsed.notes[0].note+" "+parsed.notes[0].id);
      //alert(user);
    } catch (error) {
      alert("error"+error);
    }
  }



  dData = async () => {
    try {
      let date = Date.now().toString(); // This will be our unique key

      
      //let user = await AsyncStorage.getItem('user');
      //let parsed = JSON.parse(user);

      let newObj = '{"id":"'+date+'","note":"'+this.state.toDO+'"}'; // New todo will be like this
      let parsedNewObj = JSON.parse(newObj);
      //parsed.notes.unshift(parsedNewObj); // It will pass tp
      //alert(parsed.notes[0].note); // For debug
      AsyncStorage.setItem('user',JSON.stringify(parsedNewObj));
      //alert(user);
    } catch (error) {
      alert("error"+error);
    }
  }





clearItems(){  

AsyncStorage.clear();

}


  renderItem(item){
  
    return(
     
        <View key={item}  style={styles.item}> 
            <Text style={styles.itemText}>  {item}    </Text>
        </View>
    
    );

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

        <ScrollView>
        
            {       
            alert(JSON.stringify(this.state.toDO))    
      //JSON.parse(x).notes.map( (m) => this.renderItem(m))
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
  
  },item:{
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
});
