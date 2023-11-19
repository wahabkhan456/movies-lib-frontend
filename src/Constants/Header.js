import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity , Text} from 'react-native'
import {Header} from 'react-native-elements'

const menu = require('../../assets/menu.png')
const search = require('../../assets/search.png')

export default function HeaderCustom(props) {
    return(
        <Header 
            backgroundColor="#000"
            style={styles.headerStyle}
            leftComponent={
                <TouchableOpacity>
                    <Image source={menu} style={styles.iconImage}  />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={styles.headingStyle}>
                    {props.heading}
                </Text>
            }
            rightComponent={
                <TouchableOpacity>
                    <Image source={search} style={styles.iconImage}  />
                </TouchableOpacity>
            }
        />
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    iconImage: {
        height: 25,
        width: 25
    },
    headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    headingStyle: {
        color: '#fff',
        fontSize: 20
    }
    
})