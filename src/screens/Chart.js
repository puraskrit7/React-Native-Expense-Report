import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import Ent from 'react-native-vector-icons/Entypo';
const data={
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [
            1200,1400,1300,1500,1800,1400
        ]
      }
    ]
  }
export default class Chart extends React.Component {
    render() {
          const {navigate} = this.props.navigation;
        return (
            <ImageBackground
                source={require("../images/back.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={{ paddingTop: 50 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => navigate('Home', { name: 'Home' }) }>
                            <Ent Icon name="cross" size={50} ></Ent>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingTop: 20, paddingHorizontal:30 }}>
                    <Text style={{
                        color:'#fff',
                        fontSize:30,
                        fontWeight:'700',
                     }}>My Expense</Text>
                </View>
                <View style={{ paddingTop: 40,flexDirection:'row', paddingHorizontal:50 }}>
                    
                    <Ent Icon name="calendar" size={30} ></Ent>
                    <Text style={{
                        color:'#fff',
                        fontSize:30,
                        fontWeight: '700',
                        marginBottom:5,
                     }}>   Nov 2020</Text>
                </View>

                

                <View style={{ alignItems:'center', marginTop: 100 }}>
                    <Text style={{ fontWeight: "bold", color:"cyan", fontSize:20 }}>Monthly Expenses</Text>
                    <LineChart
                        data={data}
                        width={300}
                        height={300}
                        // yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "white",
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
            
                            borderRadius: 16,
                        }}
                    />
                </View>
            </ImageBackground>
        )
    }
}