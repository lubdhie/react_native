
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
import * as Speech from "expo-speech";
import ChatBubble from "./ChatBubble";
import {GEMINI_API_KEY} from "@env";

const ChatBot = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Do NOT expose API keys in production!
  const API_KEY = GEMINI_API_KEY;

  const getGeminiResponse = async (userMessage) => {
    try {
      const models = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-2.5-pro",
        "gemini-flash-latest",
        "gemini-2.0-flash-lite",
      ];

      let lastError = null;

      for (const modelName of models) {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${API_KEY}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text:
                          userMessage +
                          "\n\nPlease respond clearly and well formatted.",
                      },
                    ],
                  },
                ],
              }),
            }
          );

          const data = await response.json();

          if (
            response.ok &&
            data.candidates &&
            data.candidates[0]?.content?.parts?.[0]?.text
          ) {
            console.log(`✅ Success with model: ${modelName}`);
            return data.candidates[0].content.parts[0].text;
          }

          lastError = data.error?.message || "Unknown error";
          console.log(` Model ${modelName} failed:`, lastError);
        } catch (err) {
          lastError = err.message;
          console.log(` Model ${modelName} error:`, err.message);
          continue;
        }
      }

      throw new Error(lastError || "All models failed");
    } catch (error) {
      console.error("Error getting Gemini response:", error);

      if (error.message.includes("API_KEY_INVALID")) {
        return " Invalid API key. Please verify your Google Gemini API key.";
      } else if (
        error.message.includes("not found") ||
        error.message.includes("404")
      ) {
        return "No models available for your key. Try creating a new one at https://aistudio.google.com/app/apikey";
      } else if (error.message.includes("quota") || error.message.includes("429")) {
        return " Quota exceeded. Please wait a few minutes.";
      } else if (error.message.includes("PERMISSION_DENIED")) {
        return " Permission denied. Enable Generative Language API.";
      }

      return ` Error: ${error.message}`;
    }
  };

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    const updatedChat = [
      ...chat,
      { role: "user", parts: [{ text: userInput }] },
    ];
    setChat(updatedChat);
    setUserInput("");
    setLoading(true);
    setError(null);

    const modelResponse = await getGeminiResponse(userInput);

    const updatedChatWithModel = [
      ...updatedChat,
      { role: "model", parts: [{ text: modelResponse }] },
    ];
    setChat(updatedChatWithModel);
    setLoading(false);
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
      <Text style={styles.title}> Gemini Chatbot</Text>

      <FlatList
        data={chat}
        renderItem={renderChatItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleUserInput}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator style={styles.loading} color="#007AFF" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8f8f8" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  chatContainer: { flexGrow: 1, justifyContent: "flex-end" },
  inputContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    paddingHorizontal: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    color: "#333",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#007AFF",
    borderRadius: 20,
  },
  buttonText: { color: "#fff", fontWeight: "600", textAlign: "center" },
  loading: { marginTop: 10 },
  error: { color: "red", marginTop: 10, textAlign: "center" },
});

export default ChatBot;
