import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/userAction'

const Login = () => {

    return (
        <View style={{ flex: 1 }}>
            <Text>
                Login
                </Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserSignUp')}>
                <Text>
                    Signup
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                <Text>
                    Dashboard
                </Text>
            </TouchableOpacity>
        </View>
    )
}



const mapStateToProps = state => {
    return {
        userDetails: state.user.userDetails,
        fetching: state.user.fetching,
    };
};

const mapDispatchToProps = {
    login,
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);