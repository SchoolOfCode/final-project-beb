import { FC } from "react";
import styles from "./AboutUs.module.css";
// import Image from "next/image";
// This component serves as the About us for the route (/about-us).

const AboutUs: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.flockLogo}>FLOCK</h1>
      </div>
      <div className={styles.centerContainer}>
        <section className={styles.textSection}>
          <p style={{ fontFamily: "N-Medium" }}>
            The idea for Flock was inspired by the fact that millions of people
            in the UK are significantly affected by loneliness.
          </p>
          <br />
          <p>
            Many organisations are already doing amazing work to help address
            this complex issue.
          </p>
          <br />
          <p style={{ fontFamily: "N-Medium" }}>
            We know we {`can't`} solve it with this community. But we wanted to
            create a space that:
          </p>
          <br />
          <p>
            -Connects you to others through shared interests
            <br />
            -Is safe and welcoming
            <br />
            -Guides you in starting conversations with others
            <br />
            -Supports you to attend events and meet-ups in the real world (if
            {` that's`} what you want to do)
            <br />
          </p>

          <div>
            <br />
            <p style={{ fontFamily: "N-Regular" }}>
              Sometimes{` it's`} difficult to reach out
            </p>
            <br />
            <p>
              There are numerous reasons why people feel isolated and lonely.
              Some of us feel happy to chat but maybe {`haven't`} found the
              right place to meet. Others may find it difficult striking up a
              conversation.
              <br />
              <br />
              The team- We hope that we can help some of you to find your flock
              in a safe and easy way.
            </p>
          </div>
        </section>
        <div className={styles.textSection}>
          <p>
            Six coding bootcampers came together with a single mission to use
            tech for good. We felt passionate about using our skills to develop
            a service that could help a real-world problem.
          </p>
          <p>
            <br />
            <span style={{ fontFamily: "N-Medium" }}>The team - </span>Oliver
            Hopwood,Sarah Hunt,{`Christopher O'Conner`}, Zsolt Peter, Hope
            Pichur, Caitlin Young
          </p>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h1 className={styles.footerText}>about us</h1>
      </div>
    </div>
  );
};

export default AboutUs;
