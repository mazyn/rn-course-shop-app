import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
