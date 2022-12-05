import "./AuthorChip.css";
interface SocialLink {
  link: string;
}

const LinkedinLink = ({ link }: SocialLink) => {
  return (
    <a href={link}>
      <img
        className="social-link"
        src="/social/linkedin.png"
        alt="LinkedIn Logo"
      ></img>
    </a>
  );
};

const GithubLink = ({ link }: SocialLink) => {
  return (
    <a href={link}>
      <img
        className="social-link"
        src="/social/github.png"
        alt="LinkedIn Logo"
      ></img>
    </a>
  );
};

interface AuthorChipProps {
  name: string;
  bio: string;
  picture: string;
  linkedin?: string;
  github?: string;
}
export const AuthorChip = ({
  name,
  bio,
  picture,
  linkedin,
  github,
}: AuthorChipProps) => {
  return (
    <section className="author">
      <img
        src={picture}
        alt={`Picture of ${name}`}
        title={name}
        className="profile-picture"
      ></img>
      <div className="info">
        <h4>{name}</h4>
        <p>{bio}</p>
        <div id="links">
          {linkedin !== undefined ? <LinkedinLink link={linkedin} /> : null}
          {github !== undefined ? <GithubLink link={github} /> : null}
        </div>
      </div>
    </section>
  );
};
