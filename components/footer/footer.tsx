import React from "react";
import styels from "./footer.module.css";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { color } from "framer-motion";

const FooterSection = () => {
  return (
    <div>
      <div className={styels.container}>
        <div className={styels.content}>
          <div className={styels.myFooter}>
            <div className={styels.infoSection}>
              <div className={styels.logoSection}>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <h1>Space Of Novels</h1>
                </Link>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <svg
                    className={styels.logosvg}
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="62"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="4"
                      y="3"
                      width="16"
                      height="18"
                      rx="2"
                      fill="#38bdf8"
                    />
                    <path
                      d="M8.5 6.5L15.5 6.5"
                      stroke="#fff"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.5 9.5L12.5 9.5"
                      stroke="#fff"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.5 12.5L14.5 12.5"
                      stroke="#fff"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 19C4 17.8954 4.89543 17 6 17H17C17.9319 17 18.3978 17 18.7654 16.8478C19.2554 16.6448 19.6448 16.2554 19.8478 15.7654C20 15.3978 20 14.9319 20 14V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6C4.89543 21 4 20.1046 4 19Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </div>
              <div className={styels.contactUsSection}>
                <div className={styels.callInfo}>
                  <h1>
                    <MdLocationOn className={styels.myLocation} /> ABC Company,
                    123 East, 17th Street, St. louis 10001
                  </h1>
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      gap: "120px",
                    }}
                  >
                    <h2>
                      <IoMdCall className={styels.myCall} /> (123) 456-7890
                    </h2>
                    <h3>
                      <BsFillPrinterFill className={styels.myCall} />
                      (123) 456-7890
                    </h3>
                  </div>
                </div>
                <div className={styels.socialMedia}>
                  <h1>Social Media</h1>
                  <ul>
                    <li>
                      <FaFacebookSquare className={styels.MyIcon} />
                    </li>
                    <li>
                      <FaTwitter className={styels.MyIcon} />
                    </li>
                    <li>
                      <FaLinkedinIn className={styels.MyIcon} />
                    </li>
                    <li>
                      <FaYoutube className={styels.MyIcon} />
                    </li>
                    <li>
                      <FaInstagram className={styels.MyIcon} />
                    </li>
                    <li>
                      <FaGooglePlusG className={styels.MyIcon} />
                    </li>
                    <li>
                      <FaPinterest className={styels.MyIcon} />
                    </li>
                    <li>
                      <FiFigma className={styels.MyIcon} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styels.bottom}>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Help</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
              <h1>Copyright © 2022 • ABC Company.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
