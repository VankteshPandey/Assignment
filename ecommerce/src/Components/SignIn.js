import React from 'react';

function SignIn() {
  return (
    <div className="row my-3">
      {/* Left column with an image */}
      <div className="col-md-6">
        <div className="contact-image">
          {/* Display a business image */}
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Business"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      {/* Right column with the sign-in form */}
      <div className="col-md-6">
        <div className="contact-form">
          <h2>Sign In</h2>
          <form>
            {/* Form fields for user input */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Password:</label>
              <input className="form-control" type="password" id="message" name="password" rows="4" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Confirm Password:</label>
              <input className="form-control" type="password" id="message" name="password" rows="4" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
