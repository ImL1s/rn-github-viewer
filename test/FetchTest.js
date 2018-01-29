import React, { Component } from 'react';
import {
    ListView,
    Platform,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import NavigationBar from '../common/NavigationBar';

export default class FetchTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }
    onLoad(url) {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                });
            })
            .catch(e => {
                alert(e);
                this.setState({
                    result: JSON.stringify(e)
                });
            });
    }

    onSubmit(url, data) {
        fetch(url, {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // ify---为后缀，使……化, 使成
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                });
            })
            .catch(e => {
                alert(e);
                this.setState({
                    result: JSON.stringify(e)
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={'Fetch的使用'} />
                <Text onPress={() => this.onLoad('https://httpbin.org/ip')}>獲取資料</Text>
                <Text onPress={() => 
                this.onSubmit('https://httpbin.org/post', '{ "name": "cxh", "sex": "man" }')}>獲取資料</Text>
                <Text>返回結果:{this.state.result}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tips: {
        fontSize: 18
    }
});