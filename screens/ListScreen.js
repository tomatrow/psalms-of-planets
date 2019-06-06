import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  StyleSheet
} from "react-native";
import ListItem from "../components/ListItem.js";

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: "Planets"
  };

  state = {
    loading: false,
    error: false,
    planets: [],
    nextUrl: "https://swapi.co/api/planets"
  };

  _loadNextPage = async () => {
    const url = this.state.nextUrl;
    if (!url) return;
    try {
      const response = await fetch(url);
      const page = await response.json();
      const newPlanets = this.state.planets.concat(page.results);

      this.setState({
        loading: false,
        planets: newPlanets,
        nextUrl: page.next
      });
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  };

  _keyExtractor = (item, index) => item.name;

  _onPressItem = index => {
    this.props.navigation.navigate("Details", this.state.planets[index]);
  };

  _onEndReached = ({ distanceFromEnd }) => {
    this._loadNextPage();
  };

  _renderItem = ({ index, item, separators }) => {
    const { name, diameter } = item;
    return (
      <ListItem
        id={index}
        number={index + 1}
        title={name}
        subtitle={`${diameter} km`}
        onPressItem={this._onPressItem}
      />
    );
  };

  componentWillMount = async () => {
    await this._loadNextPage();
  };

  render() {
    const { planets, loading, error } = this.state;

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>Failed to load planets!</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={planets}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});
