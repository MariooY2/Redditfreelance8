const webDesignProjects = [
  {
    title: "Designed and launched sffready.com",
    videoUrl:
      "/file.mp4",
    link: "https://www.sffready.com/",
  },
  {
    title:
      "Worked with the founder of Drops to create this gif for some guerilla digital marketing on Imgur",
    imageUrl:
      "/a1bbd4_f7b1eb543819467f80437edf1a82ba2b~mv2.gif",
    link: "https://www.danieloliveira.com/copy-of-mikeysfabics",
  },
  {
    title: "I designed MikeysFabric.com for a fabric whole seller in DTLA",
    images: [
      "/a1bbd4_8eb0a9eacbe74c389f188cb285b30112~mv2.png",
      "/a1bbd4_6a204c6dc8bc4482b8baefd7aea95578~mv2.png",
      "/a1bbd4_1b458b6d2e094af3ae995528a1c6272f~mv2.png",
    ],
    link: "https://www.mikeysfabric.com/",
  },
  {
    title: "An example of a mobile site I built for Connet2Give",
    imageUrl:
      "/a1bbd4_642206aad24143a5ba4ec5a62d50eaa4~mv2.avif",
    link: "https://www.danieloliveira.com/connect2give",
  },
  {
    title: "American Apparel Brazil online store",
    subtitle: "A few examples of digital content I created",
    images: [
      "/a1bbd4_44bf01e957bb48f6a252588bfda20911~mv2.png",
      "/a1bbd4_edb0510b6c4b4981b2e6770a3350fe21~mv2.png",
      "/a1bbd4_3adf5ef4225542f79df0bd5b82c5d61e~mv2.jpeg",
      "/a1bbd4_1e6cdba27dc648dd89a20b9070df4229~mv2.png",
    ],
    link: "https://www.americanapparel.com/us/en/new",
  },
];

const WebDesignSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Web Design</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {webDesignProjects.map((project, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                className="w-full h-64 object-cover mb-4 rounded"
                controls
                autoPlay
                loop
                muted
              />
            ) : project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
            ) : (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.images!.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`Project image ${imgIndex + 1}`}
                    className="w-full h-32 object-cover rounded"
                  />
                ))}
              </div>
            )}
            <h3 className="text-xl font-semibold text-center mb-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-center text-gray-600 mb-4">
                {project.subtitle}
              </p>
            )}
            <div className="text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDesignSection;
