import { Service } from "../types/api";
import values from "./MOCK_DATA.json";

export const getPromocodes = () =>
  new Promise<Service[]>((resolve) => {
    setTimeout(() => resolve((values as Service[]).slice(0, 10)), 1000);
  });

// import { useEffect, useState } from "react";

// export default function useGetPromocodes() {
//   const [loading, setLoading] = useState(false);
//   const [recipes, setRecipes] = useState(null);

//   useEffect(() => {
//     setLoading(true);

//     getRecipesList().then((recipesList) => {
//       setLoading(false);
//       setRecipes(recipesList);
//     });

//     // cause it's a fake request we don't need to put this dependency in a array
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // TODO: errors
//   return {
//     loading,
//     recipes,
//   };
// }
