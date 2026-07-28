
const Wishlist = () => {
  return (
    <div className="wishlist-page">
      <h1 className="page-title">My Wishlist</h1>

      <div className="placeholder-page" style={{ minHeight: "50vh" }}>
        <div className="placeholder-icon">❤️</div>
        <h2 className="placeholder-title">Your Wishlist is Empty</h2>
        <p className="placeholder-text">
          Save your favourite products here and shop them later when you're ready.
        </p>
        <a href="/products" className="btn-primary" style={{ textDecoration: "none" }}>
          Discover Products →
        </a>
      </div>
    </div>
  );
};

export default Wishlist;