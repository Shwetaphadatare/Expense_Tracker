// src/app/(tabs)/dashboard.tsx

import { Button, Text, View } from 'react-native';
import Screen from '@/components/ui/Screen';
import BalanceCard from '../components/BalanceCard';
import { removeToken } from '@/services/storage/authStorage';
import { useAuthStore } from '@/store/authStore';
import { router } from 'expo-router';

export default function DashboardScreen() {
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = async () => {
      await removeToken();

      logout();

      router.replace('/(auth)/login');
    };
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-2xl font-bold">Dashboard</Text>
          <BalanceCard />
        </View>
        <View>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </Screen>
    );
}
