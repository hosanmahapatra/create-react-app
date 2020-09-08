import React, { FC } from "react";
import { Input, Button, Row, Col } from "antd";

export const GitCompare: FC = () => {
  return (
    <Row>
      <Col span={24}>
        <Input placeholder="Enter Git User Name" />
        <Button type="primary">primary</Button>
      </Col>
    </Row>
  );
};
