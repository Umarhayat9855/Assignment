import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ColumDataset = (props) => {
    return ( 
        <SafeAreaView >
            <TouchableOpacity style={styles.InputStyle} onPress={()=>props.propsFun(props.Value)}>
                <Text style={styles.Coloum}>{props.Value}</Text>
                <Text style={styles.type}>Plain text</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    );
}
export default ColumDataset;
const styles = StyleSheet.create({
    MainContainer : {
        width:windowWidth*1.0,
        height:windowHeight*.075,
    },
    InputStyle:{
        flexDirection:'row',
        width:windowWidth*1.0,
        height:windowHeight*.05,
        alignSelf:'center',
        fontSize:14,
    },
    Coloum:{
        fontSize:14,
        width:windowWidth*0.46,
        marginLeft:22,
        marginTop:12
    },
    type:{
        fontSize:14,
        width:windowWidth*0.4,
        textAlign:'right',
        marginTop:12
    },
})