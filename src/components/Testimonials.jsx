import React from "react";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Benjamin Smith",
    img: "https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=612x612&w=0&k=20&c=qkOwVHZFC-fbtbTnufVGaXFhnQBcfEjzbu5ThSXVLR0=",
    stars: 4,
    title: "Great Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, lectus a ultrices vulputate, sapien risus varius odio, non hendrerit justo massa a sapien. Curabitur a diam nec erat accumsan tincidunt.",
  },
  {
    name: "Emily Davis",
    img: "https://static.vecteezy.com/system/resources/thumbnails/003/492/047/small/closeup-portrait-of-a-charming-girl-over-blue-studio-background-image-free-photo.jpg",
    stars: 5,
    title: "Exceptional Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, lectus a ultrices vulputate, sapien risus varius odio, non hendrerit justo massa a sapien. Curabitur a diam nec erat accumsan tincidunt.",
  },
  {
    name: "Michael Johnson",
    img: "https://us.123rf.com/450wm/pitinan/pitinan2305/pitinan230546929/205589385-mature-smart-african-american-businessman-smiling-face-standing-in-blur-background-of-busy-office.jpg?ver=6",
    stars: 3,
    title: "Good Overall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, lectus a ultrices vulputate, sapien risus varius odio, non hendrerit justo massa a sapien. Curabitur a diam nec erat accumsan tincidunt.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="w-full flex justify-center text-3xl font-bold">
        <h1>Testimonials</h1>
      </div>
      <section className="flex justify-center px-12 lg:px-24 my-12 text-white">
        <div className="grid md:grid-cols-3 gap-4 lg:gap-12 w-[1200px]">
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="flex flex-col gap-2 items-center bg-slate-100 border border-slate-700 text-slate-800 rounded-2xl p-4 hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
            >
              <img
                className="size-36 rounded-full object-cover"
                src={person.img}
                alt={`${person.name} Avatar`}
              />
              <h1 className="text-2xl text-center">{person.name}</h1>
              <div>
                {Array.from({ length: person.stars }).map((star, index) => (
                  <FaStar
                    key={index}
                    color="#ffe234"
                    style={{ display: "inline-block" }}
                  />
                ))}
              </div>
              <h1>{person.title}</h1>
              <p className="text-sm font-light text-center">{person.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
