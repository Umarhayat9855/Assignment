import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeLight,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
    },
    HeadingContainer:{
        flexDirection:'row',
        marginTop:20
    },
    HeadingLeft:{
        width:windowWidth*0.47,
        marginLeft:20
    },
    HeadingRight:{
        width:windowWidth*0.42,
        textAlign:'right',
    },
    Line:{
        width:windowWidth*.9,
        marginTop:5,
        alignSelf:'center',
        height:0.2,
        backgroundColor:'black'
    }
})
export default styles;