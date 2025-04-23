import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import CheckIcon from '@/assets/icons/check.svg';

export default function PreferencesScreen() {
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

      <ScrollView 
        className="flex-1 px-4" 
        contentContainerStyle={{paddingTop: 144, paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <Text className="text-[28px] text-primary font-extrabold mb-2">
          What are you looking For ?
        </Text>
        <Text className="text-primary text-primary-600 mb-6">
          Select one or two options
        </Text>

        {/* Options Grid */}
        <View className="flex-1">
          {/* Row 1 */}
          <View className="flex-row gap-4 mb-4">
            {/* Property Management */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/property-management.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Property Management</Text>
            </TouchableOpacity>

            {/* Property for rent/lease */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/property-rent.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Property for rent/lease</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View className="flex-row gap-4 mb-4">
            {/* Property Listing */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/property-listing.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Property Listing</Text>
            </TouchableOpacity>

            {/* Selling Properties */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/selling-properties.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Selling Properties</Text>
            </TouchableOpacity>
          </View>

          {/* Row 3 - Repeated */}
          <View className="flex-row gap-4 mb-4">
            {/* Property Management */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/property-management.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Property Management</Text>
            </TouchableOpacity>

            {/* Property for rent/lease */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/property-rent.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Property for rent/lease</Text>
            </TouchableOpacity>
          </View>

          {/* Row 4 - Repeated */}
          <View className="flex-row gap-4 mb-4">
            {/* Property Listing */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/property-listing.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Property Listing</Text>
            </TouchableOpacity>

            {/* Selling Properties */}
            <TouchableOpacity className="flex-1 bg-white rounded-3xl p-3 border border-gray-100">
              <View className="relative">
                <Image 
                  source={require('@/assets/images/selling-properties.jpg')}
                  className="w-full h-[140px] rounded-2xl"
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 bg-white rounded-full p-2">
                  <CheckIcon width={10} height={10} color="#4B5563" />
                </View>
              </View>
              <Text className="text-xs font-medium text-black mt-2">Selling Properties</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Blur Overlay */}
      <View className="absolute bottom-0 left-0 right-0 h-40 bg-white/80 backdrop-blur-lg z-10" />

      {/* Next Button */}
      <View className="px-4 pb-12 pt-4 bg-transparent absolute bottom-12 left-0 right-0 z-20">
        <TouchableOpacity 
          className="bg-[#1ABC9C] h-[56px] rounded-2xl items-center justify-center shadow-lg"
          onPress={() => router.push('/(auth)/account-setup/role')}
        >
          <Text className="text-white font-semibold text-base">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 