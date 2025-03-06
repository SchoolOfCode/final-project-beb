
import { FC } from "react";
import styles from "./Rules.module.css";

const CommunityRules: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.flockLogo}>FLOCK</h1>
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.textSection}>
          <p style={{ fontFamily: "N-Medium", fontSize: "20px" }}>
            Welcome to the Flock! {`We're`} so glad {`you're`} here.
          </p>
          <br />
          <p>
            {" "}
            Flock is all about connecting with others. To keep our community
            safe and welcoming for everyone, please follow these simple rules:
          </p>
          <br />
          <ul>
            <li>
              Be kind and respectful: everyone here is a real person with
              feelings.
            </li>
            <li>
              Keep it clean and safe: no hate speech, bullying or discrimination
              of any kind.
            </li>
            <li>
              Share your thoughts responsibly: please {`don't`} post anything
              illegal or harmful. Avoid sharing information you {`wouldn't`}{" "}
              want everyone to know
            </li>
            <li>
              Adults only: remember Flock is a community for 18 years +. Please
              keep this in mind when posting and interacting with others.
            </li>
          </ul>
          <br />
          <p
            style={{
              fontFamily: "N-Medium",
              fontSize: "20px",
            }}
          >
            Help us to keep Flock awesome
          </p>
          <br />
          <p>
            {" "}
            If you see something that goes against these guidelines, please let
            us know so we can keep Flock a safe and positive space for everyone.
            We want to keep rules to a minimum, but we may step in to keep
            things friendly.
          </p>
          <br />
          <p>
            Others may find it difficult striking up a conversation. We hope
            that we can help some of you to find your flock in a safe and easy
            way.
          </p>
          <br />
          <p
            style={{
              fontFamily: "N-Medium",
              fontSize: "20px",
            }}
          >
            {`That's`} all!
          </p>
          <br />
          <p>
            Most importantly: relax, be yourself, and have fun connecting with
            your flock
          </p>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h1 className={styles.footerText}>community rules</h1>
      </div>
    </div>
  );
};

export default CommunityRules;

