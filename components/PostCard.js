import { Text,View, StyleSheet, TouchableOpacity, Image  } from "react-native";
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'; 
import Feather from 'react-native-vector-icons/Feather';


const PostCard = ({name, postImage, profileImg, likes, details, time})=>{
        return(
        
        <View style={tw`pb-3`}>
        <View style={[styles.card,tw`border-neutral-100 border-b`]}>
        <View style={tw`px-2 py-3`}>
        <Image
         source={{ uri: profileImg }}
         style={tw`w-8 h-8 rounded-full mx-auto`}
         />
        </View>
        <View style={styles.titleContainer}>
        <Text style={tw`text-black font-semibold`}>{name}</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={[styles.rightContainer,tw`bg-white rounded-xl`]}>
        <Ionicons name="ellipsis-horizontal" size={15} color="#222" />
        </TouchableOpacity>
        </View>

        <Image
         source={{ uri: postImage }}
         style={tw`w-full h-96 mx-auto`}
         />



        <View style={[styles.card]}>
        
        <View style={tw`pl-4 pr-2 py-3`}>
        <Feather name="heart" size={25} color="#222" />
        </View>

        <View style={tw`pr-2 py-3`}>
        <Feather name="message-circle" size={28} color="#222" />
        </View>
        
        <View style={[styles.titleContainer,tw`pr-2 py-3`]}>
        <Feather name="send" size={24} color="#222" />
        </View>

        <View style={tw`pr-2 mb-3`}>
        <TouchableOpacity onPress={() => {}} style={[styles.rightContainer,tw`bg-white rounded-xl`]}>
        <Feather name="bookmark" size={25} color="#222" />
        </TouchableOpacity>
        </View>

        </View>

        <Text style={tw`px-3 font-semibold`}>{likes} likes</Text>
        <Text style={tw`px-3 font-semibold mt-1`}>{name} <Text style={tw`font-normal`}>{details}</Text></Text>
        <Text style={tw`px-3 pt-1.5 text-neutral-500`}>{time} ago</Text>
        </View>


        )
}
export default PostCard;





const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  leftContainer: {
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color:'white'
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    paddingBottom:42

  },
  rightContainer: {
    marginLeft: 16,
  },



});
