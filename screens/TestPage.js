import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import CheckBoxScreen from "../components/CheckBox";
import db from "../config";
import firebase from "firebase";

export default class TestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNo: 1,
      finalPoints: 0,
      PerQuestion: 0,
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
          });
        });
      });
    console.log("PerQuestionFirebase: " + this.state.PerQuestion);
    console.log("finalPointsFirebase: " + this.state.finalPoints);
    console.log("DocId: " + this.state.docId);
  };

  FinalUpdate = async () => {
    var user = firebase.auth().currentUser;
    var email = user.email;
    await db
      .collection("Users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            finalPoints: doc.data().FINALSCORE,
          });
        });
      });

    var final = this.state.finalPoints;
    var perQues = this.state.PerQuestion;
    var finalScore = final + perQues;

    console.log("final: " + final);
    console.log("PerQuestion: " + perQues);
    console.log("finalScore: " + finalScore);
    console.log("  ");

    await db.collection("Users").doc(this.state.docId).update({
      FINALSCORE: finalScore,
    });
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    // Question 1
    if (this.state.questionNo === 1) {
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
          <View>
            <CheckBoxScreen
              question="When i'm around people, I still struggle feeling alone"
              answere1="Not Really, no"
              answere2="Sometimes"
              answere3="All The Time"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
              // this.props.navigation.navigate("ResultScreen");
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //question 2
    else if (this.state.questionNo === 2) {
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
          <View>
            <CheckBoxScreen
              question="I feel alone..."
              answere1="Not Really, no"
              answere3="All The Time"
              answere2="Sometimes"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 3
    else if (this.state.questionNo === 3) {
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
          <View>
            <CheckBoxScreen
              question="I have put my friendships on the back burner."
              answere1="No, not really"
              answere2="A bit"
              answere3="Yes, clearly"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //question 4
    else if (this.state.questionNo === 4) {
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
          <View>
            <CheckBoxScreen
              question="My family just doesn't have the same priority in my life as they use to."
              answere1="I disagree. My family has remained important"
              answere2="A bit"
              answere3="This is Truth"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 5
    else if (this.state.questionNo === 5) {
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
          <View>
            <CheckBoxScreen
              question="People exhaust me"
              answere1="Not really, no"
              answere2="Sometimes"
              answere3="Absolutely agee"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 6
    else if (this.state.questionNo === 6) {
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
          <View>
            <CheckBoxScreen
              question="My appetite has changed and..."
              answere1="Not really"
              answere2="I've lost some weight"
              answere3="I've gained/lost weight"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 7
    else if (this.state.questionNo === 7) {
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
          <View>
            <CheckBoxScreen
              question="I have given up doing things that I use to be excited about (Sports, Hobbies etc.)"
              answere1="Not Really, no"
              answere2="A little. Some things."
              answere3="Yes, I would say so."
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 8
    else if (this.state.questionNo === 8) {
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
          <View>
            <CheckBoxScreen
              question="My tastes in audio/visual has turned 'dark.'"
              answere1="Not Really, no"
              answere2="Maybe a bit"
              answere3="I would say it has turned darker, yes."
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 9
    else if (this.state.questionNo === 9) {
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
          <View>
            <CheckBoxScreen
              question="I want to runaway, but have no idea where I would go...just want to run."
              answere1="Not Really, no"
              answere2="Sometimes"
              answere3="I do feel this is true"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 10
    else if (this.state.questionNo === 10) {
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
          <View>
            <CheckBoxScreen
              question="I feel lost and confused and unable to think through simple tasks"
              answere1="Not Really, no"
              answere2="Sometimes"
              answere3="I do feel this is true"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 11
    else if (this.state.questionNo === 11) {
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
          <View>
            <CheckBoxScreen
              question="I'm not invested into personal hygiene anymore"
              answere1="No, I'm all clean here"
              answere2="Sometimes"
              answere3="Sad but yes, it's true"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 12
    else if (this.state.questionNo === 12) {
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
          <View>
            <CheckBoxScreen
              question="I feel like crying for no reason"
              answere1="Not Really, no"
              answere2="Sometimes"
              answere3="Yes, this is true"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 13
    else if (this.state.questionNo === 13) {
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
          <View>
            <CheckBoxScreen
              question="My chest feels heavy and it's hard to breath."
              answere1="Not Really, no"
              answere2="Sometimes"
              answere3="Yes"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 14
    else if (this.state.questionNo === 14) {
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
          <View>
            <CheckBoxScreen
              question="I feel defeated"
              answere1="Not Really, no"
              answere2="A bit"
              answere3="I surely do."
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 15
    else if (this.state.questionNo === 15) {
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
          <View>
            <CheckBoxScreen
              question="I'm dealing with my possible depression with..."
              answere1="Seeking a spiritual power"
              answere2="Self help books"
              answere3="Nothing. I'm lost"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    //Question 16
    else if (this.state.questionNo === 16) {
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
          <View>
            <CheckBoxScreen
              question="Do you believe in a God that cares about your mental health?"
              answere1="Yes"
              answere2="Sometimes"
              answere3="No"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { marginLeft: "25%" }]}
            onPress={() => {
              const questionNo = this.state.questionNo;
              this.setState({
                questionNo: questionNo + 1,
              });
              this.getUserData();
              this.FinalUpdate();
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", marginTop: 5 }}>
              Submit
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
          <View>
            <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold" }}>
              Please wait for your answere...
            </Text>

            <TouchableOpacity
              style={[styles.button, { marginLeft: "25%" }]}
              onPress={() => {
                this.props.navigation.navigate("ResultScreen");
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", marginTop: 5 }}
              >
                View Result
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
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
    marginTop: 5,
    borderWidth: 5,
  },
});
