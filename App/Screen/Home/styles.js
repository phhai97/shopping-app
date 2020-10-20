import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  homeContainer: {
  },
  header: {
    width: '100%',
    height: 30,
  },
  btnMenu: {
    position: 'absolute',
    top: '-15%',
    left: '1%',
    width:50,
    height:40,
    backgroundColor: '#ffffff',
    fontSize:30
  },
  btnSearch: {
    position: 'absolute',
    top: '-15%',
    right: '5%',
    width:50,
    height:40,
    backgroundColor: '#ffffff',
    fontSize:30
  },
  featureContainer:{
      backgroundColor:'#ffffff'
  }
});

export default HomeStyle;
