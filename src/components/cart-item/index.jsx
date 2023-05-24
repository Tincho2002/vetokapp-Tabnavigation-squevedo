import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>qty: {item.quantity}</Text>
          <Text style={styles.price}>USD {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.brightRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
