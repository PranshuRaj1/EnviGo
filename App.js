import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
} from "react-native";

console.log("hello");


import { Picker } from "@react-native-picker/picker";
import * as Location from "expo-location";
import User from "./src/User";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [bpisChecked, setBpisChecked] = useState(false);
  const [location, setLocation] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();

  //create a bmi calculator which takes in height and weight and returns a number 1 if the person is obese else 0
  //UI can be better
  // repeated BMI calculation
  //not connected to database
  const bmiCalculator = (height) => {
    const bmi = weight / (height * height);
    console.log(bmi);
    if (bmi > 30) {
      return 1;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please Grant the Permission");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      reverseGeoCode(currentLocation);
    };
    getPermissions();
  }, []);

  const reverseGeoCode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });

    const cit = reverseGeocodedAddress[0].city;
    const distric = reverseGeocodedAddress[0].district;

    console.log(cit);
    console.log(distric);
    setCity(cit);
    setDistrict(distric);
    weatherApi();
  };

  //http://api.weatherapi.com/v1/current.json?key=dba9085ed1dc4dc2aa7175959241702&q=Pune&aqi=yes
  const weatherApi = async () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=dba9085ed1dc4dc2aa7175959241702&q=${city}&aqi=yes`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //log pm2_5 and temp_c

    console.log(data.current.air_quality.pm2_5);
    console.log(data.current.temp_c);
  };

  const handleToggleSwitch = () => {
    setChecked((previousState) => !previousState);
  };
  const handleToggleSwitch2 = () => {
    setBpisChecked((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EnviGo</Text>
      <Text style={styles.label}>
        {district},{city}
      </Text>

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

      <Text style={styles.label}>Height (m):</Text>
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

      <Button
        title="Submit"
        onPress={() =>
          //onPress log the bmiCalculator function
          User(
            name,
            age,
            height,
            weight,
            gender,
            isChecked,
            bpisChecked,
            location
          )
        }
      />
      {console.log(bmiCalculator(height))}
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
