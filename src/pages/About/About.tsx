import useRouter from "../../lib/react-router/useRouter";
import css from "./About.module.scss";

const About = () => {
  const { push } = useRouter();

  return (
    <div className={css.container}>
      <h2 className={css.title}>About Page</h2>
      <button
        className={css.pageBtn}
        onClick={() => {
          push("/");
        }}
      >
        페이지 이동
      </button>
    </div>
  );
};

export default About;
