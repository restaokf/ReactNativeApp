import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Geologi</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/kpdtan.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Kepadatan Penduduk</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/suhu.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Suhu Maxiumum Indonesia</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/hutan.jpeg')} style={styles.image} />
                <Text style={styles.caption}>Peta Kawasan Hutan</Text>
            </View>
        </ScrollView>

    );
}
function MapScreen() {
    return (
        <WebView
            source={webmap}
        />

    );
}

function ProfileScreen() {
    return (   
        <View>
            <Portofolio />
        </View>
    );
}

function MahasiswaScreen() {
    return (   
        <View>
            <Getjsonfile />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Map" component={MapScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
                    options={{
                        tabBarLabel: 'Mahasiswa',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="users" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 10,
        alignItems: 'center'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
})

