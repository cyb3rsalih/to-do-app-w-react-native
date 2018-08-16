import React from 'react';

import {View,Text,TouchableOpacity} from 'react-native';


export default class MyButton extends React.Component{
    render(){

        return(
            <View style={{backgroundColor:'white',flex:1,borderRadius:10,borderColor:'grey',borderWidth:1,marginTop:20,marginBottom:20}}>
                <TouchableOpacity onPress={this.props.onPress} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'900'}}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );

    }
}