import React from "react";
import { IntlProvider } from "react-intl";
import messagesEn from "../ui/translations/en.json";
import AppStyles from "./App.module.css";
import EncryptionContainer from "./Encryption/Encryption.container";
import Theme from "./Theme";

const messages = {
  en: messagesEn,
};

const language = "en";

const App: React.FunctionComponent = () => {
  return (
    <div className="App" style={AppStyles}>
      <Theme>
        <IntlProvider locale={language} messages={messages[language]}>
          <EncryptionContainer />
        </IntlProvider>
      </Theme>
    </div>
  );
};

export default App;
