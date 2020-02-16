const fetchTitles = async (options, username) => {
    let foundData;
    await fetch(
        `http://localhost:5000/react-anime-list/us-central1/api/share-list/by-username/?username=${username}`,
        options)
      .then(data => data.json())
      .then(data => {
        foundData = data.list;
        console.log(foundData)
        return foundData;
      })
      .catch(err => console.error(err));
    return foundData;
  }

export const getTitlesByUsername = async username => {
    const options = {
        method: "GET",
        mode: "cors",
        "Access-Control-Allow-Origin": "*",
        headers: {
            "Content-Type": "application/json",
        }
        
    };
    const retrievedData = fetchTitles(options, username)
    return retrievedData;
};