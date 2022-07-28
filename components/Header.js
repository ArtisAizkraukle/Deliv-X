import React from 'react'
import { View, Text, Image } from 'react-native'
import { HEADER_ICON_MENU_URI, HEADER_ICON_LANGUAGE_URI, HEADER_ICON_USER_URI, HEADER_ICON_MAP_URI, HEADER_ICON_STORE_URII } from "@env";
import tw from 'twrnc';

const Header = () => {
	return (

			<View style={{
        height: '27.6%', backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center',
      }}>
				<View style={{
	        marginTop: 38, flexDirection: 'row', width: '84.76%', height: '100%',backgroundColor: 'purple'
	      }}>
					<View style={{
						backgroundColor: 'purple'
					}}>
						<Image
								style={tw`p-0`, {width: 21, height: 21, resizeMode: "contain"}}
								source={require(HEADER_ICON_MENU_URI)}
							/>
					</View>
					<Text style={{marginHorizontal: 22}}>Deliv-X</Text>

					<View style={{
						flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 0, flex:1, paddingRight: 0, backgroundColor: 'white'
					}}>
						<Image
							style={{width: 21, height: 21, resizeMode: "contain"}}
							source={require(HEADER_ICON_LANGUAGE_URI)}
						/>
						<Image
							style={{width: 21, height: 21, resizeMode: "contain", paddingHorizontal: 14}}
							source={require(HEADER_ICON_USER_URI)}
						/>
						<Image
							style={{width: 21, height: 21, resizeMode: "contain", paddingHorizontal: 14}}
							source={require(HEADER_ICON_MAP_URI)}
						/>
						<Image
							style={{width: 21, height: 21, resizeMode: "contain"}}
							source={require(HEADER_ICON_STORE_URII)}
						/>
					</View>
				</View>
			</View>
	)
}

export default Header
