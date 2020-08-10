import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import StudyTabs from '../../routes/StudyTabs';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

interface TeacherItemProps {
    props: {
        id: number,
        avatar: string,
        name: string,
        subject: string,
        bio: string,
        cost: string,
        whatsapp: string
    }
}

const TeacherItem: React.FC <TeacherItemProps> = ({ props }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: props.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.subject}>{props.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {props.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}> R$ {props.cost} </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        { /* <Image source={heartOutlineIcon} /> */ }
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
} 

export default TeacherItem;