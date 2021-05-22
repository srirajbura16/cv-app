import React from 'react';

function EducationList(props) {
  const { educationList, editEdu, deleteEdu } = props;
  console.log(educationList);
  // console.log(props.educaitonList);
  // console.log(educationList);

  return (
    <div>
      {props.educationList.map((education) => {
        return (
          <div>
            <List key={education.id} education={education} />
            <button onEdit={editEdu}>Edit</button>
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
