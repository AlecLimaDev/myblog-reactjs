import * as Styles from "./About.style"

import { Link } from "react-router-dom";

const About = () => {
  return (
    <Styles.About>
      <h2>
        Sobre o <span>Blog</span>
      </h2>
      <p>
        Esse foi feito com React no Front-end e Firebase
        no back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </Styles.About>
  );
};

export default About;
