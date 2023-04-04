import { Stack } from "expo-router"
import { ThemeProvider } from '@rneui/themed';
import { FavProvider } from "../../../context/favoriteContext";

const SearchLayout = () => (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="[course]" />
    </Stack>
)


export default SearchLayout;