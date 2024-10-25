import React from "react";
import Tour from "./Tour";

// Define the shape of a single tour
interface TourType {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

// Define the props for the Tours component
interface ToursProps {
  tours: TourType[];
  removeTour: (id: string) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
