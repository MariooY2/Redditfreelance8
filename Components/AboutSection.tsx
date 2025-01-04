import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* About Me Section */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto h-auto">
          <Image
            src="/downloaded_images/a1bbd4_3a9d4bbd6b3c41f0b68931f9f05d899a~mv2_d_6504_2336_s_2.jpg"
            alt="About Daniel Oliveira"
            width={1920}
            height={900}
            className="rounded-lg shadow-md object-cover"
            priority={true}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              company: "LEVY-GARDNER-LAVEN PRODUCTIONS INC.",
              location: "Beverly Hills, California",
              period: "February 2016 - Present",
            },
            {
              company: "PUREGEAR",
              location: "Irwindale, California",
              period: "September 2018 - March 2019",
            },
            {
              company: "PROLOGIS",
              location: "Denver, Colorado",
              period: "March 2018 - July 2018",
            },
            {
              company: "TRUBRAIN",
              location: "Santa Monica, California",
              period: "February 2018 - August 2018",
            },
            {
              company: "AMERICAN APPAREL",
              location: "Los Angeles, California",
              period: "October 2014 - March 2015",
            },
            {
              company: "CONNECT2GIVE",
              location: "Miami, Florida",
              period: "February 2012 - June 2014",
            },
            {
              company: "AGUSTINA WOODGATE",
              location: "Miami, Florida",
              period: "January 2011 - June 2014",
            },
            {
              company: "REGULUS",
              location: "Miami, Florida",
              period: "September 2011 - December 2011",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="font-semibold text-lg">{experience.company}</h3>
              <p className="text-gray-600">{experience.location}</p>
              <p className="text-gray-500">{experience.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
        <div className="space-y-4">
          <p>
            <strong className="font-semibold">
              University of Maine at Presque Isle
            </strong>{" "}
            — Bachelor of Applied Science (BASc), Information Systems & Project
            Management
          </p>
          <p>
            <strong className="font-semibold">
              Pierpont Community & Technical College
            </strong>{" "}
            — Associate of Arts and Sciences (AAS), Information Systems
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Certifications</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            Amazon Web Services: AWS Cloud Solutions Architect Specialization
          </li>
          <li>
            Google: Digital Marketing & E-commerce Specialization, Data
            Analytics Specialization, Project Management Specialization, UX
            Design, IT Support
          </li>
          <li>IBM: Cybersecurity Analyst</li>
          <li>Duke University: Copyright for Educators & Librarians</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <p className="text-center">
          Excel, Google Suite, Adobe Suite, Asana, Trello, Monday, Discord,
          Slack, Zoom, Social Media Platforms (Facebook, TikTok, Instagram,
          Youtube), AWS, Microsoft Azure, Firewalls, Antivirus Software,
          Microsoft Teams
        </p>
      </section>

      {/* LinkedIn Section */}
      <section className="text-center">
        <a
          href="https://www.linkedin.com/in/daniel-oliveira-99924299"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          LinkedIn Profile
        </a>
      </section>
    </div>
  );
};

export default AboutSection;
