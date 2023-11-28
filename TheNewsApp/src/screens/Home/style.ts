import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  authorView:{flexDirection: 'row'},
  articleTile:{
    padding:10,
    borderWidth: 0.8,
    borderColor: '#dcb0ff',
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000',  
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  articleImage: {width: windowWidth * 0.85, height: 150, resizeMode:'cover', borderRadius: 10},
  categoriesView: {
    marginVertical: 20,
  },
  newsView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsText: {
    fontSize: 25,
    fontWeight: '800',
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: '800',
    paddingHorizontal:20
  },
  seeReadLater: {
    fontSize: 18,
    fontWeight: '800',
    paddingHorizontal:20,
    alignItems:'flex-end',
    color: 'green',
    justifyContent:'center'
  },
  categoryTile: {
    height: 100,
    width: 150,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000',  
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryList: {margin: 10},
  categoryText: {
    fontSize: 15,
    fontWeight:'900'
  },
  categoryListView: {
    flex:1
  },
  articleTitle: {
    fontSize: 18,
    fontWeight:'600',
    color:'red'
  },
  authorText:{
    color: 'black',
    fontSize:14
  },
  articleAuthor:{
    color: 'black',
    fontWeight:'600',
    fontSize:14,
    flexWrap:'wrap'
  },
  articlePublishedAt:{
    fontSize:14,
    marginVertical:5,
    color: 'black'
  },
  readLater: { alignItems: 'flex-end', justifyContent: 'center', marginVertical: 5},
  readLaterText: {
    color: 'blue',
    fontSize: 14,
    fontWeight:'700'
  }
});
