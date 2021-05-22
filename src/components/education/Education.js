import React, { Component } from 'react';
import FormEducation from '../education/FormEducation';
import EducationList from '../education/EducationList';
import { nanoid } from 'nanoid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      submit: true,
      organisation: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
      educationList: [
        {
          organisation: 'Some company',
          position: 'Your Position',
          description: 'Description',
          startDate: 'the start date',
          endDate: 'the end date',
          id: nanoid(),
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
    this.editEdu = this.editEdu.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.className]: e.target.value,
    });
  }

  displayForm() {
    this.setState((state) => ({
      showForm: !state.showForm,
      submit: !state.submit,
    }));
  }

  handleSubmit(e) {
    //works fine
    e.preventDefault();
    const education = {
      organisation: this.state.organisation,
      position: this.state.position,
      description: this.state.description,
      startData: this.state.startData,
      endData: this.state.endData,
      id: nanoid(),
    };

    this.setState((state) => ({
      submit: !state.submit,
      showForm: !state.showForm,
      educationList: state.educationList.concat(education),
    }));
    console.log(this.state.educationList);
  }

  editEdu() {}

  deleteEdu(e) {
    const { educationList } = this.state;
    const currentEle = e.target.id;
    const index = educationList.findIndex((edu) => edu.id === currentEle);
    const newList = [...educationList];
    newList.splice(index, 1);
    this.setState({
      educationList: newList,
    });
  }

  render() {
    const {
      showForm,
      organisation,
      position,
      description,
      startDate,
      endDate,
    } = this.state;

    return (
      <div>
        <h1>Education</h1>
        <button onClick={this.displayForm}>Add Education</button>
        <hr />
        <div>
          {showForm ? (
            <FormEducation
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              organisation={organisation}
              position={position}
              description={description}
              startData={startDate}
              endData={endDate}
            />
          ) : (
            <EducationList
              deleteEdu={this.deleteEdu}
              educationList={this.state.educationList}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Education;

//Education needs to have a edit button of its own
//Add education should brign up the form
//when form is submited, the inputs should be created into an object and added to one of state's array. It should then be parsed into EducationInfo component as an array of objects. The Component should then created all education componenets

//change className and use something else in its presence.
