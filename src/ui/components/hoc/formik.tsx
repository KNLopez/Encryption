import { Field as FormikField, FieldProps } from "formik";
import React from "react";
import { FormikHybridFieldProps } from "./utils/types";

export type Subtract<T, V> = Pick<T, Exclude<keyof T, keyof V>>;

export function withFormik<T extends FormikHybridFieldProps, U>(
  Component: React.ComponentType<T>,
) {
  return class extends React.Component<Subtract<T, FieldProps>> {
    public render() {
      const childrenRenderer = (fieldProps: FieldProps<U>) => (
        <Component {...fieldProps} {...(this.props as T)} />
      );

      return <FormikField name={this.props.name} render={childrenRenderer} />;
    }
  };
}
