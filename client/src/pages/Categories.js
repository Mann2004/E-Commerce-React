import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "15px",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  const linkStyle = {
    display: "block",
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "10px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3" key={c._id}>
              <div
                className="card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = cardHoverStyle.transform;
                  e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                }}
              >
                <Link
                  to={`/category/${c.slug}`}
                  className="btn"
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      linkHoverStyle.backgroundColor;
                    e.currentTarget.style.color = linkHoverStyle.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      linkStyle.backgroundColor;
                    e.currentTarget.style.color = linkStyle.color;
                  }}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
