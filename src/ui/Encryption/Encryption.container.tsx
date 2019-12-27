import React, { useEffect, useState } from "react";
import EncryptionPresenter, { Encryption } from "./Encryption.presenter";
import { getEncryptions } from "../../main/api";

const EncryptionContainer: React.FC = () => {
  const [encryptions, setEncryptions] = useState<Encryption[]>([]);
  getEncryptions.then(response => setEncryptions(response.data));
  useEffect(() => {}, [encryptions]);

  return <EncryptionPresenter encryptions={encryptions} />;
};

export default EncryptionContainer;
