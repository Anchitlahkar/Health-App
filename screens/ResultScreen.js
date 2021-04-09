import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import CheckBoxScreen from "../components/CheckBox";
import db from "../config";
import firebase from "firebase";

export default class ResultScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      finalPoints: 0,
      docId: "",
    };
  }

  getUserData = async () => {
    var user = firebase.auth().currentUser;
    var email = user.email;

    await db
      .collection("Users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            docId: doc.id,
            PerQuestion: doc.data().PerQuestion,
            finalPoints: doc.data().FINALSCORE,
          });
        });
      });
    console.log("finalPointsFirebase: " + this.state.finalPoints);
    console.log("DocId: " + this.state.docId);
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
      return (
        <View>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="white"
                onPress={() => {
                  this.props.navigation.navigate("Drawer");
                }}
              />
            }
            centerComponent={{
              text: "Test",
              style: { color: "yellow", fontSize: 20, fontWeight: "bold" },
            }}
            backgroundColor="black"
          />
            <Text>{this.state.finalPoints}</Text>
        </View>
      );
    }
  }
