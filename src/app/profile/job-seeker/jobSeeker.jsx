"use client";
import React, { useState } from "react";
import styles from "../../app/styles/jobSeekerProfile.module.css";
import { BriefcaseBusiness, Github, Linkedin } from "lucide-react";
import Tab from "@/components/Tab";
import { motion } from "framer-motion";

const JobSeeker = () => {
  // State to hold user details
  const [name, setName] = useState("User name");
  const [experience, setExperience] = useState("User experience");
  const [email, setEmail] = useState("user@email.com");
  const [phone, setPhone] = useState("12312312");
  const [location, setLocation] = useState("Location");
  const [dob, setDob] = useState("DOB");
  const [editMode, setEditMode] = useState(false);

  const [curIndex, setCurIndex] = useState(1);

  const skills = [
    { skill: "skill1", index: 1 },
    { skill: "skill2", index: 2 },
    { skill: "skill3", index: 3 },
  ];

  const educations = [
    {
      degree: "bachelors of technology",
      institution: "university1",
      duration: "2021-2022",
      index: 1,
    },
    {
      degree: "bachelors of technology",
      institution: "university2",
      duration: "2021-2022",
      index: 2,
    },
  ];

  // Update the current tab index when a tab is clicked
  const handleChange = (index) => {
    setCurIndex(index);
  };

  return (
    <>
      <div>
        <div className={styles.header}></div>

        <div className={styles.body}>
          <div className={styles.profile}>
            <div className={styles.profile_name}>
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                  />
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Enter experience"
                  />
                </>
              ) : (
                <>
                  <h1>{name || "Name not provided"}</h1>
                  <p>{experience || "Experience not provided"}</p>
                </>
              )}
            </div>
            <button className={styles.resume}>Resume</button>
          </div>

          <div className={styles.social}>
            <ul className={styles.social_contact}>
              <li>
                {editMode ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                ) : (
                  email || "Email not provided"
                )}
              </li>
              <li>
                {editMode ? (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone"
                  />
                ) : (
                  phone || "Phone not provided"
                )}
              </li>
              <li>
                {editMode ? (
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                  />
                ) : (
                  location || "Location not provided"
                )}
              </li>
              <li>
                {editMode ? (
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="Enter DOB"
                  />
                ) : (
                  dob || "DOB not provided"
                )}
              </li>
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

          {/* tab */}
          <div>
            <Tab currentTab={curIndex} onchange={handleChange}>
              <Tab.headContainer>
                <Tab.item label={"Skills"} index={1} />
                <Tab.item label={"Education"} index={2} />
                <Tab.item label={"Experience"} index={3} />
              </Tab.headContainer>

              <Tab.contentContainer className={styles.skill_section}>
                <Tab.containerItem index={1}>
                  <ul className={styles.tab_skill_item}>
                    {skills.map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ y: `${index * -40}%`, opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {skill.skill}
                      </motion.li>
                    ))}
                  </ul>
                </Tab.containerItem>
                <Tab.containerItem index={2}>
                  <ul className={styles.tab_education_item}>
                    {educations.map((education, index) => (
                      <motion.li
                        key={index}
                        initial={{ y: `${index * -40}%`, opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <div>
                          <h2>{education.degree}</h2>
                          <p>
                            <span>{education.institution}</span> |
                            <span> {education.duration}</span>
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </Tab.containerItem>
                <Tab.containerItem index={3}>
                  <h1>I am content 3</h1>
                </Tab.containerItem>
              </Tab.contentContainer>
            </Tab>
          </div>
        </div>
      </div>

      {/* profile img */}
      <div className={styles.profile_img}></div>

      {/* Edit button to toggle edit mode */}
      <button
        onClick={() => setEditMode(!editMode)}
        className={styles.editButton}
      >
        {editMode ? "Save" : "Edit"}
      </button>
    </>
  );
};

export default JobSeeker;
