import {View, Text, FlatList, ListRenderItemInfo, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Styles} from './style';
import {CatItems, CatType, categories} from '../../utils/appConstants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getCategoryList} from '../../service/getNewsHeadlines';
import {AppScreens} from '../../navigation/screens';
import {formatDate} from '../../utils/helper';

export const Home = ({navigation}) => {
  const [catList, setCatList] = useState([]);
  const [loadingUpdate, setLoadingUpdate] = useState({
    isLoading: false,
    category: '',
  });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const listCategoryItems = async (item: CatType) => {
    setSelectedCategory(item?.category);
    if (item?.category) {
      setLoadingUpdate({
        isLoading: true,
        category: item.category,
      });
      const data = await getCategoryList(item.category);
      if (data?.articles) {
        setCatList(data.articles);
        setLoadingUpdate({
          isLoading: false,
          category: '',
        });
      }
    }
  };
  const renderCategories = ({item}: ListRenderItemInfo<CatType>) => {
    return (
      <TouchableOpacity
        style={
          selectedCategory === item?.category
            ? [Styles.categoryTile, {backgroundColor: '#98ff98'}]
            : Styles.categoryTile
        }
        onPress={() => listCategoryItems(item)}>
        <Text style={Styles.categoryText}>{item?.category}</Text>
      </TouchableOpacity>
    );
  };

  const renderCategoryItems = ({item, index}: ListRenderItemInfo<CatItems>) => {
    const isSelected = selectedItems.includes(item?.title);
    return (
      <TouchableOpacity
        style={Styles.articleTile}
        onPress={() =>
          navigation.navigate(AppScreens.NewsDetailScreen.name, {news: item})
        }>
        <Text style={Styles.articleTitle}>{item?.title}</Text>
        <View style={Styles.authorView}>
          <Text style={Styles.authorText}>{'Author: '}</Text>
          <Text
            style={Styles.articleAuthor}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.author ?? 'Nil'}
          </Text>
        </View>
        <Text style={Styles.articlePublishedAt}>
          {formatDate(item?.publishedAt)}
        </Text>
        {item?.urlToImage ? (
          <Image source={{uri: item?.urlToImage}} style={Styles.articleImage} />
        ) : null}
        <TouchableOpacity
          style={Styles.readLater}
          onPress={() => readLater(item, index)}>
          <Text style={Styles.readLaterText}>
            {isSelected ? 'Added to Read Later' : 'Read Later'}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  async function readLater(item: CatItems, index: number) {
    if (item) {
      await AsyncStorage.setItem(index.toString(), JSON.stringify(item));
      const isSelected = selectedItems.includes(item.title);

      if (isSelected) {
        setSelectedItems(selectedItems.filter(title => title !== item.title));
      } else {
        setSelectedItems([...selectedItems, item.title]);
      }
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.newsView}>
        <Text style={Styles.newsText}>News App</Text>
      </View>
      <View style={Styles.categoriesView}>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          horizontal
          keyExtractor={item => item?.id?.toString()}
          style={Styles.categoryList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {selectedItems?.length ? (
        <TouchableOpacity
          style={Styles.readLater}
          onPress={() => navigation.navigate(AppScreens.ReadLaterScreen.name)}>
          <Text style={Styles.seeReadLater}>See Read Later</Text>
        </TouchableOpacity>
      ) : null}
      {loadingUpdate.isLoading ? (
        <Text
          style={
            Styles.categoriesText
          }>{`Fetching ${loadingUpdate.category}...`}</Text>
      ) : (
        <View style={Styles.categoryListView}>
          <FlatList
            data={catList}
            renderItem={renderCategoryItems}
            extraData={catList}
            keyExtractor={item => item.title}
            style={Styles.categoryList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
