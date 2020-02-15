import { trackPromise } from "react-promise-tracker";

// const fetchInfo = async query => {
//   const request = await trackPromise(
//       fetch("https://api.jikan.moe/v3/search/anime?q=" + query + "&limit=1")
//     ).catch(error => console.log("Something went wrong...", error)),
//     response = await trackPromise(request.json()),
//     result = response.results[0];
//   return result;
// };

// export const findTitle = async (query, titles) => {
//   let newTitle;
//   // eslint-disable-next-line
//   const data = await fetchInfo(query);
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
//   return newTitle;
// };

// Retrieves data from UpdateModal and returns a new title object
// export const getUpdated = () => {
//   const t = document.querySelector("#updateTitle").value,
//         s = document.querySelector("#updateSynopsis").value,
//         e = document.querySelector("#updateEpisodes").value,
//         a = document.querySelector("#updateAiring").checked,
//         r = document.querySelector("#updateRated").value;
//   // Cap user-input score at 0 & 10
//   let sc = document.querySelector("#updateScore").value;
//       sc = sc > 10 ? 10 : sc;
//       sc = sc < 0 ? 0 : sc;
//   const updated = {
//     title: t,
//     synopsis: s,
//     episodes: e,
//     airing: a,
//     rated: r,
//     score: sc
//   };
//   return updated;
// };

const fetchTitles = async (options) => {
  let foundData;
  let request = await fetch(
      "https://us-central1-react-anime-list.cloudfunctions.net/api/user/",
      options)
    .then(data => data.json())
    .then(data => {
      foundData = data.list;
      return foundData;
    })
    .catch(err => console.error(err));
  return foundData;
}

const fetchUserInfo = async (token) => {
  const rawResponse = await fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/user/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  const content = await rawResponse.json();
  return content.credentials
};

// export const getAuthorizedUserTitles = async token => {
//   const options = {
//     method: "GET",
//     mode: "cors",
//     "Access-Control-Allow-Origin": "*",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,
//     }
//   };
//   const retrievedData = fetchTitles(options)
//   return retrievedData;
// };

// export const login = async (email, password) => {
//   const rawResponse = await trackPromise(fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/login', {
//     method: 'POST',
//     mode: "cors",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "email": email,
//       "password": password
//   })
//   }));
//   const authToken = await trackPromise(rawResponse.json());
//   const titles = await trackPromise(getAuthorizedUserTitles(authToken.token));
//   const userCreds = await trackPromise(fetchUserInfo(authToken.token));
//   return {token: authToken.token, titles, userCreds}
// };

// export const appendTitleToDB = async (token, newTitle) => {
//   const rawResponse = await trackPromise(fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/add-title', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,
//     },
//     body: JSON.stringify(newTitle)
//   }));
//   const content = await rawResponse.json();
//   return content
// };

// export const signup = async (data) => {
//   const rawResponse = await trackPromise(fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/users/signup', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
//   }));
//   const content = await rawResponse.json();
//   console.log(content)
//   return content
// }