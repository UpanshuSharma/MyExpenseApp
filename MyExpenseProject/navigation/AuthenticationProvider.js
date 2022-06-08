import React,{createContext,useState} from 'react';
import  auth from '@react-native-firebase/auth';



export const AuthContext=createContext();

 export const AuthProvider =({children})=>{
         const [user,setUser]=useState(null);

     return(
         <AuthContext.Provider
            value={{
                  user,
                  setUser,
                  login: async (email, password)=>{
                          try {
                              await auth().signInWithEmailAndPassword(email,password) 
                          } catch (error) {
                                 console.log("Error  at login (Auth Provider.js) : ",error);
                          }
                  },

                  register : async (email,password)=>{
                      try {
                          await auth().createUserWithEmailAndPassword(email,password);
                      } catch (error) {
                        console.log("Error  at register (Auth Provider.js) : ",error);
                      }
                  },
                  logout: async ()=>{
                         try {
                            await auth().signOut(); 
                         } catch (error) {
                            console.log("Error  at logout (Auth Provider.js) : ",error);
                         }
                  }
            }}
         >
            {children}
         </AuthContext.Provider>
     )
 }