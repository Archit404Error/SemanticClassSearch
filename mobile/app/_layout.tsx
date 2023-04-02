import { Stack } from "expo-router"
import { ThemeProvider } from '@rneui/themed';

const RootLayout = () => (
    <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
)


export default RootLayout;