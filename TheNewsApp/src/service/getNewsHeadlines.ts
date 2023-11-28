import Config from 'react-native-config';

export async function getCategoryList(category: string) {
  const apiKey = Config.REACT_APP_API_KEY;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`,
    );
    if (response?.status === 200) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    return error;
  }
}
