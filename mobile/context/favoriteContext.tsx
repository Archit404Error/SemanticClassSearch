import { useContext, createContext, useState, useEffect } from "react";
import { getStored, storeLocal } from "../utils/localStorage";

interface FavContext {
  favorites: CourseRec[];
  addFavorite: (course: CourseRec) => void;
  removeFavorite: (course: CourseRec) => void;
}

const FavoriteContext = createContext<FavContext>(null as any);

export const useFavContext = () => {
  return useContext(FavoriteContext);
};

export const FavProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<CourseRec[]>([]);

  useEffect(() => {
    (async () => setFavorites(await getStored("cornellCourseFavorites")))()
  }, []);

  const addFavorite = (course: CourseRec) => {
    const updated = [...favorites, course];
    storeLocal("cornellCourseFavorites", updated);
    setFavorites(updated);
  }

  const removeFavorite = (course: CourseRec) => {
    const updated = favorites.filter((rec) => `${rec.dept} ${rec.number}` !== `${course.dept} ${course.number}`);
    storeLocal("cornellCourseFavorites", updated);
    setFavorites(updated);
  }

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
};
