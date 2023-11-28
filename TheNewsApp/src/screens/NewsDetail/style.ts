import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  newsImage: {
    width: windowWidth * 0.9, 
    height: 200, 
    resizeMode:'cover', 
    borderRadius: 10, 
    marginVertical: 10
},
  newsTitle: {
    fontSize: 20,
    fontWeight:'700',
    color: 'red'
  },
  newsAuthor: {
    fontSize: 17,
    fontWeight:'600',
    color: 'black'
  },
  newsDesciption: {
    fontSize: 18,
    fontStyle:'italic',
    color: 'green'
  },
  newsContent: {
    fontSize: 18,
    color: 'black', 
    marginVertical: 13
  },
  newsTime: {
    fontSize: 17,
    color: 'black', 
    marginVertical: 5
  },
  newsUrl: {
    fontSize: 15,
    color: 'blue', 
    marginVertical: 5
  },
  more:{
    fontSize: 17,
    color: 'red',
  }
})