var React  = require('react/addons');
var _ = require('lodash');
var ListingActions = require('../actions/listing-actions');
var ListingStore = require('../stores/listing-store');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;

var CreateListing = React.createClass({
  mixins: [Navigation, React.addons.LinkedStateMixin],

  getInitialState: function() {
    var defaultValues = {
        Business: {
            business_description: 'Company description...',
            business_logo: '',
            business_name: '',
            business_tagline: '',
            business_zip: ''  ,
            business_state: '',
            business_city: '',
            business_address: '',
        },

        job_category: '',
        job_description: 'Job description...',
        job_title: '',
        job_type: '',
        job_compensation: '',
        job_requirements: ''

    };
    var def=_.extend(defaultValues, ListingStore.getInitialListing());
    return def;
  },

  componentDidMount: function() {
     ListingStore.addListingChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListingStore.removeListingChangeListener(this._onChange);
  },

  _onChange: function() {
  },


  _getFormData: function() {
    var user = AuthStore.getSignedInUser();
    var login ='';
    var data = {};
    _.each(this.refs, function(ref, key){
        var node = ref.getDOMNode();
        var val  = node.value;
        if(val === undefined){
            val = node.innerHTML;
        }
        data[key] = val;
    });
   _.extend(data, this.state);

   return data;
  },

  handleSave: function() {
    var user = AuthStore.getSignedInUser();
    var data = this._getFormData();
    ListingActions.createListing(user, data);
  },

  handlePreview: function() {
    var user = AuthStore.getSignedInUser();
    var data = this._getFormData();

    ListingActions.createListing(user, data);
    this.transitionTo('/job/preview');
  },


  render: function () {
    var user = AuthStore.getSignedInUser();
    var login ='';
    var save ='';

    if(!user || user.type!=='E'){
      login= (
          <div className="row text-center">
            <div className="col-sm-12">
                <h3>Have an account?</h3>
                <p><a href="/login?next=/createlisting" className="btn btn-primary">Sign In</a></p>
            </div>
        </div>
        );
    } else {
      save = (
        <div className="row text-center">
            <p>&nbsp;</p>
            <a onClick={this.handleSave} className="btn btn-primary btn-lg">Save<i className="fa fa-arrow-right"></i></a>
        </div>
        );
    }
    return (
        <div className="container">
            {login}
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Job Details</h2>
                        <div className="form-group" id="company-logo-group">
                            <label htmlFor="company-logo">Business Pictures</label>
                            <input type="file" valueLink={this.linkState('Business.business_logo')}/>
                        </div>
                        <div className="form-group" id="job-title-group">
                            <label htmlFor="job-title">Job Title</label>
                            <input type="text" className="form-control" valueLink={this.linkState('job_title')}  placeholder="e.g. Web Designer"/>
                        </div>
                        <div className="form-group" id="job-type-group">
                            <label htmlFor="job-type">Job Type</label>
                            <select  className="form-control" valueLink={this.linkState('job_type')}>
                                <option>Choose a job type</option>
                                <option>Freelance</option>
                                <option>Part Time</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Volunteer</option>
                            </select>
                        </div>
                        <div className="form-group" id="job-category-group">
                            <label fhtmlFor="job-category">Job Category</label>
                            <select  className="form-control" valueLink={this.linkState('job_category')}>
                                <option>Choose a job category</option>
                                <option>Cashier</option>
                                <option>Barister</option>
                                <option>Line Cook</option>
                                <option>Customer Service</option>
                                <option>Shift Manager</option>
                            </select>
                        </div>
                        <div className="form-group" id="job-location-group">
                            <label htmlFor="job-compensation">Compensation</label>
                            <input type="text" className="form-control" valueLink={this.linkState('job_compensation')} placeholder="12345"/>
                        </div>
                        <div className="form-group wysiwyg" id="job-description-group">
                            <label>Description</label>

                            <div className="btn-toolbar" data-role="editor-toolbar" data-target="#job-description">
                                <div className="btn-group">
                                    <a className="btn" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i className="fa fa-bold"></i></a>
                                    <a className="btn" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i className="fa fa-italic"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i className="fa fa-list-ul"></i></a>
                                    <a className="btn" data-edit="insertorderedlist" title="" data-original-title="Number list"><i className="fa fa-list-ol"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="justifyleft" title="" data-original-title="Align Left (Ctrl/Cmd+L)"><i className="fa fa-align-left"></i></a>
                                    <a className="btn" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i className="fa fa-align-center"></i></a>
                                    <a className="btn" data-edit="justifyright" title="" data-original-title="Align Right (Ctrl/Cmd+R)"><i className="fa fa-align-right"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i className="fa fa-link"></i></a>
                                    <div className="dropdown-menu input-append">
                                        <input className="form-control pull-left" placeholder="http://" type="text" data-edit="createLink"/>
                                        <button className="btn btn-primary" type="button">Add</button>
                                    </div>
                                    <a className="btn" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i className="fa fa-unlink"></i></a>
                                </div>
                                <input type="text" data-edit="inserttext" id="voiceBtn" style={{display: 'none'}}/>
                            </div>

                            <div className="editor" ref="job_description" id="job-description" contentEditable="true" dangerouslySetInnerHTML={{__html: this.state.job_description}}></div>
                        </div>
                        <div className="form-group wysiwyg" id="job-description-group">
                            <label>Requirements</label>

                            <div className="btn-toolbar" data-role="editor-toolbar" data-target="#job-description">
                                <div className="btn-group">
                                    <a className="btn" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i className="fa fa-bold"></i></a>
                                    <a className="btn" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i className="fa fa-italic"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i className="fa fa-list-ul"></i></a>
                                    <a className="btn" data-edit="insertorderedlist" title="" data-original-title="Number list"><i className="fa fa-list-ol"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="justifyleft" title="" data-original-title="Align Left (Ctrl/Cmd+L)"><i className="fa fa-align-left"></i></a>
                                    <a className="btn" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i className="fa fa-align-center"></i></a>
                                    <a className="btn" data-edit="justifyright" title="" data-original-title="Align Right (Ctrl/Cmd+R)"><i className="fa fa-align-right"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i className="fa fa-link"></i></a>
                                    <div className="dropdown-menu input-append">
                                        <input className="form-control pull-left" placeholder="http://" type="text" data-edit="createLink"/>
                                        <button className="btn btn-primary" type="button">Add</button>
                                    </div>
                                    <a className="btn" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i className="fa fa-unlink"></i></a>
                                </div>
                                <input type="text" data-edit="inserttext" id="voiceBtn" style={{display: 'none'}}/>
                            </div>

                            <div className="editor" ref="job_requirements" id="job-description" contentEditable="true" dangerouslySetInnerHTML={{__html: this.state.job_requirements}}></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h2>Company Details</h2>
                        <div className="form-group" id="company-logo-group">
                            <label htmlFor="company-logo">Company Logo</label>
                            <input type="file" valueLink={this.linkState('Business.business_logo')}/>
                        </div>
                        <div className="form-group" id="company-name-group">
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" valueLink={this.linkState('Business.business_name')} className="form-control" placeholder="Enter company name"/>
                        </div>
                        <div className="form-group" id="company-tagline-group">
                            <label htmlFor="company-tagline">Tagline</label>
                            <input type="text" className="form-control" valueLink={this.linkState('Business.business_tagline')} placeholder="Brief description"/>
                        </div>
                        <div className="form-group" id="job-location-group">
                            <label htmlFor="job-location">Address</label>
                            <input type="text" className="form-control" valueLink={this.linkState('Business.business_address')}  placeholder="e.g.123 Hope Ave"/>
                        </div>
                        <div className="form-group" id="job-location-group">
                            <label htmlFor="job-location">Zipcode</label>
                            <input type="text" className="form-control" valueLink={this.linkState('Business.business_zip')} placeholder="12345"/>
                        </div>
                        <div className="form-group" id="job-location-group">
                            <label htmlFor="job-location">City</label>
                            <input type="text" className="form-control" valueLink={this.linkState('Business.business_city')} placeholder="12345"/>
                        </div>
                        <div className="form-group" id="job-region-group">
                            <label htmlFor="job-region">Region</label>
                            <select  className="form-control" valueLink={this.linkState('Business.business_state')} >
                                <option>Choose a region</option>
                                <option>New York</option>
                                <option>Boston</option>
                            </select>
                        </div>
                        <div className="form-group wysiwyg" id="company-description-group">
                            <label>Description</label>

                            <div className="btn-toolbar" data-role="editor-toolbar" data-target="#company-description">
                                <div className="btn-group">
                                    <a className="btn" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i className="fa fa-bold"></i></a>
                                    <a className="btn" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i className="fa fa-italic"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i className="fa fa-list-ul"></i></a>
                                    <a className="btn" data-edit="insertorderedlist" title="" data-original-title="Number list"><i className="fa fa-list-ol"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="justifyleft" title="" data-original-title="Align Left (Ctrl/Cmd+L)"><i className="fa fa-align-left"></i></a>
                                    <a className="btn" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i className="fa fa-align-center"></i></a>
                                    <a className="btn" data-edit="justifyright" title="" data-original-title="Align Right (Ctrl/Cmd+R)"><i className="fa fa-align-right"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i className="fa fa-link"></i></a>
                                    <div className="dropdown-menu input-append">
                                        <input className="form-control pull-left" placeholder="http://" type="text" data-edit="createLink"/>
                                        <button className="btn btn-primary" type="button">Add</button>
                                    </div>
                                    <a className="btn" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i className="fa fa-unlink"></i></a>
                                </div>
                                <input type="text" data-edit="inserttext" id="voiceBtn2" style={{display: 'none'}}/>
                            </div>

                            <div className="editor" id="company-description" ref="Business.business_descrption" contentEditable="true" dangerouslySetInnerHTML={{__html: this.state.Business.business_description}}></div>
                            {save}
                            <div className="row text-center">
                                <p>&nbsp;</p>
                                <a onClick={this.handlePreview} className="btn btn-primary btn-lg">Preview <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
  }
});

module.exports = CreateListing;
