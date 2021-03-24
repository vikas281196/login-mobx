import { observer } from "mobx-react";
import React from "react";

const UserProfile = observer(({ userStore }) => {
  return (
    <div>
      <h1>Hello {userStore.user.firstName}</h1>
    </div>
  );
});

export default UserProfile;
