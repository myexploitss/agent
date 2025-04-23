import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';

export default function PaymentScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* Background Image */}
      <Image 
        source={require('@/assets/images/smile.png')}
        className="absolute top-0 left-0 w-[200px] h-[125px] rounded-br-[40px]"
        resizeMode="cover"
      />

      {/* Header */}
      <View className="flex-row justify-between items-center absolute top-12 left-6 right-6 z-10">
        <BackButton />
        <TouchableOpacity className='h-[50px] w-[100px] rounded-xl bg-primary items-center justify-center'>
          <Text className="text-white text-sm font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-4 pt-36">
        {/* Title Section */}
        <Text className="text-2xl text-primary font-extrabold mb-2">
          Add Payment Method
        </Text>
        <Text className="text-sm text-gray-500 mb-8">
          This can be edited later in your account settings
        </Text>

        {/* Card Preview */}
        <View className="w-full aspect-[1.586] bg-black rounded-[20px] p-6 mb-8">
          <View className="flex-row items-center gap-2 mb-12">
            <View className="w-10 h-7 bg-[#FFD700] rounded-md" />
            <View className="w-7 h-7 bg-white/20 rounded-full" />
            <View className="w-7 h-7 bg-white/20 rounded-full" />
            <Image 
              source={require('@/assets/icons/apple-pay.png')}
              className="w-10 h-7"
              resizeMode="contain"
            />
            <Image 
              source={require('@/assets/icons/google-pay.png')}
              className="w-10 h-7"
              resizeMode="contain"
            />
          </View>
          <Text className="text-white text-xl tracking-wider font-medium mb-8">
            **** **** **** 1234
          </Text>
          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-white/60 text-[10px] mb-1">VALID THRU</Text>
              <Text className="text-white text-sm">01/22</Text>
            </View>
            <Text className="text-white text-lg font-medium">Nionzima Enock</Text>
          </View>
        </View>

        {/* Payment Methods */}
        <View className="flex-row justify-between mb-8">
          <TouchableOpacity className="h-12 px-5 bg-gray-50 rounded-full flex-row items-center">
            <Image 
              source={require('@/assets/icons/paypal.png')}
              className="w-5 h-5 mr-2"
            />
            <Text className="text-sm font-medium">Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-12 px-5 bg-gray-50 rounded-full flex-row items-center">
            <Image 
              source={require('@/assets/icons/mastercard.png')}
              className="w-5 h-5 mr-2"
            />
            <Text className="text-sm font-medium">Mastercard</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-12 px-5 bg-gray-50 rounded-full flex-row items-center">
            <Image 
              source={require('@/assets/icons/visa.png')}
              className="w-5 h-5 mr-2"
            />
            <Text className="text-sm font-medium">Visa</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section with Progress and Next Button */}
      <View className="px-4 pb-12 pt-4 bg-transparent absolute bottom-12 left-0 right-0 z-20">
        {/* Progress Bar */}
        <View className="h-1 bg-gray-200 rounded-full mb-4 mx-24">
          <View className="w-2/3 h-full bg-primary rounded-full" />
        </View>

        <TouchableOpacity 
          className="bg-[#1ABC9C] h-[56px] rounded-2xl items-center justify-center shadow-lg"
          onPress={() => router.push('/(auth)/account-setup/profile-picture')}
        >
          <Text className="text-white font-semibold text-base">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
