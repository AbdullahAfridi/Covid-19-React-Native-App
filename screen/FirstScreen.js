import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
const W = Dimensions.get("window").width;

const FirstScreen = (props) => {


    return (
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.m1}>
          <View>
            <Image
              style={styles.img1}
              source={require("../assets/virus.png")}
            />
          </View>
          <View style={styles.m2}>
            <Text style={styles.tx}> Sehat Medical Center </Text>
          </View>
          <View style={styles.m3}>
            <Text style={styles.tx1}>Our service is available for 24/7</Text>
          </View>
        </View>
        
        <View>
          <ActivityIndicator
            size="large"
            color="#157DEC"
            style={{ marginTop: -770, marginLeft: 40 }}
          />
        </View>
       
        <View style={styles.m3}>
          <Image
            style={{
              width: 400,
              height: 300,
              marginRight: 30,
              marginTop: -2110,
            }}
            source={require("../assets/virus.png")}
          />
        </View>
        <View>
        <View >
          <View  style={styles.sub2}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push("Cleaning");
              }}
            >
              <Text style={styles.tx3}> Covid19 General Awareness</Text>

              <AntDesign
                name="earth"
                size={36}
                color="#157DEC"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View  style={styles.sub3}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push("Test");
              }}
            >
              <Text style={styles.tx3}> Covid19 Self-Testing </Text>

              <AntDesign
                name="dashboard"
                size={36}
                color="#157DEC"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          
        </View>
      </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  img1: {
    width: "100%",
    height: 100,
    marginLeft: 300,
    marginTop: -280,
  },
  m1: {
    position: "absolute",
    width: 1000,
    height: 1000,
    alignSelf: "center",
    backgroundColor: "#157DEC",
    top: -(930 - W / 2),
    borderRadius: 1000,
    overflow: "hidden",
  },
  m2: {
    alignContent: "center",
    alignSelf: "center",

    marginTop: 600,
  },
  m3: {
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    color:"yellow"
  },

  img: {
    width: 400,
    height: 400,
    color: "red",
    marginTop: 300,
  },
  tx: {
    marginTop: 230,
    fontSize: 27,
    fontWeight: "bold",
    color: "yellow",
  
  },
  tx1: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "#157DEC",
  },
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
    width: "95%",
    height: "50%",
    marginTop: 4,
    marginRight: 50,
    marginLeft: 10,

    overflow: "hidden",
  },
  
  sub2: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#FFFF",
    width: "95%",
    height: "16%",
    marginTop:400,
    

    overflow: "hidden",
  },
  sub3: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#FFFF",
    width: "95%",
    height: "16%",
    marginTop:30,
    overflow: "hidden",
  },

  main1: {
    flex: 1,
    backgroundColor: "#97FF33",
  },
  touchm: {
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "80%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontWeight: "bold",
  },

  detials: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  tx3: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft:3,
    padding: 7,
    color: "black",
  },
  icon: {
    marginLeft: 320,
    marginTop: -35,
  },
});
export default FirstScreen;