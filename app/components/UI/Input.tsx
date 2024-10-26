import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

type InputProps = {
  label: string;
  textInputConfig?: TextInputProps; // Props for the TextInput component
};

function Input({ label, textInputConfig }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#e5e5e5",
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
  },
});
