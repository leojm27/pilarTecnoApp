import React, { Component } from 'react';
import { Dimensions, StyleSheet, ImageBackground, View, Text, } from 'react-native';
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
            body: '',
            idState: 0,
        }
    }

    componentDidMount = () => {
        const { item } = this.props.route.params;
        (item)
            ? this.setState({
                title: item.title,
                body: item.body,
                id: item.id
            })
            : (null)
    }

    _updatePost = () => {
        const { title, body, id } = this.state
        this.props.updatePost({ title, body, id }).then(() => {
            this.props.navigation.navigate('Posts')
        });
    }

    render() {
        return (
            <ImageBackground
                style={{
                    height, width,
                }}
                source={require('../assets/images/fondo1.jpg')}
            >
                <View style={{
                    margin: 20,
                    padding: 5
                }}>

                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Input
                        inputContainerStyle={{
                            width: width * 0.8,
                            alignItems: 'flex-start',
                            alignSelf: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{
                            color: 'white',
                            marginLeft: 15
                        }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ title: value })}
                    />
                    <Text style={styles.title}>
                        Description
                    </Text>
                    <Input
                        inputContainerStyle={{
                            width: width * 0.8,
                            alignItems: 'flex-start',
                            alignSelf: 'center',
                            height: height * 0.4,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{
                            color: 'white',
                            marginLeft: 15
                        }}
                        placeholderTextColor='#ccc'
                        value={this.state.body}
                        onChangeText={(value) => this.setState({ body: value })}
                        multiline
                        numberOfLines={2}
                    />

                    <View style={{ marginHorizontal: 50 }}>
                        <Button
                            title='Save'
                            onPress={() => this._updatePost()}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    /*text: {
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
    },
    containerText: {
        borderRadius: 15,
        justifyContent: 'center',
    },*/
    title: {    ///
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    /*titlecontainer: {
        padding: 10
    },
    bodycontainer: {
        padding: 10
    },*/
})


const mapDispatchToProps = dispatch => ({
    updatePost: (data) =>
        dispatch(actions.posts.updatePost(data)),
})

const mapStateToProps = state => ({
    posts: state.posts.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit))