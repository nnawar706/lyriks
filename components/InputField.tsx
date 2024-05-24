import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import Images from "@/constants/Images";
import { InputFieldParams } from "@/types";

const InputField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: InputFieldParams) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-300">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-primary focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? Images.eyeClose : Images.eyeOpen}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;