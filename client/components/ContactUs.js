var React  = require('react');

var About = React.createClass({

  render: function () {
  
    return (
      <div>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Drop us a line</h2>
                <form role="form" name="contact-form" id="contact-form" action="process.php">
                  <div className="form-group" id="contact-name-group">
                    <label for="contact-name" className="sr-only">Name</label>
                    <input type="text" className="form-control" id="contact-name" placeholder="Name"/>
                  </div>
                  <div className="form-group" id="contact-email-group">
                    <label for="contact-email" className="sr-only">Email</label>
                    <input type="email" className="form-control" id="contact-email" placeholder="Email"/>
                  </div>
                  <div className="form-group" id="contact-subject-group">
                    <label for="contact-subject" className="sr-only">Subject</label>
                    <input type="text" className="form-control" id="contact-subject" placeholder="Subject"/>
                  </div>
                  <div className="form-group" id="contact-message-group">
                    <label for="contact-message" className="sr-only">Message</label>
                    <textarea className="form-control" rows="3" id="contact-message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    }
  });

module.exports = About;
