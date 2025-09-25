import React from "react";

interface CaseStatusBadgeProps {
  status: string;
}

export const CaseStatusBadge: React.FC<CaseStatusBadgeProps> = ({ status }) => {
  let badgeColor = "bg-gray-200 text-gray-800";
  let badgeText = "";
  let tooltip = "";
  switch (status) {
    case "closed":
      badgeColor = "bg-red-100 text-red-600";
      badgeText = "Closed";
      tooltip = "This case is closed.";
      break;
    case "new":
      badgeColor = "bg-blue-100 text-blue-600";
      badgeText = "New";
      tooltip = "This is a new case.";
      break;
    case "settlement":
      badgeColor = "bg-yellow-100 text-yellow-700";
      badgeText = "Settlement";
      tooltip = "This case is in settlement.";
      break;
    case "active":
      badgeColor = "bg-green-100 text-green-600";
      badgeText = "Active";
      tooltip = "This case is active Now.";
      break;
    default:
      badgeColor = "bg-gray-200 text-gray-800";
      badgeText = status || "Unknown";
      tooltip = "Status unknown.";
  }

  // const infoIcon = <span className="align-middle w-1 h-4"></span>;

  return (
    <span
      className={`text-[0.44rem] mt-1 px-1.5 rounded-2xl py-0.5 font-semibold inline-flex items-center cursor-help ${badgeColor}`}
      title={tooltip}
    >
      {badgeText}
      {/* {infoIcon} */}
    </span>
  );
};
