import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'

import { windowWidth,windowHeight } from '../utils/Dimensions';
const CustomHeader = ({title}) => {
  return (
    <View style={styles.container}>
           <View style={styles.logo_container}>
               <Image   style={styles.logo} source={require('../assets/MyExpense1.png')}/>
           </View>
           <View style={styles.text_container}>
           <Text style={{color:'white'}}>Header</Text>
           </View>
          
    </View>
  )
}

export default CustomHeader;

const styles = StyleSheet.create({
  
     container:{
       height:50,
       backgroundColor:'black',
       marginBottom:5,
       flexDirection:'row',
     },
     logo_container:{
            flex:3,
     },
     text_container:{
             flex:1,
     },
     logo:{
         height:50,
        width:70,
         margin:5,
         padding:5,
         borderRadius:5,
     }

})