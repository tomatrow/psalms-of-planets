import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.post}>
        <View style={styles.postNumber}>
          <Text>{this.props.number}</Text>
        </View>
        <View style={styles.postContent}>
          <Text style={{ color: textColor }}>{this.props.title}</Text>
          <Text style={styles.postBody}>{this.props.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    flexDirection: "row"
  },
  postNumber: {
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  postContent: {
    flex: 1,
    paddingVertical: 25,
    paddingRight: 15,
    borderBottomWidth: 3,
    borderBottomColor: "#EEE"
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: "grey"
  }
});
