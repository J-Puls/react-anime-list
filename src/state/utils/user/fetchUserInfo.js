export const fetchUserInfo = async (token) => {
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