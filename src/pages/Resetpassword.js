import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Resetpassword = () => {
  return <>
   <Meta title={"Reset-password"}/>
    <BreadCrumb title="Reset-password" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Reset Your Password</h3>
            <p className="text-center mb-3 mt-2 justify-content-space-around"> We will send you an email to reset your password.</p>
            <form action="" className="d-flex flex-column gap-15">
            <CustomInput type="password" name="password" placeholder="New Password"/>
            <CustomInput type="password" name="password" placeholder="Confirm New Password"/>
            
              <div>
                <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                  <Link to ="/"className="button submit" type="submit">Ok</Link>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        
    </Container>
  </>
}
export default Resetpassword;