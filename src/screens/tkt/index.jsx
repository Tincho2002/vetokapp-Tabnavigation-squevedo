import { useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Card, Login, NumberContainer } from "../../components";

const MIN_NUMBER = 1000000;
const MAX_NUMBER = 99999999;

const generateRandomTkt = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomTkt = Math.floor(Math.random() * (max - min) + min);
  if (randomTkt === exclude) {
    return generateRandomTkt(min, max, exclude);
  } else {
    return randomTkt;
  }
};

const Tkt = ({ userDni }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomTkt(MIN_NUMBER, MAX_NUMBER, userDni)
  );
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Number Ticket</Text>
        <NumberContainer number={currentGuess} />
        <Login style={styles.content} />
      </Card>
    </View>
  );
};

export default Tkt;
