import { takeEvery, all, put } from 'redux-saga/effects'
import actions from "./actions";

function* fetchSearch(action) {
  let query = "";
  if (action.search) {
    query = `q=${action.search}`;
  }
  if (action.country) {
    query = `country=${action.country}`;
  }

  if (action.country && action.search) {
    query = `country=${action.country}&q=${action.search}`;
  }

  if (!action.country && !action.search) {
    query = `country=us`;
  }

  const response = yield fetch(
    `https://newsapi.org/v2/top-headlines?${query}`,
    {
      headers: {
        'X-Api-Key': "803fdd9b8517490d89d8c85ade466b8d"
      }
    }
  );
  if (response.status === 200) {
    const parseResponse = yield response.json();
    const news = parseResponse.articles.map(article => ({
      _id: '_' + Math.random().toString(36).substr(2, 9),
      ...article
    }));
    yield put(actions.setNews(news))

  }
}


function* searchNews() {
  yield takeEvery(actions.SEARCH_NEWS, fetchSearch);
}

export default function* rootSaga() {
  yield all([
    searchNews()
  ])
}