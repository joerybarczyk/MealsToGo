import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantInfo = ({ restaurant = {}, ...props }) => {
  const {
    name = 'Hokkaido',
    icon,
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/1c/a0/1d/f6/photo2jpg.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/jn0HQE1qSSNmM2o5Gx1NJA/258s.jpg',
    ],
    address = '3140 S Main St, Harrisonburg, VA 22801',
    isOpen = true,
    rating = 4.4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Title title={name} subtitle={address} />
    </Card>
  );
};

export default RestaurantInfo;
