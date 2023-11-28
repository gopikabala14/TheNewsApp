import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
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
  authorView:{
    flexDirection:'row'
  },
  articleImage: {width: windowWidth * 0.85, height: 150, resizeMode:'cover', borderRadius: 10},
});