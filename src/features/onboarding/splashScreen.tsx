import { useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';

export default function SplashScreen() {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });

    scale.value = withSpring(1);

    translateY.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  return (
    <ImageBackground
      source={require('src/assets/splashscreen_bg.png')}
      resizeMode="cover"
      className="flex-1">
      {/* Dark overlay */}
      <View
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0,0,0,0.35)',
        }}
      />

      <View className="flex-1 items-center justify-center px-6">
        <Animated.View style={animatedStyle} className="flex-1 items-center justify-center">
          {/* Glass Card */}
          <View
            className="items-center justify-center rounded-[36px]"
            style={{
              width: 160,
              height: 160,
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.25)',
            }}>
            <Image
              source={require('src/assets/splashscreen_logo.png')}
              style={{
                width: 280,
                height: 280,
              }}
              resizeMode="contain"
            />
          </View>

          <Text className="mt-8 text-center text-4xl font-bold text-white">Expense</Text>
          <Text className="mt-3 text-center text-4xl font-bold text-emerald-400">Tracker</Text>
          <Text className="mt-3 text-center font-medium text-lg text-white/90">Track. Understand. Save.</Text>
        </Animated.View>
      </View>

      {/* Progress */}
      <View className="absolute right-0 bottom-20 left-0 items-center">
        <View
          className="overflow-hidden rounded-full"
          style={{
            width: 120,
            height: 6,
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}>
          <View
            style={{
              width: 50,
              height: 6,
              backgroundColor: '#10B981',
              borderRadius: 999,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
