import React from "react";
import BlogCard from "../components/BlogCard";
import "./Dashboard.css";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import loading from "../assets/loading.gif";

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { blogList, isLoading } = BlogFetch();

  return (
    <div>
      <h1 className="dash-text">──── Dashboard ────</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          // margin: "3rem",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <img src={loading} alt="loadingSpinner" />
        ) : (
          <>
            {blogList?.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
