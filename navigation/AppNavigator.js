import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import ListScreen from "../screens/ListScreen";
import DetailsScreen from "../screens/DetailsScreen";

const SwapiStack = createStackNavigator(
  {
    List: ListScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "List"
  }
);

export default createAppContainer(SwapiStack);
