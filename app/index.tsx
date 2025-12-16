import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,

  StyleSheet,
} from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1 , backgroundColor:"black" }   }>
      {/* <ImageBackground
        source={require("../assets/image.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      /> */}

      {/* CONTENT ON TOP OF BACKGROUND */}
      <View style={styles.container}>
        <Image
          source={require("../assets/imgg.png")}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />

        <Text style={styles.text}>
          Naam Jap Completed : {count}
        </Text>

        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Radhe Radhe</Text>
        </TouchableOpacity>
        <br></br>
        <TouchableOpacity     onPress={() => setCount(0)}       style={styles.button}  >
          <Text  style={styles.buttonText}    > Reset Button</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#ff9933",
    fontWeight:"bold" ,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff9933",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
