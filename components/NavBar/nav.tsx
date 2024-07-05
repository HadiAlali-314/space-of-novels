"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { GiBookshelf } from "react-icons/gi";

import { IoHome } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";

import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

const NavBar = () => {
  const [messageCount, setMessageCount] = useState(1); // Set messageCount to 1 initially
  const [messages, setMessages] = useState<string[]>([]);
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    const novelsAndImaginationMessages = [
      "Immerse yourself in the world of imagination.",
      "Discover the magic within the pages of a novel.",
      "Journey through enchanted realms of storytelling.",
      "Novels: Where dreams come to life.",
      "Let your mind wander through the landscapes of fiction.",
      "Unlock the doors to fantastical worlds through novels.",
      "In the realm of novels, anything is possible.",
      "Imagination knows no bounds in the world of books.",
      "Dive into the depths of creativity with novels.",
      "Novels: The doorway to a thousand adventures.",
      "Explore new horizons through the pages of a novel.",
      "The power of imagination lies in the pages of a good book.",
      "Embark on epic adventures through the art of storytelling.",
      "Novels: A canvas for the colors of imagination.",
      "Unleash the extraordinary within the ordinary through novels.",
    ];

    // Shuffle the messages array
    const shuffledMessages = novelsAndImaginationMessages.sort(
      () => Math.random() - 0.5
    );

    // Slice the array to get the first `randomMessageCount` messages
    const selectedMessages = shuffledMessages.slice(0, 1);
    setMessages(selectedMessages);
  }, []);

  const handleIconClick = () => {
    setShowMessages((prevShowMessages) => !prevShowMessages);

    // Reset the messageCount to 0 when the icon is clicked
    setMessageCount(0);
  };

  const [isRightSideVisible, setRightSideVisible] = useState(false);

  const toggleRightSide = () => {
    setRightSideVisible(!isRightSideVisible);
  };

  useLayoutEffect(() => {
    const checkScreenWidth = () => {
      setRightSideVisible(window.innerWidth >= 1180);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoSection}>
            <div>
              <Link href="/" style={{ textDecoration: "none" }}>
                <svg
                  className={styles.logosvg}
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
            <Link href="/" style={{ textDecoration: "none" }}>
              <h1>Space Of Novels</h1>
            </Link>
            <nav
              className={styles.navbar}
              style={{
                display: isRightSideVisible ? "block" : "none",
              }}
            >
              <ul>
                <Link href="/" style={{ textDecoration: "none" }}>
                  <li>
                    <IoHome className={styles.myicon} />
                    Home
                  </li>
                </Link>
                <Link href="/products" style={{ textDecoration: "none" }}>
                  <li>
                    <FaBoxArchive className={styles.myicon2} />
                    Products
                  </li>{" "}
                </Link>
                <Link href="/myshelf" style={{ textDecoration: "none" }}>
                  <li>
                    <GiBookshelf className={styles.myicon3} />
                    My Shelf
                  </li>
                </Link>
              </ul>
            </nav>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div className={styles.rightside}>
            <div className={styles.searchbar}>
              <input type="text" id="search" placeholder="Novel It .."></input>
              <FcSearch className={styles.searchicon} />
            </div>
            <div className={styles.rightsection}>
              <div className={styles.myright}>
                {" "}
                <ThemeSwitcher />
              </div>

              <div
                className={styles.messageIconContainer}
                onClick={handleIconClick}
              >
                {messageCount > 0 && (
                  <span className={styles.messageCount}>{messageCount}</span>
                )}
                <BiSolidMessageSquareDetail className={styles.myright} />
              </div>
              {showMessages && (
                <div className={styles.messageModal}>
                  <div className={styles.messageContent}>
                    <ul>
                      {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <i
              className="fa-regular fa-chart-bar"
              onClick={toggleRightSide}
            ></i>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default NavBar;
