import React, { Component } from 'react';
import FormEducation from '../education/FormEducation';
import EducationList from '../education/EducationList';
import { nanoid } from 'nanoid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      organisation: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
      educationList: [
        {
          organisation: 'Some company',
          position: 'Leader',
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

  resetSetState() {
    this.setState({
      organisation: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.className]: e.target.value,
    });
  }

  displayForm() {
    this.setState((state) => ({
      showForm: !state.showForm,
    }));
    this.resetSetState();
  }

  handleSubmit(e) {
    e.preventDefault();
    const education = {
      organisation: this.state.organisation,
      position: this.state.position,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      id: nanoid(),
    };

    this.setState((state) => ({
      showForm: !state.showForm,
      educationList: state.educationList.concat(education),
      organisation: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    }));
    this.resetSetState();
  }

  getCurrentEdu(id) {
    const { educationList } = this.state;
    const currentEleID = id;
    const currentEdu = educationList.find((edu) => edu.id === currentEleID);
    return currentEdu;
  }

  getCurrentEduIdx(id) {
    const { educationList } = this.state;
    const currentEleID = id;
    const currentEduIdx = educationList.findIndex(
      (edu) => edu.id === currentEleID
    );
    return currentEduIdx;
  }

  editEdu(e) {
    //get current edu
    //set all properties of state to edu value
    //set showForm to true
    const currentEdu = this.getCurrentEdu(e.target.id);

    this.setState((state) => ({
      organisation: currentEdu.organisation,
      position: currentEdu.position,
      description: currentEdu.description,
      startDate: currentEdu.startDate,
      endDate: currentEdu.endDate,
      showForm: !state.showForm,
    }));
  }

  deleteEdu(e) {
    const { educationList } = this.state;
    const index = this.getCurrentEduIdx(e.target.id);
    console.log(index);
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
      educationList,
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
              startDate={startDate}
              endDate={endDate}
            />
          ) : (
            <EducationList
              deleteEdu={this.deleteEdu}
              editEdu={this.editEdu}
              educationList={educationList}
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
