export const getUpdatedInfo = () => {
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