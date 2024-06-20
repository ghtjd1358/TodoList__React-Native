import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TodoItems() {
  return (
    <View>
      <View style={styles.itemContainer}>
            <Pressable
                hitSlop={10}
            >
               
            </Pressable>
            <Text style={[styles.itemText, styles.itemTextChecked]}>
                코딩하기
            </Text>
            <Pressable
                style={[
                    styles.deleteButton,
                    styles.deleteButtonDone
                ]}
                hitSlop={10}
            >

            </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})