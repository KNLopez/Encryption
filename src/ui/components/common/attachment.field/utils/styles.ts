import { makeStyles } from "@material-ui/core";
import { AttachmentStyleProps } from "./types";

export const styles = makeStyles(theme => ({
  root: ({ isField }: AttachmentStyleProps) => ({
    padding: theme.spacing(2),
    backgroundColor: "transparent",
    border: "1px solid #589BFF",
    borderRadius: 5,
  }),
  link: ({ isField }: AttachmentStyleProps) => ({
    display: isField ? "flex" : "block",
    cursor: "pointer",
  }),
  input: {
    display: "none",
  },
  icon: ({ isField }: AttachmentStyleProps) => ({
    display: "none",
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  }),
}));
