import React from "react";
import "./styles/StudentView.css";
import { Link } from "react-router-dom";


const StudentView = (props) => {
  return (
    <>   
      <img src={props.student.imageUrl} 
      alt={props.student.firstName + " " + props.student.lastName} />   
      <h1>{props.student.firstName} {props.student.lastName}</h1>
      <h3>GPA: {props.student.gpa}</h3>       
      <p>E-mail: {props.student.email} </p>

      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default StudentView;
