import { router } from 'expo-router';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { Mail, Lock } from 'lucide-react-native';

import CustomInput from '@/components/ui/CustomInput';
import { c } from './authStyle.classes';

import useAppTheme from '@/hooks/useAppTheme';
import { useThemeStore } from '@/store/themeStore';

export default function LoginScreen() {
  const theme = useAppTheme();

  return (
    <View
      className={c.container}
      style={{
        backgroundColor: theme.background,
      }}>
      <View
        className={c.content}
        style={{
          backgroundColor: theme.background,
        }}>
        <View
          className={c.card}
          style={{
            backgroundColor: theme.background,
          }}>
          <View className={c.logoContainer}>
            <View
              className={c.logoCircle}
              style={{
                backgroundColor: theme.cardBackground,
              }}>
              <Image
                source={require('src/assets/wallet.png')}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </View>

            <Text
              className={c.appTitle}
              style={{
                color: theme.primary,
              }}>
              Expense Tracker
            </Text>

            <Text
              className={c.appSubtitle}
              style={{
                color: theme.secondaryText,
              }}>
              Track. Manage. Save.
            </Text>
          </View>
          <Text
            className={c.welcomeTitle}
            style={{
              color: theme.heading,
            }}>
            Welcome back!
          </Text>

          <Text
            className={c.welcomeSubtitle}
            style={{
              color: theme.secondaryText,
            }}>
            Login to continue tracking your expenses.
          </Text>
          <View className={c.inputContainer}>
            <CustomInput placeholder="Email Address" icon={<Mail size={25} color="#64748B" />} />

            <View className="h-4" />

            <CustomInput
              placeholder="Password"
              secureTextEntry
              icon={<Lock size={25} color="#64748B" />}
            />
          </View>
          <TouchableOpacity className={c.forgotPassword}>
            <Text
              className={c.forgotPasswordText}
              style={{
                color: theme.primary,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={c.loginButton}
            style={{
              backgroundColor: theme.primary,
            }}>
            <Text className={c.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View className={c.footer}>
            <Text
              className={c.footerText}
              style={{
                color: theme.secondaryText,
              }}>
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
              <Text
                className={c.signUpText}
                style={{
                  color: theme.primary,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
