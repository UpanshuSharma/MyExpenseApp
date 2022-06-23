import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import React,{useState} from 'react';
import {Agenda} from 'react-native-calendars'
import { Card,Avatar,Button,FAB,Portal} from 'react-native-paper';

import date from '../../utils/DateTime';



const HomeSreen = ({navigation}) => {


/*......................*/
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
/* ------------------------- */


    let obj={
      '2022-06-20':[{
        name:'abc',
      },
    {
      name:'def'
    }],
    '2022-06-21':[{
      name:'xyz',
    },
  {
    name:'pqr'
  }]
    }
    //  const [items, setItems]=useState(obj);
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

                     <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                           Add Expense
                     </Button>
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
          // console.log("strTime", strTime)
  
          if (!items[strTime]) {
            items[strTime] = [];
            // const numItems = Math.floor(Math.random() * 3 + 1);
            // for (let j = 0; j < numItems; j++) {
            //   items[strTime].push({
            //     name: 'Item Content' + strTime + ' #' + j,
            //     height: Math.max(50, Math.floor(Math.random() * 150)),
            //     day: strTime
            //   });
            // }
          }
        }
        
        const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
         setItems(newItems)
      }, 1000);
     }
  

        // const loadItems =(day)=>{

        // }


  return (
    <View style={styles.main}>
              <Agenda
                  items={items}
                  loadItemsForMonth={loadItems}
                  // selected={new Date().toDateString()}
                  selected={date}
                   renderItem={renderItem}
                  // onDayPress={(day)=>console.log("Day Press : ",day)}
                  pastScrollRange={3}
                  futureScrollRange={1}
              />

             {/** <FAB
                  icon="plus"
                  style={styles.fab}
                  onPress={() =>navigation.navigate('AddExpense')}
                />

                 */}
              
              
                 <FAB.Group
                   open={open}
                   style={styles.fab}
                   icon={open ? 'calendar-today' : 'plus'}
                  //  visible= { (route.name === 'AddExpense'  ||  route.name==='EventExpense')? false:true}
                   actions={[
                      {
                         icon: 'plus',
                         label:'Add Expense',
                         onPress: ()=>navigation.navigate('AddExpense'),
                      },
                      {
                        icon:'star',
                        label: 'Event',
                        onPress:  ()=>navigation.navigate('EventExpense'),
                      },
                       
                   ]}
                   onStateChange={onStateChange}
                   onPress={() => {
                     if (open) {
                       // do something if the speed dial is open
                     }
                   }}
                 />
              
                
    </View>
  )
}




export default HomeSreen;

const styles=StyleSheet.create({
  main:{
    flex:1,
  },
  fab:{
    position: 'absolute',
    margin: 0,
    right: 0,
    bottom: 50,
  }
})