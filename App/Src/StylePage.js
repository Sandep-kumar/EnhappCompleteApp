import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: '80%',
    height: 150,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 9,
  },
  Homeheader: {
    width: '100%',
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0%',
    padding: '4%',
    backgroundColor: 'white',
  },
  Heading_title: {
    margin: '5%',
    fontSize: 22,
    fontWeight: '600',
  },

  bg_white: {
    backgroundColor: 'white',
  },
  marginBottom: {
    marginBottom: 2,
  },
  Library: {
    backgroundColor: 'white',
    marginBottom: 100,
  },
  margin: {
    margin: 2,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
  },
  sub_label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },

  div: {
    width: '45%',
    alignContent: 'center',
  },
  divSec: {
    width: '45%',
  },
  Profile_body: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  ProfileHeader_image: {
    width: '40%',
    height: 'auto',
    margin: 'auto',
    alignItems: 'center',
  },
  ProfileHeader_body: {
    width: '30%',
    height: 'auto',
    marginTop: 20,
    backgroundColor: 'white',
  },
  ProfileHeader_body_text_Primary: {
    fontSize: 18,
    fontWeight: '700',
  },
  ProfileHeader_body_text_Secondary: {
    fontSize: 15,
    fontWeight: '100',
  },
  DetailCard: {
    backgroundColor: 'white',
    marginTop: '0.5%',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    width: '100%',
  },
  dropdown: {
    backgroundColor: 'inhert',
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 0,
    borderRadius: 5,
    padding: 4,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  Input: {
    width: '48%',
    backgroundColor: 'white',
    height: 46,
    margin: 'auto',
  },

  Color_Box_Heading: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 20,
  },

  // Chat box

  ChatBox_stack: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    margin: 'auto',
    paddingTop: 5,
    paddingBottom: 5,
  },
  ChatBox_Hstack_image: {
    width: '20%',
    height: 'auto',
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  ChatBox_Hstack_chat: {
    width: '60%',
    height: 'auto',
    margin: 'auto',
    backgroundColor: '#FFFFFF',
  },
  ChatBox_Username: {
    fontSize: 20,
    fontWeight: '400',
  },
  ChatBox_lasttext: {
    fontSize: 15,
    color: '#808080',
    fontWeight: '400',
  },
  ChatBox_lasttext_Time: {
    fontSize: 15,
    color: '#808080',
    marginBottom: 3,
    fontWeight: '400',
  },

  // colorbox
  colorbox_font_pri: {color: 'white', fontSize: 20, fontWeight: '600'},
  colorbox_font: {color: 'white', fontSize: 12},

  // CustomHeader

  CustomHeader_box: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 'auto',
    margin: 'auto',
    paddingBottom: 3,
    paddingTop: 3,
  },
  CustomHeader_icon: {
    height: 'auto',
    paddingLeft: 12,
  },
  CustomHeader_text: {
    fontSize: 18,
    paddingLeft: 12,
    color: 'rgb(28, 28, 30)',
    fontWeight: '500',
    margin: 'auto',
  },

  // DetailCard

  DetailCard_box:{
    width:"18%",
    alignItems:"center", margin:"auto"
  },
  DetailCard_label:{
    fontSize:10, fontWeight:"100", color:'#808080', height:20 
  },
  DetailCard_value:{
    fontSize:12, fontWeight:"400"
  },

  // FeedHead

  FeedHead_box: {
    width: '100%',
    paddingBottom: 10,
  },

  FeedHead_fonts: {
    marginBottom: 8,
  },
  FeedHead_Card_image: {
    padding: 0, borderRadius: 15, marginBottom: 15
  },
  FeedHead_Card_title: {
    textAlign: 'left', fontSize: 20
  },

  // FeedHead
  FeedHead_header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    marginTop: "5%",
    backgroundColor: "white",
    position:'relative'
  },
  FeedHead_box: {
    width: "92%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  FeedHead_icon: { width: "20%" },
  FeedHead_inner: {
    width: "60%",
    textAlign: "left",
    margin: "auto",
  },
  FeedHead_innerSecond: {
    
    textAlign: "right",
    margin: "auto",
  },
  FeedHead_textMain: {
    fontSize: 18,
    fontWeight: "500",
  },
  FeedHead_textSecondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
  },

  FeedHead_dropdownContainer:{
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 8,
   
  },
  FeedHead_dropdownOption:{padding: 8,},
  FeedHead_dropdownOptionText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',},
  // HomeComp
  HomeComp_header: {
    width: "100%",
    // border: "1px solid red", //border color red
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    marginTop: "5%",
  
    backgroundColor: "white",
  },
  HomeComp_box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  HomeComp_icon: { width: "15%" },
  HomeComp_inner: {
    width: "34%",

    margin: "auto",
  },
  HomeComp_innerSecond: {
    width: "50%",
    textAlign: "right",
    margin: "auto",
    // backgroundColor: 'grey',
    // borderWidth: 1,
    justifyContent:"center"
    
  },
  HomeComp_textMain: {
    fontSize: 18,
  },
  HomeComp_textSecondary: {
    fontSize: 12,
    textAlign:"right",
   
  },

  // ProductCard

  ProductCard_image:{ padding: 0,
    width: '100%',
    borderRadius: 10,
    marginBottom: 5,},
  ProductCard_title:{
    fontSize: 15, flex: 1, fontWeight: '600', paddingLeft: 10
  },
  ProductCard_label:{
    fontSize: 12,
            flex: 1,
            fontWeight: '600',
            color: 'gray',
            paddingLeft: 10,
  },

  // Breakfast

  Breakfast_box:{
    width: '100%',
          marginTop: 10,
          paddingLeft: 10,
          paddingRight: 5,
  },


  // WaterBody

  WaterBody_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  WaterBody_title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  WaterBody_waterIntakeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  WaterBody_button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  WaterBody_buttonText: {
    fontSize: 24,
  },
  WaterBody_waterIntakeText: {
    fontSize: 20,
  },
  WaterBody_waterIntakeSecondText:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  mt:{
    marginTop:10
  },
  mt2:{
    marginTop:20
  },



});

export {styles};
