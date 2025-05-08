import React, {useState} from 'react';
import {ScrollView, View, FlatList, TextInput} from 'react-native';
import data from '../data.json';
import Profile from '../components/Home/Profile';
import styles from '../styles/homeStyles';
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data?.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000"
          value={searchTerm}
          selectionColor="#000"
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList
        style={styles.section}
        data={filteredData}
        renderItem={({item}) => <Profile data={item} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}
