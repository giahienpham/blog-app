import { Button } from "flowbite-react";
import resume from "../assets/resume.pdf";
import avatar from "../assets/avatar.jpg";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row  border border-teal-500 justify-center items-start rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 flex flex-col justify-center relative md:mx-8 mx-2 md:ml-8 ml-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:mt-8 mt-6">
          About me
        </h2>
        <p className="dark:text-gray-300 lg:text-[18px] text-[16px] lg:mt-8 md:mt-6 mt-4 my-2 md:ml-4 text-justify">
          Hi, I’m Hien Pham, a Fullstack Developer and a junior at Worcester
          Polytechnic Institute majoring in Computer Science and Bioinformatics,
          expected to graduate in May 2026. With solid experience in front-end
          and back-end development, I’ve built a strong foundation in creating
          dynamic, user-focused applications using technologies like Python,
          Java, React, Kubernetes, and AWS. I’m also experienced in integrating
          CI/CD pipelines into the software development lifecycle, improving
          deployment efficiency and overall project workflow.
        </p>
        <p className="dark:text-gray-300 lg:text-[18px] text-[16px] md:my-4 my-2 md:ml-4 text-justify">
          I’m passionate about building innovative software solutions and
          applying my skills to solve real-world problems. My background in
          computer science equips me with the technical expertise necessary for
          software engineering roles, while my studies in biotechnology give me
          a unique perspective in tackling interdisciplinary challenges,
          particularly in AI and healthcare technology. I’m actively seeking a
          summer 2024 internship where I can contribute to impactful projects
          and continue growing in software engineering and bioinformatics.
        </p>
        <p className="dark:text-gray-300 lg:text-[18px] text-[16px] md:ml-4 md:my-4 my-2">
          Please kindly contact me through:
          <br />- Working Email:{" "}
          <a className="text-blue-500" href="mailto:hpham@wpi.edu">
            hpham@wpi.edu
          </a>
          <br />- Personal Email:{" "}
          <a className="text-blue-500" href="mailto:giahien14604@gmail.com">
            giahien14604@gmail.com
          </a>
        </p>
        <div className="flex flex-col items-center md:mx-4 mx-2">
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none lg:w-4/5 w-full "
          >
            <a
              href="https://www.linkedin.com/in/hienpham04/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout my LinkedIn!
            </a>
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none mt-3 lg:w-4/5 w-full my-4"
          >
            <a href={resume} download="Hien_Pham_Resume.pdf">
              Or download my resume!
            </a>
          </Button>
        </div>
      </div>
      <div className="p-5 my-auto flex-1 flex justify-center items-center">
        <img src={avatar} className="md:w-4/6 md:h-4/6 " />
      </div>
    </div>
  );
}
