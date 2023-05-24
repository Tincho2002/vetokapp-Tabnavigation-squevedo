import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../../constants";
import { Tkt } from "../../screens";

const Stack = createNativeStackNavigator();

const TicketNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ticket"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Inter-Bold",
        },
      }}
    >
      <Stack.Screen name="Ticket" component={Tkt} />
    </Stack.Navigator>
  );
};

export default TicketNavigator;
