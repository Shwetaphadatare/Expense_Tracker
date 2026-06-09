import { View, Image,Text, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ArrowRight, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp } from '@/utils/responsive';



export default function Screen1() {

  return (
    <View className="flex-1 bg-white px-6 pt-16 py-4">
      {/* Skip */}
      <TouchableOpacity className="self-end">
        <Text className="text-base text-gray-400">Skip</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <View className="flex-1 items-center justify-center ">
        <Image
          source={require('src/assets/screen1.png')}
          style={{
            width: wp(150),
            height: wp(150),
          }}
          resizeMode="contain"
        />
      </View>
      {/* Indicators */}
      <View className="mb-8 flex-row justify-center gap-2">
        <View className="h-2 w-8 rounded-full bg-emerald-700" />
        <View className="h-2 w-2 rounded-full bg-gray-300" />
        <View className="h-2 w-2 rounded-full bg-gray-300" />
      </View>
      {/* Text */}
      <View className="mb-12">
        <Text className="text-start text-4xl font-bold text-slate-900">Track Every</Text>

        <Text className="text-start text-4xl font-bold text-emerald-700">Expense</Text>

        <Text className="mt-4 text-start text-lg leading-7 text-gray-600">
          See exactly where your money goes every month.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={() => router.push('/onboarding/screen2')}
        className="mb-10 h-16 flex-row items-center justify-center rounded-full bg-emerald-800">
        <Text className="text-lg font-semibold text-white">Next</Text>

        <View className="absolute right-3 h-12 w-12 items-center justify-center rounded-full bg-white">
          <ChevronRight size={20} color="#004f3b" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
