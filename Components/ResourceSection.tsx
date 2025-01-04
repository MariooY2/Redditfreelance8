"use client";
import React from "react";

const resources = [
  {
    title: "Naming",
    links: [
      { url: "https://www.namemesh.com/", text: "NameMesh" },
      { url: "http://thenameapp.com/", text: "The Name App" },
      { url: "https://www.powerthesaurus.org/", text: "Power Thesaurus" },
    ],
  },
  {
    title: "Domain Names",
    links: [
      { url: "https://domainr.com/", text: "Domainr" },
      { url: "http://shortdomainsearch.com/", text: "Short Domain Search" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { url: "https://aws.amazon.com/", text: "AWS" },
      { url: "https://www.heroku.com/", text: "Heroku" },
      { url: "https://www.digitalocean.com/", text: "DigitalOcean" },
    ],
  },
  {
    title: "Market Research",
    links: [
      { url: "https://www.crunchbase.com/", text: "Crunchbase" },
      { url: "https://www.similarweb.com/", text: "SimilarWeb" },
      { url: "https://trends.google.com/trends/", text: "Google Trends" },
    ],
  },
  {
    title: "Forms",
    links: [
      { url: "https://www.typeform.com/", text: "Typeform" },
      { url: "https://www.google.com/forms/about/", text: "Google Forms" },
      { url: "https://www.wufoo.com/", text: "Wufoo" },
    ],
  },
  {
    title: "User Feedback",
    links: [
      { url: "https://usabilla.com/", text: "Usabilla" },
      { url: "https://www.usertesting.com/", text: "UserTesting" },
    ],
  },
  {
    title: "Mockups & Wire Frames",
    links: [
      { url: "https://moqups.com/", text: "Moqups" },
      { url: "https://www.weld.io/", text: "Weld" },
      { url: "https://proto.io/", text: "Proto.io" },
    ],
  },
  {
    title: "Design",
    links: [
      { url: "https://www.sketchapp.com/", text: "Sketch" },
      { url: "http://feedbag.io/", text: "Feedbag" },
      { url: "https://www.invisionapp.com/", text: "InVision" },
    ],
  },
];

const ResourceSection = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-extrabold text-center mb-12">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {resources.map((section, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              {section.title}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;
