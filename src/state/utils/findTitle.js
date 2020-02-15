import { trackPromise } from "react-promise-tracker";

const fetchInfo = async query => {
  const request = await trackPromise(
      fetch("https://api.jikan.moe/v3/search/anime?q=" + query + "&limit=5")
    ).catch(error => console.log("Something went wrong...", error)),
    response = await trackPromise(request.json()),
    result = response.results;
  return result;
};

export const findTitle = async (query) => {
  let newTitles = [];
  // eslint-disable-next-line
  const data = await trackPromise(fetchInfo(query));
  if (data) {
      data.forEach(result => {
          newTitles.push({
            mal_id: result.mal_id,
            title: result.title,
            score: result.score,
            airing: result.airing,
            rated: result.rated,
            episodes: result.episodes,
            synopsis: result.synopsis,
            image_url: result.image_url,
            url: result.url
          })
      })
  }
//   if (data !== undefined) {
//     newTitle = {
//       mal_id: data.mal_id,
//       title: data.title,
//       score: data.score,
//       airing: data.airing,
//       rated: data.rated,
//       episodes: data.episodes,
//       synopsis: data.synopsis,
//       image_url: data.image_url,
//       url: data.url
//     };
//   }
  return newTitles;
};
