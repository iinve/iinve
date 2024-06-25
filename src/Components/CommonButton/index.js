import React from "react";
import Style from "./CommonButton.module.scss";
import { Button, Divider } from "@nextui-org/react";

const CommonButton = ({ text, icon, onClick }) => {
  return (
    <Button
      radius="full"
      className={Style.button}
      endContent={icon}
      se
      size="lg"
      onClick={onClick}
    >
      {text}
      <Divider orientation="vertical" className={Style.divider} />
    </Button>
  );
};

export default CommonButton;
