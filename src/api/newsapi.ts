export const utils = {
  key: 'c45128cfa53e46caaf81d2b1d3a4ef65'
};

export async function newsFetch() {
  let articles = await fetch(
    `https://newsapi.org/v2/everything?q=Android&sortBy=popularity`,
    {
      headers: {
        'X-API-KEY': utils.key,
      },
    },
  );

  let result = await articles.json();
  return result.articles;
}

export async function newsSearch(searchText = '') {
  let articles = await fetch(
    `https://newsapi.org/v2/everything?q=${searchText}`,
    {
      headers: {
        'X-API-KEY': utils.key,
      },
    },
  );

  let result = await articles.json();
  return result.articles;
}