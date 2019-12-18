const actions = {
  SEARCH_NEWS: "SEARCH_NEWS",
  searchNews: (search = false, country = false) => ({
    type: actions.SEARCH_NEWS,
    search,
    country
  }),
  SET_NEWS: "SET_NEWS",
  setNews: (news = []) => ({
    type: actions.SET_NEWS,
    news
  }),
}

export default actions;
