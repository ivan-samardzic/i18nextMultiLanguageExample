import React from "react";
import { useTranslation } from "react-i18next";

const Hello = () => {
  const { t, i18n } = useTranslation();
  return <div style={{ fontSize: "32px" }}>{t("Hello")}</div>;
};

export default Hello;