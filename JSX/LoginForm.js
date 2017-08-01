import React, {Component} from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'

export default class LoginForm extends Component  {

    state = {
        email: '',
        password: ''
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        //console.log(this.state.email, this.state.password)
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(

            data => console.log('data: ', data).
            browserHistory.push('/calendar')
        ).catch(
            error => console.log('error: ', error)
        )
    }

    render() {
        return (

            <View style={styles.container}>

<TextInput
    returnKeyType="next"
    placeholder="user name"
style={styles.input}
/>

                <TextInput
                    placeholder="password"
                    style={styles.input}
                    secureTextEntry
                    returnKeyType="go"
                />
                <TextInput/>

                <TouchableOpacity
                    style={styles.buttonContainer}
                ><Text style={styles.buttonText}
                >Login</Text></TouchableOpacity>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
padding: 15
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        paddingHorizontal: 100
    },
    buttonContainer: {
backgroundColor: '#2988b9',
        paddingVertical: 15

    },
    buttonText: {
textAlign: 'center',
        fontWeight: '700'
    }
})