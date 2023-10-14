import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import MiniStory from '../components/MiniStory';

import React, { useState, useEffect } from 'react';

function ProfileScreen({navigation}) {
  
    
    return (
      <View style={[{flex: 1},tw`bg-[#FFF] pt-4`]}>
    <ScrollView style={[{flex: 1}, tw`bg-white`]}>

    <View style={[tw`px-1`]}>

        


<View style={[styles.ProfileContainer]}>

          <View style={[styles.card]}>
    <View style={styles.leftContainer}>
                    <Image
        source={{ uri: 'https://instagram.fccu13-1.fna.fbcdn.net/v/t51.2885-19/383156242_2472788512880655_2504760637767351115_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fccu13-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=NCXW9DfmCU8AX9djx6r&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBWXdQ4USb3g5pH-sX-XENOMJHdBwZ-NSCYBVBmlgG-dQ&oe=652D8B91&_nc_sid=8b3546' }} // Replace with your profile image URL
        style={tw`w-22 h-22 border border-neutral-200 rounded-full mx-auto`}
                    />
    </View>

    <View style={styles.titleContainer}>
    <Text style={tw`text-xl font-bold text-center text-neutral-700`}>9</Text>
    <Text style={[styles.subtitle, tw`text-center`]}>Posts</Text>
    </View>

    <View style={styles.titleContainer}>
    <Text style={tw`text-xl font-bold text-center text-neutral-700`}>48 M</Text>
    <Text style={[styles.subtitle, tw`text-center`]}>Followers</Text>
    </View>

    <View style={styles.titleContainer}>
    <Text style={tw`text-xl font-bold text-center text-neutral-700`}>49</Text>
    <Text style={[styles.subtitle, tw`text-center`]}>Following</Text>
    </View>

    

    </View>

</View>



      
      <Text style={[ tw`px-4 font-semibold text-sm`]}>salnet</Text>
      <Text style={[ tw`px-4 font-normal text-sm`]}>Food 🥘 Software 🧑‍💻 & More ✈️</Text>
      <View style={[ tw`mx-4 mt-2 pt-2 pb-3.5 bg-neutral-200 px-4 rounded-lg`]}>
      <Text style={tw`font-semibold text-neutral-900 text-sm`}>Professional dashboard{`\n`}
      <Text style={tw`text-xs text-neutral-900 font-normal`}>Insights, ad tools and creator resources.</Text>
      </Text>
      </View>

      


    <View style={[styles.ProfileContainer]}>
    <View style={[styles.card,tw`mt-2`]}>

    <View style={[styles.titleContainer,tw`bg-neutral-200 mr-1.5 rounded-lg py-2.5`]}>
    <Text style={[styles.subtitle, tw`text-center text-neutral-900 font-bold`]}>Edit profile</Text>
    </View>

    <View style={[styles.titleContainer,tw`bg-neutral-200 mr-1.5 rounded-lg py-2.5`]}>
    <Text style={[styles.subtitle, tw`text-center text-neutral-900 font-bold`]}>Share profile</Text>
    </View>

    <View style={[styles.titleContainer,tw`bg-neutral-200 mr-1.5 rounded-lg py-2.5`]}>
    <Text style={[styles.subtitle, tw`text-center text-neutral-900 font-bold`]}>Email</Text>
    </View>

    </View>
    </View>

    
    <View style={tw`px-4`}>
        <Text style={tw`font-semibold`}>Story Highlights{`\n`}
            <Text style={tw`font-normal`}>Keep your favourite stories on your profile</Text>
        </Text>
    </View>

    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 16 }}  style={tw`px-3 pt-3`}>
                       
                       <View>
                       <View style={tw`rounded-full border border-neutral-300 border mr-2.5`}>
                       <Image style={[tw`rounded-full m-0.75`,{width: 55, height:55}]} 
                       source={{uri:'https://i.pinimg.com/564x/ad/4e/da/ad4edad7360e40949c84b0dd87f71ac6.jpg'}} />
                       </View>
                       </View>

                       <MiniStory imgUrl={'https://i.pinimg.com/564x/f5/c7/ab/f5c7ab62967252aedec230229a7231e9.jpg'} />

                       <TouchableOpacity onPress={()=>{navigation.navigate('Clubs')}}>
                       <View style={tw`rounded-full border border-neutral-300 border mr-2.5`}>
                       <Image style={[tw`rounded-full m-0.75`,{width: 55, height:55}]} 
                       source={{uri:'https://i.pinimg.com/564x/a6/88/60/a688609cfe4adc179163af31d144e805.jpg'}} />
                       </View>
                       </TouchableOpacity>

                       <TouchableOpacity onPress={()=>{navigation.navigate('Clubs')}}>
                       <View style={tw`rounded-full border border-neutral-300 border mr-2.5`}>
                       <Image style={[tw`rounded-full m-0.75`,{width: 55, height:55}]} 
                       source={{uri:'https://i.pinimg.com/564x/4e/35/11/4e351187aeb490ea8bc92e4c2d3ac400.jpg'}} />
                       </View>
                       </TouchableOpacity>

                       <TouchableOpacity onPress={()=>{navigation.navigate('Clubs')}}>
                       <View style={tw`rounded-full border border-neutral-300 border mr-2.5`}>
                       <Image style={[tw`rounded-full m-0.75`,{width: 55, height:55}]} 
                       source={{uri:'https://i.pinimg.com/564x/22/79/06/22790610ef1f8cdcd4670d3d602c09ba.jpg'}} />
                       </View>
                       </TouchableOpacity>

                       <TouchableOpacity onPress={()=>{navigation.navigate('Clubs')}}>
                       <View style={tw`rounded-full border border-neutral-300 border mr-2.5`}>
                       <Image style={[tw`rounded-full m-0.75`,{width: 55, height:55}]} 
                       source={{uri:'https://i.pinimg.com/564x/69/48/c6/6948c64d201770b728137bc0b431bc95.jpg'}} />
                       </View>
                       </TouchableOpacity>
    </ScrollView>


      </View>

      
    <View style={[styles.card]}>

    <View style={[styles.titleContainer,tw`border-b rounded-lg py-2.5`]}>
    <Text style={[tw`text-center text-neutral-900 font-bold`]}>
        <MaterialCommunityIcons name="grid" size={26} color="#16161d" />
    </Text>
    </View>

    <View style={[styles.titleContainer,tw`rounded-lg py-2.5`]}>
    <Text style={[tw`text-center text-neutral-900 font-bold`]}>
        <MaterialCommunityIcons name="clipboard-account-outline" size={30} color="#9a9a9a" />
    </Text>
    </View>


    </View>




      <View style={tw`mx-5 my-20`}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={[tw`rounded-sm rounded-xl`,{width: 200, height:100}]} source={{uri : 'https://i.pinimg.com/564x/de/6a/20/de6a2038b930ba5409b56cf135e28027.jpg'}} />
      </View>
      <Text style={tw`text-center font-semibold text-2xl`}>No Posts Yet</Text>

      </View>



      </ScrollView>
      </View>


    );
  }

  export default ProfileScreen;


  const styles = StyleSheet.create({

    ProfileContainer:{
        flex: 1,
        alignItems: 'start',
    },
    container: {
      flexGrow: 1, 
    },
    profileImage: {
        width: 85,
        height: 85,
        borderRadius: 60,
        marginBottom: 16,
        marginLeft:8
      },
      profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 3,
      },
      profileBio: {
        fontSize: 9,
        color: '#666',
        marginBottom: 24,
      },
      separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 24,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
 
      },
      leftContainer: {
        marginRight: 16,
      },
      titleContainer: {
        flex: 1,
      },
      subtitle: {
        fontSize: 12,
        color: '#808080',
      },
      rightContainer: {
        marginLeft: 16,
      },
  
  });
