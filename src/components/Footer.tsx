import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="bottom-0 p-5 lg:flex md:flex justify-between items-center text-center lg:text-start">
          <p>Mangwahyu © 2023</p>
          <div className="social-icon flex gap-3 justify-center lg:my-0 md:my-0 my-3">
          <a
              href="https://github.com/komenkx1"
              target="_blank"
              className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faGithub}
                width={20}
                height={20}
                color="#121212"
              />
            </a>
            <a
              href="mailto:komangpermana7@gmail.com"
              target="_blank"
              className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                width={20}
                height={20}
                color="#121212"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mang-wahyu/"
              target="_blank"
              className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                width={20}
                height={20}
                color="#121212"
              />
            </a>
            <a
              href="https://www.instagram.com/mangwahyu19/"
              target="_blank"
              className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                width={20}
                height={20}
                color="#121212"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
