import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
       <h1>Find Your Dream Job</h1>
       <p>Search thousands of job listings from top companies and start your career journey today.</p>

      <div className={styles.job_search}>
      <input type="search" placeholder="Job title,keywords or company" />
      <button>Search Jon</button>
      </div>
    </div>
  );
}
