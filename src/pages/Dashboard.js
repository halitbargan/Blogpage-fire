import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import "./Dashboard.css";
import { BlogContext } from "../context/BlogContext";
import LoadingLogo from "../assets/loading.gif";

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
          gap: "1rem",
          // margin: "3rem",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <img src={LoadingLogo} alt="LoadingGif" />
        ) : (
          <div>
            {blogList?.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
