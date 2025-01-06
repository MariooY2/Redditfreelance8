const pressFeatures = [
  {
    title: "Featured On: TitanRig.com",
    images: [
      "/downloaded_images/a1bbd4_7ddd86935db74e89a00dfb0b9b16c470~mv2.png",
      "/downloaded_images/a1bbd4_0343162dae3b4e2aac13ca07712e6788~mv2.png",
      "/downloaded_images/a1bbd4_023482290cc842a8989d84f9d01fc471~mv2.jpg",
    ],
    link: "https://www.titanrig.com/blog/post/featured-rig-7-aggron-by-daniel-de-oliveira-of-sffbuild",
    linkLabel: "More On TitanRig.com",
  },
  {
    title: "Featured On: Fiverr.com",
    images: [
      "/downloaded_images/a1bbd4_67dedb29ca764ad5b5cc94b2873d2f59~mv2.png",
      "/downloaded_images/a1bbd4_16cf983af9ce42878c68f87e20aba1a6~mv2.png",
    ],
    link: "https://www.fiverr.com/danoliveira",
    linkLabel: "Link -> Site",
    video:
      "https://www.youtube.com/embed/9t0UckyNTsQ?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=1&loop=0&showinfo=0&rel=0&enablejsapi=0",
  },
  {
    title: "Seen On: Miami New Times",
    images: [
      "/downloaded_images/a1bbd4_9ef68039243d44e28deb97e8b9bfae6e~mv2.png",
      "/downloaded_images/a1bbd4_5b866acc95314846b74968d1b89f3a7a~mv2.png",
      "/downloaded_images/a1bbd4_ea04b27cbc6b42109cfb8286966cea1d~mv2.png",
    ],
    link: "https://www.americanapparel.com/us/en/new",
    linkLabel: "Link -> Site",
    video:
      "https://www.youtube.com/embed/DWNk6zHzjns?wmode=transparent&autoplay=0&mute=0&theme=dark&controls=1&autohide=1&loop=0&showinfo=1&rel=0&enablejsapi=0",
  },
];

const PressSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Press</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {pressFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold text-center mb-4">
              {feature.title}
            </h3>
            {feature.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={feature.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
            ))}
            {feature.video && (
              <div className="mb-4">
                <iframe
                  src={feature.video}
                  width="100%"
                  height="315"
                  frameBorder="0"
                  allowFullScreen
                  title={`Video for ${feature.title}`}
                ></iframe>
              </div>
            )}
            <div className="text-center">
              <a
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {feature.linkLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressSection;
