import * as React from "react";
import { Text, View, Image, StyleSheet, Linking, Alert } from "react-native";
import { Header, Icon } from "react-native-elements";
import db from "../config";
import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

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

  OpenApp = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ` + url);
    }
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    if (this.state.finalPoints > 10 && this.state.finalPoints < 25) {
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
          <View
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: 10, fontSize: 30 }}>
              Your Test
            </Text>
            <Text>   </Text>
            <Text
              style={{
                marginleft: 2,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              RESULTS
            </Text>
          </View>

          <View
            style={{
              borderWidth: 2,
              borderColor: "green",
              margin: 20,
              height: 30,
              backgroundColor: "#f3ffe9",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 18, color: "green" }}>
              Low Range Depression
            </Text>
          </View>

          <Image style={styles.logo} source={require("../assets/Low.jpg")} />
          <View style={{ margin: 20 }}>
            <Text>
              You responses to our Depression Quiz revealed that you are
              currently in what we would call the Low Range of the Depression
              Spectrum. This means that your responses tell us that you may not
              be struggling with as many symptoms as those with clinical
              depression. Below we have a great podcast that will help you
              understand more about some of the symptoms and potential coping
              mechanisms for dealing with depression.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.OpenApp(
                "https://www.healthline.com/health/depression/how-to-fight-depression"
              );
            }}
          >
            <Text style={{ textAlign: "center", color: "blue" }}>
              Here You can read more...
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.finalPoints > 26 && this.state.finalPoints < 43) {
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
          <View
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: 10, fontSize: 30 }}>
              Your Test
            </Text>
            <Text>   </Text>
            <Text
              style={{
                marginleft: 2,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              RESULTS
            </Text>
          </View>

          <View
            style={{
              borderWidth: 2,
              borderColor: "#ffbb07",
              margin: 20,
              height: 30,
              backgroundColor: "#ffffe9",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 18, color: "#ffbb07" }}
            >
              Moderate Depression
            </Text>
          </View>

          <Image style={styles.logo} source={require("../assets/mid.jpg")} />
          <View style={{ margin: 20 }}>
            <Text>
              You responses to our Depression Quiz revealed that you are
              currently in what we would call the Moderate Range of the
              Depression Spectrum. This means that your responses tell us that
              you may not be struggling with as many symptoms as those with
              clinical depression. Below we have a great podcast that will help
              you understand more about some of the symptoms and potential
              coping mechanisms for dealing with depression.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.OpenApp(
                "https://www.healthline.com/health/depression/how-to-fight-depression"
              );
            }}
          >
            <Text style={{ textAlign: "center", color: "blue" }}>
              Here You can read more...
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.finalPoints > 42) {
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
          <View
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: 10, fontSize: 30 }}>
              Your Test
            </Text>
            <Text>   </Text>
            <Text
              style={{
                marginleft: 2,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              RESULTS
            </Text>
          </View>

          <View
            style={{
              borderWidth: 2,
              borderColor: "red",
              margin: 20,
              height: 30,
              backgroundColor: "#ffe5d0",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 18, color: "red" }}>
              Severe Depression
            </Text>
          </View>

          <Image style={styles.logo} source={require("../assets/High.jpg")} />
          <View style={{ margin: 20 }}>
            <Text>
              You responses to our Depression Quiz revealed that you are
              currently in what we would call the Severe Range of the Depression
              Spectrum. This means that your responses tell us that you may not
              be struggling with as many symptoms as those with clinical
              depression. Below we have a great podcast that will help you
              understand more about some of the symptoms and potential coping
              mechanisms for dealing with depression.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.OpenApp(
                "https://www.healthline.com/health/depression/how-to-fight-depression"
              );
            }}
          >
            <Text style={{ textAlign: "center", color: "blue" }}>
              Here You can read more...
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
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
          <Text>Score: {this.state.finalPoints}</Text>
          <Image style={styles.logo} source={require("../assets/Low.jpg")} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 200,
    margin: 20,
    alignSelf: "center",
  },
});
