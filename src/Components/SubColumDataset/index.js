import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SubColumDataset = (props) => {
    return ( 
        <SafeAreaView >
            <TouchableOpacity style={styles.InputStyle} >
                <View style={{marginLeft:18,width:'43%'}}>
                    <Text style={styles.Coloum}>Data Type</Text>
                    <Text style={styles.type}>{props.DataType}</Text>
                </View>
                <View style={{marginBottom:15,marginLeft:18,}}>
                    <Text style={styles.Coloum}>API Field Name</Text>
                    <Text style={styles.type}>{props.API}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
        
    );
}
export default SubColumDataset;
const styles = StyleSheet.create({
    MainContainer : {
        width:windowWidth*1.0,
        height:windowHeight*.075,
    },
    InputStyle:{
        flexDirection:'row',
        width:windowWidth*1.0,
        alignSelf:'center',
        fontSize:14,
        backgroundColor:CommonStyle.AppThemeDark
    },
    Coloum:{
        fontSize:16,
        marginTop:12,
        color:'white',
        fontWeight:'bold'
    },
    type:{
        fontSize:14,
        marginTop:3,
        color:'white',
    },
})