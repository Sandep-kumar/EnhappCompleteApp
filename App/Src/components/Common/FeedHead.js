import { View, Image, Text,TouchableOpacity, StyleSheet,Modal } from "react-native";
import React,{ useState } from "react";
import { Avatar } from "@rneui/themed";
import { HStack } from "native-base";
import { Appbar } from 'react-native-paper';
import { styles } from "../../StylePage";

export default function FeedHead({Value,SecondaryValue}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleReportClick = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const _handleMore = () => console.log('Shown more');
  return (
    <View style={styles.FeedHead_header}>
      <HStack style={styles.FeedHead_box}>
        <View style={styles.FeedHead_icon}>
          <Avatar
            size={50}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </View>
        <View style={styles.FeedHead_inner}>
          <Text style={styles.FeedHead_textMain}>{Value}</Text>
          <Text style={styles.FeedHead_textSecondary}>{SecondaryValue}</Text>
        </View>
        <View style={styles.FeedHead_innerSecond}>
        <Appbar.Action icon="dots-vertical" onPress={handleReportClick}/>
        </View>
        
      </HStack>
       {/* Report Dropdown */}
       <Modal visible={isDropdownVisible} animationType="fade" transparent={true} onRequestClose={closeDropdown}>
        <View style={styles.FeedHead_dropdownContainer}>
          <TouchableOpacity style={styles.FeedHead_dropdownOption} onPress={closeDropdown}>
            <Text style={styles.FeedHead_dropdownOptionText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FeedHead_dropdownOption}>
            <Text style={styles.FeedHead_dropdownOptionText}>Block</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FeedHead_dropdownOption}>
            <Text style={styles.FeedHead_dropdownOptionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}


