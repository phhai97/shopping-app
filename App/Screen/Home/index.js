import React from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, ScrollView} from 'react-native';
import {Button, Grid} from '@ant-design/react-native';

import HomeStyles from './styles';
import BoxFeature from '../../Components/BoxFeature';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'book',
  title: `Name${i}`,
  path: 'Voucher',
}));

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View
        style={[
          {
            margin: 10,
          },
          HomeStyles.header,
        ]}>
        <Button style={HomeStyles.btnMenu}>
          <Icon name="list" type="entypo" />
        </Button>
        <Text style={{textAlign: 'center', fontSize: 25}}>Simple</Text>
        <Button style={HomeStyles.btnSearch}>
          <Icon name="search" type="evilicons" />
        </Button>
      </View>

      <View style={HomeStyles.featureContainer}>
        <Text style={{fontSize: 20, marginLeft: '5%'}}>Feature</Text>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          carouselProps={{
            style: {
              width: '100%',
              height: 320,
            },
          }}
          renderItem={(ele) => (
            <BoxFeature
              icon={ele.icon}
              title={ele.title}
            />
          )}
          onPress={(ele) => navigation.navigate(ele.path)}
        />
      </View>
      <View>
        <Text>Voucher</Text>
        
      </View>
    </ScrollView>
  );
}
