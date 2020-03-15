import React from 'react';
import styled from 'styled-components'

function Form() {
    return (
        <DIV>
        <form className="form-signin">       
        <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
          </label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </form>
          <a className="btn btn-lg btn-primary btn-block" type="submit" href='http://localhost:5000/auth/facebook' >Login With Facebook</a>   
      </DIV>
    )
}

export default Form

const  DIV = styled.div`
    body {
	background: #eee !important;	
}
	margin-top: 80px;
	margin-bottom: 80px;


.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}

`;
