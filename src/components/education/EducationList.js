import React from 'react';

function EducationList(props) {
  const { educationList, editEdu, deleteEdu } = props;

  return (
    <div>
      {props.educationList.map((education) => {
        return (
          <div>
            <List key={education.id} education={education} />
            <button onClick={editEdu} id={education.id}>
              Edit
            </button>
            <button onClick={deleteEdu} id={education.id}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

function List(props) {
  const { education } = props;

  return (
    <div>
      <hr />
      <div>{education.organisation}</div>
      <div>{education.position}</div>
      <div>{education.description}</div>
      <div>{`${education.startDate} to ${education.endDate}`}</div>
    </div>
  );
}

export default EducationList;
