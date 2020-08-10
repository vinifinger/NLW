import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        borderRadius: 10,
        color: '#FFF',
        backgroundColor: '#333'
    },

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        //fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        maxWidth: 240
    },

    titleBold: {
        fontWeight: 'bold'
        //fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        //fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnections: {
        //fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center'
    },
    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }, 

    okButtonText: {
        color: '#FFF',
        fontSize: 16
    }
});

export default styles;