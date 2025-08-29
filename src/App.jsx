import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import RadioButton from "./components/RadioButton";
import CheckBox from "./components/CheckBox";

export default function App() {


  const [userData, setUserData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false
  })

  const onDataChange = (event) => {

    const inputName = event.target.name
    const inputValue = event.target.value

    if (inputName === "name") {
      setUserData({ ...userData, name: inputValue });
    } else if (inputName === "address") {
      setUserData({ ...userData, address: inputValue });
    } else if (inputName === "phone") {
      setUserData({ ...userData, phone: inputValue });
    } else if (inputName === "email") {
      setUserData({ ...userData, email: inputValue });
    } else if (inputName === "complaint") {
      setUserData({ ...userData, complaint: inputValue });
    } else if (inputName === "contact") {
      setUserData({ ...userData, contact: inputValue });
    } else if (inputName === "consent") {
      setUserData({ ...userData, consent: event.target.checked });
    }
  }

  const onSubmit = (event) => {
    event.preventDefault
    
    if (!userData.consent) {
      alert('Consent is needed to submit!')
      return
    }
    setUserData({ ...userData, name:"", address:"", phone:"", email:"", complaint:"", contact:"", consent:false})
    console.log(userData)
  }


  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <Input inputType={"text"} inputName={"name"} inputValue={userData.name} onInputChange={onDataChange}/>
          </label>
          <label>
            Address
            <Input inputType={"text"} inputName={"address"} inputValue={userData.address} onInputChange={onDataChange}/>
          </label>
          <label>
            Phone Number
            <Input inputType={"text"} inputName={"phone"} inputValue={userData.phone} onInputChange={onDataChange}/>
          </label>
          <label>
            Email
            <Input inputType={"text"} inputName={"email"} inputValue={userData.email} onInputChange={onDataChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <TextArea name="complaint" rows="10" value={userData.complaint} placeHolder="You can complain here" onChange={onDataChange}/>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <RadioButton type="radio" name="contact" value="phone" checked={userData.contact === "phone"} onChange={onDataChange}/>
              Phone
            </label>

            <label>
              <RadioButton type="radio" name="contact" value="email" checked={userData.contact === "email"} onChange={onDataChange}/>
              Email
            </label>

            <label>
              <RadioButton type="radio" name="contact" value="slow-mail" checked={userData.contact === "slow-mail"} onChange={onDataChange}/>
              Slow Mail
            </label>

            <label>
              <RadioButton type="radio" name="contact" value="none" checked={userData.contact === "none"} onChange={onDataChange}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <CheckBox type="checkbox" name="consent" id="consent" value={userData.consent} onChange={onDataChange}/>
          </label>
        </div>
        <input 
          type="submit" 
          value="Submit!" 
          onClick={onSubmit}
          />
      </form>
    </>
  );
}
