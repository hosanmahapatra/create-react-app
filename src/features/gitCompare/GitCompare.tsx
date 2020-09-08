import React, { FC, useState } from "react";
import { Input, Button, Row, Col, Layout } from "antd";
import styles from "./GitCompare.module.css";

export const GitCompare: FC = () => {
  const [gitUserName, setGetUserName] = useState("");

  const funcComapare = () => {
    if (gitUserName === "") {
      alert("Please enter a git user name");
    } else {
      alert("call API");
    }
  };
  return (
    <Layout>
      <Layout.Header>&nbsp;</Layout.Header>
      <Layout.Content className={styles.gitCompareContent}>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col span={8} offset={6}>
            <Input
              placeholder="Enter Git User Name"
              onChange={(e) => setGetUserName(e.target.value)}
            />
          </Col>
          <Col span={8} style={{ textAlign: "left", paddingLeft: "15px" }}>
            <Button type="primary" onClick={() => funcComapare()}>
              Compare
            </Button>
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Design ©2020 Created by Hosan Mohapatra
      </Layout.Footer>
    </Layout>
  );
};
