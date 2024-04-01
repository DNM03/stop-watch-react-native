import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import formatTime from 'minutes-seconds-milliseconds';

export default function Time({time}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time?time:"00:00.00"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
