import * as styles from "./Post.css";

export const Post = () => {
  return (
    <article className={styles.PostCard}>
      <img src="https://picsum.photos/600" alt="" className={styles.PostCardImage} />
      <div className={styles.PostCardBody}>
        <h3 className={styles.PostCardTitle}>long established</h3>
        <p className={styles.PostCardText}>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that....
        </p>
      </div>
    </article>
  );
};
