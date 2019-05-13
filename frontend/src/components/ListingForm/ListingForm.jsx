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
      price: 0
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
    const Listing = Object.assign({}, this.state);
    this.props.action(Listing).then(() => this.history.push("/"));
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
            value
          />

          <textarea
            value={this.state.description}
            onChange={this.handleInput("description")}
            placeholder="Description"
          />

          <input
            type="text"
            value={this.state.price}
            onChange={this.handleInput("price")}
            placeholder="Price"
            value
          />

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
