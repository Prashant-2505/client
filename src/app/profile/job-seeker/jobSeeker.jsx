import React from "react";
import styles from "../../app/styles/jobSeekerProfile.module.css";
import { BriefcaseBusiness, Github, Linkedin } from "lucide-react";

const jobSeeker = () => {
  return (
    <>
      <div>
        <div className={styles.header}>
            
        </div>

        <div className={styles.body}>
          <div className={styles.profile}>
            <div className={styles.profile_name}>
              <h1>User name</h1>
              <p>User experience</p>
            </div>
            <button className={styles.resume}>Resume</button>
          </div>

          <div className={styles.social}>
            <ul className={styles.social_contact}>
              <li>user@email</li>
              <li>12312312</li>
              <li>Location</li>
              <li>DOB</li>
            </ul>

            <ul className={styles.social_links}>
              <li>
                <Github />
              </li>
              <li>
                <Linkedin />
              </li>
              <li>
                <BriefcaseBusiness />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* profile img */}
      <div className={styles.profile_img}></div>
    </>
  );
};

export default jobSeeker;
