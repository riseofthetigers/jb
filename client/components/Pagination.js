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
            currentPage: 0
        }
    },

    update: function() {
        console.log('+++++', this.props.data);
        this.setState({
            pages: Math.ceil(this.props.data.length / this.props.entriesPerPage),
            data: this.props.data
        });
    },

    componentDidMount: function () {
        this.update();
    },

    componentDidUpdate: function() {
        //this.udate();
        this.state.data = this.props.data;
    },

    render: function () {
        return (
            <nav>
                <ul className="pagination">
                    {
                        _.times(this.state.pages, function(n){
                            if((n+1) == this.props.currentPage) {
                                return <li className="active"><a href="#">{n} <span className="sr-only">(current)</span></a></li>
                            }
                            return <li><a href="#">{n}</a></li>
                        })
                    }
                    <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </nav>
       );
    }
});


module.exports = Pagination;
