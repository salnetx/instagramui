import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";

const HomeScreen = ()=>{
    return(
        <View style={tw`bg-white`}>
            <ScrollView contentContainerStyle={{flexGrow:1}} style={[ tw`bg-white`]}>
                <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}  style={tw` pt-2 mx-1 border-b border-neutral-200`}>
                        
                        <View>
                        <View style={tw`rounded-full border border-2 border-neutral-300 mr-2.5`}>
                        <Image style={[tw`rounded-full m-0.5`,{width: 80, height:80}]} 
                        source={{uri:'https://www.salnet.xyz/5.png'}} />
                        </View>
                        <Text style={tw`text-center text-xs font-medium pt-1.5 text-neutral-900 font-normal`}>Your Story&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                        </View>

                        
                        {/* <StoryCard /> */}

                        <StoryCard name={'kangsaebyeok'} imgUrl={'https://i.pinimg.com/564x/7e/a5/87/7ea58753fd1b26ff2a1d3db4e05b2722.jpg'} />
                        <StoryCard name={'seonggihun'} imgUrl={'https://i.pinimg.com/564x/0b/86/ce/0b86cef681048238c2cccb7a9228459f.jpg'} />
                        <StoryCard name={'abdulali'} imgUrl={'https://i.pinimg.com/564x/f9/84/b3/f984b3575a5ce25008be2d5ee641dc41.jpg'} />
                        <StoryCard name={'OhIl-nam'} imgUrl={'https://i.pinimg.com/564x/5e/72/a0/5e72a0aaa2dabe6b245d91bfc5ff8f04.jpg'} />
                        <StoryCard name={'gussitup'} imgUrl={'https://i.pinimg.com/564x/ef/20/6b/ef206b18cce54867dc03a5a8a5d81d95.jpg'} />



                </ScrollView>
                </View>

            <PostCard name={'seonggihun'} profileImg={"https://i.pinimg.com/564x/0b/86/ce/0b86cef681048238c2cccb7a9228459f.jpg"} postImage={"https://i.pinimg.com/564x/b9/e0/ef/b9e0ef3e1782feec440fad1ce1f7f71e.jpg"} likes={"3,953"} details={"See you in hell."} time={"7 hours"} />
            <PostCard name={'kangsaebyeok'} profileImg={"https://i.pinimg.com/564x/7e/a5/87/7ea58753fd1b26ff2a1d3db4e05b2722.jpg"} postImage={"https://i.pinimg.com/564x/75/a7/99/75a7993caed30b2a17e68e40554ae183.jpg"} likes={"14,892"} details={"Missing you."} time={"12 hours"} />
            <PostCard name={'gussitup'} profileImg={"https://i.pinimg.com/564x/ef/20/6b/ef206b18cce54867dc03a5a8a5d81d95.jpg"} postImage={"https://i.pinimg.com/564x/31/5c/2a/315c2a613bba39f72c8405f242433cd7.jpg"} likes={"99,786"} details={"Who is daddy now."} time={"3 hours"} />

            </ScrollView>
        </View>
    )
}


export default HomeScreen;