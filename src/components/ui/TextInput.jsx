import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input
    alignSelf={"center"}
    variant="flushed"
    onChange={changeFn}
    {...props}
  />
);