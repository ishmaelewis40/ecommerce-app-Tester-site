import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Signup = () => {
  return <>
  <Meta title={"sighnup"}/>
    <BreadCrumb title="signup" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
        

      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Sign Up</h3>
            <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="text" name="name" placeholder="First name"/>
              <CustomInput type="text" name="name" placeholder="Last Name"/>
              <CustomInput type="email" name="email" placeholder="mobile numer or email"/>
              <CustomInput type="password" name="password" placeholder="Password"/>
              <CustomInput type="password" name="password" placeholder=" Confirm Password"/>

              <div>
                
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  
                  <Link to="/" className="button signup">Create</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        

    </Container>
  </>
}

export default Signup