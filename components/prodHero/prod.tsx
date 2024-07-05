import React from "react";
import styles from "./prod.module.css";
const ProductHeroSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftTextSection}>
            <h1>
              Unbelievable moments lived with every <span>novel</span> and every
              chapter.
            </h1>
            <p>
              characters come to life within the pages of these novels. Each
              chapter witnesses their growth, setbacks, and triumphs, adding a
              layer of complexity to the narrative.
            </p>
            <div className={styles.shopCon}>
              <button>
                <span>Shop Now</span>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="193"
                height="40"
                viewBox="0 0 193 40"
                fill="none"
              >
                <g clipPath="url(#clip0_3_254)">
                  <path
                    d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_254">
                    <rect width="193" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className={styles.reviewSection}>
                <div className={styles.top}>
                  <h5>4.3</h5>
                  <div className={styles.line}></div>
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                </div>
                <div className={styles.bottom}>
                  <h1>(11.6k Total Review)</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bigBook}>
            <div className={styles.firstCircle}></div>
            <img src="/book.png" alt="" />
            <div className={styles.secondCircle}></div>
          </div>

          <div className={styles.productcards}>
            <div className={styles.toph1}>
              <h1>popular Novels</h1>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src="/four.jpg" alt="" className={styles.novelimg} />
                <div className={styles.circle}></div>

                <div
                  className={styles.under}
                  style={{
                    paddingLeft: "25px",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.cardRate}>
                    <img
                      src="/starCopy.svg"
                      alt=""
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                    <h2>(7.3k Reviews)</h2>
                  </div>
                  <h1>Pattinson's Curse</h1>

                  <div className={styles.priceAndButton}>
                    <h1>$69</h1>
                    <h2>88 Sold</h2>
                    <button>
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img src="/one.jpg" alt="" className={styles.novelimg} />
                <div className={styles.circle}></div>

                <div
                  style={{
                    paddingLeft: "25px",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.cardRate}>
                    <img
                      src="/starCopy.svg"
                      alt=""
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                    <h2>(5.8k Reviews)</h2>
                  </div>
                  <h1>The Past is Rising</h1>

                  <div className={styles.priceAndButton}>
                    <h1>$42</h1>
                    <h2>56 Sold</h2>
                    <button>
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img src="/two.jpg" alt="" className={styles.novelimg} />
                <div className={styles.circle}></div>

                <div
                  style={{
                    paddingLeft: "25px",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.cardRate}>
                    <img
                      src="/starCopy.svg"
                      alt=""
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                    <h2>(3.6k Reviews)</h2>
                  </div>
                  <h1>Memory</h1>

                  <div className={styles.priceAndButton}>
                    <h1>$23</h1>
                    <h2>96 Sold</h2>
                    <button>
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/three.webp" alt="" className={styles.novelimg} />
                <div className={styles.circle}></div>

                <div
                  style={{
                    paddingLeft: "25px",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.cardRate}>
                    <img
                      src="/starCopy.svg"
                      alt=""
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                    <h2>(8.9k Reviews)</h2>
                  </div>
                  <h1>Walk Into The Shadow</h1>

                  <div className={styles.priceAndButton}>
                    <h1>$15</h1>
                    <h2>99 Sold</h2>
                    <button>
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
