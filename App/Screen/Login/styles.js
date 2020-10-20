import {StyleSheet} from 'react-native';

const LoginStyles = StyleSheet.create({
  loginStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a9a9a9',
  },
  loginContainer: {
    padding: '3%',
    width: '100%',
    marginTop: '50%',
    marginBottom: '50%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    //  display:'flex'
  },
  formLogin: {
    padding: 15,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  btnSubmit: {
    width: '100%',
    marginTop: 50,
    backgroundColor:'#ff8c00',
    color:'#ffffff'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: '10%',
  },
  inputCustom: {
    width: '100%',
    // borderRadius: 15,
    // borderColor: '#000000',
    // backgroundColor: '#d3d3d3',
    // height:50
  },
});

export default LoginStyles;
