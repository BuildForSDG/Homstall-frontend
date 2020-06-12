// import {SignUp} from './components/RegisterComponent/SignUp';
import React from "react";
import Form from "./Form"
import TopInfo from "./TopInfo"
import NavBar from '../../components/navbar/nav.component'
import Footer from "../../pages/footer/footer.component"
import "./register-styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Register (){
    return (
      <div>
        <NavBar />
        <div class="form__div">
        <TopInfo
            headerText="Get Started"
            paragraphText = "Find farm products nearest to you. Find your market today."
        />
          <Form />
        </div>
        <Footer />
      </div>
    );
}

export default Register