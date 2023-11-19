import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import HeaderCustom from '../../Constants/Header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const film1 = require('../../../assets/film1.jpg')
const film2 = require('../../../assets/film2.jpg')
const film3 = require('../../../assets/film3.jpg')
const placeholder = require('../../../assets/placeholder.png')
const star = require('../../../assets/star.png')

const MovieDetail =(props)=> {

    const[array, setArray]=useState([
        {
            image: film1,
            name: 'Spiderman'
        },
        {
            image: film2,
            name: 'Aquaman'
        },
        {
            image: film3,
            name: 'Darktower'
        },
        {
            image: film1,
            name: 'Spiderman'
        },
        {
            image: film2,
            name: 'Aquaman'
        },
        {
            image: film3,
            name: 'Darktower'
        },
        {
            image: film1,
            name: 'Spiderman'
        },
        {
            image: film2,
            name: 'Aquaman'
        },
        {
            image: film3,
            name: 'Darktower'
        },
        {
            image: film1,
            name: 'Spiderman'
        },
        {
            image: film2,
            name: 'Aquaman'
        },
        {
            image: film3,
            name: 'Darktower'
        },
    ]);

    // const[tags, setTags]=useState(['funny', 'family', 'thriller', 'mystery', 'horror']); 


    // const[cast, setCast]=useState(['Johnny depth', 'Scarlet', 'Emma watson', 'Ronaldo', 'Lorem Ipsum']);

    const { movieDetails } = props.navigation.state.params
    let tags = movieDetails.Genre.split(",")
    let cast = movieDetails.Actors.split(",")
    return (
        <View style={styles.mainContaine}>
            <HeaderCustom />
            <ScrollView>
                <View style={styles.mainContaine}>
                    {/* BANNER */}
                    <View>
                        {movieDetails.Poster != 'N/A' ? <Image source={{ uri: movieDetails.Poster }} style={styles.Filmbanner} /> :
                            <Image source={placeholder} style={styles.Filmbanner} />
                        }
                    </View>

                    {/* FIRST ROW */}
                    <View>
                        <Text style={styles.subHeading}>
                            {movieDetails.Title}
                        </Text>
                        <View style={[styles.rowStyle, { marginStart: 10 }]}>
                            <Text style={styles.textRegular}>
                                {movieDetails.Released} |
                                    </Text>
                            <Text style={styles.textRegular}>
                                {movieDetails.imdbRating}
                            </Text>
                            <Image source={star} style={styles.starstyle} />

                        </View>
                    </View>

                    {/* TAGS */}

                    <FlatList
                        data={tags}
                        numColumns={4}
                        key={3}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={styles.tagContainer}>
                                    <Text style={styles.tagText}>
                                        {item}
                                    </Text>
                                </View>
                            )
                        }}

                    />

                    {/* SYNOPSIS */}

                    <View>
                        <Text style={styles.subHeading}>
                            SYNOPSIS
                            </Text>
                        <Text style={styles.descriptionStyle}>
                            {movieDetails.Plot}
                        </Text>
                    </View>

                    {/* CAST */}

                    <View>
                        <Text style={styles.subHeading}>
                            Cast
                                </Text>
                        <FlatList
                            data={cast}
                            // numColumns={5}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            // key={3}
                            // keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={index} style={styles.castContainer}>
                                        <Text style={styles.castText}>
                                            {item}
                                        </Text>
                                    </View>
                                )
                            }}

                        />
                    </View>



                    {/* RELATED MOVIES */}

                    <View>
                        <Text style={{ ...styles.subHeading, marginTop: 6 }}>
                            Related Movies
                                </Text>
                        <FlatList
                            style={{ paddingHorizontal: 10 }}
                            horizontal
                            data={array}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        // onPress={() => this.props.navigation.navigate('MovieDetail')}
                                        style={styles.movieItemContainer} >
                                        <Image source={item.image} style={styles.movieItemImage} />
                                        <Text style={styles.movieName}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>

                                )
                            }
                            }
                        />
                    </View>


                </View>
            </ScrollView>
        </View>
    )

}



const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);




const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
    },
    textRegular: {
        color: '#000',
        paddingVertical: 13,
        paddingHorizontal: 3
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    mainContaine: {
        flex: 1
    },
    Filmbanner: {
        width: wp(100),
        height: hp(30)
    },
    rowStyle: {
        flexDirection: 'row',
    },
    starstyle: {
        height: 15,
        width: 15,
        top: 13,
    },
    tagContainer: {
        width: wp(23),
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 10,
        margin: 3
    },
    tagText: {
        color: '#fff',
        textAlign: 'center'
    },
    descriptionStyle: {
        // color: '#bdbdbd'
        paddingHorizontal: 10
    },
    movieItemContainer: {
        width: wp(29),
        height: 170,
        margin: 5,
    },
    movieItemImage: {
        height: 150,
        width: wp(29),
        borderRadius: 10
    },
    movieName: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    castContainer: {
        // width: wp(23),
        paddingHorizontal: 10,
        // margin: 3
    },
    castText: {
        textDecorationLine: 'underline'
    }
})