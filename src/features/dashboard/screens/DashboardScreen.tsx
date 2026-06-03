// src/app/(tabs)/dashboard.tsx

import { Text, View } from 'react-native';
import Screen from '@/components/ui/Screen';
import BalanceCard from '../components/BalanceCard';

export default function DashboardScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Dashboard</Text>
      <BalanceCard/>
      </View>
    </Screen>
  );
}
