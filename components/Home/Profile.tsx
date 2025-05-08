import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../styles/homeStyles';
export default function Profile({data}: any) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avtar}
        source={{
          uri: data.image,
        }}
      />
      <View style={styles.contians}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.address}>📍{data.address}</Text>
        <Text style={styles.birthday}>📆 {data.birthdate}</Text>
      </View>
    </View>
  );
}
