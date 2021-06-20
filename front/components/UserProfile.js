import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
        </div>,
        <div key="followings">
          팔로잉
          <br />
        </div>,
        <div key="followars">
          팔로워
          <br />
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>SY</Avatar>} title="SungYun" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
