import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import tw from 'twrnc';
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { BG_IMG_URI } from "@env";


const HomeScreen2 = () => {
	return (
		<SafeAreaView style={tw`h-full w-full`}>
			<ImageBackground source={require(BG_IMG_URI)} resizeMode="cover" style={styles.image}>
				<Header />
				<Body />
				<Footer />
			</ImageBackground>
		</SafeAreaView>
	);
};

export default HomeScreen2

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "center"
	},
})
