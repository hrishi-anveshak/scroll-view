import React, {useState, useCallback} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import data from '../data.json';
import Profile from '../components/Home/Profile';
import styles from '../styles/homeStyles';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchChange = useCallback((text: string) => {
    setSearchTerm(text);
  }, []);

  const filterData = (term: string) => {
    return data?.filter(
      item =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.address.toLowerCase().includes(term.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000"
          selectionColor="#000"
          onChangeText={searchChange}
        />
      </View>
      <FlatList
        style={styles.section}
        data={filterData(searchTerm)}
        renderItem={({item}) => <Profile data={item} />}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}
