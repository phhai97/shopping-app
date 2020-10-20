import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, ScrollView} from 'react-native';
import {Button, InputItem, List, Flex} from '@ant-design/react-native';

// import styles from './styles.scss';
import LoginStyles from './styles';

export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkError, setCheckError] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = () => {
    // console.log(name);
    // console.log(password);
    // if (name === '') setCheckError({...checkError, username: true});
    // if (password === '') setCheckError({...checkError, password: true});
    // if (name !== '' && password !== '') navigation.navigate('dashboard');
    navigation.navigate('dashboard');
  };
  return (
    <ScrollView
      style={LoginStyles.loginStyle}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={LoginStyles.loginContainer}>
        <View style={LoginStyles.formLogin}>
          <Text style={LoginStyles.title}>Shopping Cart</Text>
          <List>
            <InputItem
              style={LoginStyles.inputCustom}
              error={checkError.username}
              placeholder="Enter username"
              onChange={(value) => setName(value)}>
              <Icon name="user" type="antdesign" />
            </InputItem>
            <InputItem
              type="password"
              style={LoginStyles.inputCustom}
              error={checkError.username}
              placeholder="Enter your password"
              onChange={(value) => setPassword(value)}>
              <Icon name="lock" type="antdesign" />
            </InputItem>
          </List>
          <Button
            type="primary"
            styles={LoginStyles.btnSubmit}
            style={{marginTop: 35}}
            onPress={handleSubmit}>
            <Flex>
              <Flex.Item style={{paddingLeft: 4, paddingRight: 4}}>
                <Icon color="#ffffff" name="login" type="antdesign" size={20} />
              </Flex.Item>
              <Flex.Item style={{paddingLeft: 4, paddingRight: 4}}>
                <Text style={{color: '#ffffff'}}>Login</Text>
              </Flex.Item>
            </Flex>
          </Button>
          <Button
            type="ghost"
            styles={LoginStyles.btnSubmit}
            style={{marginTop: 15}}>
            Register
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
