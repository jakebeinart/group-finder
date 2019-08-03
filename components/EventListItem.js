import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
	outsideListItem: {
		flexDirection: 'row',
		height: 130,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#f0f0f0'
	},
	imageStyling: {width: 110,
		height: 110,
		margin: 10,
		borderRadius: 5
	},
	detailsStyling: {
		margin: 10,
		flex: 1
	},
	detailsTitleStyling: {
		fontWeight: 'bold',
		fontSize: 18,
		color: 'black',
		marginBottom: 5
	},
	detailsTextStyling: {
		color: 'gray',
		fontSize: 12
	},
	iconsStyling: {
		margin: 10,
		width:50
	},
});

/*
Props: eventTitle, eventImage, eventLocation, eventTime, eventType, maxAttendees, currentAttendees

*/

const EventListItem = (props) => {
  return (
    <View style={styles.outsideListItem}>
		{props.eventImage && 
			<Image
				style={styles.imageStyling}
				source={{uri: props.eventImage}}
			/>
		}
		<View style={styles.detailsStyling}>
			<Text style={styles.detailsTitleStyling}>{props.eventTitle}</Text>
			<View style={{flexDirection:'row', marginBottom: 5}}>
				<Icon
				  size={12}
				  name='map-marker'
				  type='font-awesome'
				  color='gray'
				  iconStyle={{marginRight: 5, marginLeft: 2, marginTop: 2}}
				/>
				<Text style={styles.detailsTextStyling}>{props.eventLocation}</Text>
			</View>
			<View style={{flexDirection:'row'}}>
				<Icon
				  size={12}
				  name='ios-time'
				  type='ionicon'
				  color='gray'
				  iconStyle={{marginRight: 5, marginTop: 3}}
				/>
				<Text style={styles.detailsTextStyling}>{props.eventTime}</Text>
			</View>
			
		</View>
		<View style={styles.iconsStyling}>
			<View style={{flexDirection:'row'}}>
				<Text style={ styles.detailsTextStyling}>{props.currentAttendees}{props.maxAttendees && "/" + props.maxAttendees}</Text>
				<Icon
				  size={12}
				  name='user'
				  type='font-awesome'
				  color='gray'
				  iconStyle={{marginLeft: 5, marginTop: 3, right: 0}}
				/>
			</View>
			<Icon
				  size={20}
				  name='comments'
				  type='font-awesome'
				  color='gray'
				  iconStyle={{marginTop: 30}}
				/>
		</View>
	</View>
  );
};

export default EventListItem;