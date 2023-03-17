const getURL = (artist, song) => {
  const key = "660a4395f992ff67786584e238f501aa";
  return `https://api.vagalume.com.br/search.php?apikey=${key}&art=${artist}&mus=${song}`;
};

const putInHistory = (song) => {
  let history = JSON.parse(localStorage.getItem("songHistory"));
  if (history === null) history = [];
  history.push(song);
  localStorage.setItem("songHistory", JSON.stringify(history));
};

const handleFormSubmission = async (formInfo) => {
  const requestURL = getURL(formInfo.artist, formInfo.song);

  putInHistory(formInfo);
  let request = await fetch(requestURL);
  request = await request.json();

  if (request.type === "exact" || request.type === "aprox") {
    localStorage.setItem("requestedSong", JSON.stringify(request));
    window.location.href = "/found";
  } else {
    window.location.href = "/notfound";
  }
};

const getSongFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("requestedSong"));
};

const clearSongHistory = () => {
  localStorage.setItem("songHistory", "[]");
};

const getSongFromHistory = () => {
  return JSON.parse(localStorage.getItem("songHistory"));
};

export {
  handleFormSubmission,
  getSongFromLocalStorage,
  clearSongHistory,
  getSongFromHistory,
};
