import React from 'react';
import { View, Image} from 'react-native';

const CustomHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop:55,
        paddingBottom:8,
        backgroundColor:'white'
      }}
    >
     <Image
        source={require('../assets/instagram.png')}
        style={{ width: 124, height: 35 }}
      />

      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
        source={require('../assets/messenger.png')}
        style={{ width: 22, height: 22 }}
      />
      </View>

      </View>
    </View>
  );
};

export default CustomHeader;