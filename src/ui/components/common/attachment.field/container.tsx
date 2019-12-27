import { Box, Link } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import React, { useState } from "react";
import Text from "../../Text";
import { styles } from "./utils/styles";
import { AttachmentFieldProps } from "./utils/types";

export const AttachmentField: React.FunctionComponent<AttachmentFieldProps> = ({
  component = "field",
  ...fieldProps
}) => {
  const [fileName, setFileName] = useState<string>();
  const isField = component === "field";
  const text = "document.file.select";
  const classes = styles({ isField });
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFileName(
      e.currentTarget.files![0] ? e.currentTarget.files![0].name : "",
    );
    fieldProps.form.setFieldValue(
      fieldProps.field.name,
      e.currentTarget.files! && e.currentTarget.files![0],
    );
  };
  return (
    <Box mt={0.2} className={classes.root}>
      <input
        accept="*"
        className={classes.input}
        id={`${fieldProps.field.name}-button-file`}
        multiple={false}
        type="file"
        onChange={onChange}
        onBlur={onChange}
      />
      <label htmlFor={`${fieldProps.field.name}-button-file`}>
        <Link component="span" variant="button" className={classes.link}>
          <AttachFile className={classes.icon} />
          <Text translation={text} />
        </Link>
      </label>
      {fileName ? fileName : null}
    </Box>
  );
};

export default AttachmentField;
