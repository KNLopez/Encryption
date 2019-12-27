import { InputLabel, Theme } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, withStyles } from "@material-ui/core/styles";

export const InputField = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(4),
        padding: "2px 0 0 0",
      },
    },
    input: {
      // "backgroundColor": theme.palette.background.madefaultin,
      position: "relative",
      backgroundColor: "transparent",
      fontSize: theme.spacing(2),
      width: "auto",
      padding: theme.spacing(2),
      flex: 1,
      border: `1px solid ${theme.palette.text.hint}`,
      borderRadius: 5,
    },
  }),
)(InputBase);

export const LabelField = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 800,
      transform: "translate(0, 1px) scale(0.97)",
    },
  }),
)(InputLabel);
