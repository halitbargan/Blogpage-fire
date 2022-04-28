import * as React from "react";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router";
import { useState, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../Pages/loginRegister.css";
import { BlogContext } from "../context/BlogContext";

const BlogForm = () => {
  const location = useLocation();
  const item = location.state.item;

  const initialValues = {
    title: item.title,
    content: item.content,
    imageURL: item.imageURL,
    id: item.id,
    author: item.author,
    date: item.date,
  };

  const [info, setInfo] = useState(initialValues);
  const { EditBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    EditBlog(info);
    navigate("/");
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="login-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <form>
            <Box className="login-box">
              <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
              <h2>── UPDATE {info.title} ──</h2>

              <div className="login-textfields">
                <TextField
                  autoFocus
                  id="title"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={info.title}
                  onChange={handleChange}
                />

                <TextField
                  type="url"
                  id="outlined-basic2"
                  label="Image URL"
                  variant="outlined"
                  name="imageURL"
                  value={info.imageURL}
                  onChange={handleChange}
                />
                <TextField
                  multiline
                  minRows={8}
                  id="outlined-basic2"
                  label="Content"
                  variant="outlined"
                  name="content"
                  value={info.content}
                  onChange={handleChange}
                />
              </div>
              <div className="login-buttons">
                {/* buttonlara hover ve background color eklenmeli */}

                <Button
                  onClick={handleUpdate}
                  type="submit"
                  variant="contained"
                >
                  UPDATE
                </Button>
              </div>
            </Box>
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default BlogForm;
