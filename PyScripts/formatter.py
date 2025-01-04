import os
galleryImages = [
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_c22df3631caa47a38ec23b249e31ab98~mv2.jpg",
      "alt": "PXL_20240514_031436375_edited",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_28fa99266ad8433596541c543cfa5076~mv2.jpg",
      "alt": "HTYE",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_3d864cd8b7aa40f7b5dcb3ee6f6b0a26~mv2.jpg",
      "alt": "HYTE",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_7121bed2e4ed4728a9d5dc44c41b5615~mv2.jpg",
      "alt": "PXL_20240511_001700318",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_dd137688aa194f19ac4417eea6494551~mv2.jpg",
      "alt": "PXL_20240511_001548906",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_4fca7957639841f6bd8dbc1fc97f0b9e~mv2.jpg",
      "alt": "PXL_20240511_001144199",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_e7ba85bb4da941709acbadf896912477~mv2.jpg",
      "alt": "NANOQ CASE",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_7f25dffdb76b47c4aa7a20a8b13005fc~mv2.jpg",
      "alt": "NANOQ CASE",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_cf7b91c324054ca1b420e7afd388aebf~mv2.jpg",
      "alt": "NANOQ CASE",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_559d89c3bfb14552affe44353543b060~mv2.jpg",
      "alt": "TITAN RIG",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_43f130c54f59497c99b7ec31886bdf1f~mv2.jpg",
      "alt": "PXL_20240421_150958172_edited",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_9d60e60be0a04e679da5fefc7c77a37b~mv2.jpg",
      "alt": "SFFBUILD Custom Chassis",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_fc6eb2d68fa24f0395412c337cccd885~mv2.jpg",
      "alt": "Ghost S1",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_1fe62ce43af04cf3ad8289236a975677~mv2.png",
      "alt": "Slate Case",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_3b3ce14d38eb4e5290e97969cc9c5915~mv2.jpg",
      "alt": "Xproto ATX",
    },
    { 
      "src": "https://static.wixstatic.com/media/a1bbd4_ba83973aa9b748f9a77966323b3d5880~mv2.jpg",
      "alt" : "Aklla A5",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_061639a19b5c4c47be0be94e6ee46a9f~mv2.jpg",
      "alt" : "Magnus",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_ac7cecf3f8d84ba88fd91af472bc3f98~mv2.jpg",
      "alt" : "Meshlicious",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_23cec1d4e6fe4e90b6c3a26e886bdd05~mv2.jpeg",
      "alt" : "@casavillam",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_851902acb2554e10b0af80be251fb646~mv2.jpeg",
      "alt" : "@thetimeisgrey",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_abff96a982ed4d2199694d193b783939~mv2.jpeg",
      "alt" : "@CasaVilla",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_cc5d415898eb4d6cb0a6e1cc8a4e27e4~mv2.jpeg",
      "alt" : "WhatsApp Image 2021-01-05 at 11.20",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_75adffde4f5349fb8d0c788b1c9565f4~mv2.jpeg",
      "alt" : "WhatsApp Image 2021-01-05 at 11.17",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_5d2c89b953d54e99a1259d0daa56d8d5~mv2.jpeg",
      "alt" : "WhatsApp Image 2021-01-05 at 11.20",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_5ef6f7f46a024c45822224d173b9c5ab~mv2_d_2406_3748_s_4_2.jpg",
      "alt" : "BOA Building",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_65b96d0e6dd548dfaa12a4a16ca5d8a0~mv2_d_4032_3024_s_4_2.jpg",
      "alt" : "Wings",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_6ca94891b2084095bd514f1ec697c592~mv2_d_4032_3024_s_4_2.jpg",
      "alt" : "Wall of Dogs",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_dd13fd68731b4f30839b6f50b95c5341~mv2_d_3024_4032_s_4_2.jpg",
      "alt" : "Yellow Pollen",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_8eefda6a08f64b9aa9947ab3bf3155e9~mv2_d_4032_3024_s_4_2.jpg",
      "alt" : "Hollywood Dog Park",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_bd3e0b42d11a439188489099167b98ab~mv2_d_4032_3024_s_4_2.jpg",
      "alt" : "Disco Night",
    },
    {
      "src" : "https://static.wixstatic.com/media/a1bbd4_73d696f6a5394bd88995d9a3ac4d0f27~mv2_d_2833_2833_s_4_2.jpg",
      "alt" : "Indiana",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_07b3a198465442f19d0e7cf551d1d16a~mv2_d_3480_2888_s_4_2.jpg",
      "alt": "Jam",
    },
    {
      "src": "https://static.wixstatic.com/media/a1bbd4_a9d52368bd7444489421d2294cdf2a7d~mv2_d_3480_4640_s_4_2.jpg",
      "alt": "Lady Bug",
    },
    {
      "alt": "Lights of the Season",
      "src": "https://static.wixstatic.com/media/a1bbd4_22f2fdfd09f743c4a7646d85209c910f~mv2_d_4032_3024_s_4_2.jpg",
    },
    {
      "alt": "Pyramid Lake",
      "src": "https://static.wixstatic.com/media/a1bbd4_4c69cdb5fa6c47bdb1389b6a367c4d37~mv2_d_2048_1536_s_2.jpg",
    },
    {
      "alt": "On The Road",
      "src": "https://static.wixstatic.com/media/a1bbd4_a80e29b3eef84bb4a546ae06a5dde21c~mv2_d_2048_1536_s_2.jpg",
    },
    {
      "alt": "Wild Flower",
      "src": "https://static.wixstatic.com/media/a1bbd4_2a2c03240f3f4cb5986034d7ec90eb9d~mv2.jpg",
    },
    {
      "alt": "LCMA",
      "src": "https://static.wixstatic.com/media/a1bbd4_3b2733f16b0f4ca695b3628aa15672b9~mv2_d_3480_4640_s_4_2.jpg",
    },
    {
      "alt": "VW Van",
      "src": "https://static.wixstatic.com/media/a1bbd4_5017c1699c204ea3a331aaaf7ffdd7d0~mv2_d_3480_4640_s_4_2.jpg",
    },
    {
      "alt": "Higher Ground",
      "src": "https://static.wixstatic.com/media/a1bbd4_6224965a265443d6ac82a754eb8cdb47~mv2_d_4640_3480_s_4_2.jpg",
    },
    {
      "alt": "Le Pain",
      "src": "https://static.wixstatic.com/media/a1bbd4_2ceead0fa98d4c67b79ebadb92a67ad3~mv2_d_3480_4640_s_4_2.jpg",
    },
    {
      "alt": "Lights at China Town",
      "src": "https://static.wixstatic.com/media/a1bbd4_eff5b8ce1c7349b29e4042bec9a58073~mv2_d_3480_4640_s_4_2.jpg",
    },
    {
      "alt": "VW & Camper",
      "src": "https://static.wixstatic.com/media/a1bbd4_47d007ce4a834b1bac6c24f94dbb0035~mv2_d_4032_3024_s_4_2.jpg",
    },
    {
      "alt": "Camp Fire",
      "src": "https://static.wixstatic.com/media/a1bbd4_3c165b004f574849ab691f9b8e75810e~mv2_d_4640_3480_s_4_2.jpg",
    },
    {
      "alt": "The View",
      "src": "https://static.wixstatic.com/media/a1bbd4_fc430f4a620244838d5ca05b9d7ae14e~mv2.jpg",
    },
    {
      "alt": "Moon",
      "src": "https://static.wixstatic.com/media/a1bbd4_e285c051511d43cbb40356be386c4eec~mv2.jpg",
    },
    {
      "alt": "Pies at Canter's",
      "src": "https://static.wixstatic.com/media/a1bbd4_496b0ba6319840f384cf83a63c44fe64~mv2_d_4032_3024_s_4_2.jpg",
    },
    {
      "alt": "Peter Shire's Studio",
      "src": "https://static.wixstatic.com/media/a1bbd4_d4683d7742234f18a84ede82b663a496~mv2_d_3024_4032_s_4_2.jpg",
    },
    {
      "alt": "Indiana",
      "src": "https://static.wixstatic.com/media/a1bbd4_ea61a68a3931490db4c1e5100fe72869~mv2_d_3480_4640_s_4_2.jpg",
    },
    {
      "alt": "Los Glorios Tacos",
      "src": "https://static.wixstatic.com/media/a1bbd4_16103c7f7ebe47418724fd0bf3227f7f~mv2_d_3480_4640_s_4_2.jpg",
    },
    {
      "alt": "Goumi",
      "src": "https://static.wixstatic.com/media/a1bbd4_1d8d3d88db02415e836bfe64a118f963~mv2_d_3024_4032_s_4_2.jpg",
    },
    {
      "alt": "Mexican Food",
      "src": "https://static.wixstatic.com/media/a1bbd4_dd8844082c8c4e46b2e34cf245226449~mv2_d_3480_4640_s_4_2.jpg",
    },
  ];
local_dir = "/downloaded_images"
for image in galleryImages:
    filename = image["src"].split("/media/")[1]
    image["src"] = os.path.join(local_dir, filename)

# Print the updated galleryImages array
print("const galleryImages =", galleryImages)