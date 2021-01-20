export const TOGGLE_ADDITONAL_FEATURES = 'TOGGLE_ADDITONAL_FEATURES';
export const REMOVE_FEATURES = 'REMOVE_FEATURES';

export const addFeatures = newFeature => { 
    return { type: TOGGLE_ADDITONAL_FEATURES, payload: newFeature };
};

export const removeFeatures = (feature) => { 
    return { type: REMOVE_FEATURES, payload: feature };
};