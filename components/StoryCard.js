import { Text,View, Image} from "react-native";
import tw from 'twrnc'

const StoryCard = ({name, imgUrl})=>{
    return(
                <View>
                        <View>
                        <View style={[tw`rounded-full border border-2 mr-2.5`]}>
                        <Image style={[tw`rounded-full m-0.5`,{width: 80, height:80}]} 
                        source={{uri: imgUrl}} />
                        </View>
                        <Text style={tw`text-center text-xs font-medium pt-1.5 text-neutral-900 font-normal`}>{name}</Text>
                        </View>
                </View>
    )
}

export default StoryCard;