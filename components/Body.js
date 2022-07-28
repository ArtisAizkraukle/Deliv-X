import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import tw from 'twrnc';
import { HEADER_ICON_PUFF_URI } from "@env";

const Body = () => {
	return (

      <View style={{ height: '45.32%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue' }} >
				<View style={{ width: '84.76%', height: '100%', backgroundColor: 'green' }} >
				<Image
					style={styles.responsiveImage}
					source={require(HEADER_ICON_PUFF_URI)} />
				</View>
			</View>
	)
}

export default Body

const styles = StyleSheet.create({

  responsiveImage: {
    width: '100%',
    // Without height undefined it won't work
    height: '100%',
    // figure out your image aspect ratio
  },

});
