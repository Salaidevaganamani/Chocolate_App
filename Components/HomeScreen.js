import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { RkButton, RkCard, RkText } from 'react-native-ui-kitten';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Chocolate App!",
  };

      render() {
        return (
          <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChocolateList')}>
            <RkCard rkType='shadowed'>
              <View>
                <Image rkCardImg source={require('../Assets/Images/chocolates.jpg')} />
                <View rkCardImgOverlay style={{alignItems:"flex-end", flexDirection: "row", justifyContent: 'space-between'}}>
                  <View style={{ marginBottom: 10, marginLeft: 10 }}>
                    <RkText rkType='xxlarge' style={{ color: 'white' }}>Chocolates</RkText>
                    <RkText style={{ color: 'white' }}>From Store</RkText>
                  </View>
                  {/* <View style={{ marginBottom: 10, marginRight: 10 }}>
                    <RkButton onPress={() => this.props.navigation.navigate('List')}>More</RkButton>
                  </View> */}
                </View>
              </View>
            </RkCard>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChocolateBrands')}>
            <RkCard rkType='shadowed'>
              <View>
                <Image rkCardImg source={require('../Assets/Images/chocolate_Brands.jpg')} />
                <View rkCardImgOverlay style={{alignItems:"flex-end", flexDirection: "row", justifyContent: 'space-between'}}>
                  <View style={{ marginBottom: 10, marginLeft: 10 }}>
                    <RkText rkType='xxlarge' style={{ color: 'white' }}>Chocolate Brands</RkText>
                    <RkText style={{ color: 'white' }}>From Store</RkText>
                  </View>
                  {/* <View style={{ marginBottom: 10, marginRight: 10 }}>
                  <RkButton onPress={() => this.props.navigation.navigate('Brand')}>More</RkButton>
                  </View> */}
                </View>
              </View>
            </RkCard>
          </TouchableOpacity>
            {/* <RkButton onPress={() => this.props.navigation.navigate('List')}>Chocolates</RkButton>
            <RkButton onPress={() => this.props.navigation.navigate('Brand')}>Chocolates Brands</RkButton> */}
            <RkButton style={{ marginTop: 75, marginLeft: 150 }} onPress = {this._signOutAsync}>Sign Out!</RkButton>
          </View>
        );
      }

      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
