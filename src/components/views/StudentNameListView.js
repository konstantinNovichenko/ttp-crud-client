import React from "react";
import "./styles/StudentNameListView.css";
import { Link } from "react-router-dom";

const StudentNameListView = (props) => {
  console.log(props);
  if (!props.students) {
    return <p>There are no students enrolled</p>;
  }
  return (
    <>
      <div>
        <p>Students: {props.students.length} </p>
        <ul className="students">
          {props.students.map((student) => (
            <li key={student.id} className="student-name">
              <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentNameListView;
