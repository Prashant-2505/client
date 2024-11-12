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

  const [skills, setSkills] = useState([
    { skill: "skill1", index: 1 },
    { skill: "skill2", index: 2 },
    { skill: "skill3", index: 3 },
  ]);

  const [educations, setEducations] = useState([
    { degree: "Bachelors of Technology", institution: "University1", duration: "2021-2022", index: 1 },
    { degree: "Masters of Science", institution: "University2", duration: "2022-2024", index: 2 },
  ]);

  const [experiences, setExperiences] = useState([
    { company: "Google", role: "SDE", roleDescription: "Worked on full-stack development", duration: "2021-2022", index: 1 },
    { company: "Amazon", role: "SDE2", roleDescription: "Led the backend team", duration: "2022-2024", index: 2 },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Project1",
      description: "A full-stack web app for task management",
      technology: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/project1",
      liveLink: "https://liveproject1.com",
      index: 1,
    },
    {
      name: "Project2",
      description: "A real-time chat application",
      technology: ["React", "Socket.IO", "Node.js"],
      githubLink: "https://github.com/project2",
      liveLink: "https://liveproject2.com",
      index: 2,
    },
  ]);

  const handleChange = (index) => setCurIndex(index);

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
            <div>
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

            <p>
              As a skilled full-stack developer, I am turning ideas into
              innovative web applications. Explore my latest projects,
              showcasing my expertise in React.js, Next.js, and web development.
            </p>
          </div>

          {/* tab */}
          <div>
            <Tab currentTab={curIndex} onchange={handleChange}>
              <Tab.headContainer>
                <Tab.item label={"Skills"} index={1} />
                <Tab.item label={"Education"} index={2} />
                <Tab.item label={"Experience"} index={3} />
                <Tab.item label={"Projects"} index={4} />
              </Tab.headContainer>

              <Tab.contentContainer className={styles.skill_section}>
                {/* skills */}
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
                        {editMode ? (
                          <input
                            type="text"
                            value={skill.skill}
                            onChange={(e) =>
                              setSkills(
                                skills.map((s) =>
                                  s.index === skill.index
                                    ? { ...s, skill: e.target.value }
                                    : s
                                )
                              )
                            }
                          />
                        ) : (
                          skill.skill
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </Tab.containerItem>
                {/* education */}
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
                          {editMode ? (
                            <>
                              <input
                                type="text"
                                value={education.degree}
                                onChange={(e) =>
                                  setEducations(
                                    educations.map((edu) =>
                                      edu.index === education.index
                                        ? { ...edu, degree: e.target.value }
                                        : edu
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={education.institution}
                                onChange={(e) =>
                                  setEducations(
                                    educations.map((edu) =>
                                      edu.index === education.index
                                        ? { ...edu, institution: e.target.value }
                                        : edu
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={education.duration}
                                onChange={(e) =>
                                  setEducations(
                                    educations.map((edu) =>
                                      edu.index === education.index
                                        ? { ...edu, duration: e.target.value }
                                        : edu
                                    )
                                  )
                                }
                              />
                            </>
                          ) : (
                            <>
                              <h2>{education.degree}</h2>
                              <p>
                                <span>{education.institution}</span> |
                                <span> {education.duration}</span>
                              </p>
                            </>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </Tab.containerItem>
                {/* experience */}
                <Tab.containerItem index={3}>
                  <ul className={styles.tab_education_item}>
                    {experiences.map((experience, index) => (
                      <motion.li
                        key={index}
                        initial={{ y: `${index * -40}%`, opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <div>
                          {editMode ? (
                            <>
                              <input
                                type="text"
                                value={experience.company}
                                onChange={(e) =>
                                  setExperiences(
                                    experiences.map((exp) =>
                                      exp.index === experience.index
                                        ? { ...exp, company: e.target.value }
                                        : exp
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={experience.role}
                                onChange={(e) =>
                                  setExperiences(
                                    experiences.map((exp) =>
                                      exp.index === experience.index
                                        ? { ...exp, role: e.target.value }
                                        : exp
                                    )
                                  )
                                }
                              />
                              <textarea
                                value={experience.roleDescription}
                                onChange={(e) =>
                                  setExperiences(
                                    experiences.map((exp) =>
                                      exp.index === experience.index
                                        ? { ...exp, roleDescription: e.target.value }
                                        : exp
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={experience.duration}
                                onChange={(e) =>
                                  setExperiences(
                                    experiences.map((exp) =>
                                      exp.index === experience.index
                                        ? { ...exp, duration: e.target.value }
                                        : exp
                                    )
                                  )
                                }
                              />
                            </>
                          ) : (
                            <>
                              <h2>{experience.company}</h2>
                              <p>
                                <span>{experience.role}</span> |{" "}
                                <span>{experience.duration}</span>
                              </p>
                              <p>{experience.roleDescription}</p>
                            </>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </Tab.containerItem>
                {/* projects */}
                <Tab.containerItem index={4}>
                  <ul className={styles.tab_education_item}>
                    {projects.map((project, index) => (
                      <motion.li
                        key={index}
                        initial={{ y: `${index * -40}%`, opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <div>
                          {editMode ? (
                            <>
                              <input
                                type="text"
                                value={project.name}
                                onChange={(e) =>
                                  setProjects(
                                    projects.map((p) =>
                                      p.index === project.index
                                        ? { ...p, name: e.target.value }
                                        : p
                                    )
                                  )
                                }
                              />
                              <textarea
                                value={project.description}
                                onChange={(e) =>
                                  setProjects(
                                    projects.map((p) =>
                                      p.index === project.index
                                        ? { ...p, description: e.target.value }
                                        : p
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={project.githubLink}
                                onChange={(e) =>
                                  setProjects(
                                    projects.map((p) =>
                                      p.index === project.index
                                        ? { ...p, githubLink: e.target.value }
                                        : p
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={project.liveLink}
                                onChange={(e) =>
                                  setProjects(
                                    projects.map((p) =>
                                      p.index === project.index
                                        ? { ...p, liveLink: e.target.value }
                                        : p
                                    )
                                  )
                                }
                              />
                              <input
                                type="text"
                                value={project.technology.join(", ")}
                                onChange={(e) =>
                                  setProjects(
                                    projects.map((p) =>
                                      p.index === project.index
                                        ? {
                                            ...p,
                                            technology: e.target.value
                                              .split(",")
                                              .map((tech) => tech.trim()),
                                          }
                                        : p
                                    )
                                  )
                                }
                                placeholder="Enter technologies"
                              />
                            </>
                          ) : (
                            <>
                              <h2>{project.name}</h2>
                              <p>{project.description}</p>
                              <p>
                                <a href={project.githubLink}>GitHub</a> |{" "}
                                <a href={project.liveLink}>Live</a>
                              </p>
                              <p>
                                Technologies:{" "}
                                {project.technology.join(", ")}
                              </p>
                            </>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </Tab.containerItem>
              </Tab.contentContainer>
            </Tab>
          </div>
        </div>
      </div>
      <button onClick={()=>setEditMode(!editMode)}>{editMode ? "save" : "Edit"}</button>
    </>
  );
};

export default JobSeeker;
