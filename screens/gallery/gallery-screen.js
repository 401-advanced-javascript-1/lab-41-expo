import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import Header from '../../components/header';
import Footer from '../../components/footer';

const JOHN_FACE_IMGS = [
  require('../../assets/johns/baldy.bmp'),
  require('../../assets/johns/baldy-shaved.bmp'),
  require('../../assets/johns/baldy-magenta.bmp'),
  require('../../assets/johns/baldy-mask.bmp'),
  require('../../assets/johns/baldy-pastel.bmp'),
  require('../../assets/johns/baldy-phantom.bmp'),
  require('../../assets/johns/baldy-random.bmp'),
  require('../../assets/johns/baldy-sunglasses.bmp'),
  require('../../assets/johns/baldy-technicolor.bmp'),
  require('../../assets/johns/baldy-jail.png'),
  require('../../assets/johns/baldy-demon.png'),
  require('../../assets/johns/baldy-bw.png')
];

export default class GalleryScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Header content="Gallery of Johns" />

        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'column'
              // borderWidth: 1,
              // borderColor: 'black'
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              <Image source={JOHN_FACE_IMGS[0]} />
              <Image source={JOHN_FACE_IMGS[1]} />
              <Image source={JOHN_FACE_IMGS[2]} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              <Image source={JOHN_FACE_IMGS[3]} />
              <Image source={JOHN_FACE_IMGS[4]} />
              <Image source={JOHN_FACE_IMGS[5]} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              <Image source={JOHN_FACE_IMGS[6]} />
              <Image source={JOHN_FACE_IMGS[7]} />
              <Image source={JOHN_FACE_IMGS[8]} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              <Image source={JOHN_FACE_IMGS[9]} />
              <Image source={JOHN_FACE_IMGS[10]} />
              <Image source={JOHN_FACE_IMGS[11]} />
            </View>
            <Text>Images created by Code Fellows 401d29 JS class</Text>
          </View>
        </ScrollView>

        <Footer
          title="Home"
          nav={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
