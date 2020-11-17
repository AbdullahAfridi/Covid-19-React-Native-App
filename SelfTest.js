import React, { useState } from "react";
import { Actions } from "react-native-router-flux";
import {
  CheckBox,
  Text,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const SelfTest = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);

  if (
    isSelected &&
    isSelected1 &&
    isSelected2 &&
    isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    !isSelected7 &&
    !isSelected8
  ) {
    Alert.alert("Use a separate room for yourself.");
  } else if (
    isSelected &&
    !isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    !isSelected7 &&
    !isSelected8
  ) {
    Alert.alert("Do not leave home for any reason.");
  } else if (
    !isSelected &&
    isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    !isSelected7 &&
    !isSelected8
  ) {
    Alert.alert("Cover your mouth and nose.");
  } else if (
    isSelected &&
    isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    !isSelected7 &&
    !isSelected8
  ) {
    Alert.alert("Always keep a distance of at least one meter.");
  } else if (
    !isSelected &&
    !isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    isSelected7 &&
    isSelected8
  ) {
    Alert.alert("Take medical advices from Doctors.");
  } else if (
    !isSelected &&
    !isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    !isSelected7 &&
    isSelected8
  ) {
    Alert.alert("Call to nearest Government Hospital.");
  } else if (
    !isSelected &&
    !isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    isSelected7 &&
    !isSelected8
  ) {
    Alert.alert("Advised to seek medical advice.");
  } else if (
    !isSelected &&
    !isSelected1 &&
    !isSelected2 &&
    !isSelected3 &&
    !isSelected4 &&
    !isSelected5 &&
    !isSelected6 &&
    !isSelected7 &&
    !isSelected8
  ) {
    Alert.alert("Sorry Entered Value Dose not Exist.");
  } else if (
    isSelected &&
    isSelected1 &&
    isSelected2 &&
    isSelected3 &&
    isSelected4 &&
    isSelected5 &&
    isSelected6 &&
    isSelected7 &&
    isSelected8
  ) {
    Alert.alert("You have high risk on corona virus.");
  } else {
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label1}>Check up your self...</Text>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>
            High Fever(>102°F) {isSelected ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected1}
            onValueChange={setSelection1}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Dry cough {isSelected1 ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Sore Throat {isSelected2 ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Difficulty in breathing {isSelected3 ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected4}
            onValueChange={setSelection4}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Loss or dimished sense of smell {isSelected4 ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected5}
            onValueChange={setSelection5}
            style={styles.checkbox}
          />

          <Text style={styles.label}>Weakness {isSelected5 ? "😨" : "🙂"}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected6}
            onValueChange={setSelection6}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Presistant Pain and Pressure in Chest {isSelected6 ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected7}
            onValueChange={setSelection7}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Having close-contact with a confirmed or suspected COVID-19 patient
            during the last 14 days prior to onset of symptoms{" "}
            {isSelected7 ? "😨" : "🙂"}
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected8}
            onValueChange={setSelection8}
            style={styles.checkbox}
          />

          <Text style={styles.label}>
            Severe acute pneumonia regardless of travel or contact history as
            decided by the treating Consultant {isSelected8 ? "😨" : "🙂"}
          </Text>
        </View>
      </View>
      <View style={styles.sub}>
        <Text style={styles.note}>
          {" "}
          "😨" :- Having these symptoms doesn’t mean you have COVID-19. However,
          since these are common symptoms of the COVID-19 infection, for the
          sake of those close to you, please follow the health measures.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 10,
    textShadowRadius: 15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 5,
  },
  checkbox: {
    alignSelf: "flex-start",
    height: 30,
  },
  label: {
    marginBottom: 10,
    fontSize: 17,
    flexDirection: "column",
    flexShrink: 1,
  },
  note: {
    fontSize: 20,
    marginTop: 30,
    paddingLeft: 15,
    flexShrink: 2,
  },
  sub: {
    borderRadius: 10,
    margin: 5,
    marginLeft: 5,
    marginRight: 5,
    textShadowRadius: 55,
    shadowRadius: 55,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    opacity: 0.6,
    backgroundColor: "#157DEC",
    marginTop: -6,
  },
  label1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#157DEC",
    borderRadius: 10,
    margin: 5,
    marginLeft: 5,
    marginRight: 5,
    textShadowRadius: 55,
    shadowRadius: 55,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    backgroundColor: "#fff",
    marginTop: -6,
    flexDirection: "row",
  },
});

export default SelfTest;
