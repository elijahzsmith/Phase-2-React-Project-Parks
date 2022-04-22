import React from "react";
import TravelLogItem from "./TravelLogItem";

function TravelLog({ logList, handleClick }) {
  const renderLogs = logList.map((log) => {
    return (
      <TravelLogItem
        key={log.id}
        log={log}
        handleClick={handleClick}
        logList={logList}
      />
    );
  });
  return <div className="logscontainer">{renderLogs}</div>;
}

export default TravelLog;
