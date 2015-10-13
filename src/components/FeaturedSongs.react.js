import React from 'react/addons';
import Router from 'react-router';
import Settings from '../utils/SettingsUtil';
import utils from '../utils/Util';
import ReactDataGrid from 'react-data-grid';


//generate a fixed number of rows and set their properties
var _rows = [];
for (var i = 1; i < 100; i++) {
    _rows.push({
        image: 'https://i1.sndcdn.com//artworks-000115464710-6br5gk-t500x500.jpg',
        controls: 'Task ',
        song: 'something',
        artist: 'some artist',
        album: 'some album',
        length: '4:01'
    });
}


//function to retrieve a row for a given index
var rowGetter = function(i) {
    return _rows[i];
};

//Custom Formatter component
var ImageFormatter = React.createClass({
    render: function() {
        return (<img src={this.props.value} />);
    }
});

var ControlsFormatter = React.createClass({
    render: function() {
        return (
            <div>
                <button className="btn btn-transparent control-show"><a ><i className="material-icons">add</i></a></button>
                <button className="btn btn-transparent control-show"><a data-jq-dropdown="#dropdown"><i className="material-icons">more_horiz</i></a></button>
                <button className="btn btn-transparent"><a ><i id="discover-row-icon-0" className="material-icons">play_arrow</i></a></button>
            </div>
        );
    }
});

//Columns definition
var columns = [{
        key: 'image',
        name: 'image',
        width: 75,
        formatter: ImageFormatter
    }, {
        key: 'controls',
        name: 'controls',
        className: 'result-control',
        width: 120,
        formatter: ControlsFormatter
    }, {
        key: 'song',
        name: 'Song'
    }, {
        key: 'artist',
        name: 'Artist'
    }, {
        key: 'album',
        name: 'Album'
    }, {
        key: 'length',
        name: 'length'
    },
];



var Featured = React.createClass({
    mixins: [Router.Navigation],

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        return (
            <div id="discoverIntro">
                <h2>Featured Songs</h2>
                <div className="result" id="top-result">
                    <ReactDataGrid
                    className='table table-hover display'
                    columns={columns}
                    rowGetter={rowGetter}
                    rowsCount={_rows.length} />             
                </div>
            </div>
        );

    }

});


module.exports = Featured;