import { View, Text ,TouchableOpacity} from 'react-native'
import colors from '../../Utils/colors';
import React, { useState } from 'react'
import Headings from '../../Components/Headings';
import { SF } from '../../Utils/fontDimension';
export default function BusinessAbout({items}) {
    const [ReadMore,setReadMore]=useState(false);
    return items&&(
    <View>
    <Headings text={'About Me'}/>
    <Text style={{fontFamily:'outfit',color:'gray',fontSize:SF(4),lineHeight:28}} numberOfLines={ReadMore?10:5}> {items?.about}</Text>
   <TouchableOpacity onPress={()=>setReadMore(!ReadMore)} >
   <Text style={{color:colors.PRIMARY,fontSize:SF(4),fontFamily:'outfit'}}>
   {ReadMore?'Read Less':'Read More'}</Text>
   </TouchableOpacity>
    </View>
  )
}