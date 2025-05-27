import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-dark-200 text-3xl font-bold">Welcome!</Text>
      <Link href={"/onboarding"}>onboarding</Link>
      <Link href={"/movie/avengers"}>See Avengers Movie</Link>
    </View>
  );
}
