import {View, Text, Image, Linking} from 'react-native';
import React, {useLayoutEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './style';
import {CatItems, CatType, categories} from '../../utils/appConstants';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {formatDate} from '../../utils/helper';

export const NewsDetail = ({route}) => {
  const [news, setNews] = useState<CatItems>();
  useLayoutEffect(() => {
    if (route && route?.params && route?.params?.news) {
      setNews(route.params.news);
    }
  }, [route]);

  const openExternalURL = async (url: string) => {
    await Linking.openURL(url);
  }; 
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Text style={Styles.newsTitle}>{news?.title}</Text>
        <Text style={Styles.newsAuthor}>{news?.author}</Text>
        <Text style={Styles.newsTime}>{formatDate(news?.publishedAt)}</Text>
        <Image source={{uri: news?.urlToImage}} style={Styles.newsImage} />
        <Text style={Styles.newsDesciption}>{news?.description}</Text>
        <Text style={Styles.newsContent}>{news?.content}</Text>
        <Text style={Styles.more}>{'Continue reading on:'}</Text>
        <TouchableOpacity onPress={()=> news && openExternalURL(news?.url)}>
        <Text style={Styles.newsUrl} >{news?.url}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
