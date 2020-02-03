import { trackPromise } from "react-promise-tracker";

const fetchInfo = async query => {
  const request = await trackPromise(
      fetch("https://api.jikan.moe/v3/search/anime?q=" + query + "&limit=1")
    ).catch(error => console.log("Something went wrong...", error)),
    response = await request.json(),
    result = response.results[0];
  return result;
};

export const findTitle = async (query, titles) => {
  let newTitle;
  // eslint-disable-next-line
  const data = await fetchInfo(query);
  if (data !== undefined) {
    newTitle = {
      mal_id: data.mal_id,
      title: data.title,
      score: data.score,
      airing: data.airing,
      rated: data.rated,
      episodes: data.episodes,
      synopsis: data.synopsis,
      image_url: data.image_url,
      url: data.url
    };
  }
  return newTitle;
};

// Retrieves data from UpdateModal and returns a new title object
export const getUpdated = () => {
  const t = document.querySelector("#updateTitle").value,
        s = document.querySelector("#updateSynopsis").value,
        e = document.querySelector("#updateEpisodes").value,
        a = document.querySelector("#updateAiring").checked,
        r = document.querySelector("#updateRated").value;
  // Cap user-input score at 0 & 10
  let sc = document.querySelector("#updateScore").value;
      sc = sc > 10 ? 10 : sc;
      sc = sc < 0 ? 0 : sc;
  const updated = {
    title: t,
    synopsis: s,
    episodes: e,
    airing: a,
    rated: r,
    score: sc
  };
  return updated;
};
