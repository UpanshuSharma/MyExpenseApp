import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

import { windowWidth,windowHeight } from '../utils/Dimensions';
const CustomHeader = ({title}) => {
  return (
    <View style={styles.container}>
           <View>
           
           </View>
           <View>
              <Text>Header</Text>
           </View>
    </View>
  )
}

export default CustomHeader;

const styles = StyleSheet.create({
  
     container:{
       height:30,
       backgroundColor:'red',
     }

})