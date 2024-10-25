import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SW = (percentage) => wp(percentage); 
const SH = (percentage) => hp(percentage);
const SF = (percentage) => wp(percentage);

export { SW, SH, SF };
