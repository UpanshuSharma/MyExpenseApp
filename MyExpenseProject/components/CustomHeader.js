import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'
import {Avatar, Button, Menu, Divider, Provider} from 'react-native-paper';

const CustomHeader = ({title}) => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
           <View style={styles.main_container}>
               <Image   style={styles.logo} resizeMode='stretch' source={require('../assets/MyExpense1.png')}/>
               <Text style={styles.text}>MyExpense</Text>
           </View>
           <View style={styles.profile_container}>
                            <Avatar.Text size={34} label="UN" />
                            <Text style={styles.username}>UserName</Text>
           </View>
          
    </View>
  )
}

export default CustomHeader;

const styles = StyleSheet.create({
  
     container:{
      // height :55,
       height:'auto',
       backgroundColor:'yellow',
       marginBottom:15,
       flexDirection:'row',
      //  padding:10,
     },
     main_container:{
            flex:3,
            // backgroundColor:'pink',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            padding:5,

     },
    
     logo:{
         height:50,
         width:60,
        //  marginTop:5,
        //  marginBottom:10,
        //  padding:10,
        //  borderRadius:20,
     },
     text:{
           fontSize:20, 
           fontWeight:'bold',
           marginLeft:5,
     },

   profile_container:{
           flex:3,
           justifyContent:'flex-end',
           flexDirection:'row',
           alignItems:'center',
          //  backgroundColor:'yellow'
          marginRight:5,
      },
      username:{
             fontSize:18,
            //  fontWeight:200,   generating error   ???
             marginLeft:5,
      },

})