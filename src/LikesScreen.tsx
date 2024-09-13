import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Like from '../components/likes/Like'

const LikesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LikeScreen</Text>
      <Text style={styles.subtitle}>Likes</Text>
      <Like />
    </View>
  )
}

export default LikesScreen

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
    subtitle: {
      width: 350,
      backgroundColor: "pink",
      padding: 10,
    },
  });
  