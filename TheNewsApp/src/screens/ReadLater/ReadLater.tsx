import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  Image,
  Linking,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './style';
import {CatItems, CatType, categories} from '../../utils/appConstants';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {getCategoryList} from '../../service/getNewsHeadlines';
import {formatDate} from '../../utils/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppScreens} from '../../navigation/screens';

export const ReadLater = ({navigation}) => {
  const [loadOffLineNews, setLoadOffLineNews] = useState([]);
  
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const values = await AsyncStorage.multiGet(keys);
      const data = keys.map((key, index) => ({
        key,
        value: values[index][1],
      }));
      setLoadOffLineNews(data);
    } catch (error) {
        setLoadOffLineNews([]);
    }
  };
  const renderReadLater = ({item}) => {
    const data = JSON.parse(item?.value);
    return (
      <TouchableOpacity style={Styles.articleTile} onPress={() => {
        navigation.navigate(AppScreens.NewsDetailScreen.name, {news: data})
      }}>
        <Text style={Styles.articleTitle}>{data?.title}</Text>
        <View style={Styles.authorView}>
          <Text style={Styles.authorText}>{'Author: '}</Text>
          <Text
            style={Styles.articleAuthor}
            numberOfLines={2}
            ellipsizeMode="tail">
            {data.author ?? 'Nil'}
          </Text>
        </View>
        <Text style={Styles.articlePublishedAt}>
          {formatDate(data?.publishedAt)}
        </Text>
        {data?.urlToImage ? (
          <Image source={{uri: data?.urlToImage}} style={Styles.articleImage} />
        ) : null}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <FlatList data={loadOffLineNews} renderItem={renderReadLater} />
      </ScrollView>
    </SafeAreaView>
  );
};
