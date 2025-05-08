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
        <Text style={styles.address}>
          <Image
            style={styles.calendar}
            source={require('../../images/location.png')}
          />{' '}
          {data.address}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.birthday}>
            <Image
              style={styles.calendar}
              source={require('../../images/calendar.png')}
            />
            {'  '}
            {data.birthdate}
          </Text>
        </View>
      </View>
    </View>
  );
}
