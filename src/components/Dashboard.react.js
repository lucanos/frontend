import React from 'react/addons';
import Router from 'react-router';
import Settings from '../utils/SettingsUtil';
import utils from '../utils/Util';
import _ from 'lodash';
import Featured from './FeaturedSongs.react';
import Search from './SearchSongs.react';


let If = React.createClass({
    render: function() {
        if (this.props.test) {
            return this.props.children;
        } else {
            return false;
        }
    }
});


var Dashboard = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function() {
        return {
           searchQuery: false
        };
    },
    handleSearchChange: function(event) {
        event.preventDefault();
        var text = this.refs.search.getDOMNode().value;
        var value = (text !== '') ? text : false;
        this.setState({
            searchQuery: value
        });
    },
    render: function() {
        return (
            <div id="discover">
                <form id="search-form" onSubmit={this.handleSearchChange}>
                    <div className="input-group">
                        <input id="searchbar" type="text" className="form-control" ref="search" placeholder="Search for song or import URL"/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" id="btn-search"><i className="fa fa-search"></i></button>
                            </span>
                    </div>
                </form>
                <If test={!this.state.searchQuery}>
                    <Featured />
                </If>
                <If test={this.state.searchQuery}>
                    <Search value={this.state.searchQuery} />
                </If>
            </div>
        );

    }

});


module.exports = Dashboard;