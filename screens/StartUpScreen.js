import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import db from "../config";
import firebase from "firebase";

export default class StartUpScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      docId: ''
    };
  }
  getUserData = () => {
    var user = firebase.auth().currentUser;
    var email = user.email;

    db.collection("Users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            docId: doc.id,
          });
        });
      });
  };

  ResetScore = () => {
    db.collection("Users").doc(this.state.docId).update({
      FINALSCORE: 0,
      PerQuestion: 0
    });
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <View>
        <Header
          title="How are you feeling??"
          navigation={this.props.navigation}
        />
        <View>
          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              this.ResetScore()
              this.props.navigation.navigate("TestPage");
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Take A Test
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 5,
  },
});
