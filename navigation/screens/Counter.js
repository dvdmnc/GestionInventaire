import React, { useState, useCallback } from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Counter = React.memo(({ element }) => {
  const [quantity, setQuantity] = useState(0);
  const navigation = useNavigation();

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }, [quantity]);

  const handleCommanderPress = useCallback(() => {
    const selectedQuantity = quantity;
    setQuantity(0);

    navigation.navigate("Patients", {
      screen: "Commande de la semaine",
      params: {
        element,
        Quantity: selectedQuantity,
      },
    });
  }, [element, quantity, navigation]);

  return (
    <View style={{ flexDirection: "row" }}>
      <Button onPress={handleDecrement} title="-" />
      <Text> </Text>
      <Text style={{ textAlignVertical: "center" }}>{quantity}</Text>
      <Text> </Text>
      <StatusBar />
      <Button onPress={handleIncrement} title="+" />
      <Text> </Text>
      <Button title="Commander" onPress={handleCommanderPress} />
    </View>
  );
});

export default Counter;




