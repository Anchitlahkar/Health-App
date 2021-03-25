import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  CheckBox,
} from 'react-native';
import Header from '../components/Header';
import { RadioButton } from 'react-native-paper';

export default class CheckBoxScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected1: '',
      isSelected2: false,
      isSelected3: false,
      isSelected4: false,
      totalPoints: 0,
    };
  }
  render() {
    return (
      <View>
        <Header title="CheckBox" />
        <View>
          <View style={{ flexWrap: 'wrap', borderWidth: 2 }}>
            <RadioButton
              value="first"
              status={
                this.state.isSelected1 === 'first' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState({ isSelected1: 'first' })}
              style={{width: 20}}
            />
            <Text>SELECT 1</Text>
          </View>

          <RadioButton
            value="second"
            status={
              this.state.isSelected1 === 'second' ? 'checked' : 'unchecked'
            }
            onPress={() => this.setState({ isSelected1: 'second' })}
          />
          <Text>SELECT </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
