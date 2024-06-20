import { Pressable, StyleSheet, Text, View } from 'react-native';
import CheckedBox from '../assets/checkbox_checked.svg';
import UnCheckedBox from '../assets/checkbox_unchecked.svg';
import Delete from '../assets/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteTodo, updatedTodo } from '../redux/slice/todoSlice';


export default function TodoItem({ id, state, text }) {
  const dispatch = useDispatch()

  return (
    <View style={styles.itemContainer}>
      <Pressable
        hitSlop={10}
        style={styles.itemCheckbox}
        onPress={()=>{dispatch(updatedTodo(id))}}
      >
        {state === 'todo' ? (
          <UnCheckedBox />
        ) : (
          <CheckedBox style={styles.itemCheckedboxCheckedIcon} />
        )}
      </Pressable>
      <Text 
        style={[
          styles.itemText,
          state !== 'todo' && styles.itemTextChecked
        ]}
      >
        {text}
      </Text>
      <Pressable
        style={[
          styles.deleteButton,
          state !== 'todo' && styles.deleteButtonDone
        ]}
        hitSlop={10}
        onPress={()=>{dispatch(deleteTodo(id))}}
      >
        <Delete style={styles.delete} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f7f8fa'
  },
  itemCheckbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6
  },
  itemCheckedboxCheckedIcon: {
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  itemText: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373'
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through'
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3
  }
});
