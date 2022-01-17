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
    UperContainer : {
        marginTop:10,
        flexDirection:'row',
        width:'50%',
    },
})
export default styles;