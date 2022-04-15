import React, { useEffect, useState } from "react";
import * as Survey from "survey-react";
import { ISurveyProps } from "../../types";

import { Spin } from "antd";

const SurveyComponent: React.FunctionComponent<ISurveyProps> = (props) => {
  const { css, data, json, onComplete } = props;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Survey.StylesManager.applyTheme("modern");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading)
    return (
      <div className="centerDiv">
        <p>Preparing the survey</p>
        <p>Please wait a moment</p>
        <Spin size="large"/>
      </div>
    );

  return (
    <Survey.Survey css={css} data={data} json={json} onComplete={onComplete} />
  );
};

export default SurveyComponent;
