import React from 'react';

import styles from './styles';
import { View, ImageBackground, Text } from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function TeacherForm() {
    return (
        <View style={styles.container} >
            <ImageBackground 
                resizeMode='contain' 
                source={giveClassesBgImage} 
                style={styles.content}
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
            </ImageBackground>
        </View>
    )
}

export default TeacherForm;