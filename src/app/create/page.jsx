import { addPost, deletePost } from "@/lib/action"
import styles from "./create.module.css";

const Create = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <h2 className={styles.head}>Create Post</h2>
                <form action={addPost} className={styles.form}>
                    <input type="text" placeholder="Title" name="title" className={styles.input} />
                    <textarea type="text" placeholder="Description" name="desc" className={styles.input}></textarea>
                    <input type="text" placeholder="Slug" name="slug" className={styles.input} />
                    <input type="text" placeholder="User ID" name="userId" className={styles.input} />
                    <input type="text" placeholder="Image URL" name="img" className={styles.input} />
                    <button className={styles.button}>Create</button>
                </form>
            </div>

            <div className={styles.formWrapper}>
                <h2 className={styles.head}>Delete Post</h2>
                <form action={deletePost} className={styles.form}>
                    <input type="text" placeholder="Post ID" name="id" className={styles.input} />
                    <button className={styles.button}>Delete</button>
                </form>
            </div>
        </div>
    )
}

export default Create