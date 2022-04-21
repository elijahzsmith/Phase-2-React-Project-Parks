import React from "react";
import TravelLogItem from "./TravelLogItem";

function TravelLog({ logList }) {
  const renderLogs = logList.map((log) => {
    return <TravelLogItem key={log.id} log={log} />;
  });
  return <div>Logs{renderLogs}</div>;
}

export default TravelLog;
