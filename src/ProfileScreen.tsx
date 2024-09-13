import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Like from "../components/likes/Like";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
   
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    backgroundColor: "aqua",
  },
  title: {
    marginTop: 15,
  },
});
