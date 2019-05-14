import React from "react";
import SubmitButton from "../SubmitButton";
class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      start: "",
      end: "",
      price: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.props.removeErrors();
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const listing = Object.assign({}, this.state);
    this.props.action(listing).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    const ErrorStyle = {
      listStyle: "none",
      paddingLeft: "0"
    };

    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`} style={ErrorStyle}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
            placeholder="Title"
          />

          <textarea
            value={this.state.description}
            onChange={this.handleInput("description")}
            placeholder="Description"
          />

          <input
            type="number"
            value={this.state.price}
            onChange={this.handleInput("price")}
            placeholder="Price"
          />
          {this.renderErrors()}
          <SubmitButton
            onClick={this.handleSubmit}
            label={this.props.formType}
          />
          {/* start date and end time  */}
        </form>
      </div>
    );
  }
}

export default ListingForm;
