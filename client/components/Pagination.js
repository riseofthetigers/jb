var React = require('react');


var Pagination = React.createClass({

    render: function () {
        return (
            <nav>
                <ul className="pagination">
                    <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </nav>
       );
    }
});


module.exports = Pagination;
