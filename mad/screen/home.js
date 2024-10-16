import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet ,Image,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
        <View style={styles.box}>
     <Icon name="bars" size= {25} color="blue"/>
     <Text style={styles.text}>Interface</Text>
    </View>
      <ImageBackground 
    
        style={styles.image} 
        resizeMode='cover' 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Graduated_Blue_Background.png' }}>
          
          <Image  style={styles.innerImage}  resizeMode='cover' source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png' }}/>
        <Text>Hello, I am the home page</Text>
        <TouchableOpacity style={styles.button} >
        <Icon name="bars" size={25} color="white" />
        <Text style={styles.buttonText}>Person</Text>
      </TouchableOpacity>
 
        <Button onPress={() => navigation.navigate('About')} title='Go to about page' />
        <TextInput style={styles.input}     placeholder='type here'/>
          
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginLeft: 90, 
    marginTop:-23,        
    fontSize: 16,          
    color: 'black',       
  },
  box:{
 justifyContent:'space-between'
  },
  innerImage: {
    width: 100,  // Set the desired width
    height: 100, // Set the desired height
    position: 'absolute', // Position it absolutely if needed
    top: 50,  // Adjust top position
    left: 50, // Adjust left position
  },
  button: {
    flexDirection: 'row',  // Align items in a row
    alignItems: 'center',   // Center items vertically
    backgroundColor: 'blue', // Button background color
    padding: 10,            // Padding around the button
    borderRadius: 5,        // Rounded corners
  },
  input: {
  height: 50,                  // Height of the TextInput
 borderWidth:2,      
color:'blue',  // Font size
borderColor: 'gray',
flexDirection: 'row',
  },
});

