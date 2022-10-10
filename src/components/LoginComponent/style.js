/* 
#007254
#00e1a7
#334050
#bccdcc
#f4f4f4
*/

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
    },
    msgTop: {
        marginTop: 30,
        color: '#334050',
        backgroundColor: '#00e1a7',
        padding: 30,
        borderBottomRightRadius: 30,
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
    },
    textTopo: {
        marginTop: 120,
        paddingRight: '60%',
        color: '#334050',
        fontSize: 18,
    },
    textTopo2: {
        fontSize: 50,
        marginBottom: 20,
        paddingRight: '35%',
        color: '#00e1a7',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        borderColor: '#00e1a7',
        borderWidth: 0.8,
        elevation: 1,
    },
    searchIcon: {
        padding: 10,
        backgroundColor: '#f4f4f4',
        borderRadius: 150 / 2,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
    buttonLogin: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#00e1a7',
        padding: 8,
        borderRadius: 25,
    },
    textButtonLogin: {
        color: '#fff',
        fontSize: 22,

    },
    textLogin: {
        marginTop: '10%',
        fontSize: 60,
        color:'#00e1a7',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    textTitulo: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 23,
        color: '#1c1c1c',
        fontWeight: 'bold',
    },
    ou: {
        textAlign: 'center',
        marginTop:20,
        fontWeight: 'bold',
    },
    // imgLogo: {
    //     marginTop: '18%',
    //     width: 300,
    //     height: 200,
    //     alignSelf: 'center',
    // },
    registration: {
        marginTop: 20,
        color: '#4d5156',
    },
    linkSubscribe: {
        color: '#00e1a7',
        fontWeight: '600',
        fontSize: 16,
    },
    iconAlert: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#4d5156'
    },
    warningAlert: {
        color: '#4d5156'
    },
    btnCreateSupermarket: {
        marginTop: '3%',
        width: '50%',
        height: '4%',
    },
    textSupermarket: {
        color: 'blue',
        top: 5,
        textAlign: 'center',
        fontSize: 15,
    },
    forgot: {
        paddingLeft: '60%',
        paddingTop: 15,
        color: '#007254'
    },

    viewAutentication: {
        flex: 1,
        flexDirection: 'row',
        width: '80%'
    },
    autentica: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 15,
        width: '95%'
    },
    btnIcon: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
      
        elevation: 2,
    },
    btnText: {
        paddingLeft: 30,
        color: '#334050'
        
    },
  
});

export default styles;