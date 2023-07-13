import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "@rneui/base";
import { HStack, VStack } from "native-base";
import DetailCard from "../../components/Common/DetailCard";
import {styles} from '../../StylePage'

const Profile = () => {
  return (
    
    
    <View>
      <View style={styles.Profile_body}>
        <HStack>
          <View
            style={styles.ProfileHeader_image}>
            <Avatar
              size={90}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
          </View>
          <View style={styles.ProfileHeader_body}>
            <Text style={styles.ProfileHeader_body_text_Primary}>50</Text>
            <Text style={styles.ProfileHeader_body_text_Secondary}>Channels</Text>
          </View>
          <View
            style={styles.ProfileHeader_body}
          >
            <Text style={styles.ProfileHeader_body_text_Primary}>90.5K</Text>
            <Text style={styles.ProfileHeader_body_text_Secondary}>Followers</Text>
          </View>
          <View
            style={{
              width: "10%",
              height: "auto",
              margin: "auto",
              backgroundColor: "white",
            }}
          ></View>
        </HStack>
        <View style={{ margin: 20 }}>
          <HStack>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Jane Smith
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "100" }}>
                janesmith@mail.co
              </Text>
            </View>
            <View style={{ width: "20%" }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "blue",
                  fontWeight: "100",
                  marginTop: 10,
                }}
              >
                Edit
              </Text>
            </View>
          </HStack>
        </View>
      <Text></Text>
      </View>

      {/* personal Deatils section  */}

      <View style={{ marginTop: "1%" }}>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Gender"
            value="Female"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Date of Birth"
            value="12-12-1990"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Nationality"
            value="Indian"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Timezone"
            value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Height"
            value="175 cm"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Weight"
            value="70 kg"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
      </View>

     {/* \Contact deatils  */}

      <View style={{ marginTop: "1%" }}>
        <HStack style={{ marginTop: "0.5%",width:"100%",  }}>
          <View
            style={{
              width: "80%",
              margin: "auto",
              paddingLeft: 15,
              
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Contact Details
            </Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text
              style={{
                fontSize: 18,
                color: "blue",
                fontWeight: "100",
                margin: "auto",
              }}
            >
              Edit
            </Text>
          </View>
        </HStack>

        <View style={styles.DetailCard}>
          <DetailCard
            label="Email"
            value="janesmith@mail.com"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
        <View style={styles.DetailCard}>
          <DetailCard
            label="Mobile Number"
            value="+91-9876543210"
            src="https://randomuser.me/api/portraits/men/36.jpg"
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
