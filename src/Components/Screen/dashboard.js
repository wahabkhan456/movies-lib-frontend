import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import { connect } from 'react-redux';
import { getMoviesList, signup } from '../../Redux/Actions/userAction'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderCustom from '../../Constant/Header'

const menu = require('../../../assets/menu.png')
const placeholder = require('../../../assets/placeholder.png')
const film1 = require('../../../assets/film1.jpg')
const film2 = require('../../../assets/film2.jpg')
const film3 = require('../../../assets/film3.jpg')


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arra: [
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

            ]
        }
    }

    componentDidMount = () => {
        const { getMoviesList } = this.props
        getMoviesList()
    }


    render() {
        const { movies } = this.props
        const {arra} = this.state
        return (
            <View style={styles.mainContainer}>
                <HeaderCustom heading={"Movies"} />
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.itemContaier}>
                            {movies == null ? <FlatList
                                data={arra}
                                renderItem={({ item, index }) => {
                                    console
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            
                                            style={styles.movieItemContainer} >
                                            <Image source={item.image} style={styles.movieItemImage} />
                                            <Text style={styles.movieName}>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>

                                    )
                                }
                                }
                                numColumns={3}
                                key={3}
                                keyExtractor={(item, index) => index}
                            /> : <FlatList
                                    data={movies}
                                    renderItem={({ item, index }) => {
                                        console.log('item', item.Title , item.Poster)
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => this.props.navigation.navigate('MovieDetail', { movieDetails: item })}
                                                style={styles.movieItemContainer} >
                                                {item.Poster != "N/A" ? <Image source={{ uri: item.Poster }} style={styles.movieItemImage} /> : 
                                                <Image source={placeholder} style={styles.movieItemImage} />
                                                }
                                                <Text style={styles.movieName}>
                                                    {item.Title}
                                                </Text>
                                            </TouchableOpacity>

                                        )
                                    }
                                    }
                                    numColumns={3}
                                    key={3}
                                    keyExtractor={(item, index) => index}
                                />}
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    iconImage: {
        height: 25,
        width: 25
    },
    itemContaier: {
        padding: 10
    },
    movieItemContainer: {
        width: wp(29),
        // height: 170,
        margin: 5,
        flex: 1
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
    }
})

const mapStateToProps = state => {
    return {
        userDetails: state.user.userDetails,
        fetching: state.user.fetching,
        movies: state.user.movies
    };
};

const mapDispatchToProps = {
    signup,
    getMoviesList
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);