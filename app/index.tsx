import { useEffect } from 'react';
import { router } from 'expo-router';

import { getOnboardingCompleted } from '@/services/storage/appStorage';
import { getToken } from '@/services/storage/authStorage';
import SplashScreen from '@/features/onboarding/splashScreen';

export default function Index() {
  useEffect(() => {
    const initializeApp = async () => {
      
      // Show splash screen for 5 seconds
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const onboarding = await getOnboardingCompleted();
      const token = await getToken();

      if (!onboarding) {
        router.replace('/(auth)/onboarding');
        return;
      }

      if (token) {
        router.replace('/(tabs)/dashboard');
        return;
      }

      router.replace('/(auth)/login');
    };

    initializeApp();
  }, []);

  return <SplashScreen />;
}
