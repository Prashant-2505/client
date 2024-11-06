import JobCard from "./components/JobCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container_1}>
        <h1>Find Your Dream Job</h1>
        <p>
          Search thousands of job listings from top companies and start your
          career journey today.
        </p>

        <div className={styles.job_search}>
          <input type="search" placeholder="Job title,keywords or company" />
          <button>Search Job</button>
        </div>
      </div>

      <div className={styles.container_2}>
        <h1>Featured Job Categories</h1>
        <ul className={styles.job_category}>
          <li>
            <p>Logo</p>
            <div>
              <p>Technology</p>
              <p>No. of jobs</p>
            </div>
          </li>

          <li>
            <p>Logo</p>
            <div>
              <p>Technology</p>
              <p>No. of jobs</p>
            </div>
          </li>

          
          <li>
            <p>Logo</p>
            <div>
              <p>Technology</p>
              <p>No. of jobs</p>
            </div>
          </li>

          <li>
            <p>Logo</p>
            <div>
              <p>Technology</p>
              <p>No. of jobs</p>
            </div>
          </li>

          <li>
            <p>Logo</p>
            <div>
              <p>Technology</p>
              <p>No. of jobs</p>
            </div>
          </li>

          <li>
            <p>Logo</p>
            <div>
              <p>Technology</p>
              <p>No. of jobs</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.container_3}>
        <h1>Featured Jobs</h1>
        <ul className={styles.job_data}>
          <li>
            <JobCard/>
          </li>
          <li>
            <JobCard/>
          </li>
          <li>
            <JobCard/>
          </li>
        </ul>
        <button>view more</button>
      </div>
    </div>
  );
}
