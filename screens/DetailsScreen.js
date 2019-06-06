import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name", "Details")
    };
  };
  render() {
    const {
      diameter,
      population,
      surface_water,
      climate,
      terrain,
      gravity,
      rotation_period,
      orbital_period
    } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.property}>
          <Text style={styles.name}>Diameter:</Text>
          <Text style={styles.value}>{diameter} km</Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.name}>Population:</Text>
          <Text style={styles.value}>{population}</Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.name}>Gravity:</Text>
          <Text style={styles.value}>{gravity}</Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.name}>Climate:</Text>
          <Text style={styles.value}>{climate}</Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.name}>Terrain:</Text>
          <Text style={styles.value}>{terrain}</Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.name}>Rotation Period:</Text>
          <Text style={styles.value}>{rotation_period} hours</Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.name}>Orbital Period:</Text>
          <Text style={styles.value}>{orbital_period} days</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  property: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: "5%"
  },
  name: { flex: 0, textAlign: "justify" },
  value: { flex: 1, textAlign: "left" }
});
