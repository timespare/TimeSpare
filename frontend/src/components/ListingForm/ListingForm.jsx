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
      _id: this.props.listing._id,
      tags: this.props.listing.tags
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTags = this.handleTags.bind(this);
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

  handleTags(e) {
    // debugger
    let arr = this.state.tags;

    if (e.currentTarget.className === "tag-name-unselected") {
      e.currentTarget.className = "tag-name-selected"
      arr.push(e.currentTarget.innerText);
    } else {   
      e.currentTarget.className = "tag-name-unselected"
      arr = arr.filter(tag => tag !== e.currentTarget.innerText);
    }

    return this.setState(
      {
        tags: arr
      }
    )
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
    const tags = this.props.listing.tags;
    const defaults = ["math", "physics", "biology", "chemistry", "english"];
    const startTime = (this.state.begin === "") ? "" : new Date(this.state.begin);
    const endTime = (this.state.end === "") ? "" : new Date(this.state.end);
    // debugger

    return (
      <div>
        <form className="form">
          <Field label="Title">
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput("title")}
              label="Title"
              className="title-input"
            />
          </Field>

          <Field label="Description">
            <textarea
              value={this.state.description}
              onChange={this.handleInput("description")}
              className="des-input"
            />
          </Field>
          
          <Field label="Price">
            <input
              type="number"
              value={this.state.price}
              onChange={this.handleInput("price")}
              className="price-input"
            />
          </Field>

          <Field label="Start Time">
            <DateTime
              value={startTime}
              onChange={moment => this.setState({ begin: moment.format("LLLL") })}
              className="date-input"
            />
          </Field>

          <Field label="End Time">
            <DateTime
              value={endTime}
              onChange={moment => this.setState({ end: moment.format("LLLL") })}
              className="date-input"
            />
          </Field>

          <Field label="Tags">
            <div className="tags-selection">
              {
                defaults.map((ele, i) => {
                  if (tags.includes(ele)) {
                    return <span key={i} className="tag-name-selected" onClick={this.handleTags}>{ele}</span>
                  } else {
                    return <span key={i} className="tag-name-unselected" onClick={this.handleTags}>{ele}</span>
                  }
                })
              }
            </div>
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
