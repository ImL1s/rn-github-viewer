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

export default class ListViewTest extends Component {

    constructor(props) {
        super(props);
        const datasource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 != row2
        });
        this.state = {
            datasource: datasource.cloneWithRows(listViewMockData)
        }
    }
    renderRow(item) {
        return (
            <View>
                <Text>{item.fullName}</Text>
                <Text>{item.email}</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
            <NavigationBar title={'ListViewTesting'} />
                <ListView
                    dataSource={this.state.datasource}
                    renderRow={(item) => this.renderRow(item)} />
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

const listViewMockData = [
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "JUNNY"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "FRANK"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "ARCHER"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    },
    {
        "email": "abc.gmail.com",
        "fullName": "SAM"
    }
];