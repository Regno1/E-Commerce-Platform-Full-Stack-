import Fashion from "../../assets/images/fashion.jpg";
import Electronics from "../../assets/images/electronics.jpg";
import Mobiles from "../../assets/images/mobiles.jpg";
import Footware from "../../assets/images/footware.jpg";
import Watches from "../../assets/images/watches.jpg";
import Accessories from "../../assets/images/accessories.jpg";
import HomeImg from "../../assets/images/homeAndLiving.jpg";
import Beauty from "../../assets/images/beauty.jpg";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const category = [
    { image: Fashion,     name: "Fashion"       },
    { image: Electronics, name: "Electronics"   },
    { image: Mobiles,     name: "Mobiles"       },
    { image: Footware,    name: "Footwear"      },
    { image: Watches,     name: "Watches"       },
    { image: Accessories, name: "Accessories"   },
    { image: HomeImg,     name: "Home & Living" },
    { image: Beauty,      name: "Beauty"        },
  ];

  return (
    <section className="categories-section">
      <div className="section-header">
        <span className="section-label">Browse By</span>
        <h2 className="section-title">Shop Categories</h2>
        <p className="section-subtitle">Explore our wide range of product categories</p>
      </div>

      <div className="categories-grid">
        {category.map((item) => (
          <div
            className="category-card"
            key={item.name}
            onClick={() => {
              navigate(`/products?category=${encodeURIComponent(item.name)}`);
            }}
          >
            <img src={item.image} alt={item.name} />
            <div className="category-overlay">
              <h3 className="category-name">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;