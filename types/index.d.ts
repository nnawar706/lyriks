import { KeyboardType } from "react-native";

export interface SignUp {
    username: string;
    email: string;
    password: string;
}

export interface SignIn {
    email: string;
    password: string;
}

export interface ButtonParams {
    title: string;
    isLoading: boolean;
    textStyles?: string;
    containerStyles?: string;
    handlePress: (event) => void;
}

export interface InputFieldParams {
    title: string;
    value: string;
    placeholder?: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
    keyboardType?: KeyboardType;
}