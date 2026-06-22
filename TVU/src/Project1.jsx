import { useState } from "react";

function Project1() {
  const [subjectFilter, setSubjectFilter] = useState("All");

  const assignments = [
    {
      id: 1,
      title: "React Mini Project",
      subject: "React",
      status: "Submitted",
      dueDate: "2026-06-25",
    },
    {
      id: 2,
      title: "Java Quiz",
      subject: "Java",
      status: "Pending",
      dueDate: "2026-06-28",
    },
    {
      id: 3,
      title: "DBMS Record",
      subject: "DBMS",
      status: "Late",
      dueDate: "2026-06-20",
    },
    {
      id: 4,
      title: "React Hooks Task",
      subject: "React",
      status: "Submitted",
      dueDate: "2026-06-30",
    },
  ];

  const filteredAssignments =
    subjectFilter === "All"
      ? assignments
      : assignments.filter(
          (item) => item.subject === subjectFilter
        );

  const submittedCount = assignments.filter(
    (item) => item.status === "Submitted"
  ).length;

  const pendingCount = assignments.filter(
    (item) => item.status === "Pending"
  ).length;

  const lateCount = assignments.filter(
    (item) => item.status === "Late"
  ).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>EduTrack</h1>

      <h2>Dashboard Summary</h2>
      <p>Submitted : {submittedCount}</p>
      <p>Pending : {pendingCount}</p>
      <p>Late : {lateCount}</p>

      <h2>Filter By Subject</h2>

      <select
        value={subjectFilter}
        onChange={(e) => setSubjectFilter(e.target.value)}
      >
        <option>All</option>
        <option>React</option>
        <option>Java</option>
        <option>DBMS</option>
      </select>

      <h2>Assignments</h2>

      {filteredAssignments.map((assignment) => (
        <div key={assignment.id}>
          <h3>{assignment.title}</h3>
          <p>Subject: {assignment.subject}</p>
          <p>Due Date: {assignment.dueDate}</p>
          <p>Status: {assignment.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Project1;