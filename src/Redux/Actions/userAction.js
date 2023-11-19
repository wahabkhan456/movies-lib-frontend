import axios from 'axios'
// import { NavigationActions } from 'react-navigation'
import NavigtionService from '../../Navigation/NavigationService'
import { Alert, AsyncStorage } from 'react-native'



const url = 'https://movielibrary90.herokuapp.com/'


export function login(email, password) {
  return function (dispatch) {
    dispatch({ type: "LOGIN_PROCESSING" });
    const formData = new FormData();
    formData.append("email", email),
    formData.append("password", password),
    axios.post(`baseUrl?email=${email}&password=${password}`)
      .then(async (response) => {
        dispatch({ type: "LOGIN_PROCESSED", payload: response.data });
        if (response.data.status === "success") {
          NavigtionService.navigate('UserNavigator')
          try {
            await AsyncStorage.setItem('User', JSON.stringify(response.data));
            console.log('response.data', response.data)
          } catch (error) {
            console.log('error =>', error)

          }
          Alert.alert(response.data.status, response.data.message)
        } else {
          Alert.alert(response.data.status, response.data.message)
        }
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: 'An unexpected error occured!' }); dispatch({ type: "CLEAR_PROCESSING" });
      })
  }
}







export function signup(fname, lname, phone, email, password) {
  return function (dispatch) {
    dispatch({ type: "LOGIN_PROCESSING" });
    axios.post(`baseUrl?firstname=${fname}&lastname=${lname}&email=${email}&user_phone=${phone}&password=${password}`)
      .then((response) => {
        dispatch({ type: "LOGIN_PROCESSED", payload: response.data });
        if (response.data.status === "success") {
          NavigtionService.navigate('UserLogin')
          Alert.alert(response.data.status, response.data.message)
        } else {
          Alert.alert(response.data.status, response.data.message)
        }
      })
      .catch((err) => {
        Alert.alert("Error", "User Signup failed")
        dispatch({ type: "ERROR", payload: 'An unexpected error occured!' }); dispatch({ type: "CLEAR_PROCESSING" });
      })
  }
}



export function getMoviesList() {
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_PROCESSING" })
    axios.get(`${url}nodeapi`)
      .then(result => {
        console.log(result)
        dispatch({ type: "GET_MOVIES_PROCESSED", payload: result.data })
      })
      .catch(err => console.log(err))
  }
}