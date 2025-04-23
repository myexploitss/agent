import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { router } from 'expo-router';
import { BackButton } from '@/components/BackButton';
import CheckIcon from '@/assets/icons/check.svg';

interface Role {
  id: string;
  title: string;
  icon: any; // Using any for now as it's an asset require
}

const roles: Role[] = [
  {
    id: '1',
    title: 'Property Agent',
    icon: require('@/assets/icons/agent.png'),
  },
  {
    id: '2',
    title: 'Land Lord',
    icon: require('@/assets/icons/landlord.png'),
  },
  {
    id: '3',
    title: 'Broker',
    icon: require('@/assets/icons/broker.png'),
  },
  {
    id: '4',
    title: 'Listing Agent',
    icon: require('@/assets/icons/listing.png'),
  },
  {
    id: '5',
    title: 'Tenant',
    icon: require('@/assets/icons/tenant.png'),
  },
  {
    id: '6',
    title: 'Other',
    icon: require('@/assets/icons/other.png'),
  },
];

export default function RoleScreen() {
  const renderItem = ({ item }: { item: Role }) => (
    <TouchableOpacity className="items-center mb-8">
      <View className="relative">
        <View className="w-[80px] h-[80px] rounded-full bg-[#EEF2FF] items-center justify-center">
          <Image 
            source={item.icon}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>
        <View className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-sm border border-primary">
          <CheckIcon width={10} height={10} color="#4B5563" />
        </View>
      </View>
      <Text className="text-xs font-medium text-black mt-1">{item.title}</Text>
    </TouchableOpacity>
  );

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
        <Text className="text-[28px] text-primary font-extrabold mb-4">
          What's Your Role?
        </Text>

        {/* Roles Grid */}
        <FlatList
          data={roles}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
            width: '100%'
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          marginTop:30,
            paddingBottom: 10
          }}
        />
      </View>

      {/* Bottom Section with Progress and Next Button */}
      <View className="px-4 pb-12 pt-4 bg-transparent absolute bottom-12 left-0 right-0 z-20">
        {/* Progress Bar */}
        <View className="h-1 bg-gray-200 rounded-full mb-4 mx-24">
          <View className="w-1/3 h-full bg-primary rounded-full" />
        </View>

        <TouchableOpacity 
          className="bg-[#1ABC9C] h-[56px] rounded-2xl items-center justify-center shadow-lg"
          onPress={() => router.push('/(auth)/account-setup/payment')}
        >
          <Text className="text-white font-semibold text-base">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 