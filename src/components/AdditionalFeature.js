import React from 'react';
import { addFeatures } from '../actions/carActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  const handleClick = () => {
    props.addFeatures(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// use connect to connect state to rest of App 
export default connect(null, { addFeatures })(AdditionalFeature)