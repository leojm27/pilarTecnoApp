import React, { Component } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, ImageBackground, ViewBase, View, Text, } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { actions } from '../store'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class PostEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <View>
                <Text>PostEdit.js</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        // color:'#fff',
        textAlign: 'center'
    },
    content: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const mapDispatchToProps = dispatch => ({
    updatePost: (data) =>
        dispatch(actions.posts.updatePost(data)),
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit))