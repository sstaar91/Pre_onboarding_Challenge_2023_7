import useRouter from "../../lib/react-router/useRouter";
import css from "./Root.module.scss";

const Root = () => {
  const { push } = useRouter();

  return (
    <div className={css.container}>
      <h2 className={css.title}>Root Page</h2>
      <button
        className={css.pageBtn}
        onClick={() => {
          push("/about");
        }}
      >
        페이지 이동
      </button>
    </div>
  );
};

export default Root;
