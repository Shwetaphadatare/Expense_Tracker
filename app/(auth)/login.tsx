import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { saveToken } from '@/services/storage/authStorage';


export default function Login() {
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    const fakeToken = 'user_token';

    await saveToken(fakeToken);

    login(fakeToken);

    router.replace('/(tabs)/dashboard');
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-2xl font-bold">Login</Text>

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
