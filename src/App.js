import React, { useRef } from "react";
import BasicTable from "./components/Table";
import "./styles.css";
const articles = [
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2011-11-23"
  },
  {
    title: "Artificial Mountains",
    upvotes: 200,
    date: "2019-11-23"
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-10-21"
  },
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2019-10-22"
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2018-04-01"
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2017-01-21"
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 83,
    date: "2020-02-22"
  }
];
export default function App() {
  const inputRef = useRef();
  function getBiggest(arr) {
    const biggest = arr.reduce((acc, el) =>
      acc.upvotes < el.upvotes ? acc : el
    );
    console.log(biggest);
  }

  function findDate(articles, date) {
    const artDate = articles.find((article) => article.date.includes(date));
    console.log(artDate);
  }

  function filterArticles(articles) {
    const filArt = articles.filter((article) => article.upvotes < 200);
    console.log(filArt);
  }

  function isExistArticle(article, condition) {
    const existArticle = article.some((article) =>
      article[condition.property].includes(condition.value)
    );
    console.log("existArticle", existArticle);
  }

  getBiggest(articles);
  findDate(articles, "2020-02-22");
  filterArticles(articles);
  isExistArticle(articles, { property: "title", value: "Simple text" });

  function onSubmit(e) {
    e.preventDefault();
    // console.log(e.target.text.value); bad
    console.log(inputRef.current.value); //good
  }

  React.useEffect(() => {
    // inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} name="text" placeholder="Prueba focus" />
        <button type="submit">Submit</button>
      </form>
      <BasicTable articles={articles} />
    </div>
  );
}
