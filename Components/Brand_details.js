import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { RkButton, RkCard, RkText } from 'react-native-ui-kitten';

let URI = "http://10.110.60.167:4000";

export default class Brand_Details extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return{
          title: navigation.getParam('name'),
        };
      };
    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        return (
            <View style = {styles.container1}>
                <ScrollView>
                    <RkCard style={{backgroundColor: "#fff"}}>
                        <Image 
                        style={{height:250, marginLeft:20, justifyContent: "center"}}
                        source={{uri:`${URI}/images/${item.logo.slice(29)}`}}
                        resizeMode="contain"
                        />
                        <View rkCardHeader>
                            <RkText style={{fontWeight: "bold"}} rkType='xlarge'>{item.name}</RkText>
                        </View>
                        <View rkCardContent>
                            <RkText>{item.desc}</RkText>
                        </View>
                        <View rkCardFooter>
                            <RkText>Footer</RkText>
                        </View>
                    </RkCard>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#bfbfbf',
    },
});