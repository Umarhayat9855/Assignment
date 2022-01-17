import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,Dimensions,StyleSheet
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ButtonContainer = (props) => {
    return ( 
        <View style={styles.ButtonContainer}>
            <TouchableOpacity style={[styles.ButtonStyle,{backgroundColor:props.color}]} onPress={props.propsFun}>
                <View style={styles.Circle}>
                    <Text style={styles.CircleText}>{props.Num}</Text>
                </View>
                <Text style={styles.Buttontext}>{props.Title}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    ButtonContainer : {
        width:windowWidth*0.5,
    },
    ButtonStyle:{
        width:windowWidth*.44,
        alignSelf:'center',
        height:windowHeight*.235,
        marginTop:windowHeight*.007,
        borderRadius:25,
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
        fontWeight:'700',
        marginLeft:20,
        marginRight:20,
        color:CommonStyle.white,
        marginTop:65,
        // fontFamily:CommonStyle.SFBold,
    },
    Circle:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'white',
        marginLeft:20,
        marginTop:15,
        opacity:.2,
        justifyContent:'center'
    },
    CircleText:{
        textAlign:'center',
        fontSize:20,
        color:'black'
    }
})
export default ButtonContainer;