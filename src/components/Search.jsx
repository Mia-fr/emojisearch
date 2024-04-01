const Search = ({ search, setSearch }) => {
  return (
    <div className="upper">
      <span role="img" aria-label="Sunglasses man">
        😎 EmojiSearch 😎
      </span>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="What Emoji are you looking for?"
      ></input>
    </div>
  );
};

export default Search;
