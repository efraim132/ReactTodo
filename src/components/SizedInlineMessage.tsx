import { InlineMessage } from "@primer/react/experimental";
import React from "react";

interface Props {
  visible: boolean;
  children: String;
}

const SizedInlineMessage = ({ visible, children }: Props) => {
  return (
    <InlineMessage
      variant="warning"
      sx={{
        width: "fit-content",
        margin: "10px auto",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {children}
    </InlineMessage>
  );
};

export default SizedInlineMessage;
