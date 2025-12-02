"use client";

import { FaBook, FaChalkboardTeacher, FaLaptop, FaUserGraduate } from 'react-icons/fa';
import styles from './Subjects.module.css';

const Subjects = () => {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      classLevel: "Class 9-12",
      fee: "₹1500/month",
      mode: ["Online", "Offline"],
      description: "Comprehensive coverage of algebra, geometry, and calculus with problem-solving techniques.",
      icon: <FaBook className={styles.subjectIcon} />
    },
    {
      id: 2,
      name: "Physics",
      classLevel: "Class 11-12",
      fee: "₹1800/month",
      mode: ["Online", "Offline"],
      description: "Master concepts of mechanics, electromagnetism, and modern physics with practical examples.",
      icon: <FaBook className={styles.subjectIcon} />
    },
    {
      id: 3,
      name: "Chemistry",
      classLevel: "Class 11-12",
      fee: "₹1700/month",
      mode: ["Online", "Offline"],
      description: "In-depth study of organic, inorganic, and physical chemistry with lab demonstrations.",
      icon: <FaBook className={styles.subjectIcon} />
    },
    {
      id: 4,
      name: "Biology",
      classLevel: "Class 11-12",
      fee: "₹1600/month",
      mode: ["Online", "Offline"],
      description: "Explore botany and zoology with detailed diagrams and interactive learning.",
      icon: <FaBook className={styles.subjectIcon} />
    },
    {
      id: 5,
      name: "Computer Science",
      classLevel: "Class 9-12",
      fee: "₹2000/month",
      mode: ["Online"],
      description: "Learn programming, data structures, and algorithms with hands-on coding practice.",
      icon: <FaLaptop className={styles.subjectIcon} />
    },
    {
      id: 6,
      name: "English",
      classLevel: "Class 1-12",
      fee: "₹1200/month",
      mode: ["Online", "Offline"],
      description: "Enhance your language skills with focus on grammar, literature, and communication.",
      icon: <FaBook className={styles.subjectIcon} />
    }
  ];

  return (
    <section id="subjects" className={styles.subjects}>
      <div className="container">
        <h2 className="sectionTitle">Our Subjects</h2>
        <p className={styles.subtitle}>Choose from a wide range of subjects and learning modes</p>
        
        <div className={styles.subjectGrid}>
          {subjects.map((subject) => (
            <div key={subject.id} className={styles.subjectCard}>
              <div className={styles.subjectHeader}>
                <div className={styles.iconContainer}>
                  {subject.icon}
                </div>
                <h3 className={styles.subjectName}>{subject.name}</h3>
                <span className={styles.classLevel}>{subject.classLevel}</span>
              </div>
              
              <p className={styles.description}>{subject.description}</p>
              
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <FaChalkboardTeacher className={styles.detailIcon} />
                  <span>{subject.mode.join(" / ")}</span>
                </div>
                <div className={styles.detailItem}>
                  <FaUserGraduate className={styles.detailIcon} />
                  <span>{subject.fee}</span>
                </div>
              </div>
              
              <button className={styles.enrollButton}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;