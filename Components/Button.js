import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({content, pressHandler}) {
  return (
    <Pressable style={styles.container} onPress={pressHandler}>
        <Text style={{color: 'white'}}>{content}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})