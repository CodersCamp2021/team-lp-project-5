import { MultiSelect } from "@mantine/core";
import { useState } from "react";

const data = [
  { value: "personal", label: "personal" },
  { value: "bussiness", label: "bussiness" },
  { value: "friends", label: "friends" },
  { value: "family", label: "family" },
  { value: "hobby", label: "hobby" },
];

export const Collection = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect
    sx={(theme) => ({
    backgroundColor: theme.colors.darkBg,
  })}
      value={value}
      onChange={setValue}
      data={data}
      placeholder="Pick all your choices"
      size="md"
      variant="unstyled"
      transitionDuration={150}
      transition="pop-top-left"
      transitionTimingFunction="ease"
    />
  );
};

export default Collection;
