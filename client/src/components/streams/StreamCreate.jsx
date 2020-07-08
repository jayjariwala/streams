import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = formValues => {
  console.log("RUn Validate function!");
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    console.log(touched, error);
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Enter Title"
        />
        <Field
          name="description"
          type="text"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);
