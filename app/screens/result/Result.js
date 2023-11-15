import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Result() {

  const navigation = useNavigation(); 


return (
  <SafeAreaView style={styles.container}>
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/photos/result.jpeg")}
    >
      {/* Your other content goes here */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.backButton}
      >
        <Image
          source={require("../../assets/photos/left-chevron.png")}
          style={{marginTop:-260, marginLeft:10, width:20, height:20}}
        />
      </TouchableOpacity>
    </ImageBackground>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backButton: {
    marginTop: 50,
    marginLeft: 10,
    padding: 10,
    // Add any additional styles for the TouchableOpacity here
  },
});
