import { FlatList, Platform, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import InputForm from '../components/InputForm'
import TodoItems from '../components/TodoItems'
import { useSelector } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'


const MainScreen = () => {
  const todos = useSelector(state => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === 'todo');
  const completedTasks = todos.filter((item) => item.state === 'done');
  const auth = getAuth()
  const navigation = useNavigation()


  const handleLogout = async () =>{
    try{
      const user = await signOut(auth)
      navigation.replace('Login')
      console.log(user)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={`default`} />
      <View style={styles.headerContainer}>
      <Text style={styles.pageTitle}>Todo App</Text>
      <TouchableOpacity
        style={styles.logOutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logOutText} >로그아웃</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일!!</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItems {...item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItems {...item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.emptyListText}>완료한 일이 없습니다.</Text>
        )}
      </View>
      <InputForm />
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
  },
  emptyListText: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  logOutButton : {
    marginBottom : 25,
    marginRight : 25 ,
    justifyContent : 'center',
    alignItems : 'center',
    width : 42,
    height : 42,
    backgroundColor : 'rgba(0,0,0,0.7)',
    borderRadius : 4
  },
  logOutText : {
    color : 'white',
    fontSize : 25 ,
  },
  headerContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  }
})
