import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Menu() {
  const menu = JSON.parse(localStorage.getItem("DataMenu"));
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-title ul li");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
        setSelectedItem(targetId);
      });
    });
  }, []);

  return (
    <>
      <div className="container-page">
        <div className="bg-header">
          <h3>Menu</h3>
        </div>
        <div className="menu-title">
          <ul id="menu-list">
            {menu?.result?.categories?.map((category, index) => (
              <li
                key={index}
                data-target={category.category_name}
                style={{
                  color: selectedItem === category.category_name ? "black" : "gray",
                }}
              >
                {category.category_name}
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-item">
          {menu?.result?.categories?.map((category, index) => (
            <section key={index} id={category.category_name}>
              <div className="menu-title-item">
                <h4>{category.category_name}</h4>
                <div className="menu-list">
                  {category.menu.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-item-list">
                      <div className="image-menu">
                        <img src={item.photo} alt={item.name} />
                      </div>
                      <div className="disc-menu">
                        <h5>{item.name}</h5>
                        <p>{item.description.slice(1, 30)}...</p>
                      </div>
                      <div className="price-menu">
                        <p>{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
