import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import LocationIcon from '@/assets/icons/location.svg';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

export default function LocationScreen() {
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

      <View className="flex-1 px-4">
        {/* Title Section */}
        <View className="pt-36 z-20">
          <Text className="text-2xl text-primary font-extrabold mb-2">
            Add your Location
          </Text>
          <Text className="text-primary text-sm mb-8">
            This can be edited later in your account settings
          </Text>
        </View>

        {/* Map Container */}
        <View className="w-full h-[400px] rounded-3xl overflow-hidden mb-4 relative">
          <Image 
            source={require('@/assets/images/MAP.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-0 right-0">
            <View className="bg-[#FFF8F880] w-full py-3 rounded-xl">
              <Text className="text-primary text-base text-center">
                Select on Map
              </Text>
            </View>
          </View>
        </View>

        {/* Location Selector */}
        <TouchableOpacity className="flex-row items-center bg-white border border-border h-[56px] rounded-xl px-4 mb-6 mx-4">
          <View className="flex-row items-center">
            <LocationIcon width={20} height={20} color="#4B5563" className='mr-2 ml-4' />
            <Text className="text-primary text-sm">Juba, South Sudan</Text>
          </View>
          <ChevronDownIcon width={10} height={10} color="#4B5563" className="ml-4" />
        </TouchableOpacity>

        {/* Progress Bar */}
        <View className="h-1 bg-gray-200 rounded-full mb-5 mx-24">
          <View className="w-2 h-full bg-primary rounded-full" />
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          className="bg-secondary h-[56px] rounded-2xl items-center justify-center mx-8"
          onPress={() => router.push('/(auth)/account-setup/preferences')}
        >
          <Text className="text-white font-semibold text-sm">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 