import React, { FC } from "react";
import { Input, Button, Row, Col, Layout } from "antd";
import styles from "./GitCompare.module.css";

export const GitCompare: FC = () => {
  return (
    <Layout>
      <Layout.Header>&nbsp;</Layout.Header>
      <Layout.Content className={styles.gitCompareContent}>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col span={8} offset={6}>
            <Input placeholder="Enter Git User Name" />
          </Col>
          <Col span={8} style={{ textAlign: "left", paddingLeft: "15px" }}>
            <Button type="primary">Compare</Button>
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Design ©2020 Created by Hosan Mohapatra
      </Layout.Footer>
    </Layout>
  );
};
