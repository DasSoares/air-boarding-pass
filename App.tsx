import {
  useFonts,
  Inter_700Bold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { Home } from "@/app/home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar backgroundColor="transparent" style="dark" translucent />
      <Home />
    </>
  );
}
