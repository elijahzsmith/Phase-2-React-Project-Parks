import React from "react";
import TravelLogItem from "./TravelLogItem";

function TravelLog({ logList, handleClick }) {
  const renderLogs = logList.map((log) => {
    return <TravelLogItem key={log.id} log={log} handleClick={handleClick} />;
  });
  return <div>Logs{renderLogs}</div>;
}

export default TravelLog;
