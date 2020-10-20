import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Button} from '@ant-design/react-native';

function BoxFeature({icon, title,}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name={icon} type="antdesign" size={30} color="#000000" />
      <Text>{title}</Text>
    </View>
  );
}

BoxFeature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BoxFeature;
