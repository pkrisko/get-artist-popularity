export const getArtistById = async artistId => {
    console.log(process.env);
    const url = `${process.env.REACT_APP_API_GW_URL}?artist_id=${artistId}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.REACT_APP_X_API_KEY
        }
    });
    const json = await res.json();
    console.log("res", res);
    return json;
}