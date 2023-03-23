import * as Styles from "./About.style"

import { Link } from "react-router-dom";

const About = () => {
  return (
    <Styles.About>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Esse projeto consiste em um blog feito com React no Front-end e Firebase
        no back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </Styles.About>
  );
};

export default About;
