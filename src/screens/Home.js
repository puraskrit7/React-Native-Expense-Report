import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from 'react-native-vector-icons/FontAwesome5';
export default function Home (props){

  const state={
    todaySelected:true
  }
  const onTabPressed=()=>{
    // this.setState({todaySelected:!this.state.todaySelected})
    setTodaySelected(!todaySelected)
  }
  const navigationOptions = {
    title: 'Home',
  };
  const [todaySelected,setTodaySelected]=React.useState(true)

// render(){
  const {navigate} = props.navigation;
  return(
    <ImageBackground
        source={require("../images/bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
    <View style={{paddingTop:50}}>
      <View style={{flexDirection:'row', marginHorizontal:30, justifyContent:'space-between'}}>
        <Image 
        resizeMode='contain'
        style={{height:50, width:50}}
        source={require('../images/menu.png')}
        />
    <TouchableOpacity
    onPress={() => navigate('Chart', {name: 'Chart'})}
    >
        <Icon Icon name="md-bar-chart-outline" size={40} style={{textAlign: "center"}}></Icon>   
    </TouchableOpacity>
      </View>
    </View>

    <View style={{padding:30}}>
      <Text style={{
        color:'#fff',
        fontSize:30,
        fontWeight:'700',
      }}>My Budget</Text>
      <Text style={{
        color:'#fff',
        fontWeight:'700',
        fontSize:50
      }}>$ 5000</Text>
    </View>
      <View style={{ flexDirection:'row-reverse' }}>
        <TouchableOpacity
      onPress={() => navigate('AddItems', {name: 'AddItems'})}
      >
          <Icon Icon name="add-circle-sharp" size={80} style={{textAlign: "center"}}></Icon>
      </TouchableOpacity>
      </View>
    <View style={{
      height:1000,
      width:'100%',
      backgroundColor:'#fff',
      borderTopRightRadius:30,
    }}>
      <View style={{flexDirection:'row', paddingTop:10, padding:30}}>
        <TouchableOpacity
        onPress={onTabPressed}
        style={{
          paddingVertical:6,
          borderBottomWidth:4,
          borderBottomColor:todaySelected ? '#00192d':'#fff',
        }}
        >
          <Text style={{
            fontWeight:'bold',
            fontSize:25,
            color:todaySelected ? '#00192D' : '#8e9aaf',

          }}>TODAY</Text> 
          
        </TouchableOpacity>
      
        <TouchableOpacity 
        onPress={onTabPressed}
        style={{
          marginLeft:30,
          borderBottomWidth:4,
          paddingVertical:6,
          borderBottomColor:todaySelected ? '#fff':'#00192d',
          color:todaySelected ? '#8e9aaf':'#00192d',
        }}
       
        >
          <Text style={{
            fontWeight:'bold',
            fontSize:25,
            opacity:0.5
          }}>MONTH</Text>
          
        </TouchableOpacity>
      

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}>
        <Text style={{fontSize:30, fontWeight:'bold'}} > {todaySelected? "16th Nov 2020" : "Nov 2020"} </Text>
        <Text style={{fontSize:30, fontWeight:'bold', color:'#e76f51'}}> {todaySelected? "120" : "1800"}</Text>
      </View>
      <View style={{borderBottomWidth:2, width:'85%', marginLeft:30, marginTop:20, opacity:0.3}}></View>

      <View style={{width:'100%', height:'30%'}}>
    
        <ScrollView>
            {todaySelected? (
  <View> 
{/* first Item */}
     <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Mat Icon name="lightbulb-on" size={40}></Mat>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Electricity</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>20</Text>
          </View>

{/* second Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <Font Icon name="taxi" size={40}></Font>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Taxi</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>20</Text>
          </View>

{/* third Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon Icon name="restaurant" size={40}></Icon>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Food & Drinks</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>30</Text>
          </View>

{/* Fourth Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon Icon name="train-sharp" size={40}></Icon>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Train</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>10</Text>
          </View>
{/* Fifth item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon Icon name="home" size={35}></Icon>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Home Rent</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>40</Text>
          </View>
         

          </View>
        ):(
            <View> 
     {/* first Item */}
     <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Mat Icon name="lightbulb-on" size={40}></Mat>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Electricity</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>200</Text>
          </View>

{/* second Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <Font Icon name="taxi" size={40}></Font>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Taxi</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>200</Text>
          </View>

{/* third Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon Icon name="restaurant" size={40}></Icon>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Food & Drinks</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>300</Text>
          </View>

{/* Fourth Item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon Icon name="train-sharp" size={40}></Icon>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Train</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>100</Text>
          </View>
          {/* Fifth item */}
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon Icon name="home" size={40}></Icon>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Home Rent</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>400</Text>
          </View>
          </View>        
        )}
        </ScrollView>

      </View>
    </View>
  </ImageBackground>
  ); 
  
}