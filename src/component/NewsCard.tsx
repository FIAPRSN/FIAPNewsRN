import React from 'react';
import newsCardStyle from './NewsCard.style';

import { Image, Text, View } from 'react-native';
import { NewsCardItem } from '../interface/news';

interface NewsCardProps {
  data: NewsCardItem;
}

function NewsCard({ data }: NewsCardProps) {
  const { title, description, urlToImage } = data;

  if (!(urlToImage && description && title)) {
    return null;
  }
  return (
    <>
      <View style={newsCardStyle.container}>
        <View>
          <Image
            resizeMode="cover"
            style={newsCardStyle.cardImage}
            source={{ uri: urlToImage }}
          />
          <View style={newsCardStyle.imageOverlay}>
          </View>
        </View>
        <View style={newsCardStyle.cardTextContainer}>
          <Text style={newsCardStyle.cardTitle}>{title}</Text>
          <Text style={newsCardStyle.cardDescription}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default NewsCard;
