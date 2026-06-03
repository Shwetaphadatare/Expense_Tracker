// src/app/(tabs)/dashboard.tsx

import { Text, View } from 'react-native';
import Screen from '@/components/ui/Screen';

export default function BalanceCard() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Balance</Text>
      
      </View>
    </Screen>
  );
}
