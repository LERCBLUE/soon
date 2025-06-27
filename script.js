document.addEventListener("DOMContentLoaded", function () {
  const mobileBackgrounds = [
    'https://i.postimg.cc/90q6CcDp/LERKBLU-Story-20250627-002659-0000.png',
    'https://i.postimg.cc/d05P9HM8/LERKBLU-Story-20250627-002758-0000.png',
    'https://i.postimg.cc/bJ577Zwr/LERKBLU-Story-20250627-002859-0000.png',
    'https://i.postimg.cc/G290gFr6/LERKBLU-Story-20250627-003051-0000.png',
    'https://i.postimg.cc/FHQ4FkgJ/LERKBLU-Story-20250627-003152-0000.png'
  ];

  const desktopBackgrounds = [
    'https://i.postimg.cc/JnkgBRPL/LERC-BLU-20250625-191200-0000.png',
    'https://i.postimg.cc/BbfzTRV1/LERC-BLU-20250625-191323-0000.png',
    'https://i.postimg.cc/3r2V8Jkj/LERC-BLU-20250625-191522-0000.png',
    'https://i.postimg.cc/NF8zpb3C/LERC-BLU-20250625-191805-0000.png',
    'https://i.postimg.cc/yNW2smRW/LERC-BLU-20250625-192358-0000.png'
  ];

  const isMobile = window.innerWidth <= 600;
  const backgrounds = isMobile ? mobileBackgrounds : desktopBackgrounds;
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const bg = document.getElementById("background");
  if (bg) bg.style.backgroundImage = `url('${chosen}')`;
});
