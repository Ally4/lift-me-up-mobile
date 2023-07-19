import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

// import { registerUser } from '../../../authActions';


export default function App() {


//   const dispatch = useDispatch()

//   const navigate = useNavigate()


//   const [fname, setFname] = useState('')
//   const [lname, setLname] = useState('')
//   const [email, setEmail] = useState('')
//   const [dob, setDob] = useState('')
//   const [gender, setGender] = useState('')
//   const [address, setAddress] = useState('')
//   const [phone, setPhone] = useState('')
//   const [password, setPassword] = useState('')
//   const [cpassword, setCpassword] = useState('')
//   const [addRequestStatus, setAddRequestStatus] = useState('idle')


//   const onFnameChanged = e => setFname(e.target.value)
//   const onLnameChanged = e => setLname(e.target.value)
//   const onEmailChanged = e => setEmail(e.target.value)
//   const onDobChanged = e => setDob(e.target.value)
//   const onGenderChanged = e => setGender(e.target.value)
//   const onAddressChanged = e => setAddress(e.target.value)
//   const onPhoneChanged = e => setPhone(e.target.value)
//   const onPasswordChanged = e => setPassword(e.target.value)
//   const onCpasswordChanged = e => setCpassword(e.target.value)

//   const canSave = [fname, lname, email, dob, gender, address, phone, password, cpassword].every(Boolean) && addRequestStatus === 'idle';



//   const onSaveNewUser = () => {
//     if (canSave) {
//         try {
//             setAddRequestStatus('pending')
//             dispatch(registerUser({ fname, lname, email, dob, gender, address, phone, password, cpassword })).unwrap()

//             setFname('')
//             setLname('')
//             setEmail('')
//             setDob('')
//             setGender('')
//             setAddress('')
//             setPhone('')
//             setPassword('')
//             setCpassword('')
//             navigate('Main')
//         } catch (err) {
//             console.error('Failed to save the post', err)
//         } finally {
//             setAddRequestStatus('idle')
//         }
//     }

// }




  return (
      <SafeAreaView style={styles.container}> 
      <ScrollView >
        <View style={{backgroundColor:"black", width:250, height:250, borderRadius:150, opacity:0.2, top: -90, left:-90}}></View>
        <Image source={require("../../assets/photos/colab.png")} style={{marginBottom:20, marginLeft:70}}/>
        <View style={{backgroundColor:"white", flex:2, borderTopRightRadius:30, borderTopLeftRadius:30}}>
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          placeholder={'First Name'}
          onChange={onFnameChanged}
          />
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onLnameChanged}
          placeholder={'Last Name'}
          />
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onEmailChanged}
          placeholder={'Email'}
          />
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onDobChanged}
          placeholder={'Date of birth'}
          />
          <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onGenderChanged}
          placeholder={'Gender'}
          />
          <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onAddressChanged}
          placeholder={'Address'}
          />
          <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onPhoneChanged}
          placeholder={'Phone number'}
          />
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onPasswordChanged}
          type='password'
          placeholder={'Password'}
          />
        <TextInput
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderColor:"#2FCBD8",
            borderWidth:1,
            width:300,
            marginTop:20,
            marginLeft:40
          }}
          onChange={onCpasswordChanged}
          type='password'
          placeholder={'Confirm Password'}
          />
          <TouchableOpacity style={styles.button1}
          //  onPress={onSaveNewUser}
           > 
            <Text style={styles.buttonText1}>Sign Up</Text>
           </TouchableOpacity>
           <Text style={{marginLeft:90}}>Do you have an account?<TouchableOpacity ><Text style={{ color: '#2FCBD8', marginTop:2}}> Login</Text></TouchableOpacity></Text>
           <Image source={require("../../assets/photos/acubed.png")} style={{marginBottom:20, marginLeft:150}}/>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#2FCBD8",
},
button: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  width:300,
  marginLeft:40

  // justifyContent:"center"    its not working in js engine: hermes
},
buttonText: {
  color: '#2FCBD8',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
button1: {
  backgroundColor: '#2FCBD8',
  padding: 10,
  borderRadius: 5,
  borderColor:"white",
  borderWidth:2,
  width:300,
  marginTop:20,
  marginLeft:40

  // justifyContent:"center"    its not working in js engine: hermes
},
buttonText1: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
})