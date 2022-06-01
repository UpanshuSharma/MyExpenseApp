import { Image,StyleSheet } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    // onSkip={()=>navigation.navigate('Login')}
    // onDone={()=>navigation.navigate('Login')}
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.replace('Login')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image  style={styles.logo} source={require('../assets/logo.png')} />,
        title: 'Manage your daily expense',
        subtitle: '',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-im2.png')} />,
        title: 'Keep record of all expense',
        subtitle: 'your all expense will be store here',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Analyze your Expense',
        subtitle: 'analyse your daily, monthly & yearly expense',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img4.png')} />,
        title: 'Control your expense & Savings',
        subtitle: 'make a balance between your expense & savings',
      },
    ]}
  />
  )
}

export default OnboardingScreen;

const styles=StyleSheet.create({
  logo:{
    width:200,
    height:200,
  }
})