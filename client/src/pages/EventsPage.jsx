import React from "react";
import styles from "../styles/styles";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/Layout/Footer";
import Loader from "../components/Layout/Loader";
import Header from "../components/Layout/Header";
// import { useSelector } from "react-redux"; // Uncomment if you want to fetch from redux state

const EventsPage = () => {
  // You can switch to Redux by uncommenting this:
  // const { allEvents, isLoading } = useSelector((state) => state.events);

  const allEvents = [
    {
      id: 1,
      category: "Computers and Laptops",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description: "Product details are a crucial part of any eCommerce website...",
      image_Url: [
        { public_id: "test", url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
      Finish_Date: "2025-05-24T14:30:00Z",
    },
    {
      id: 2,
      category: "Mobile & Tablets",
      name: "iPhone 14 Pro Max 256GB SSD and 8GB RAM Silver Colour",
      description: "Product details are a crucial part of any eCommerce website...",
      image_Url: [
        { public_id: "test", url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10,
    },
    {
      id: 3,
      category: "Shoes",
      name: "New Trend shoes for gents with all sizes",
      description: "Product details are a crucial part of any eCommerce website...",
      image_Url: [
        { public_id: "test", url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg" },
      ],
      shop: {
        name: "Alisha Shoes Mart",
        shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
        ratings: 4.2,
      },
      price: 120,
      discount_price: 89,
      rating: 5,
      total_sell: 49,
      stock: 10,
    },
    {
      id: 4,
      category: "Others",
      name: "New Fashionable Watch for Men 2023 with Multiple Colors",
      description: "Product details are a crucial part of any eCommerce website...",
      image_Url: [
        { public_id: "test", url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1" },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
        ratings: 4.2,
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 12,
      stock: 10,
    },
    {
      id: 5,
      category: "Music and Gaming",
      name: "Gaming Headphone Asus with multiple color and free delivery",
      description: "Product details are a crucial part of any eCommerce website...",
      image_Url: [
        { public_id: "test", url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg" },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: { public_id: "test", url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      total_sell: 20,
      stock: 10,
    },
  ];

  return (


<>
{!allEvents ? (
  <Loader />
) : (
  <div>
    <Header activeHeading={2} />
    <br />
    <br />
    <div className={`${styles.section} mt-8`}>
  <div className="w-full">
    <h1 className="text-3xl font-bold text-center mb-8">All Events</h1>
    <div className="flex flex-col gap-6">
      {allEvents.map((item, index) => (
        <EventCard key={index} data={item} />
      ))}
    </div>
  </div>
</div>
    <Footer />
  </div>
)}
</>

  );
};

export default EventsPage;
