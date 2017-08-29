'use strict';
import { connect } from "react-redux";
import Weathermap from "../components/Weathermap";

const mapStateToprops = (state) => ({
    weathermap : state.weathermap
});

export default connect(mapStateToprops)(Weathermap);