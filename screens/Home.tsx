import React from 'react';
import {ScrollView, View} from 'react-native';
import data from '../data.json';
import Profile from '../components/Home/Profile';
import styles from '../styles/homeStyles';
export default function Home() {
  return (
    <ScrollView>
      <View style={styles.section}>
        {data.map((val, index) => {
          return <Profile key={index} data={val} />;
        })}
      </View>
    </ScrollView>
  );
}
