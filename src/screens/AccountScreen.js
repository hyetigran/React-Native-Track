import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};
AccountScreen.NavigationOptions = {
  title: "Settings",
  tabBarIcon: <FontAwesome name="gear" size={24} />,
};

const styles = StylesSheet.create({});

export default AccountScreen;
