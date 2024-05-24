import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { ButtonParams } from '@/types'

const Button = ({ title, handlePress, textStyles, 
    containerStyles, isLoading }: ButtonParams) => {
  return (
    <TouchableOpacity className={`bg-primary rounded-xl min-h-[62px] 
    flex flex-row justify-center items-center ${containerStyles} 
    ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}
    onPress={handlePress}
    activeOpacity={0.7}>
        <Text className={`text-gray-100 font-semibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Button