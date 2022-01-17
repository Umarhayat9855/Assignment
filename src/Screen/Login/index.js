import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Text,
    TextInput,
} from 'react-native';
import styles from './styles';
import Header from '../../Components/Header/index';
import Button from '../../Components/Button/index';
const Login = (props) => {
    const Move = () => {
        props.navigation.navigate('Splash')
    }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <Header/>
            <ScrollView>
                <View style={styles.UperContainer}>
                    <Button 
                        color={'#e78073'}
                        Num={'1'}
                        Title={'About this Dataset'}
                        propsFun={Move}
                    />
                    <Button 
                        color={'#786fa6'}
                        Num={'2'}
                        Title={'What in this Dataset'}
                        propsFun={Move}
                    />
                </View>
                <View style={styles.UperContainer}>
                    <Button 
                        color={'#B1Cde0'}
                        Num={'3'}
                        Title={'About this Dataset'}
                        propsFun={Move}
                    />
                    <Button 
                        color={'#e5b54e'}
                        Num={'4'}
                        Title={'What in this Dataset'}
                        propsFun={Move}
                    />
                </View>
                <View style={styles.UperContainer}>
                <Button 
                        color={'#00b388'}
                        Num={'4'}
                        Title={'What in this Dataset'}
                        propsFun={Move}
                    />
                    <Button 
                        color={'#786fa6'}
                        Num={'2'}
                        Title={'What in this Dataset'}
                        propsFun={Move}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Login;