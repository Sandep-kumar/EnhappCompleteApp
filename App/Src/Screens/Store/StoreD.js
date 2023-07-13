import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import React from "react";
import { Tab, TabView } from "@rneui/themed";

import ProductCard from "../../components/ProductCards/ProductCard";
import { ScrollView } from "native-base";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Johnny Depp",
    label: "10 Packages",
    src: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Christian Bale",
    label: "08 Packages",
    src: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Edward Item",
    label: "10 Packages",
    src: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Edward Item",
    label: "10 Packages",
    src: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Edward Item",
    label: "10 Packages",
    src: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
  },
];

export default function Store() {
  const [index, setIndex] = React.useState(0);

  return (
    <>
     <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        //  disableIndicator
        variant="primary"
        buttonStyle={{ backgroundColor: "white" }}
      >
        <Tab.Item
          title="Packages"
          titleStyle={{ fontSize: 20, color: "black" }}
        />
        <Tab.Item
          title="Professionals"
          titleStyle={{ fontSize: 20, color: "black" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            <View>
              <Text style={styles.heading}> Fitness</Text>
            
              <List />
            </View>
            <View>
              <Text style={styles.heading}> Yoga</Text>
              <List />
            </View>
            <View>
              <Text style={styles.heading}> Lifestyle Management</Text>
              <List />
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}></TabView.Item>
      </TabView> 
    </>
  );
}

const List = () => {
  return (
    <SafeAreaView style={{backgroundColor:"white", padding:12}}>
       
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={(element) => {
          return (
            <View style={{ width: 150, marginRight: 4 }}>
              <ProductCard
                title={element.item.title}
                label={element.item.label}
                src={element.item.src}
              />
             
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const Item = ({ title, label, src }) => (
  <View style={styles.item}>
    <ProductCard title={title} label={label} src={src} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    padding: 5,

    height: "auto",
    width: "100%",
  },
  heading: {
    margin: 10,
    fontSize: 15,
    fontWeight: "600",
  },
  ViewStyle: {},
});
