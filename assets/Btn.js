import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import * as Location from "expo-location";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [bpisChecked, setBpisChecked] = useState(false);
  const [location, setLocation] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please Grant the Permission");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  const handleToggleSwitch = () => {
    setChecked((previousState) => !previousState);
  };
  const handleToggleSwitch2 = () => {
    setBpisChecked((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EnviGo</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAge(text)}
        value={age}
        keyboardType="numeric"
        placeholder="Enter your age"
      />

      <Text style={styles.label}>Height (cm):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setHeight(text)}
        value={height}
        keyboardType="numeric"
        placeholder="Enter your height"
      />

      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setWeight(text)}
        value={weight}
        keyboardType="numeric"
        placeholder="Enter your weight"
      />

      <Text style={styles.label}>Gender:</Text>
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" enabled={false} />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Text style={styles.label}>Medical History:</Text>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Diabetes</Text>
        <Switch value={isChecked} onValueChange={handleToggleSwitch} />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Blood Pressure</Text>
        <Switch value={bpisChecked} onValueChange={handleToggleSwitch2} />
      </View>

      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: "100%",
    borderRadius: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkboxLabel: {
    fontSize: 16,
    marginRight: 8,
  },
});

export default App;
