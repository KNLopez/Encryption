import React from "react";
import { Formik, FormikProps, Form, Field } from "formik";
import InputField from "../../components/forms/fields/Input";
import {
  validator,
  required,
  email,
  requiredAtLeastOne,
} from "../../components/forms/fields/validators";
import { Grid, Box } from "@material-ui/core";
import ActionButton from "../../components/buttons/ActionButton";
import AttachmentField from "../../components/common/attachment.field/container";
import { postEncryption } from "../../../main/api";

export interface EncryptionFormValues {
  name: string;
  email: string;
  file1?: File;
  file2?: File;
}

const EncryptionForm = () => {
  const initialValues: EncryptionFormValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values: EncryptionFormValues): void => {
    postEncryption(values);
  };

  const render = (props: FormikProps<EncryptionFormValues>) => (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            name="name"
            label="common.full.name"
            size="sm"
            gutter={false}
            inputProps={{
              autoComplete: "name",
              id: "name",
            }}
            validate={validator(required, requiredAtLeastOne)}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            name="email"
            label="login.email"
            size="sm"
            gutter={false}
            inputProps={{
              autoComplete: "email",
              id: "email",
            }}
            validate={validator(required, email)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field name="file1" component={AttachmentField} />
        </Grid>
        <Grid item xs={6}>
          <Field name="file2" component={AttachmentField} />
        </Grid>
        <Box width={1} display="flex" justifyContent="flex-end" mt={3}>
          <ActionButton title="Save" />
        </Box>
      </Grid>
    </Form>
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} render={render} />
  );
};

export default EncryptionForm;
