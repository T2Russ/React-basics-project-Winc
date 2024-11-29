import { Flex, Grid, Button, GridItem, Card, Heading, Image, Text, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  console.log("Recipe item", recipe);
  return (
    <Card
      bgColor="blue.200"
      h="fit-content"
      borderRadius={"xl"}
      cursor={"pointer"}
      m={20}
      // w="2xl"
      gap={4}
      w={{ base: "full", sm: "85%" }}
      // height={"-webkit-fit-content"}
      // height={"35rem"}
    >
      <Image
        h={60}
        w="100%"
        objectFit="cover"
        // borderRadius="lg"
        src={recipe.image}
        alt={recipe.label}
      />
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Box p="6">
            <Text>
              {recipe.mealType && (
                <Flex gap={2}>
                  {recipe.mealType.map((type) => (
                    <Text
                      key={type}
                      textTransform={"uppercase"}
                      color={"gray.600"}>
                      {type}:
                    </Text>
                  ))}
                </Flex>
              )}
            </Text>
            <Heading size="md" pb={4}>
              {recipe.label}
            </Heading>

            <Text>
              Total cooking time:{" "}
              <Text as="span" fontWeight="bold">
                {recipe.totalTime} Minutes
              </Text>
            </Text>
            <Text mb="4">
              Serving:{" "}
              <Text as="span" fontWeight="bold">
                {recipe.yield}
              </Text>
            </Text>

            <Box mb="4">
              {recipe.ingredients && (
                <Text>
                  {" "}
                  <Text as="span" fontWeight="bold">
                    Ingredients:
                  </Text>
                  <Flex flexWrap="wrap" flexDir={{ base: "column", sm: "row" }}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <Text key={index} m={2}>
                        {ingredient.text}
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Box>
          </Box>
        </GridItem>

        <GridItem>
          <Box p="6">
            <Box mb="4">
              <Flex gap={2}>
                {recipe.healthLabels && (
                  <Text>
                    Health labels:
                    <Flex
                      gap={2}
                      flexWrap="wrap"
                      flexDir={{ base: "column", sm: "row" }}
                      alignItems={"center"}>
                      {recipe.healthLabels.map((label) => (
                        <Text key={label} bgColor={"green.200"}>
                          {label}
                        </Text>
                      ))}
                    </Flex>
                  </Text>
                )}
              </Flex>
            </Box>
            <Flex gap={2} flexWrap="wrap" mb="4" flexDir={{ base: "column" }}>
              {recipe.dietLabels && (
                <Text>
                  Diet:
                  <Flex gap={2}>
                    {recipe.dietLabels.map((diet) => (
                      <Text key={diet} bgColor={"orange.200"}>
                        {diet}
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Flex>

            <Flex gap={2} flexWrap="wrap" mb="4" flexDir={{ base: "column" }}>
              {recipe.cautions && (
                <Text>
                  Cautions:
                  <Flex gap={2}>
                    {recipe.cautions.map((caution) => (
                      <Text key={caution} as="mark">
                        {caution}
                      </Text>
                    ))}
                  </Flex>
                </Text>
              )}
            </Flex>
          </Box>
        </GridItem>
      </Grid>

      <Button
        w="fit-content"
        m={10}
        bgColor={"blue.200"}
        onClick={() => clickFn()}>
        Back to the main page
      </Button>
    </Card>
    // </Center>
  );
};