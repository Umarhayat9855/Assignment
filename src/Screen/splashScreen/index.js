import React, { Component,useEffect, useState } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    StatusBar,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Back from '../../../Images/back.png';
import Logo from '../../../Images/logo.png';
import styles from './style';
import ColumDataset from '../../Components/ColumDataset/index';
import SubColumDataset from '../../Components/SubColumDataset/index';
const SplashScreen = (props) => {
    const [Drop,setDrop] = useState('');
    const Move = (id) => {
        setDrop(id)
    }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Image source={Back} resizeMode='contain' style={{width:25,height:25,marginLeft:15}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.HeadingContainer} onPress={()=>Move('no')}>
                <Text style={styles.HeadingLeft}>Column Name</Text>
                <Text style={styles.HeadingRight}>Type</Text>
            </TouchableOpacity>
            <View style={styles.Line}/>
            <View>
                <ColumDataset propsFun={Move} Value={'DBN'}/>
                {
                    Drop==='DBN'?
                    <SubColumDataset DataType={'Text'} API={'dbn'}/>
                    :
                    <View/>
                }
            </View>
            <View style={styles.Line}/>
            <View>
                <ColumDataset propsFun={Move} Value={'SCHOOL NAME'}/>
                {
                    Drop==='SCHOOL NAME'?
                    <SubColumDataset DataType={'Text'} API={'school_name'}/>
                    :
                    <View/>
                }
            </View>
            <View style={styles.Line}/>
            <View>
                <ColumDataset propsFun={Move} Value={'Num of SAT Test Takers'}/>
                {
                    Drop==='Num of SAT Test Takers'?
                    <SubColumDataset DataType={'Text'} API={'num_of_sat_test_takers'}/>
                    :
                    <View/>
                }
            </View>
            <View style={styles.Line}/>
            <View style={styles.Line}/>
            <View>
                <ColumDataset propsFun={Move} Value={'SAT Critical Avg. Score'}/>
                {
                    Drop==='SAT Critical Avg. Score'?
                    <SubColumDataset DataType={'Text'} API={'sat_critical_reading_avg'}/>
                    :
                    <View/>
                }
            </View>
            <View style={styles.Line}/>
            <View>
                <ColumDataset propsFun={Move} Value={'SAT Writing Avg. Score'}/>
                {
                    Drop==='SAT Writing Avg. Score'?
                    <SubColumDataset DataType={'Text'} API={'sat_math_avg_score'}/>
                    :
                    <View/>
                }
            </View>
            <View style={styles.Line}/>
            <View style={styles.Line}/>
            {/* <View>
                <ColumDataset propsFun={Move} Value={'SCHOOL NAME'}/>
                {
                    Drop==='SCHOOL NAME'?
                    <ColumDataset propsFun={Move}/>
                    :
                    <View></View>
                }
                
            </View> */}
        </SafeAreaView>
    );
}
export default SplashScreen;
