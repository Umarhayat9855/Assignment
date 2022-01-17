import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Search from '../../../Images/search.png';
const AuthHeader = (props) => {
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.BackContainer}>
                <Text style={styles.Name}>Muhammad Umar Hayat</Text>
                <Image source={Search} style={{width:35,height:35}}/>
            </View>
        </SafeAreaView>
    );
}
export default AuthHeader;
const styles = StyleSheet.create({
    MainContainer : {
        // backgroundColor:CommonStyle.AppThemeDark,
        width:windowWidth*1.0,
        height:windowHeight*.075,
    },
    BackContainer:{
        flexDirection:'row',
        width:windowWidth*.9,
        backgroundColor:CommonStyle.HeaderButton,
        height:windowHeight*.045,
        borderRadius:8,
        marginTop:windowHeight*.032,
        marginLeft:windowWidth*.056,
    },
    IconStye:{
        alignSelf:'center',
        marginTop:6,
    },
    Name:{
        marginTop:8,
        fontSize:21,
        fontWeight:'bold',
        width:'86%'
    }
})