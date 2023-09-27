import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEnMessages from "./locales/en.json"; // Asumiendo que los mensajes están en formato JSON
import localeEsMessages from "./locales/es.json";
import JobsList from "./components/jobslist";

const browserLanguage = navigator.language || navigator.userLanguage;
const isSpanish = browserLanguage.startsWith('es');

const messages = isSpanish ? localeEsMessages : localeEnMessages;
const locale = isSpanish ? 'es' : 'en';

const App = () => {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <JobsList />
    </IntlProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
