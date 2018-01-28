/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import NavigationBar from "./common/NavigationBar";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={"as"} statusBar={{
                        backgroundColor: 'red',
                        barStyle: 'light-content',
                        hidden: false
                    }}>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            selectedTitleStyle={{ color: 'red' }}
                            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'red' }]}
                                source={require('./res/images/ic_polular.png')} />}
                            bageText="1"
                            title="Home"
                            onPress={() => this.setState({ selectedTab: 'home' })}>
                            <View style={styles.page1} />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'profile'}
                            selectedTitleStyle={{ color: 'yellow' }}
                            renderIcon={() => <Image style={styles.image}
                                source={require('./res/images/ic_contacts.png')} />}
                            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'yellow' }]}
                                source={require('./res/images/ic_contacts.png')} />}
                            bageText="2"
                            title="contacts"
                            onPress={() => this.setState({ selectedTab: 'profile' })}>
                            <View style={styles.page2} />
                        </TabNavigator.Item>
                    </TabNavigator>
                </NavigationBar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    image: {
        width: 22,
        height: 22
    }
});
// {/*selected={this.state.selectedTab === 'home'}*/}