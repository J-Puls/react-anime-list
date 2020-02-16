const fetchTitles = async (options) => {
    let foundData;
    await fetch(
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

export const getAuthorizedUserTitles = async token => {
    const options = {
        method: "GET",
        mode: "cors",
        "Access-Control-Allow-Origin": "*",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    };
    const retrievedData = fetchTitles(options)
    return retrievedData;
};