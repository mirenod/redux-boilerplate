import { combineReducers } from 'redux';

import feature1 from "./feature1/reducer";
import feature2 from "./feature2/reducer"

const rootReducer = combineReducers({
  feature1,
  feature2
});

export default rootReducer;
