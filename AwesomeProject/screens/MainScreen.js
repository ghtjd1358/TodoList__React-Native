import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import InputForm from '../components/InputForm'
import TodoItems from '../components/TodoItems'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={`default`}/>
        <Text style={styles.pageTitle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일????</Text>
        <TodoItems/>
      </View>
      <View style={styles.separator}/>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
      <InputForm/>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#f7f8fa',
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 54,
        fontWeight: 'bold'
    },
    separator: {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
    },
    listView: {
        marginBottom: 25,
        paddingHorizontal: 15,
    },
    listTitle: {
        fontSize: 41,
        fontWeight: '500',
    }
})
