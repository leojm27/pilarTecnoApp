import React, { Component } from 'react';
import { Dimensions, StyleSheet, ImageBackground, View, Alert, } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { actions } from '../store'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class PostCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    _send = () => {
        const { title, body } = this.state;
        (title != '' && body != '')
            ? (this.props.createPost({ title, body }).then(() => {
                this.props.navigation.navigate('Posts');
            }))
            : (alert('you must complete the fields'))
    }

    render() {
        return (
            <ImageBackground
                style={{ height, width, }}
                source={require('../assets/images/fondo1.jpg')}
            >

                <View style={{
                    margin: 20,
                    padding: 5
                }}>
                    <Input
                        placeholder='Title'
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
                    <Input
                        placeholder='Description'
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
                            title='Post'
                            onPress={() => this._send()}
                            style={{ marginTop: 20, marginHorizontal: 50 }} />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
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
    createPost: (data) =>
        dispatch(actions.posts.createPost(data)),
})
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)((PostCreate))
