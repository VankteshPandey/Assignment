import React from 'react';

function Login() {
    // Define styles for the login container and form elements
    const containerStyle = {
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '100px',
    };
    
    const labelStyle = {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
    };
    
    const inputStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    };
    
    const buttonStyle = {
        backgroundColor: '#57e389',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    };
    
    const buttonHoverStyle = {
        backgroundColor: '#4ac173',
    };
    
    return (
        <div className="container" style={containerStyle}>
            <h2>Login</h2>
            <form action="#" method="get">
                <div className="form-group">
                    <label htmlFor="username" style={labelStyle}>
                        Username:
                    </label>
                    <input type="text" id="username" name="username" required style={inputStyle} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" style={labelStyle}>
                        Password:
                    </label>
                    <input type="password" id="password" name="password" required style={inputStyle} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" id="login" style={buttonStyle} />
                </div>
            </form>
        </div>
    );
}

export default Login;
