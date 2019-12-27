import axios from "axios";
import { Encryption } from "../ui/Encryption/Encryption.presenter";
import { ENCRYPTIONS } from "./urls";
import { EncryptionFormValues } from "../ui/Encryption/form/container";

export interface Encryptions {
  encryption: Encryption[];
}

export const getEncryptions = axios.request<Encryptions, any>({
  method: "get",
  url: ENCRYPTIONS,
});

export const postEncryption = ({
  name,
  email,
  file1,
  file2,
}: EncryptionFormValues) => {
  let formData = new FormData();
  formData.append("data", JSON.stringify({ name, email }));
  formData.append("file1", file1 as Blob);
  formData.append("file2", file2 as Blob);
  return axios.request<Encryptions, any>({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: formData,
    url: ENCRYPTIONS,
  });
};

export const downloadEncryption = (id: string) =>
  axios
    .request<Encryption, any>({
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
      params: id,
      url: ENCRYPTIONS,
    })
    .then(response => {
      const type = response.headers["content-type"];
      const blob = new Blob([response.data], { type: type });

      const anchor = document.createElement("a");
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.href = window.URL.createObjectURL(blob);
      //change for filename
      anchor.download = response.file.name;
      anchor.click();
    });
