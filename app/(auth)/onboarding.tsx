// src/app/(auth)/onboarding.tsx

import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import Screen from '@/components/ui/Screen';

export default function OnboardingScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-4xl font-bold">Expense Tracker</Text>

        <Text className="mt-4 text-center">Manage your money smarter.</Text>

        <Pressable
          onPress={() => router.push('/(auth)/login')}
          className="mt-8 rounded-xl bg-blue-500 px-6 py-4">
          <Text className="text-white">Get Started</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
