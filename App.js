import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./corona/reducers/products";
import CoronaNavigator from "./navigation/CoronaNavigator";
import ProjectOverView from "./screen/ProjectOverView";
import FirstScreen from "./screen/FirstScreen";
import Welcome from "./screen/Welcome";
import { View } from "react-native";
import Test from "./screen/Test";
import SymptomScreen from "./screen/SymptomScreen";
import SplashScreen from "./screen/SplashScree";

import HomeScreen from "./screen/HomeScreen";
import { fetchData } from "./api/index";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <Provider store={store}>
        <CoronaNavigator />
      </Provider>
    );
  }
}

export default App;
