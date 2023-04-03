import { SafeAreaView, ScrollView } from "react-native";
import { useFavContext } from "../../../context/favoriteContext";
import FavCard from "../../../components/favorites/favCard";

const favorites = () => {
    const { favorites } = useFavContext() || { favorites: [], };

    return (
        <SafeAreaView>
            <ScrollView>
                {
                    favorites.map((course, index) => (
                        <FavCard key={`fav${index}`} {...course} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default favorites;