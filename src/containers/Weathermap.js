'use strict';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Weathermap from "../components/Weathermap";
import * as weathermapActions from "../actions/weathermap";

const mapStateToprops = (state) => ({
    weathermap : state.weathermap
});

const mapDispatchToActions = (dispatch) => ({
    weathermapActions : bindActionCreators(weathermapActions, dispatch)
});

export default connect(mapStateToprops, mapDispatchToActions)(Weathermap);
