import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { RkButton, RkCard, RkText } from 'react-native-ui-kitten';
import { FlatList } from 'react-native-gesture-handler';

let URI = "http://10.110.60.167:4000";

export default class Chocolate_Details extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return{
          title: navigation.getParam('name'),
        };
      };

      constructor(props){
        super(props);
        this.state = {chocolates1: []};
      }

      async componentDidMount() {
        var response = await fetch(`http://10.110.60.167:4000/chocolates`);
        var chocolates1 = await response.json();
        //console.log(chocolates1);
        this.setState({chocolates1});
      }

    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');

        const choc = this.state.chocolates1.map(p => {
            if(p.id !== item.id){
                return p.name;
            }
        })
        console.log(choc);
        return (
            <View style = {styles.container1}>
                <ScrollView>
                    <RkCard style={{backgroundColor: "#fff"}}>
                        <Image 
                        style={{height:250, marginLeft:20, justifyContent: "center"}}
                        source={{uri:`${URI}/images/${item.image.slice(29)}`}}
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
                    <RkText>{choc}</RkText>
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