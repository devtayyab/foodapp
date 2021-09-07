import React, {useState, useContext} from 'react'
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert
} from 'react-native'
import {useDispatch} from 'react-redux'
import { Signinaction } from '../../store/action/useraction'
// import { Globalcontext } from '../../../context/context';
import {Input} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
const {height} = Dimensions.get('screen')
// const { userRegister, setUserRegister } = useContext(Globalcontext);
const Login = ({navigation}) => {
  const dispatch = useDispatch()
  // const {userRegister, setUserRegister} = useContext(Globalcontext)
  const [user, setUser] = useState({
  
    email: '',
    password: '',
   
  })
  const handleChange = (name, value) => {

    setUser({
      ...user,
     [name] : value,
    })
  }
  // console.log("signin",userRegister)
  const handleSignIn = async (e)=> {
    dispatch(Signinaction(user,navigation))
    navigation.navigate('Home')
    // e.preventDefault()
    // const params=JSON.stringify(user)
    //  axios.post('https://food-app-native.herokuapp.com/api/user/login', user)
    // .then(function (response) {
    //   // handle success
    //   console.warn(JSON.stringify(response.data));
    //   localStorage.setItem('token', JSON.stringify(response.data))
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.warn(error.message);
    // });
    // localStorage.setItem('token', JSON.stringify(data.token))
    // await AsyncStorage.setItem(compoundKey, JSON.stringify(data));
  
    // setUserRegister(data.user)
  }

  return (
    
    <ScrollView style={styles.main}>
      <View style={styles.headingView}>
        <Animatable.Text
          animation='fadeInRight'
          duration={1000}
          style={styles.headingText}>
          Welcome !
        </Animatable.Text>
      </View>
      <Animatable.View
        animation='fadeInUpBig'
        duration={1000}
        style={styles.formView}>
        
        <Input
          placeholder='Email'
          name='email'
          vlaue={user.email}
          onChangeText={(e)=>handleChange("email", e)}
        />
        <Input
          placeholder='Password'
          name='password'
          secureTextEntry={true}
          vlaue={user.password}
          onChangeText={(e)=>handleChange("password", e)}
        />
      
        <View style={{flexDirection: 'row', paddingLeft: 10}}>
      
          
        </View>
        <TouchableOpacity
          style={{paddingHorizontal: 50}}>
          <Text style={styles.button} onPress={handleSignIn}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#bad759',
    flex: 1,
  },
  headingText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  headingView: {
    justifyContent: 'center',
    height: height / 3,
  },
  formView: {
    height: height / 1.59,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingTop: 10,
    // paddingBottom:200
  },
  button: {
    backgroundColor: '#bad759',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 20,
  },
})
