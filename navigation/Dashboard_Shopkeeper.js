import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class Dashboard extends Component {

  onClickListener = (viewId) => {
    this.props.navigation.navigate(viewId);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        

          <View style={styles.center}>
            <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() => this.onClickListener('View_Category')}><Text style={styles.baseText}>View Product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() => this.onClickListener('One')}><Text style={styles.baseText}>Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() => this.onClickListener('Order_Category')}><Text style={styles.baseText}>Order</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={() => this.onClickListener('View_Cart')}><Text style={styles.baseText}>View Cart</Text>
            </TouchableOpacity>
          </View>
          
        
      </ScrollView>
    );
  }
}

export default Dashboard;


const styles = StyleSheet.create({

  title: {

    fontSize: 20,
    textAlign: 'left',
    margin: '0%',

    marginBottom: '0%',
  },

  container: {

    flex: 1,
    backgroundColor: '#ecf0f1',
    height:'150%',
  },

  icon: {
    flexDirection: 'row',
    marginLeft: '3.5%',
    alignItems: 'center',
    backgroundColor: '#ff8913',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 145,
    width: 150,
    borderRadius: 25,
    margin: 5,
  },



  baseText: {
    fontSize: 20,
    marginLeft: 31,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },


  center1: {

    marginLeft: 10,
    marginTop: '15%',
    //justifyContent:'center',
    flexDirection: 'row',
  },
  center: {

    marginLeft: 10,
    marginTop: '3%',
    //justifyContent:'center',
    flexDirection: 'row',
  },

  inputIcon: {
    width: 100,
    height: 100,
    marginLeft: 15,
    justifyContent: 'center'
  },


  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 90,
    height: 90,
    borderRadius: 20,
  },


});
