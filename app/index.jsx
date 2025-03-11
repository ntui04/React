import { Text, View, StyleSheet,Image,TouchableOpacity } from "react-native";
import postImage from '@/assets/images/postImage.jpg';
import { useRouter } from "expo-router";

const HomeScreen = () => {

  const router = useRouter();
  return (
    <View
      style={style.container}>
      <Image source={ postImage } style= {style.images}></Image>
      <Text style= {style.title}>Welcome to notes App</Text>
      <Text style= {style.subtitle}>capture your thoughts any time, anywhere</Text>

      <TouchableOpacity style= {style.button}
      onPress={() => router.push('/notes')}
      >
        <Text style= {style.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        

  },
  images:{
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 30
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle:{
    fontSize:16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default HomeScreen;