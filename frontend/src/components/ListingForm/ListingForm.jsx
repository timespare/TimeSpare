import React from "react";
import SubmitButton from "../SubmitButton";
import DateTime from "../DateTime";
import "../session_form/form.css";
import Field from "../Field";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.listing.title,
      description: this.props.listing.description,
      begin: this.props.listing.begin,
      end: this.props.listing.end,
      price: this.props.listing.price,
      id: this.props.listing._id,
      _id: this.props.listing._id
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
    this.props.action(listing).then(
      listing => {
        this.props.onClose();
        this.props.receiveAListing(listing);
      },
      err => {
        this.props.receiveListingErrors(err);
      }
    );
    // .then(() => this.props.history.push("/"));
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
        <form className="form">
          <Field label="Title">
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput("title")}
              label="Title"
            />
          </Field>

          <Field label="Description">
            <textarea
              value={this.state.description}
              onChange={this.handleInput("description")}
            />
          </Field>
          <Field label="Price">
            <input
              type="number"
              value={this.state.price}
              onChange={this.handleInput("price")}
            />
          </Field>

          <Field label="Start Time">
            <DateTime
              value={this.state.begin}
              onChange={moment =>
                this.setState({ begin: moment.format("LLLL") })
              }
            />
          </Field>

          <Field label="End Time">
            <DateTime
              value={this.state.end}
              onChange={moment => this.setState({ end: moment.format("LLLL") })}
            />
          </Field>

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
