import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { title } from 'change-case';
import { RkCard, RkButton, RkText } from 'react-native-ui-kitten';
let URI = "http://10.110.60.167:4000";

export default class ChocolateBrands extends React.Component {
  static navigationOptions = {
    title: "Chocolate Brands",
  };
  constructor(props){
    super(props);
    this.state = {chocolates: [], isLoading: true};
  }

  async componentDidMount() {
    var response = await fetch(`http://10.110.60.167:4000/brands`);
    var chocolates = await response.json();
    // console.log(products);
    this.setState({chocolates, isLoading: false});
  }

  _keyExtractor(p, i){
        return `${p.id}`;
    }

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand_Details', {
      item,
      name: item.name,
      })}>
      <View style={{
        flex: 1,
        margin: 5,
        height: 200,
        flexDirection:"row",
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: "flex-start"
      }}>
        <Image 
          style={{width: 160, height: 160, marginLeft:20}}
          source={{uri:`${URI}/images/${item.logo.slice(29)}`}}
          resizeMode="contain"
        />
        <View style={{marginLeft: 50}}>
          <RkText style={{fontWeight: "bold"}} rkType='large'>{item.name}</RkText>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {chocolates, isLoading} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? 
            (<ActivityIndicator size="large" color="green" style={{alignItems: "center"}}/>)
        :
            (<FlatList 
            data={chocolates}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            />)
        }
        

        {/* <ScrollView>
          {isLoading && <ActivityIndicator size="large" color="green" style={{alignItems: "center"}}/>}
          {products.map(p => (
            <Text key = {p.id}>{p.title}</Text>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
    justifyContent: 'center',
  },
});
