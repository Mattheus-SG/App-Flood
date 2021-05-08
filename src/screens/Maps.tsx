import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import SearchBar from './searchbar';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.ViewTitle}>
      <Text style={styles.title}>PONTOS DE ALAGAMENTO  </Text> 
        <TouchableOpacity>
          <IonIcon name="add-circle-outline" size={30} color="#215051" />
        </TouchableOpacity>
      
      </View>
      <View style={styles.searchBarView}>
        <SearchBar />
      </View>
      <View style={styles.ViewNiveis}>
        <View style={styles.riscoRow1}>
          <Text style={styles.TextNivel1}><Icon name="minus" size={14} color="#23B700" />  Sem Risco</Text>
          <Text style={styles.TextNivel2}><Icon name="minus" size={14} color="#E2D51E" />  Risco Leve</Text>
        </View>
        <View style={styles.riscoRow2}>
          <Text style={styles.TextNivel3}><Icon name="minus" size={14} color="#FB7D00" />  Potencial Risco </Text>
          <Text style={styles.TextNivel4}><Icon name="minus" size={14} color="#BE0000" />  Alto Risco</Text>
        </View>
      </View>

      <View style={styles.mapView}>
      <MapView 
        style={styles.mapsStyle}
        initialRegion = {{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%'
  },
  ViewTitle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#225051',
  },
  searchBarView: {
    width: '85%',
    marginTop: '5%'
  },
  ViewNiveis: {
    flexDirection: 'row',
    width: '78%',
    alignSelf: 'center',
    marginTop: '6%'
  },
  riscoRow1: {
    width: '55%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  riscoRow2: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  TextNivel1: {
    fontSize: 15,
    color: '#23B700'
  },
  TextNivel2: {
    fontSize: 15,
    color: '#E2D51E'
  },
  TextNivel3: {
    fontSize: 15,
    color: '#FB7D00'
  },
  TextNivel4: {
    fontSize: 15,
    color: '#BE0000'
  },
  mapView: {
    flex: 1,
    width: '84%',
    marginTop: '5%',
    marginBottom: '5%',
    borderWidth: 2,
    borderColor: '#215051',
    borderRadius: 25,
    overflow: 'hidden'
  },
  mapsStyle:{
    width: '100%',
    height: '100%',
    
  }
});
