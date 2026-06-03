// src/app/(auth)/login.tsx

import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import Screen from '@/components/ui/Screen';

export default function LoginScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="mb-8 text-3xl font-bold">Login</Text>

        <Pressable
          onPress={() => router.replace('/(tabs)/dashboard')}
          className="rounded-xl bg-green-500 px-6 py-4">
          <Text className="text-white">Mock Login</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
