// pages/products.tsx

"use client";

import ProductCards from "@/components/productcards/product";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Product {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
    saleInfo?: {
      listPrice?: {
        amount: number;
        currencyCode: string;
      };
    };
  };
}

export default function Products() {
  const [books, setBooks] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const booksPerPage = 8;
  const type = [
    "Fiction",
    "Movies",
    "novel",
    "stories",
    "films",
    "animals",
    "Cinema ",
  ];

  const bottomBoundaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const apiKey = "AIzaSyD76vMi3UeGNeEctKQgBG0HK2BLnG0SPbs";
        const startIndex = Math.max((currentPage - 1) * booksPerPage, 0);
        const randomGenre = type[Math.floor(Math.random() * type.length)];

        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${randomGenre}&key=${apiKey}&startIndex=${startIndex}&maxResults=${booksPerPage}`
        );

        if (response.ok) {
          const data = await response.json();
          const fetchedBooks = data.items || [];
          const totalItems = data.totalItems || 0;
          console.log(`Total items from API: ${totalItems}`);
          setBooks((prevBooks) => [...prevBooks, ...fetchedBooks]);
        } else {
          console.error("Failed to fetch books");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false); // Step 2: Set loading back to false when fetch is complete
      }
    };

    fetchBooks();
  }, [currentPage, booksPerPage]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }

    return () => {
      if (bottomBoundaryRef.current) {
        observer.unobserve(bottomBoundaryRef.current);
      }
    };
  }, [bottomBoundaryRef]);

  return (
    <div>
      <ProductCards books={books} />
      {loading && (
        <div className={styles.loading}>
          The next story is on its way, just hold on...
        </div>
      )}
      <div ref={bottomBoundaryRef}></div>
    </div>
  );
}
