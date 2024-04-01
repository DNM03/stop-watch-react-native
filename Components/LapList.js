import { StyleSheet, Text, View } from "react-native";
import React from "react";
import formatTime from 'minutes-seconds-milliseconds';

export default function LapList({ number, time }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Lap #{number}</Text>
      <Text style={{fontSize: 20}}>{time?time:"00:00.00"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10
  },
});
