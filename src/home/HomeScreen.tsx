import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { newsFetch } from '../api/newsapi';
import { NewsCardItem } from '../interface/news';

import NewsCard from '../component/NewsCard';
import homeStyles from './HomeScreen.style';

interface CardItem {
  item: NewsCardItem;
}

function HomeScreen() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    newsFetch()
      .then(data => {
        setNewsData(data);
      })
    return () => {
      setNewsData([]);
    };
  }, []);

  return (
    <SafeAreaProvider style={homeStyles.backgroundStyle}>
      <View>
        <Appbar.Header elevated>
          <Appbar.Content titleStyle={{ textAlign: 'center', fontWeight: 'bold' }} title="Android News" />
        </Appbar.Header>
        {newsData.length > 1 ? (
          <>
            <FlatList
              data={newsData}
              renderItem={({ item }: CardItem) => <NewsCard data={item} />}
              keyExtractor={item => item.title}
            />
          </>
        ) : (
          <Text> Oops... </Text>
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;