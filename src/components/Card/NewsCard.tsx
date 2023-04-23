import React from 'react';
import newsCardStyle from './NewsCard.style';

import { Image, Pressable, Text, View, Linking } from 'react-native';
import { NewsCardItem } from '../../interface/news';

interface NewsCardProps {
  data: NewsCardItem;
}

function NewsCard({ data }: NewsCardProps) {
  const { title, description, urlToImage, url } = data;

  if (!(urlToImage && description && title)) {
    return null;
  }
  return (
    <>
      <View style={newsCardStyle.container}>
        <Pressable onPress={() => Linking.openURL(url)}>
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
        </Pressable>
      </View>
    </>
  );
};

export default NewsCard;
