import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
} from "react-native";

export default function RecordItem(props) {
    // render() {
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 30,
                paddingTop: 30,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon Icon name={props.pass.name} size={40} ></Icon> 
                </View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  {props.pass.title}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#e76f51",
                }}
              >
                {props.pass.price}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                width: "85%",
                opacity: 0.3,
                marginLeft: 20,
                marginTop: 20,
              }}
            ></View>
          </View>
        );
}