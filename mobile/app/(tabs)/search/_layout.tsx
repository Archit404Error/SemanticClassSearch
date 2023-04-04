import { Stack } from "expo-router"

const SearchLayout = () => (
    <Stack screenOptions={{ headerTintColor: "white", headerStyle: { backgroundColor: "#4d9bf0" } }}>
        <Stack.Screen name="index" options={{ title: "Search" }} />
        <Stack.Screen name="[course]" options={{ title: "Course Details" }} />
    </Stack>
)


export default SearchLayout;