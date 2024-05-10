import React, { useState } from "react";
import Title from "./Title";

function GeneralEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    country: "",
    email: "",
    confirmEmail: "",
    website: "",
    contactNo: "",
    profession: "",
    purposeComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation logic
    console.log(formData); // For now, just log the form data
  };

  return (
    <>
      <div>
        <Title text="General Enquiry" />
      </div>

      <div className="container font-dark">
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="form-group">
                <label>Country *</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Confirm Email *</label>
                <input
                  type="email"
                  className="form-control"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="form-group">
                <label>Website</label>
                <input
                  type="text"
                  className="form-control"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Contact No *</label>
                <input
                  type="tel"
                  className="form-control"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Profession *</label>
                <select
                  className="form-control"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Consumer">Consumer</option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Healthcare Professional">
                    Healthcare Professional
                  </option>
                  <option value="Distributor">Distributor</option>
                  <option value="Exporter">Exporter</option>
                  <option value="Importer">Importer</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Purpose / Comments *</label>
                <textarea
                  className="form-control"
                  name="purposeComments"
                  value={formData.purposeComments}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default GeneralEnquiryForm;
