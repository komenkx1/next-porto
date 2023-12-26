import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="bottom-0 p-5 flex justify-between items-center">
          <p>Mangwahyu © 2023</p>
          <div className="social-icon flex gap-3">
            <div className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center">
                <FontAwesomeIcon icon={faLinkedin} width={20} height={20} color='#121212' />
            </div>
            <div className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center">
                <FontAwesomeIcon icon={faInstagram} width={20} height={20} color='#121212' />
            </div>
            <div className="icon rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20} color='#121212' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
