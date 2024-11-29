import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItem } from "./pages/RecipeItem";
import { Center, Heading, Stack } from "@chakra-ui/react";

export const App = () => {
  const [selectRecipe, setSelectRecipe] = useState();
  const greeting = "RECIPE CHECKER";
  // if (!recipe) {
  //   return <Center>Loading or no recipe selected...</Center>;  // Handling undefined recipe
  // }

  return (
    <Center bgColor="blue.200" m={0} flexDir="column">
      {selectRecipe ? (
        <RecipeItem recipe={selectRecipe} clickFn={setSelectRecipe} />
      ) : (
        <Stack bgColor="blue.200" p={10}>
          <Heading size="xl" color="blue.500" alignSelf={"center"}>
            {greeting}
          </Heading>
          <RecipeListPage clickFn={setSelectRecipe} />
        </Stack>
      )}
    </Center>
  );
};
