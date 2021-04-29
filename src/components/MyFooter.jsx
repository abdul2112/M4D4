import React from 'react'
import "../assets/css/footer.css";
import Insta from "../assets/img/insta.png";
import Github from "../assets/img/github.png";
import Linkd from "../assets/img/linkedin.png";

const MyFooter = () => (

<footer>
      <div className="footer">
        <a href="#">
          <img className="icon" src={Insta} alt="" />
        </a>
        <a href="#">
          <img className="icon" src={Github} alt="" />
        </a>
        <a href="#">
          <img className="icon" src={Linkd} alt="" />
        </a>
        <p>Abdulkadir Salad &copy;{new Date().getFullYear()} </p>
      </div>
    </footer>
)

export default MyFooter