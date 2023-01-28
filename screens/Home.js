import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Text, View, 
        FlatList, TouchableOpacity, 
        TouchableWithoutFeedback,Keyboard, 

        StyleSheet, Modal } from 'react-native'
import Card from '../components/Card'
import {globalStyle} from '../global/style'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../components/ReviewForm'


const Home = ({ navigation: {navigate} }) => {
  const [users, setUsers] = useState([])
  const [Visible, setVisible] = useState(false)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => setUsers(resp.data))
  },[])
  
  const addItems = async ({name, email}) => {
      await axios.post('https://jsonplaceholder.typicode.com/users',{
        id: Math.random().toString(),
        name: name,
        email: email
      }, {
        headers: {'content-type': 'text/json'}
      })
      setVisible(false)
  }

  return (

    <View style={globalStyle.container}>
      <Modal visible={Visible} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.modalContent}>
            <MaterialIcons
            name='close'
            size={24}
            style={style.closeIcon}
            onPress={() => setVisible(false)} 
          />
            <ReviewForm addItems={addItems}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    
      <MaterialIcons
        name='add'
        size={24}
        style={style.addIcon} 
        onPress={() => setVisible(true)}
      />
  
     <FlatList
      keyExtractor={(item) => item.id} 
      data={users}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigate('Review Details', item)}>
          <Card>
            <Text style={style.item}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )}
     />
    </View>
  )
}
const style = StyleSheet.create({
  item: {
    color: '#111'
  },
  addIcon: {
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: '#09afeb',
    color: '#fff',
    padding: 10
  },
  closeIcon: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})

export default Home
