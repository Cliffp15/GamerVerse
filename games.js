axios({
    url: "https://api.igdb.com/v4/age_ratings",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID: Client ID',
        'Authorization: Bearer access_token',
    },
    data: "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;"
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });