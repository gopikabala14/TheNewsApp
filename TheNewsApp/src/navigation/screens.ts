import { Home } from "../screens/Home/Home";
import { NewsDetail } from "../screens/NewsDetail/NewsDetail";
import { ReadLater } from "../screens/ReadLater/ReadLater";


export const AppScreens = {
    HomeScreen: {
        component: Home,
        name:'Home'
    },
    NewsDetailScreen: {
        component: NewsDetail,
        name:'News Details'
    },
    ReadLaterScreen: {
        component: ReadLater,
        name:'Read Later'
    },
}