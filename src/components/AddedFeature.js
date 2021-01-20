import React from 'react';
import { connect } from 'react-redux';
import { removeFeatures } from '../actions/carActions'

const AddedFeature = props => {
  const handleClick = () => {
    props.removeFeatures(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeatures })(AddedFeature);
