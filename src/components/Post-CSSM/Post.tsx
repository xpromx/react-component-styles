import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.root}>
      <img src="https://picsum.photos/600" alt="" className={styles.root__image} />
      <div className={styles.root__body}>
        <h3 className={styles.root__title}>long established</h3>
        <p className={styles.root__description}>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that....
        </p>
      </div>
    </article>
  );
};
