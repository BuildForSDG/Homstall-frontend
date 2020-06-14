import React from "react";
import NavBar from '../../components/navbar/nav.component';
import Footer from '../../pages/footer/footer.component';
import './register-styles.css';
import LogInForm from "./login.jsx"
import TopInfo from "../RegisterComponent/TopInfo"

function LogIn(){
    
    return (
      <div>
        <NavBar />
        <div class="form__div">
        <TopInfo headerText="Login To Homstall" 
        paragraphText="Login to your Homstall acount, manage your products,
        track sales, get paid..." />
        <LogInForm />
        </div>
        <Footer />
      </div>
    );
}

export default LogIn