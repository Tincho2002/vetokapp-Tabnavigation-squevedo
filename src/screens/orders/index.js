import { FlatList, View } from "react-native";

import { ORDERS } from "../../constants";
import { OrderItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Orders = () => {
  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onRemove={onRemove} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Orders;
