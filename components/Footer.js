import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc';
import { HEADER_ICON_CHAT_URI, HEADER_ICON_PHONE_URI } from "@env";

const Footer = () => {
	return (

			<View style={{
        height: '27.08%', backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center',
      }}>
				<View style={{
	        marginTop: 38, flexDirection: 'row', width: '84.76%', height: '100%',backgroundColor: 'purple'
	      }}>
					<View style={{
						backgroundColor: 'purple'
					}}>
					</View>
					<Image
						style={{width: 21, height: 21, resizeMode: "contain"}}
						source={require(HEADER_ICON_CHAT_URI)}
					/>
					<Text style={{marginHorizontal: 22}}>Lietotāju atbalsts</Text>

					<View style={{
						flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 0, flex:1, paddingRight: 0, backgroundColor: 'white'
					}}>
					<Image
						style={{width: 21, height: 21, resizeMode: "contain"}}
						source={require(HEADER_ICON_PHONE_URI)}
					/>
					<Text style={{marginHorizontal: 22}}>Sadarbībai</Text>
					</View>
				</View>
			</View>
	)
}

export default Footer
