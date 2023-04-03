import { Slot } from "expo-router"
import { FavProvider } from "../context/favoriteContext";

const RootLayout = () => (
    <FavProvider>
        <Slot />
    </FavProvider>
)


export default RootLayout;