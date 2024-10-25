import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Headings from '../../Components/Headings';
export default function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then(resp => {
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
      <Headings text={'Offers For You'} isViewAll={true} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.sliderContainer}>
            <Image style={styles.sliderimg} source={{ uri: item?.image?.url }} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginRight: 10,
  },
  sliderimg: {
    width: 250,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

