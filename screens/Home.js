import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import {globalStyle} from '../global/style'


const Home = ( {navigation} ) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => setUsers(resp.data))
  },[])
  

  return (
    <View style={globalStyle.container}>
     <FlatList
      keyExtractor={(item) => item.id} 
      data={users}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
     />
    </View>
  )
}

export default Home
