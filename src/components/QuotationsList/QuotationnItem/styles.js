import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contextLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start'
    },
    contextRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 4,
        color: '#fff',
        fontWeight: 'bold'
    },
    price: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles