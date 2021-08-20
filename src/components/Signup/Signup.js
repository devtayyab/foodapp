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
import { Signupaction } from '../../store/action/useraction'
import {Input} from 'react-native-elements'
import {useDispatch} from 'react-redux'
import * as Animatable from 'react-native-animatable'
// import {Globalcontext} from '../../context/Context'
const {height} = Dimensions.get('screen')
const Signup = ({navigation}) => {
  const dispatch = useDispatch()
  // const {userRegister, setUserRegister} = useContext(Globalcontext)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })
  const handleChange = e => {
    const {name, value} = e.target
    console.log(value)
    setUser(user => ({
        ...user,
       [ name]: value
    }));
  }
  
  // console.log("signup",userRegister)
  const handleSignUp = async (e )=> {
    dispatch(Signupaction(user))
    navigation.navigate('Home')
    // e.preventDefault()
    // const params=JSON.stringify(user)
    //  const {data}=axios.post('https://food-app-native.herokuapp.com/api/user/register',user)
    
    // .then(function (response) {
    //   // handle success
    //   console.warn(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.warn(error.message);
    // });
    // localStorage.setItem('token', JSON.stringify(data.token))
    // await AsyncStorage.setItem(compoundKey, JSON.stringify(data));
  
    
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
          placeholder='Name'
          name='name'
          vlaue={user.name}
          onChangeText={(e)=>setUser({...user, name: e})}
        />
        <Input
          placeholder='Email'
          name='email'
          vlaue={user.email}
          onChangeText={(e)=>setUser({...user, email: e})}
        />
        <Input
          placeholder='Password'
          name='password'
          secureTextEntry={true}
          vlaue={user.password}
          onChangeText={(e)=>setUser({...user, password: e})}
        />
        <Input
          placeholder='Phone'
          name='phone'
          vlaue={user.phone}
          onChangeText={(e)=>setUser({...user, phone: e})}
        />
        <View style={{flexDirection: 'row', paddingLeft: 10}}>
          <Text style={{fontSize: 15}}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 15,
                color: '#bad759',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{paddingHorizontal: 50}}>
          <Text style={styles.button} onPress={handleSignUp}>
            Register
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  )
}

export default Signup

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
