import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/styles';
import React from 'react';
import { View, Text, Button } from 'react-native';

export const Map = () => {

    const natigator = useNavigation();

    return (
        <View style={styles.margin}>
            <Text style={styles.title}>Screen Map</Text>

            <Button
                color='black'
                title="Home"
                onPress={() => natigator.navigate('Home')} />

        </View>
    );

}