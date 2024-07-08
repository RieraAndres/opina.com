import styles from "./OldCard.module.css";

function OldCard({ Survey }) {
    const { title, imgUrl, description, responseCount } = Survey;

    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className={styles.card}>
            <img src={imgUrl} className={styles.image}></img>
            <div className={styles.content}>
                <span className={styles.title}>
                    {title}
                </span>
                <p className={styles.desc}>{truncateDescription(description, 151)}</p>
                <p>{responseCount} personas dejaron su firma</p>
            </div>
        </div>
    );
}

export default OldCard;
