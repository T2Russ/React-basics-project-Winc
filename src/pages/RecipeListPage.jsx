import { Center, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedData = data.hits.filter((recipe) => {
    
    const nameMatch = recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  
    const healthLabelMatch = recipe.recipe.healthLabels.some((label) => {
      return label.toLowerCase().includes(searchField.toLowerCase());
    });
   
    return nameMatch || healthLabelMatch;
  });

  // console.log("matchedData:", matchedData); //debugging

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <Stack>
      <TextInput
        onChange={handleChange}
        placeholder="Search recepies"
        variant="outline"
        pr="4.5rem"
        backgroundColor="white"
        size="lg"
        w={400}
        m={8}
      />
      <Center
        bgColor="blue.200"
        gap={4}
        w={{ base: "full", sm: "80%" }}
        flexWrap="wrap"
        flexDir={{ base: "column", sm: "row" }}
        justify={"center"}
        alignSelf={"center"}>
        {matchedData.length > 0 ? (
          matchedData.map((recipe) => (
            <RecipeItemCard
              key={recipe.recipe.label}
              recipe={recipe}
              clickFn={clickFn}
            />
          ))
        ) : (
          <p>No recipe found.</p>
        )}
      </Center>
    </Stack>
  );
};