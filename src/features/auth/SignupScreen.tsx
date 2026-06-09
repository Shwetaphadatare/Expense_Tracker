import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { Mail, Lock, User } from 'lucide-react-native';

import { c } from './authStyle.classes';
import { wp } from '@/utils/responsive';

import CustomInput from '@/components/ui/CustomInput';
import useAppTheme from '@/hooks/useAppTheme';


export default function SignupScreen() {
  const theme = useAppTheme();

  return (
    <SafeAreaView
      className={c.container}
      style={{
        backgroundColor: theme.background,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
       

        <View className=" px-6 pt-4 pb-8" style={{ backgroundColor: theme.primary }}>
          <View className="mt-8 flex-row">
            

            <View className="flex-1 justify-center">
              <Text className="text-2xl leading-tight font-bold text-white">
                Create your{'\n'}account
              </Text>

              <Text className="mt-5 text-sm leading-6 text-emerald-50">
                Start tracking your expenses and take control of your money.
              </Text>
            </View>

            {/* RIGHT IMAGE */}

            <View className="mr-2 flex-1 items-center">
              <Image
                source={require('src/assets/phone-mock.png')}
                style={{
                  width: wp(60),
                  height: wp(60),
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* FORM */}

        <View className="mt-2 mb-2 px-6">
          <View className="p-5">
            <CustomInput placeholder="Full Name" icon={<User size={20} color="#64748B" />} />

            <View className="h-4" />

            <CustomInput placeholder="Email Address" icon={<Mail size={20} color="#64748B" />} />

            <View className="h-4" />

            <CustomInput
              placeholder="Password"
              secureTextEntry
              icon={<Lock size={20} color="#64748B" />}
            />

            <View className="h-4" />

            <CustomInput
              placeholder="Confirm Password"
              secureTextEntry
              icon={<Lock size={20} color="#64748B" />}
            />

            <TouchableOpacity className="mt-5 flex-row">
              <View className={c.agreeButton} style={{ backgroundColor: theme.primary }} />

              <Text style={{ color: theme.secondaryText }}>
                I agree to Terms of Service and Privacy Policy
              </Text>
            </TouchableOpacity>

            {/* BUTTON */}

            <TouchableOpacity
              className={c.loginButton}
              style={{
                backgroundColor: theme.primary,
              }}>
              <Text className={c.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

           

            <View className="mt-8 flex-row justify-center">
              <Text
                style={{
                  color: theme.secondaryText,
                }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Text
                  className={c.signUpText}
                  style={{
                    color: theme.primary,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
