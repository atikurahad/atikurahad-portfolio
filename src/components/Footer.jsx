import React from "react";
import "../styles/footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  const year =new Date()
  return (
    <footer className="dev-footer">
      <section className="footer-icon">
        <FaFacebookSquare />
        <FaSquareXTwitter />
        <FaGithubSquare />
        <FaLinkedin />
      </section>

      <p className="copyright">
        {" "}
        <span>&copy;</span> All rights reserved by Atikur-Ahad {year.getFullYear()}
      </p>

    

    </footer>
  );
}

export default Footer;
