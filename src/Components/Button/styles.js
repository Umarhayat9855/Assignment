import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ButtonContainer : {
        width:windowWidth*1.0,
        height:windowHeight*.08,
    },
    ButtonStyle:{
        width:windowWidth*.88,
        alignSelf:'center',
        height:windowHeight*.235,
        marginTop:windowHeight*.007,
        borderRadius:25,
        backgroundColor:CommonStyle.AppThemeDark,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    Buttontext:{
        fontSize:16,
        textAlign:'center',
        color:CommonStyle.white,
        fontFamily:CommonStyle.SFBold,
    }
})
export default styles;