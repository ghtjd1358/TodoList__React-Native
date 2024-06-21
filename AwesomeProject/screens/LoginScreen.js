import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import ListIcon from '../assets/list.svg'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>   
        <ListIcon/>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='이메일'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
             <TextInput
                placeholder='비밀번호'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry={true} // 비밀번호 보이지 않게
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('로그인 버튼 클릭')}
            >
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonOutline}
                onPress={() => console.log('회원가입 버튼 클릭')}
            >
                <Text style={styles.buttonOutlineText}>회원가입</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    input: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    buttonContainer: {
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30 
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16
    }
})
