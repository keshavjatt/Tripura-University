import React from "react";
import Image from "next/image";
import mission from "@/public/images/mission.png";
import vision from "@/public/images/vision.png";

const VisionAndMission = () => {
  return (
    <>
      <section className="px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl text-green-600 font-bold py-5">
            Our Mission
          </h2>
          <div className="mission flex flex-col md:flex-row">
            <div className="flex flex-col gap-3 indent-7 mission-content w-full md:w-1/2">
              <p>
                {`At Tripura Global Technical University, our mission is to empower individuals by providing them with accessible, high-quality education and skill development opportunities. We aim to foster personal growth, enhance employability, and contribute to the creation of a skilled workforce that drives progress and innovation, benefiting both individuals and industries.`}
              </p>

              <p>
                {`We believe that education is a powerful tool for positive change, and we are committed to making it available to all, regardless of background or circumstances. Through our diverse range of programs, we cater to the unique needs of every learner, ensuring they receive tailored support and resources to succeed in their chosen fields.`}
              </p>
              <p>
                {`
                Our programs are designed to equip individuals with the practical skills and knowledge needed to excel in a rapidly evolving global economy. We focus not only on technical expertise but also on building soft skills, such as communication, problem-solving, and leadership, which are essential for thriving in today's workforce.
                `}
              </p>
            </div>
            <div className="mission-image w-full md:w-1/2">
              <Image
                src={mission}
                width={800}
                height={450}
                alt="Our Mission"
                className="w-full max-h-[400px] h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4" >
        <h2 className="text-3xl text-green-600 font-bold py-5 ">
          Our Vision
        </h2>

        <div className="vision flex flex-col md:flex-row">
          <div className="vision-image w-full md:w-1/2">
            <Image
              src={vision}
              width={800}
              height={450}
              alt="Our Vision"
              className="w-full max-h-[400px] h-auto rounded-lg "
            />
          </div>
          <div className="vision-content w-full md:w-1/2 flex flex-col gap-3 indent-7">
            <p>
              At Tripura Global Technical University, our vision is to be a leading catalyst in
              transforming lives by bridging the gap between education and
              employment. We strive to create a world where every individual has
              the opportunity to develop their skills, realize their potential,
              and build a successful, sustainable career, contributing to a
              brighter and more inclusive future for all.
            </p>
            <p>
              {`
                We envision a future where education is universally accessible, where every learner, regardless of background, can pursue a path that leads to meaningful employment and career growth. By providing practical, hands-on training in both technical and soft skills, we aim to help individuals navigate the complexities of the modern workforce and become agents of positive change within their communities.
                `}
            </p>
            <p>
              {`
                Our goal is to foster a global workforce that is diverse, adaptable, and resilient. We believe in the power of lifelong learning and are committed to offering continuous development opportunities, ensuring that our learners stay ahead of industry trends and maintain a competitive edge throughout their careers.`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionAndMission;
