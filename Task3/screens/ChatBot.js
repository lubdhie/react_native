// import { GoogleGenAI } from "@google/genai";

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// // main();
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const ChatBot = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}> ChatBot Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });

// export default ChatBot;

//by hand

// import react,{ useState } from "react";
// import {View,Text,TextInput,TouchableOpacity,FlatList,ActivityIndicator,StyleSheet} from "react-native";
// import axios from "axios";
// import ChatBubble from "./ChatBubble";
// import {speak,isSpeakingAsync,stop} from "expo-speech";

// const ChatBot=()=>{
//     const [chat,setChat]=useState([]);
//     const [userInput,setUserInput]=useState("");
//     const [loading,setLoading]=useState(false);
//     const [error,setError]=useState(null);
//     const [isSpeaking,setIsSpeaking]=useState(false);

//     const GEMINI_API_KEY ="AIzaSyC12TWd2kjNeW6zCEJb9shZ_5hKrNB4rOI";

//     const handleUserInput =async ()=>{
//         let updatedChat= [
//             ...chat,{
//                 role:"user",
//                 parts[{text: userInput}],
//             },
//         ];
//         setLoading(true);
//         try{
//             const response= await axios.post(
//                 `https:\\generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
//                 {
//                 contents: updatedChat,}
//             );
//             console.log("Gemini pro api response : " response.data);
//             const modelResponse= 
//             response.data?.cadidates?.[0]?.content?.parts?.text|| "";

//            if(modelResponse){
//            const updatedChatWithModel=[
//            ...updatedChat,
//            {
//            role:"model",
//            parts[{text:modelResponse}],
//            },
//        ];

//        setChat(updatedChatWithModel);
//        setsUerInput("");
//            }
//         }
//            catch(error){
//            console.error("error calling gemini pro api: ",error);
//            console.error("error response: ",error.response);
//            setError("An error occured.pls try again.");
//            }
//     };
//     const handleSpeech= async(text)=>{
//         if(isSpeaking){
//         stop();
//         setIsSpeaking(false);
//         }
//         else{
//          if(!(await isSpeakingAsync()))  {
//          speak(text);
//          setIsSpeaking(true);
//          } 
//     }
// };
// const renderChatItem=({item})=>{
//     <ChatBubble
//     role={item.role}
//     text={item.parts[0].text}
//     onSpeech{()=>handleSpeech(item.parts[0].text)}
//     />
//     };

//     return(
//     <View style={styles.container}>
//     <Text style={styles.title}>Gemini Chatbot</Text>
//     <FlatList 
//     data={chat}
//     renderItem={renderChatItem}
//     keyExtractor={(item,index)=>index.toString()}
//     contentContainerStyle ={styles.chatContainer}

//     />
//     <View style={styles.input.Container}>
//     <TextInput
//     style={styles.input}
//     placeholder="Type your message"
//     placeholderTextColor="#aaa"
//     value={userInput}
//     onChangeText={setUserInput}
//     />
//     <TouchableOpacity style={styles.button} onPress={handleUserInput}>
//     <Text style={styles.buttonText}>Send</Text>
//     </TouchableOpacity>
//     </View>
//     { loading && <ActivityIndicator style={styles.loading}color="#333"/>}
//      {error && <Text style={styles.error}>{error}</Text>}
//      </View>
//     );
// };
// const styles=styleSheet.create({
// container:{
// flex:1,
// padding:16,
// backgroundColor:"#f8f8f8",
// },
// title:{
// fontSize:24,
// fontWeight:"bold",
// color:"#333",
// marginBottom:20,
// marginTop:40,
// textAlign:"center",
// },
// chatContainer:{
// flexGrow:1,
// justifyConatiner"flex-end",
// },
// inputContainer:{
// flexDirection:"row",
// alignItems:"center",
// marginTop:10,
// },
// input:{
// flex:1,
// height:50,
// marginRight:10,
// padding:8,
// borderColor:"#333",
// borderWidth:1
// color:"#333",
// backgroundColor:"#fff",
// }
// button:{
// padding:10,
// backgroundColor:"#007AFF"},
// borderRadius:25,
// ),
// buttonText:{
// color:"#fff",
// textAlign:"center",
// },
// loading:{
// marginTop:10,
// },
// error: {
// color:"red",
// marginTop:10,
// },
// }

// );
// export default Chatbot;

//cht
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import axios from "axios";
import ChatBubble from "./ChatBubble";
import * as Speech from "expo-speech";

const ChatBot = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const GEMINI_API_KEY = "AIzaSyC12TWd2kjNeW6zCEJb9shZ_5hKrNB4rOI";

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    const updatedChat = [
      ...chat,
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ];

    setChat(updatedChat);
    setUserInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: updatedChat,
        }
      );

      console.log("Gemini API response:", response.data);

      const modelResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      if (modelResponse) {
        const updatedChatWithModel = [
          ...updatedChat,
          {
            role: "model",
            parts: [{ text: modelResponse }],
          },
        ];
        setChat(updatedChatWithModel);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error.response || error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSpeech = async (text) => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      const speaking = await Speech.isSpeakingAsync();
      if (!speaking) {
        Speech.speak(text);
        setIsSpeaking(true);
      }
    }
  };

  const renderChatItem = ({ item }) => (
    <ChatBubble
      role={item.role}
      text={item.parts[0].text}
      onSpeech={() => handleSpeech(item.parts[0].text)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gemini Chatbot</Text>

      <FlatList
        data={chat}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          placeholderTextColor="#aaa"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleUserInput}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator style={styles.loading} color="#333" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    padding: 8,
    borderColor: "#333",
    borderWidth: 1,
    color: "#333",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  loading: {
    marginTop: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default ChatBot;
