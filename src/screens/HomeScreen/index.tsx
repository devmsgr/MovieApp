/* eslint-disable react-native/no-inline-styles */
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
import ListView from '../../components/ListView';

type MovieType = {title: string; id: number; poster_path: string};
interface MovieItem {
  title: string | null;
  poster_path: string;
  id: number;
}

const HomeScreen: React.FC = () => {
  const {i18n} = useTranslation();
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const dispatch: AppDispatch = useAppDispatch();
  const movies = useSelector((state: RootState) => state.moviesData.movies);
  const loading = useSelector((state: RootState) => state.moviesData.loading);
  const error = useSelector((state: RootState) => state.moviesData.error);

  useEffect(() => {
    setMovieList([...movieList, ...movies]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  useEffect(() => {
    if (!loading) {
      dispatch(fetchPopularMovie({language: i18n.language, page: page}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const fetchMoviesData = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  const renderItem: ListRenderItem<MovieItem> = useCallback(
    ({item}: {item: MovieItem}) => {
      return <ListView title={item?.title} poster_path={item?.poster_path} />;
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
        data={movieList}
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
