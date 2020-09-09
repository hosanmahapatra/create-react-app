import React, { FC } from "react";
import { Card, Row, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import Avatar from "antd/lib/avatar/avatar";
import { GitUserDetails } from "./gitCompareSlice";

export const UserDetailsCard: FC<{ userDetails: GitUserDetails }> = ({
  userDetails,
}) => {
  return (
    <Card style={{ width: 400, marginTop: 16, minHeight: "300px" }}>
      <Meta
        avatar={<Avatar src={userDetails.avatar_url} />}
        title={userDetails.login}
        description={userDetails.bio}
      />
      <Row>
        <Col span={24}>&nbsp;</Col>
      </Row>
      <Row>
        <Col span={24}>
          <div>
            <div style={{ float: "left" }}> name:</div>
            <div style={{ float: "left", marginLeft: "5px" }}>
              <h4>{userDetails.name === null ? "N/A" : userDetails.name}</h4>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div>
            <div style={{ float: "left" }}> Public Repos:</div>
            <div style={{ float: "left", marginLeft: "5px" }}>
              <h4>
                {userDetails.public_repos === null
                  ? "N/A"
                  : userDetails.public_repos}
              </h4>
            </div>
          </div>
        </Col>

        <Col span={12}>
          <div>
            <div style={{ float: "left" }}> Public Gists:</div>
            <div style={{ float: "left", marginLeft: "5px" }}>
              <h4>
                {userDetails.public_gists === null
                  ? "N/A"
                  : userDetails.public_gists}
              </h4>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div>
            <div style={{ float: "left" }}> Followers:</div>
            <div style={{ float: "left", marginLeft: "5px" }}>
              <h4>
                {userDetails.followers === null ? "N/A" : userDetails.followers}
              </h4>
            </div>
          </div>
        </Col>

        <Col span={12}>
          <div>
            <div style={{ float: "left" }}> Following:</div>
            <div style={{ float: "left", marginLeft: "5px" }}>
              <h4>
                {userDetails.following === null ? "N/A" : userDetails.following}
              </h4>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
