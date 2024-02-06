import React, { useState } from "react";
const JoinScreen = ({ getMeetingAndToken }) => {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    (await getMeetingAndToken) && getMeetingAndToken(meetingId);
  };
  return (
    <div style={{ paddingTop: 10 }}>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button onClick={onClick}>Join</button>
      {" or "}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  );
};

export default JoinScreen;
