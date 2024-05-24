import { ReactNode } from "react";
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
    handleChangeText: (value: string) => void;
    otherStyles?: string;
    keyboardType?: KeyboardType;
}

export interface User {
    username: string;
    email: string;
}

export interface GlobalProviderProps {
    children: ReactNode;
}

export interface GlobalContextValue {
    isLoggedIn: boolean;
    setIsLoggedIn: () => void;
    user: any;
    setUser: () => void;
    isLoading: boolean
}