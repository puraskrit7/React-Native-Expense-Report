import React  from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Picker,
  TextInput,
  ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Ant from "react-native-vector-icons/AntDesign";
import RecordItem from "../components/RecordItem";

export default function AddItems({navigation})  {
    
      const { navigate } = navigation;
      const RecordItems = [
         {
          name:"bulb",
          title: "Electricity",
          price: "$ 20.00",
         },
         {
          name:"car-sport",
          title: "Taxi",
          price: "$ 20.00",
         },
         {
          name:"restaurant",
          title: "Food & Drinks",
          price: "$ 30.00",
         },
         {
          name: "train-sharp",
          title: "Train",
          price: "$ 10.00",
        },
         {
          name: "home",
          title: "Home Rent",
          price: "$ 40.00",
         },
      ];
      const [list, setList] = React.useState(RecordItems);
      const [number, setNumber] = React.useState(null);
      const [selectedValue, setSelectedValue] = React.useState("java");
      function handleAdd() {
        const newList = list.concat({
            name:"restaurant",
            title: "Food & Drinks",
            price: `$ ${number}.00`,
        });
            setList(newList);
      }
      function handleChange(value) {
            setNumber(value);
      }
  return (
    <ImageBackground
      source={require("../images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView >
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            marginTop: 30,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{ flexDirection: "row", padding: 20, alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => navigate("Home", { name: "Home" })}
            >
              <Icon name="close" size={40} color="#00192D" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                marginLeft: 50,
              }}
            >
              Add Transaction
            </Text>
          </View>
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
              <View>
                   <Icon Icon name="restaurant" size={40}></Icon>
               
              </View>
              {/* <View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Food & Drinks
                </Text>
              </View> */}
            <View>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150,alignItems: "center", marginLeft: 10,}}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Food & Drink" value="java" />
                  <Picker.Item label="Electricity" value="js" />
                  <Picker.Item label="Taxi" value="js" />
                  <Picker.Item label="Train" value="js" />
                  <Picker.Item label="House Rent" value="js" />
              </Picker>
            </View>
            </View>
            <Ant name="down" size={40} color="#00192D" />
          </View>
          <View style={{ flexDirection: "row", padding: 30 }}>
            <View>
              <Text style={{fontWeight:"700",fontSize: 25,marginTop:20}}>$</Text>
            </View>
            <TextInput
              placeholder="amount"
              keyboardType="numeric"
              value={number}
              onChangeText={handleChange}
              style={styles.textinput}
            ></TextInput>
            <View style={{marginHorizontal:125}}>
              <Ant.Button
                name="rightcircleo"
                color="black"
                            backgroundColor="white"
                            size={50}
                onPress={() => handleAdd()}
              ></Ant.Button>
            </View>
          </View>
          
          <View style={styles.recordscontainer}>
            <Text style={{ padding: 20, fontSize: 25, fontWeight: "500" }}>
              Last Records
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                width: "90%",
                opacity: 0.5,
                marginLeft: 20,
              }}
            ></View>
            {list.map((item) => {
              return <RecordItem pass={item} />;
            })}
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
    );
  
}
const styles = StyleSheet.create({
  recordscontainer: {
    bottom: 20,
    width: "90%",
    backgroundColor: "cyan",
    marginHorizontal: 20,
    borderRadius: 30,
    marginTop: 40,
  },
  textinput: {
    fontSize: 30,
    marginLeft: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
});