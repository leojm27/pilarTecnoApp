
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, ActivityIndicator, FlatList, View, ImageBackground } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { actions } from '../store';
import { connect } from 'react-redux';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Posts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        (!this.props.posts)
            ? this.props.getPosts()
            : (null)
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <View style={{
            margin: 20,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 8,
            padding: 5
        }}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
            <Divider />
            <View style={styles.bodycontainer}>
                <Text style={styles.text}>
                    {item.body}
                </Text>
            </View>
            <View>
                <Button title='detail'
                    onPress={() => this.props.navigation.navigate('PostDetail', { item })}
                />
            </View>
        </View>
    )


    render() {
        return (
            <View>
                {
                    !this.props.posts
                        ? <ActivityIndicator />
                        : <ImageBackground
                            style={{ height, width, }}
                            source={require('../assets/images/fondo1.jpg')}>
                            <View style={{ flex: 1, marginTop: 20, marginBottom: 130 }}>
                                <Button title='Create New Post'
                                    onPress={() => this.props.navigation.navigate('PostCreate')} />
                                <FlatList
                                    style={{ fontSize: 50 }}
                                    keyExtractor={this.keyExtractor}
                                    data={this.props.posts.reverse()}
                                    renderItem={this.renderItem}
                                />
                            </View>
                        </ImageBackground>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text: { 
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
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
    getPosts: () =>
        dispatch(actions.posts.getPosts()),
})
const mapStateToProps = state => ({
    posts: state.posts.posts,
})
export default connect(mapStateToProps, mapDispatchToProps)((Posts))