import React from 'react'
import Image from "next/image";
import SampleGraphic from "../../assets/mern.png";

const CarouselCard = ({card_id}) => {
  return (
    <div id={card_id} className="carousel-item w-full justify-center items-center">
            <div className="card bg-base-100 image-full w-3/4 h-full shadow-sm">
            <figure>
                <Image
                src={SampleGraphic}
                    alt="MERN mockup"
                    fill
                    className="object-cover opacity-70 blur-xs"
                    sizes="(max-width: 640px) 100vw, 720px"
                    priority
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Full-Stack Ecommerce using MERN</h2>
                <p>Currently developing a full-stack Ecommerce solution using a MERN stack (MongoDB, Express.js, React.js, Node.js) which currently utilises JWT tokens for authentication and DaisyUI for the frontend.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
    </div>
  )
}

export default CarouselCard
