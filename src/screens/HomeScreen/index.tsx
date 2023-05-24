import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchPopularMovie} from '../../redux/reducer/movieSlice';
import {RootState, AppDispatch, useAppDispatch} from '../../redux/store';
import styles from './styles';
import Colors from '../../constants/Colors';
import {useTranslation} from 'react-i18next';
import ListItem from '../../components/ListItem';

// type MovieType = {title: string; id: number; poster_path: string};
interface MovieItem {
  title: string | null;
  poster_path: string;
  id: number;
}

const HomeScreen: React.FC = () => {
  const {i18n} = useTranslation();
  const [page, setPage] = useState(1);
  // const [movieList, setMovieList] = useState<MovieType[]>([]);
  const dispatch: AppDispatch = useAppDispatch();
  const movies = useSelector((state: RootState) => state.moviesData.movies);
  const loading = useSelector((state: RootState) => state.moviesData.loading);
  const lastPage = useSelector((state: RootState) => state.moviesData.lastPage);
  const error = useSelector((state: RootState) => state.moviesData.error);

  useEffect(() => {
    console.log('page > lastPage', page, lastPage);
    if (page > lastPage) {
      dispatch(fetchPopularMovie({language: i18n.language, page: page}));
    }
  }, [dispatch, page, i18n.language, lastPage]);

  const fetchMoviesData = () => {
    if (!loading) {
      if (page !== lastPage && page === 1) {
        setPage(lastPage + 1);
      } else {
        setPage(page + 1);
      }
    }
  };

  const renderItem: ListRenderItem<MovieItem> = useCallback(
    ({item}: {item: MovieItem}) => {
      return <ListItem title={item?.title} poster_path={item?.poster_path} />;
    },
    [],
  );
  return (
    <SafeAreaView style={styles.rootContainer}>
      {error && (
        <View style={styles.activityContainer}>
          <Text>{error}</Text>
        </View>
      )}

      <FlatList
        data={movies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoviesData}
      />
      {loading && (
        <View style={styles.activityContainer}>
          <ActivityIndicator
            color={Colors.BLUE}
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
