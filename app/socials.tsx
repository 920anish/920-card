import { FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Social() {
  return (
    <section className="social-icons flex flex-row gap-4 text-3xl sm:text-4xl p-4 sm:p-7 ">
      <a href="https://github.com/920anish" target="_blank" rel="noopener noreferrer"  className="hover:s"><FaGithub /></a>
      <a href="https://instagram.com/920anish920" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com/anish920920" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      <a href="https://linkedin.com/in/920anish920" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </section>
  );
}
