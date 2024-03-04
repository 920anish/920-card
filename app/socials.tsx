import { FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Social() {
  return (
    <section className="social-icons flex flex-row gap-5 text-2xl sm:text-3xl p-4 sm:p-7 ">
      <a href="https://github.com/920anish" target="_blank" rel="noopener noreferrer"  className="hover:scale-125 transition duration-300 ease-in-out"><FaGithub /></a>
      <a href="https://instagram.com/920anish920" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300 ease-in-out"><FaInstagram /></a>
      <a href="https://twitter.com/anish920920" target="_blank" rel="noopener noreferrer"className="hover:scale-125 transition duration-300 ease-in-out"><FaXTwitter /></a>
      <a href="https://linkedin.com/in/920anish920" target="_blank" rel="noopener noreferrer"className="hover:scale-125 transition duration-300 ease-in-out"><FaLinkedin /></a>
    </section>
  );
}
