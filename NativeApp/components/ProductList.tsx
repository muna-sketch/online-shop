import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import Product from "./Product";
import { getAllProducts } from "@/api/products/products";

const ProductList = () => {
  /**VARIABLES */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**FUNCTIONS */
  /**Flatlist renderItem functions */
  const renderItem = useCallback(
    ({ item }: any) => (
      <Product
        product_title={item.product_title}
        description={item.description}
      />
    ),
    []
  );

  /** Fetch products from API */
  const fetchProducts = async () => {
    const {
      data,
      loading: apiLoading,
      error: apiError,
    } = await getAllProducts();

    if (data) {
      setProducts(data);
    }

    if (loading) {
      setLoading(apiLoading);
    }

    if (error) {
      setError(apiError);
    }
  };

  /**Load data */
  useEffect(() => {
    fetchProducts();
  }, []);

  /**Loading state */
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  /**Error state */
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  /**COMPONENT */
  return (
    <FlatList
      data={products}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      maxToRenderPerBatch={4}
      horizontal
    />
  );
};

/**STYLES */
const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
});

export default ProductList;
