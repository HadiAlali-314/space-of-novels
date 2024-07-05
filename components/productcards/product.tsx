// components/productcards/product.tsx

import React from "react";
import styles from "./product.module.css";
import { IoBagAddOutline } from "react-icons/io5";

interface Product {
  saleInfo?: {
    retailPrice?: {
      amount: number;
      currencyCode: string;
    };
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
  };
  id: string;

  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
}

interface ProductCardsProps {
  books?: Product[];
}
const ProductCards: React.FC<ProductCardsProps> = ({ books = [] }) => {
  console.log("Books:", books);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cards}>
            {books.map((book: Product) => (
              <div key={book.id} className={styles.productCard}>
                <div className={styles.topBlue}></div>
                {book.volumeInfo?.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                ) : (
                  <img src="/cover.webp" alt="No Image Available" />
                )}

                <div className={styles.textArea}>
                  <h1
                    style={{
                      maxWidth: "320px",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {book.volumeInfo?.title}
                  </h1>
                  <h2
                    style={{
                      maxWidth: "320px",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {book.volumeInfo?.authors?.join(", ")}
                  </h2>
                  <h3>{book.volumeInfo?.categories?.join(", ")}</h3>
                  {book.saleInfo && book.saleInfo.retailPrice ? (
                    <h4>{book.saleInfo.retailPrice.amount.toFixed(0)}$</h4>
                  ) : (
                    <h4>{Math.floor(Math.random() * 720)}$</h4>
                  )}

                  <div className={styles.addToCart}>
                    <IoBagAddOutline className={styles.addToCartIcon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
