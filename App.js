import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

import data from "./owners.json"

export default function YourApp() {
  
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Перша львівська короновірусарня</Text>
      <View style={styles.item}>
            <Text style={styles.header}>Name</Text>
            <Text  style={styles.header}>Lastname</Text>
            <Text  style={styles.header}>Age</Text>
            <Text  style={styles.header}>Photo</Text>
      </View>
        {data.owners.map((elem)=>(
          <View key={elem.id} style={styles.item}>
            <Text>{elem.name}</Text>
            <Text>{elem.lastname}</Text>
            <Text>{elem.age}</Text>
            <Image style={styles.avatar} source={{uri: `${elem.img}`}}/>
          </View>
        ))}
      </View>
    );
  }
  const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center'
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:'10px 20px'
  },
  title:{
    fontSize:16,
    marginBottom:20
  },
  header:{
    fontSize:16,
    fontWeight:'bold'
  }
});