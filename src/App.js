import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import AssetDisplay from "./components/AssetDisplay";
import NoAsset from "./components/NoAsset";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Sidebar />
          {!this.props.selectedAsset ? <NoAsset /> : <AssetDisplay />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { selectedAsset: state.selectedAsset };
}

export default connect(mapStateToProps)(App);
