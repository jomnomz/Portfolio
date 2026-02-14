import HTMLFlipBook from "react-pageflip";
import { useEffect, useState } from "react";
import styles from './book.module.css'
import qrLogin from '../../../assets/qrLogin.png'
import qrDashBoard from '../../../assets/qrDashBoard.png'
import qrStudents from '../../../assets/qrStudents.png'
import qrAttendance from '../../../assets/qrAttendance.png'
import qrTeachers from '../../../assets/qrTeachers.png'
import scotchTape1 from '../../../assets/scotchTape1.png'
import scotchTape2 from '../../../assets/scotchTape2.png'
import stickyNotes from '../../../assets/stickyNotes.png'
import Carousel from "../carousel/carousel";

const slides = [
  { id: 1, img: qrLogin, title: "Log In Page" },
  { id: 2, img: qrDashBoard, title: "Dashboard Page" },
  { id: 3, img: qrStudents, title: "Students Page" },
  { id: 4, img: qrAttendance, title: "Attendance Page" },
  { id: 5, img: qrTeachers, title: "Teachers Page" },
];

export default function Book() {
  const [bookSize, setBookSize] = useState({
    width: 300,
    height: 430,
    usePortrait: true,
  });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      if (w >= 1400) {
        setBookSize({ width: 430, height: 530, usePortrait: false });
      } else if (w >= 1200) {
        setBookSize({ width: 430, height: 530, usePortrait: false });
      } else if (w >= 992) {
        setBookSize({ width: 430, height: 530, usePortrait: false });
      } else if (w >= 768) {
        setBookSize({ width: 360, height: 520, usePortrait: true });
      } else if (w >= 576) {
        setBookSize({ width: 280, height: 300, usePortrait: true });
      } else {
        setBookSize({ width: 280, height: 430, usePortrait: true });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <HTMLFlipBook
      key={`${bookSize.width}-${bookSize.height}`}
      width={bookSize.width}
      height={bookSize.height}
      usePortrait={bookSize.usePortrait}
      maxShadowOpacity={0.1}
      showCover={true}
      size="fixed"
      disableFlipByClick={true}
    >
      <div className={styles.cover}>
        <div className={styles.coverTitle}>Showcase</div>
      </div>
      <div className={styles.backPage}></div>
      <div className={styles.page}>
        <div className={styles.projectsTitle}>Projects</div>
        <div className={styles.projectsText}>A project I built to solve a real problem</div>
      </div>
      <div className={styles.page}>
        <div className={styles.pageTitle}>QR Code Attendance Tracking System for Highschool Students</div>
        <div className={styles.imgContainer}>
          <img className={styles.scotchTape1} src={scotchTape1} alt="" />
          <img className={styles.scotchTape2} src={scotchTape2} alt="" />
          <img className={styles.scotchTape3} src={scotchTape2} alt="" />
          <img className={styles.scotchTape4} src={scotchTape1} alt="" />
          <Carousel>
            {slides.map((s) => (
              <img className={styles.img} key={s.id} src={s.img} alt={s.title} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.page}>
        <ul>
          <li>Developed a full-stack attendance tracking solution to replace manual paper-based processes, successfully piloted with 38 students over 3 days to validate real-time time-in/time-out functionality</li>
          <li>Built React web application for administrators and teachers to view attendance records and reports, plus a React Native mobile app specifically for scanning QR codes at school entry/exit points.</li>
          <li>Engineered RESTful APIs using Node.js and Express to handle attendance events, generate automated daily/weekly/monthly reports, and manage role-based access control.</li>
          <li>Integrated Supabase for database management and user authentication, ensuring secure data storage and access.</li>
          <li>Implemented automated notifications: email API for sending temporary teacher credentials and SMS API for real-time guardian alerts.</li>
        </ul>
      </div>
      <div className={styles.page}>
        <img className={styles.stickyNotes} src={stickyNotes} alt="stickyNotes" />
        <div className={styles.stickyNotesText}>More projects <br /> on the way...</div>
      </div>
      <div className={styles.backPage}></div>
    </HTMLFlipBook>
  );
}