import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; 
import RNFetchBlob from 'rn-fetch-blob'; // for downloading

import PDFReader from 'react-native-pdf'; // for reading PDF

import { Document, Page } from 'react-pdf';
import RNFS from 'react-native-fs';









export default function ViewResult() {
  // const [dataArray, setDataArray] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  const navigation = useNavigation(); 



  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://acubed-backend-production.up.railway.app/api/v1/result/results');
      setResults(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  const downloadPDF = async (pdfUrl, pdfName) => {
    try {
      const pdfPath = RNFS.DocumentDirectoryPath + `/${pdfName}.pdf`;
      const options = {
        fromUrl: pdfUrl,
        toFile: pdfPath,
      };
  
      const downloadResult = await RNFS.downloadFile(options);
      
      if (downloadResult.statusCode === 200) {
        Alert.alert('Download Complete', `PDF downloaded to ${pdfPath}`);
      } else {
        Alert.alert('Download Failed', 'Unable to download the PDF');
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => downloadPDF(item.pdf, item.id)}>
      <View style={{ padding: 16 }}>
        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
        {/* Add other relevant information */}
      </View>
    </TouchableOpacity>
  );







  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://acubed-backend-production.up.railway.app/api/v1/health-facility/facilities');
        setDataArray(response?.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);






  

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
      <View style={{ flex: 1 }}>
      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text>No results found.</Text>
      )}
    </View>
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
