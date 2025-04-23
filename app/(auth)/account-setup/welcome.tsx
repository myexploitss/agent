import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row justify-between items-center absolute top-12 left-6 right-6 z-10">
        <BackButton />
        <TouchableOpacity className='h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center' onPress={() => router.push('/(auth)/faq-support')}>
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Background Image Section */}
      <View className="h-[400px] w-full">
        <ImageBackground
          source={require('@/assets/images/smile.png')}
          className="flex-1"
          resizeMode="cover"
        />
      </View>

      {/* Welcome Text - Centered */}
      <View className="items-center mt-8">
        <Text className="text-xl text-primary font-extrabold mb-2">
          Welcome to Rans
        </Text>
        <Text className="text-primary text-sm text-center">
          Let's get you started by setting up your{'\n'}account and preferences.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        className="bg-secondary h-[56px] rounded-2xl items-center justify-center absolute bottom-32 left-10 right-10"
        onPress={() => router.push('/(auth)/faq-support')}
      >
        <Text className="text-white font-semibold text-sm">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
} 