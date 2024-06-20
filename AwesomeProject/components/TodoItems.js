import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import CheckedBox from '../assets/checkbox_checked.svg'
// import UnCheckedBox from '../assets/checkbox_unchecked.svg'
// import Delete from '../assets/delete.svg'


export default function TodoItems() {
  return (
    <View>
      <View style={styles.itemContainer}>
            <Pressable
                hitSlop={10}
                style={styles.itemTextChecked}
                onPress={() => console.log('Item checked')}
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
                onPress={() => console.log('Item deleted')}
            >
            </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  itemTextChecked: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
  deleteButton: {
    padding: 10,
  },
  deleteButtonDone: {
    color: 'red',
  }
});
