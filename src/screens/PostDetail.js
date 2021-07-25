import React, { Component } from 'react';
import { Dimensions, StyleSheet, ImageBackground, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { connect } from 'react-redux'
import { actions } from '../store'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class PostDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    _deletePost = () => {
        const { item } = this.props.route.params;
        const { id } = item;

        this.props.delpost({ id })
            .then(() => {
                this.props.navigation.navigate('Posts')
            })
            .catch((e) => console.log("error: ", e))
    }

    render() {
        const { item } = this.props.route.params;
        return (
            <ImageBackground
                style={{
                    height, width,
                }}
                source={require('../assets/images/fondo1.jpg')}
            >


                <View style={{
                    margin: 20,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: 8,
                    padding: 5
                }}>
                    <View style={styles.titlecontainer}>
                        <Text style={{ ...styles.title, fontSize: 24 }}>
                            Title
                        </Text>
                        <Text style={{ ...styles.title, textAlign: 'left', fontWeight: 'normal' }}>
                            {item.title}
                        </Text>
                    </View>
                    <Divider />
                    <View style={styles.bodycontainer}>
                        <Text style={{ ...styles.title, fontSize: 24 }}>
                            Description
                        </Text>
                        <Text style={{ ...styles.title, textAlign: 'left', fontWeight: 'normal' }}>
                            {item.body}
                        </Text>
                    </View>
                    <View >
                        <Button
                            title='Edit'
                            onPress={() => this.props.navigation.navigate('PostEdit', { item })}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title='Delete'
                            onPress={() => this._deletePost()}
                        />
                    </View>

                </View>

            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    title: {   
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    titlecontainer: {
        padding: 10
    },
    bodycontainer: {
        padding: 10
    },
})

const mapDispatchToProps = dispatch => ({
    delpost: (data) =>
        dispatch(actions.posts.delpost(data)),
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((PostDetail))