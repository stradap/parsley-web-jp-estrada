import React from "react";
// import {
//   Card,
//   CardBody,
//   Container,
// } from "reactstrap";
import "antd/dist/antd.css";
import "./App.css";
import defaultSurveyConfig from "../../enum";
import SurveyComponent from "../survey/Survey";
import { Layout } from "antd";

const { Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Content className="site-layout-content">
          <SurveyComponent
            css={defaultSurveyConfig.defaultSurveyCSS}
            data={defaultSurveyConfig.defaultSurveyDATA}
            json={defaultSurveyConfig.defaultSurveyJSON}
            onComplete={(survey: any) => {
              console.log(survey.data);

              /** Save to a database */
              /** Add to a spreadsheet, etc.... */
              /** in our case just logged out in the console */
            }}
          />
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Parsley Health Web Test / Ant Design - JP Estrada ©2022</Footer>
    </>
  );
}

export default App;
