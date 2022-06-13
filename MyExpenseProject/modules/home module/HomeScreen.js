import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import React,{useEffect, useState} from 'react';
import {Agenda} from 'react-native-calendars'
import { Card ,Typography,Avatar} from 'react-native-paper';
const HomeSreen = () => {

     useEffect(()=>{
         

     },[])
     const [items, setItems]=useState({});
     const renderItem=(item)=>{
           return(
            <TouchableOpacity style={{marginRight:10,marginTop:17}}>
                 <Card>
                     <Card.Content>
                          <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                              <Text>{item.name}</Text>
                              <Avatar.Text size={34} label="UN" />
                          </View>
                     </Card.Content>
                 </Card>
            </TouchableOpacity>
            )
     }
   
 const timeToString=(time)=> {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }




     const  loadItems = (day) => {
      const items = items || {};
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
  
          if (!items[strTime]) {
            items[strTime] = [];
            
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
                day: strTime
              });
            }
          }
        }
        
        const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
       setItems(newItems)
      }, 1000);
    }
  



  return (
    <View style={styles.main}>
              <Agenda
                  items={items}
                  loadItemsForMonth={loadItems}
                  selected={new Date().toDateString()}
                  renderItem={renderItem}
              />

    </View>
  )
}

export default HomeSreen;

const styles=StyleSheet.create({
  main:{
    flex:1,
  }
})