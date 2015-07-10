var React = require('react');
var _ = require('lodash');


var Pagination = React.createClass({


    getInitialState: function() {
        return {
            pages: 0
        }
    },

    getDefaultProps: function () {
        return {
            entriesPerPage: 10,
            currentPage: 1,
            entries: 0
        }
    },

    componentDidMount: function () {

    },

    componentDidUpdate: function() {
    },


    handleChangePage: function (index) {
        this.props.changePage(index);
    },

    render: function () {
        var self = this;
        var currentPage = this.props.currentPage;
        var pages = Math.ceil(this.props.entries / this.props.entriesPerPage);
        if( currentPage >  pages ) {
            currentPage = pages;
        }
        if(currentPage < 1 ){
            currentPage = 1;
        }
        return (
            <nav>
                <ul className="pagination">
                    <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    {
                        _.times(pages, function(n){
                            var boundClick = self.handleChangePage.bind(self, n+1);
                            if((n+1) == currentPage ){
                                return <li key={n} className="active"><a>{n+1} <span className="sr-only">(current)</span></a></li>
                            }
                            return <li key={n}><a onClick={boundClick} page={n+1} >{n+1}</a></li>
                        })
                    }
                    <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </nav>
       );
    }
});


module.exports = Pagination;
