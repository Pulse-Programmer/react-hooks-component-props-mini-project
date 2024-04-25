function Article({
  record: { title, date = "January 1, 1970", preview, minutes },
}) {
  //   const cupEmoji = "☕️";
  //   const boxEmoji = "🍱";

  //   if (minutes < 30) {
  //     minutes / 5;
  //   }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
