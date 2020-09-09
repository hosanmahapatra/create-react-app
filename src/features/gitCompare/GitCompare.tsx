import React, { FC, useState, useEffect } from "react";
import { Input, Button, Row, Col, Layout, Alert } from "antd";
import styles from "./GitCompare.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitDetails,
  selectGitUser,
  selectStatus,
  selectError,
  GitUserDetails,
} from "./gitCompareSlice";
import { UserDetailsCard } from "./UserDetailsCard";
import orderBy from "lodash/orderBy";
import { useLocation, useHistory } from "react-router-dom";
import { Search } from "history";

export const GitCompare: FC = () => {
  const location = useLocation<{ search: Search }>();
  const query = new URLSearchParams(location.search);
  const usernames: string | null = query.get("usernames");

  const [gitUserName, setGetUserName] = useState("");
  const dispatch = useDispatch();
  const gitUsers = useSelector(selectGitUser);
  const apiStatus = useSelector(selectStatus);
  const apiError = useSelector(selectError);
  const history = useHistory();

  useEffect(() => {
    if (usernames!) {
      console.log(usernames);
      const userArray = usernames?.split(",");
      userArray?.map((user) => {
        const userFound = gitUsers.findIndex(
          (usr) => usr.login?.toLowerCase() === user.toLowerCase()
        );
        if (userFound === -1) {
          dispatch(fetchGitDetails(user));
        }
      });
    }
  }, [usernames]);

  const sortedUser = orderBy(
    gitUsers,
    [
      (obj: GitUserDetails) => obj.public_repos,
      (obj: GitUserDetails) => obj.followers,
    ],
    ["desc"]
  );

  const funcComapare = () => {
    if (gitUserName === "") {
      alert("Please enter a git user name");
    } else {
      if (gitUsers) {
        const usernames = gitUsers.map((user) => {
          return user.login;
        });
        usernames.push(gitUserName);
        history.push("/?usernames=" + usernames.toString());
      } else {
        history.push("/?usernames=" + gitUserName);
      }
    }
  };
  return (
    <Layout>
      <Layout.Header>
        <h1 style={{ color: "#fff" }}>Git Profile Comparison</h1>
      </Layout.Header>
      <Layout.Content className={styles.gitCompareContent}>
        <Row>
          <Col span={24}>&nbsp;</Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>Profiles are ranked based on public repos and followers</p>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={6}>
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
        <Row>
          <Col span={24}>&nbsp;</Col>
        </Row>
        <Row>
          <Col span={24}>
            {apiStatus === "fetching" && (
              <Alert message="Fetching User Details" type="info" />
            )}
            {apiError !== null && (
              <Alert
                message="Notification"
                description={apiError}
                type="warning"
                closable
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>&nbsp;</Col>
        </Row>
        <Row>
          {sortedUser &&
            sortedUser.map((userDet: GitUserDetails, index: number) => (
              <Col span={8}>
                <UserDetailsCard userDetails={userDet} key={index} />
              </Col>
            ))}
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Design ©2020 Created by Hosan Mohapatra
      </Layout.Footer>
    </Layout>
  );
};
