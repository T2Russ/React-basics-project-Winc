import { Flex, Heading, Image, Stack,Text, Card, CardBody } from "@chakra-ui/react";

export const RecipeItemCard = ({ recipe, clickFn }) => {
  // console.log("Recipe:", recipe); // debugging
  // console.log("Nested Recipe:", recipe.recipe);
  const nestedRecipe = recipe.recipe; 
  return (
    <div>
      <Card
        bgColor="white"
        w="sm"
        // height={"-webkit-fit-content"}
        height={"35rem"}
        borderRadius={"xl"}
        cursor={"pointer"}
        onClick={() => clickFn(nestedRecipe)}
        _hover={{ transform: "scale(1.10)" }}>
        <CardBody>
          <Image
            src={nestedRecipe.image}
            alt={nestedRecipe.label}
            h={60}
            w="100%"
            borderRadius="xl"
            objectFit="cover"
          />

          <Stack mt="6" spacing="3">
            <Flex
              gap={2}
              flexWrap="wrap"
              flexDir={{ base: "column", sm: "row" }}
              justify={"center"}
              alignItems={"center"}>
              {nestedRecipe.mealType && (
                <Text>
                  <Flex gap={2}>
                    {nestedRecipe.mealType.map((type) => (
                      <Text key={type} color={"gray.500"}>
                        {type}.
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Flex>

            <Heading size="md" align={"center"}>
              {nestedRecipe.label}
            </Heading>

            <Flex
              gap={2}
              flexWrap="wrap"
              flexDir={{ base: "column" }}
              justify={"center"}
              alignItems={"center"}>
              {nestedRecipe.healthLabels && (
                <Text>
                  <Flex gap={2}>
                    {nestedRecipe.healthLabels.map((label) =>
                      label === "Vegan" || label === "Vegetarian" ? (
                        <Text key={label} bgColor={"purple.200"}>
                          {label}
                        </Text>
                      ) : null
                    )}
                  </Flex>
                </Text>
              )}
            </Flex>

            <Flex
              gap={2}
              flexWrap="wrap"
              flexDir={{ base: "column" }}
              justify={"center"}
              alignItems={"center"}>
              {nestedRecipe.dietLabels && (
                <Text>
                  <Flex gap={2}>
                    {nestedRecipe.dietLabels.map((diet) => (
                      <Text key={diet} bgColor={"green.200"}>
                        {diet}
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Flex>

            <Flex
              gap={2}
              flexWrap="wrap"
              flexDir={{ base: "column" }}
              justify={"center"}
              alignItems={"center"}>
              {nestedRecipe.dishType && (
                <Text align={"center"}>
                  Dish:
                  <Flex gap={2}>
                    {nestedRecipe.dishType.map((dish) => (
                      <Text key={dish} bgColor={"blue.100"}>
                        {dish}
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Flex>

            <Flex
              gap={2}
              flexWrap="wrap"
              flexDir={{ base: "column" }}
              justify={"center"}
              alignItems={"center"}>
              {nestedRecipe.cautions && (
                <Text align={"center"}>
                  Cautions:
                  <Flex gap={2}>
                    {nestedRecipe.cautions.map((caution) => (
                      <Text key={caution} m={2} as="mark">
                        {caution}
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};