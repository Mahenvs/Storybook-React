import React from "react";
import "./Patient.css";

interface PatientCardProps {
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  status: "Active" | "Deceased" | "New Patient";
  lastVisitDate: Date;
  onClick?: () => void;
}

const getStatusStyle = (status: PatientCardProps["status"]) => {
  switch (status) {
    case "Active":
      return "status-active";
    case "Deceased":
      return "status-deceased";
    case "New Patient":
      return "status-new";
    default:
      return "";
  }
};

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  age,
  gender,
  status,
  lastVisitDate,
  onClick,
}) => {
  return (
    <div className={`patient-card ${getStatusStyle(status)}`} onClick={onClick}>
      <div className="patient-header">
        <div className="patient-avatar">
          {" "}
          {gender === "Male" ? "🙍‍♂️" : gender === "Female" ? "🙍‍♀️" : "👤"}
        </div>
        <div className="patient-info">
          <h3>{name}</h3>
          <p>
            {age} yrs - {gender}
          </p>
        </div>
      </div>
      <div className="patient-status">
        <span className="status-label">{status}</span>
        <span className="visit-date">
          Last visit: {lastVisitDate.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default PatientCard;
