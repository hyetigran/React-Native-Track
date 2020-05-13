import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StylesSheet.create({});

export default TrackListScreen;
