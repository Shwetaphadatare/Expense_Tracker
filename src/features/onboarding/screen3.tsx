import { setOnboardingCompleted } from '@/services/storage/appStorage';
import { router } from 'expo-router';
import { TouchableOpacity, View,Image, Text, Dimensions } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
const { width } = Dimensions.get('window');
export default function Screen3() {
    const handleContinue = async () => {
        await setOnboardingCompleted();
    
        router.replace('/(auth)/login');
      };
  return (
    <View className="flex-1 bg-white px-6 py-4 pt-16">
      {/* Skip */}
      <TouchableOpacity className="self-end">
        <Text className="text-base text-gray-400">Skip</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('src/assets/screen3.png')}
          style={{
            width: width * 1.2,
            height: width * 1.2,
          }}
          resizeMode="contain"
        />
      </View>
      {/* Indicators */}
      <View className="mb-8 flex-row justify-center gap-2">
        <View className="h-2 w-2 rounded-full bg-gray-300" />
        <View className="h-2 w-2 rounded-full bg-gray-300" />
        <View className="h-2 w-8 rounded-full bg-emerald-700" />
      </View>
      {/* Text */}
      <View className="mb-12">
        <Text className="text-start text-4xl font-bold text-slate-900">Save More &</Text>

        <Text className="text-start text-4xl font-bold text-emerald-700">Achieve Goals</Text>

        <Text className="mt-4 text-start text-lg leading-7 text-gray-600">
          Set savings goals and build a better financial future
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={handleContinue}
        className="mb-10 h-16 flex-row items-center justify-center rounded-full bg-emerald-800">
        <Text className="text-lg font-semibold text-white">Next</Text>

        <View className="absolute right-3 h-12 w-12 items-center justify-center rounded-full bg-white">
          <ChevronRight size={20} color="#004f3b" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
