import { useEffect, useState } from "react";
import { storeLocal, getStored } from "../../../utils/localStorage";
import { SafeAreaView, ScrollView } from "react-native";
import { useFavContext } from "../../../context/favoriteContext";
import FavCard from "../../../components/favorites/favCard";

const favorites = () => {
    const { favorites, addFavorite, removeFavorite } = useFavContext() || { favorites: [], };

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