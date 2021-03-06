
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from './AuthenticationProvider'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import AppStack from './AppStack';
import MainStackWrapper from './MainStackWrapper';
const Routes = () => {

  const {user,setUser}=useContext(AuthContext);
  const [initializing , setInitializing]=useState(true);


  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false)
    };
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);


  if (initializing){ 
    return null;
  }

  return (
    <NavigationContainer>
             {user ? <MainStackWrapper/> : <AuthStack />}
   </NavigationContainer>
  )
}

export default Routes