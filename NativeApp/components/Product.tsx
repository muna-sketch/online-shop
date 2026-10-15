import { Modal, Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { memo, useState } from "react";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

/**Temporary  link for demo image */
const demoImage =
  "https://cdn.mafrservices.com/sys-master-root/h51/hfc/26833613455390/122592_1.jpg?im=Resize=480";

const Product = ({ product_title, description }: any) => {
  /**VARIABLES */
  const [inCart, setInCart] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(1);

  /**FUNCTIONS */
  const addToCart = () => {
    setInCart(true);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 1 ? count - 1 : 1);
    if (count <= 1) setInCart(false);
  };

  const AddCartButton = (
    <Pressable style={styles.button} onPress={addToCart}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </Pressable>
  );

  const IncrementButton = (
    <View style={styles.counterContainer}>
      <Pressable onPress={decrement}>
        <AntDesign name="minussquare" size={32} color="#1bf20f" />
      </Pressable>
      <Text style={styles.countText}>{count}</Text>
      <Pressable onPress={increment}>
        <AntDesign name="plussquare" size={32} color="#1bf20f" />
      </Pressable>
    </View>
  );

  /**COMPONENT */
  return (
    <View style={[styles.innerContainer]}>
      {/*Product Image & Text */}
      <Pressable onPress={() => setModalVisible(true)}>
        <Image source={{ uri: demoImage }} style={styles.itemImage} />
        <Text style={styles.itemText}>{product_title}</Text>
      </Pressable>

      {/*Buttons */}
      {!inCart ? AddCartButton : IncrementButton}

      {/* Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Android back button handler
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)} // Close when clicking outside
        >
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)} // Close when clicking "X"
            >
              <FontAwesome6 name="xmark" size={28} color="red" />
            </Pressable>
            <Image source={{ uri: demoImage }} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{product_title}</Text>
            <Text style={styles.modalDescription}>{description}</Text>

            {/*Buttons */}
            {!inCart ? AddCartButton : IncrementButton}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

/**STYLES */
const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "white",
    width: 150,
    marginHorizontal: 4,
    padding: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
    textAlign: "center",
  },
  itemImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#f9480b",
    paddingVertical: 5,
    width: 140,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "auto",
  },
  countText: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default memo(Product);
