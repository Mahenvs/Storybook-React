import React from "react";
import "./ClaimStatus.css";

interface ClaimStatusItem {
  status:
    | "Started"
    | "Submitted"
    | "Under Review"
    | "Approved"
    | "Rejected"
    | "NA";
  date?: string;
  flag: boolean;
}

interface ClaimStatusProps {
  statusList: ClaimStatusItem[];
  direction?: "vertical" | "horizontal";
}

const statusColor: Record<string, string> = {
  Submitted: "gray",
  "Under Review": "blue",
  Approved: "green",
  Rejected: "red",
};

const ClaimTimeline: React.FC<ClaimStatusProps> = ({
  statusList,
  direction = "vertical",
}) => {
  return (
    <div className={`timeline-container ${direction}`} role="list">
      {statusList?.map((item, index) => {
        const hasNext = index < statusList.length - 1;
        const showLine = hasNext && item.flag === true;

        return (
          <React.Fragment key={index}>
            <div
              className="timeline-item"
              role="listitem"
              aria-label={`${item.status}${
                item.date ? " on " + item.date : ""
              }`}
            >
              {item.status !== "NA" && (
                <div
                  className="status-dot"
                  style={{
                    backgroundColor: statusColor[item.status] || "gray",
                  }}
                  title={item.status}
                />
              )}
              <div className="status-label">{item.status}</div>
              {item.date && (
                <div className="status-date">
                  {new Date(item.date).toLocaleDateString()}
                </div>
              )}
            </div>

            {showLine && (
              <div
                className={`timeline-line ${item.flag ? "filled" : ""} ${
                  direction === "horizontal" ? "horizontal" : "vertical"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ClaimTimeline;
