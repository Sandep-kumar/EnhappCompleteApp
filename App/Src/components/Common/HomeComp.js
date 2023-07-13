import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import { styles } from "../../StylePage";
export default function HomeComp({Value,subValue}) {
  return (
    <View style={styles.HomeComp_header}>
      <View style={styles.HomeComp_box}>
        <View style={styles.HomeComp_icon}>
          <Avatar
            size={32}
            rounded
            icon={{ name: "pencil", type: "font-awesome" }}
            containerStyle={{ backgroundColor: "skyblue" }}
          />
        </View>
        <View style={styles.HomeComp_inner}>
          <Text style={styles.HomeComp_textMain}>{Value}</Text>
        </View>
        <View style={styles.HomeComp_innerSecond}>
          <Text style={styles.HomeComp_textSecondary}> {subValue}</Text>
        </View>
      </View>
    </View>
  );
}


