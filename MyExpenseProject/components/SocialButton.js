import {Text,TouchableOpacity , StyleSheet, Dimensions,View} from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { windowHeight } from '../utils/Dimensions';

const SocialButton = ({title,btnType,btnColor,backgroundColor, ...rest}) => {
    let bgColor=backgroundColor;
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bgColor}]} {...rest}>
         <View style={styles.iconWrapper}>
              <Icon name={btnType} style={styles.icon} size={22} color={btnColor}/>
         </View>
        <View style={styles.btnTxtWrapper}>
              <Text  style={[styles.buttonText,{color:btnColor}]}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
container: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
      },
      iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        fontWeight: 'bold',
      },
      btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
      },
})

export default SocialButton;
