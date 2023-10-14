import { View,Tex, Image } from "react-native";
import tw from 'twrnc'

const MiniStory = ({imgUrl,})=>{
        return(
            <View>
            <View style={tw`rounded-full border border-neutral-300 border mr-2.5`}>
            <Image style={[tw`rounded-full m-0.75`,{width: 55, height:55}]} 
            source={{uri: imgUrl}} />
            </View>
            </View>
        )
}
export default MiniStory;