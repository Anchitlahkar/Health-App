import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button
} from 'react-native';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import db from '../config';
import Header from '../components/Header';
import CheckBox from './CheckBox'


export default class StartUpScreen extends React.Component {
  render() {
    return (
      <View>
        <Header title="How are you feeling??" navigation={this.props.navigation}/>
        <View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CheckBox')}}>
        <Text>Take A Test</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
});
