import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import Images from '@/constants/Images'
import { Link } from 'expo-router'
import Button from '@/components/Button'
import InputField from '@/components/InputField'

const signIn = () => {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const handleSubmit = () => {}

  return (
    <ParallaxScrollView>
      <View className="w-full min-h-[85vh]">
        <Image
            source={Images.logo}
            resizeMode='contain'
            className="w-[120] h-[80]"
        />

        <Text className="text-sm text-gray-300">
          Stream music, sing along, unlock the meaning with Lyriks!
        </Text>

        <InputField
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          keyboardType='email-address'
          otherStyles='mt-10'
        />

        <InputField
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles='mt-5'
        />

        <Button
          title='Sign In'
          handlePress={handleSubmit}
          containerStyles='mt-5'
          isLoading={submitting}
        />

        <View className="flex flex-row justify-center gap-1 pt-5">
            <Text className="text-sm text-gray-300">
                Don't have an account yet?
            </Text>
            <Link 
                href="/sign-up"
                className="text-sm text-primary underline font-medium"
            >
                Signup
            </Link>
        </View>
      </View>
    </ParallaxScrollView>
  )
}

export default signIn