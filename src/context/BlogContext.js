import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

const d = new Date();
const time = d.toLocaleDateString();

const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  //!Add Blog
  const AddBlog = (info) => {
    const database = getDatabase();
    const blogRef = ref(database, "firebaseDatabase");
    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      title: info.title,
      imageURL: info.imageURL,
      content: info.content,
      author: currentUser.email,
      date: time,
    });
  };
  //!Call Blog
  const BlogFetch = () => {
    const [isLoading, setIsLoading] = useState();
    const [blogList, setBlogList] = useState();

    useEffect(() => {
      setIsLoading(true);
      const database = getDatabase();
      const blogRef = ref(database, "firebaseDatabase");

      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];

        for (let id in data) {
          blogArray.push({ id, ...data[id] });
        }
        setBlogList(blogArray);
        setIsLoading(false);
      });
    }, []);
    return { isLoading, blogList };
  };
  //! Remove Database

  const DeleteBlog = (index) => {
    const db = getDatabase();
    const userRef = ref(db, "firebaseDatabase");
    remove(ref(db, "firebaseDatabase/" + index));
  };

  //! Edit Database
  const EditBlog = (item) => {
    const db = getDatabase();
    const updates = {};

    updates["firebaseDatabase/" + item.index] = item;
    return update(ref(db), updates);
  };

  return (
    <BlogContext.Provider value={{ BlogFetch, AddBlog, DeleteBlog, EditBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
