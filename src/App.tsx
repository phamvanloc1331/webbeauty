import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesSingle from "./pages/ServicesSingle";
import Team from "./pages/Team";
import TeamSingle from "./pages/TeamSingle";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/pagessingle":
        title = "";
        metaDescription = "";
        break;
      case "/team":
        title = "";
        metaDescription = "";
        break;
      case "/teamsingle":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/blogsingle":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pagessingle" element={<ServicesSingle />} />
      <Route path="/team" element={<Team />} />
      <Route path="/teamsingle" element={<TeamSingle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogsingle" element={<BlogSingle />} />
    </Routes>
  );
}
export default App;
