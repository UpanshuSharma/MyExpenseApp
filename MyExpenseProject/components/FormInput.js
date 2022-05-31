import {  StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign';
import '../utils/Dimensions'
import { windowHeight,windowWidth } from '../utils/Dimensions';
const FormInput = ({iconType,labelValue,placeholderText,...rest}) => {
  return (
    <View style={styles.container}>
          <View style={styles.iconContainer}>
              <AntIcon name={iconType} size={25} color={'#666'} />
          </View>  
          <TextInput
           value={labelValue}
           placeholder={placeholderText}
           numberOfLines={1}
           placeholderTextColor={'#666'}
           style={styles.input}
           {...rest}
          />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
         marginTop:5,
         marginBottom:10,
         width:'100%',
         height:windowHeight/15,
         borderColor:'#ccc',
         borderRadius:3,
         borderWidth:1,
         flexDirection:'row',
         alignItems:'center',
         backgroundColor:'#fff',
    },
    iconContainer:{
        padding:10,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ccc',
        borderRightWidth:1,
        width:50,
    },
    input:{
        padding:10,
        flex:1,
        fontSize:15,
        fontFamily:'Lato-Regular',
        color:'#333',
        justifyContent:'center',
        alignItems:'center'

    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        width:windowWidth/1.5,
        height:windowHeight/15,
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
    }
})


export default FormInput;
