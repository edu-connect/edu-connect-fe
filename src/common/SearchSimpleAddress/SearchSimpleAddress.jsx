import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import "./SearchSimpleAddress.css";

class SearchSimpleAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      lat: null,
      lng: null
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(address) {
    this.setState({
      address
    });
  }

  handleSelect(address) {
    this.handleChange(address);

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("Success Yay", { lat, lng });
        this.setState({
          lat,
          lng
        });
      })
      .catch(error => {
        console.log("Oh no!", error);
      });
  }

  render() {
    const cssClasses = {
      root: "form-group",
      input: "SearchSimpleAddress__search-input",
      autocompleteContainer: "SearchSimpleAddress__autocomplete-container"
    };

    const autocompleteItem = ({ formattedSuggestion }) => (
      <div className="SearchSimpleAddress__suggestion-item">
        <strong>{formattedSuggestion.mainText}</strong>{" "}
        <small className="text-muted">
          {formattedSuggestion.secondaryText}
        </small>
      </div>
    );

    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => {
        console.log("Blur event!");
      },
      onFocus: () => {
        console.log("Focused!");
      },
      autoFocus: true,
      placeholder: "사시고 계신 동을 검색해주세요.",
      name: "SearchSimpleAddress__input"
    };

    return (
      <div className="page-wrapper">
        <div className="container">
          <PlacesAutocomplete
            autocompleteItem={autocompleteItem}
            classNames={cssClasses}
            inputProps={inputProps}
            onEnterKeyDown={this.handleSelect}
            onSelect={this.handleSelect}
          />
          <p>
            {this.state.lat} {this.state.lng}
          </p>
        </div>
      </div>
    );
  }
}

export default SearchSimpleAddress;
