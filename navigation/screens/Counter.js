import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";


export default class Counter extends React.Component {
    state ={
        value : 0
    }

    incrementValue = () => {
        this.setState({
            value : this.state.value + 1
        })
    }

    decrementValue = () => {
        if (this.state.value > 0){
            this.setState({
                value : this.state.value -1
            })}
    }
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Button onPress={this.decrementValue} title={"-"} />
                <Text>  </Text>
                <Text style={{textAlignVertical:'center'}}>{this.state.value}</Text>
                <Text>  </Text>
                <StatusBar/>
                <Button onPress={this.incrementValue} title={"+"} />
            </View>
        );
    }
}
