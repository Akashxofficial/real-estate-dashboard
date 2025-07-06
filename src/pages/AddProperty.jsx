import React from "react";

const propertyTypes = [
  {
    title: "Hotel",
    description:
      "A commercial establishment offering individual rooms or suites. Hotels must provide standardized services such as front desk, housekeeping, room service, and basic amenities.",
    image: "h1.jpg",
  },
  {
    title: "Resort",
    description:
      "A self-contained property offering accommodation, dining, and recreational amenities like pools, spas, or activity centers. Designed for relaxation or holiday experiences.",
    image: "22.jpg",
  },
  {
    title: "Apartment",
    description:
      "A self-contained residential unit within a multi-unit building, offered as either a single room or entire flat. Must include essential furnishings and amenities like kitchen, Wi-Fi, and cleaning support.",
    image: "33.jpg",
  },
  {
    title: "Farmhouse",
    description:
      "A stand-alone residential property located on farmland or rural areas. Should provide clean, comfortable lodging in peaceful settings, often surrounded by gardens or orchards.",
    image: "44.jpg",
  },
  {
    title: "Rural Home",
    description:
      "Traditional or ethnic houses located in villages, built in local styles. Must be safe, clean, and authentic, offering cultural immersion in rural lifestyles.",
    image: "55.jpg",
  },
  {
    title: "Bungalow",
    description:
      "A single-story detached home, generally offered as an entire property. Suited for travelers seeking privacy in a homely setting.",
    image: "66.jpg",
  },
  {
    title: "Homestay",
    description:
      "A private residence where guests stay in part of the home, typically hosted by the owner or family. Provides clean lodging and basic services.",
    image: "77.jpg",
  },
  {
    title: "Tent / Glamping",
    description:
      "Tents designed for guest accommodation in natural or offbeat locations. Includes beds, bathrooms, heating, ensuring safety and comfort.",
    image: "88.jpg",
  },
  {
    title: "Heritage Property",
    description:
      "A historic or architecturally significant building such as a palace or haveli restored for guest accommodation, offering modern comforts.",
    image: "99.jpg",
  },
  {
    title: "Guest House",
    description:
      "A small to mid-sized lodging facility offering private rooms with basic amenities like beds, bathrooms, and housekeeping.",
    image: "10.jpg",
  },
  {
    title: "Villa",
    description:
      "A stand-alone premium residential-style property offered as an entire unit, featuring multiple bedrooms, gardens, or pools.",
    image: "1111.jpg",
  },
];

const AddProperty = () => {
  return (
    <div style={{ padding: "100px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
        Which of these best describes your place?
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "24px" }}>
        You'll be able to add more details later, like type of space, amenities, and photos.
      </p>

      {propertyTypes.map((property, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
            gap: "24px"
          }}
        >
          <img
            src={property.image}
            alt={property.title}
            style={{
              width: "420px",  
              height: "250px", 
              objectFit: "cover",
              borderRadius: "16px"
            }}
          />
          <div>
            <h3 style={{ margin: "0 0 4px 0", fontSize: "18px" }}>{property.title}</h3>
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px", maxWidth: "500px" }}>
              {property.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddProperty;
