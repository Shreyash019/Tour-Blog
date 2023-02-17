import React, {useState, useEffect }  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../../utils/actions/UserAction";
import {UPDATE_PASSWORD_RESET} from "../../../utils/constants/UserConstant";
import MetaData from '../../header/MetaData';
import './sign.css'
import logImg from '../../img/logon.png';


const UpdatePassword = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm)).then(()=>{
      alert('Password Updated.')
      history("/profile")
    })
  }

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Profile Updated Successfully");
      history("/profile");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, isUpdated]);


  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          <MetaData title="Change Password"/>
          <div className='user-auth-container'>
            <div className='sign-left'>
              <img src={logImg} alt='Default'/>
            </div>
            <div className='sign-right'>
              <div className='user-auth-title'>
                <h3>Password Update</h3>
              </div><br/><br/>
              <div className='user-auth-input'>
                <form onSubmit={handleOnSubmit}>
                  <input type="password" name='oldPassword' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}  placeholder='Old Password' autoComplete="off"/><br/>
                  <input type="password" name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}  placeholder='New Password' autoComplete="off"/><br/>
                  <input type="password" name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' autoComplete="off"/><br/>
                  <button>Update Password</button><br/><br/><br/>
                  <p> <Link to='/password/forgot'>Forgot Password</Link></p>
                </form><br/>
              </div>
            </div>
          </div>
        </>

      )}
    </>
  )
}

export default UpdatePassword