import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((item) => (
        <Article key={item.id} record={item} />
      ))}
    </main>
  );
}

export default ArticleList;
