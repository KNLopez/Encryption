import React, { Fragment } from "react";
import styles from "../basic/BasicFields.module.css";
import { withStyles } from "@material-ui/styles";
import { Theme, Button } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

interface ActionButtonProps {
  title: string;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  title,
  ...props
}) => {
  const StyledButton = withStyles((theme: Theme) => ({
    root: {
      width: 150,
      height: 50,
      borderRadius: 100,
      color: theme.palette.getContrastText(deepPurple[700]),
      backgroundColor: "#6E09EA",
      "&:hover": {
        backgroundColor: deepPurple[700],
      },
    },
  }))(Button);

  return (
    <StyledButton {...props} type="submit">
      {" "}
      {title}
    </StyledButton>
  );
};

export default ActionButton;
