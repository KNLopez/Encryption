import { FormikHybridFieldProps } from "../../../hoc/utils/types";

export type AttachmentComponent = "field" | "button";

export interface AttachmentFieldProps extends FormikHybridFieldProps {
  name: string;
  component?: AttachmentComponent;
}

export interface AttachmentStyleProps {
  isField: boolean;
}

export type AttachmentContainerProps = AttachmentFieldProps;
