import React from 'react';
//btn add education -> clear form
//btn edit -> parse date from that component and display

function FormPersonal(props) {
  const {
    organisation,
    position,
    description,
    startDate,
    endDate,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="organisation"
        type="text"
        placeholder="Organisation"
        onChange={handleChange}
        value={organisation}
      />
      <input
        className="position"
        type="text"
        placeholder="Position"
        onChange={handleChange}
        value={position}
      />

      <input
        className="description"
        type="textarea"
        placeholder="Description"
        onChange={handleChange}
        value={description}
      />

      <input
        className="startDate"
        type="date"
        onChange={handleChange}
        value={startDate}
      />

      <input
        className="endDate"
        type="date"
        onChange={handleChange}
        value={endDate}
      />

      <input type="submit" value="update" />
    </form>
  );
}
export default FormPersonal;
