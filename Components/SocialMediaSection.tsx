const socialMediaAccounts = [
  {
    username: "@TheRiflemanOfficial",
    posts: 2126,
    followers: "49.7k",
    imageUrl:
      "/downloaded_images/a1bbd4_878655ed70214f15949731cf19c40cc5~mv2.jpg",
    profileUrl: "https://www.instagram.com/theriflemanofficial/",
  },
  {
    username: "@DogDads",
    posts: 153,
    followers: "27k",
    imageUrl:
      "/downloaded_images/a1bbd4_4e732b1972a842a6bb725d3b1094b665~mv2.jpg",
    profileUrl: "https://www.instagram.com/dogdads/",
  },
  {
    username: "@SffBuild",
    posts: 399,
    followers: "22.8k",
    imageUrl:
      "/downloaded_images/a1bbd4_fc6eb2d68fa24f0395412c337cccd885~mv2.jpg",
    profileUrl: "https://www.instagram.com/sffbuild/",
  },
  {
    username: "@PassportVintage",
    posts: null,
    followers: "20k",
    iframeUrl: "/image1.png",
    description: "Advised the growth of",
    profileUrl: "https://www.instagram.com/passportvintage/",
  },
  {
    username: "@Trubrain",
    posts: null,
    followers: "17k",
    iframeUrl: "/image2.png",
    description: "Worked with",
    profileUrl: "https://www.instagram.com/trubrain",
  },
  {
    username: "@PureGear",
    posts: null,
    followers: "10k",
    iframeUrl: "/image3.png",
    description: "Coordinated growth of",
    profileUrl: "https://www.instagram.com/puregear/",
  },
  {
    username: "@PureCamSecure",
    posts: null,
    followers: "25k",
    iframeUrl:
      "https://www-danieloliveira-com.filesusr.com/html/a1bbd4_92e89a61b3703ddc1bf326c5515e57b2.html",
    description: "Started",
  },
];

const SocialMediaSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Social Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {socialMediaAccounts.map((account, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            {account.imageUrl ? (
              <img
                src={account.imageUrl}
                alt={account.username}
                className="w-full h-64 object-cover mb-4 rounded"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4 rounded">
                <iframe
                  src={account.iframeUrl}
                  title={account.username}
                  className="w-full h-full rounded"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            <h3 className="text-xl font-semibold text-center mb-2">
              {account.username}
            </h3>
            <p className="text-center text-gray-600 mb-4">
              {account.posts ? `${account.posts} posts • ` : ""}
              {account.followers} followers
            </p>
            {account.profileUrl ? (
              <div className="text-center">
                <a
                  href={account.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Profile
                </a>
              </div>
            ) : (
              <p className="text-center text-gray-600">{account.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;
