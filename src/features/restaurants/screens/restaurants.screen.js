import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info.component';

const RestaurantsScreen = ({ ...props }) => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
