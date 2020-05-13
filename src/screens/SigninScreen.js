import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>{" "}
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        title="Go to mainflow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StylesSheet.create({});

export default SigninScreen;
