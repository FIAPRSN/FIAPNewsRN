import React, { useEffect, useState } from 'react';
import { newsSearch } from '../../api/newsapi';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { NewsCardItem } from '../../interface/news';
import NewsCard from '../../components/Card/NewsCard';
import SearchScreenStyles from './SearchScreen.style';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Appbar } from 'react-native-paper';

interface SearchScreenProps { }

interface CardItem {
  item: NewsCardItem;
}

function SearchScreen() {
  const [inputTerm, setInputTerm] = useState('');
  const [newsData, setNewsData] = useState([]);

  const searchInputTerm = () => {
    if (inputTerm === '') return;
    newsSearch(`${inputTerm}`)
      .then(data => {
        setNewsData(data);
      });
  };

  useEffect(() => {
    return () => {
      setNewsData([]);
      setInputTerm('');
    };
  }, []);

  return (
    <SafeAreaView style={SearchScreenStyles.backgroundStyle}>
      <View>
        <Appbar.Header elevated>
          <Appbar.Content titleStyle={{ textAlign: 'center', fontWeight: 'bold' }} title="Search" />
        </Appbar.Header>
        <SearchBar
          inputTerm={inputTerm}
          setInputTerm={setInputTerm}
          searchInputTerm={searchInputTerm}
        />
        {newsData.length > 1 ? (
          <FlatList
            data={newsData}
            renderItem={({ item }: CardItem) => <NewsCard data={item} />}
            keyExtractor={item => item.title}
          />
        ) : (
          <Text></Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
