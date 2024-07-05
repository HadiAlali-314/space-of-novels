"use client";
import styles from "./shelf.module.css";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function MyShelf() {
  const list = [
    {
      title: "Hide And Seek",
      img: "/cover.webp",
      price: "$5.50",
    },
    {
      title: "Memory",
      img: "/two.jpg",
      price: "$3.00",
    },
    {
      title: "CRUSE",
      img: "/four.jpg",
      price: "$10.00",
    },
    {
      title: "Walk into the shadow",
      img: "/three.webp",
      price: "$5.30",
    },
    {
      title: "SOUL",
      img: "/five.jpg",
      price: "$15.70",
    },
    {
      title: "Alone",
      img: "/six.webp",
      price: "$8.00",
    },
    {
      title: "The Past is Rising",
      img: "/one.jpg",
      price: "$7.50",
    },
    {
      title: "Last Hope",
      img: "/seven.webp",
      price: "$12.20",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="transition-transform transform hover:scale-105"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="lg"
                radius="md"
                width="100%"
                alt={item.title}
                className="h-[auto] object-cover rounded-lg"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-sm flex justify-between items-center p-4">
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
