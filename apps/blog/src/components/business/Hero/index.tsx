import GitHubIcon from "../../abstract/icons/GitHubIcon";
import LinkedInIcon from "../../abstract/icons/LinkedInIcon";
import TwitchIcon from "../../abstract/icons/TwitchIcon";

const Hero = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="grow flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Bienvenido! Soy Metalit0
        </h1>
        <p className="text-base text-zinc-400">
          Este es mi humilde blog, donde escribo sobre desarrollo de software
        </p>
        <div className="flex gap-5">
          <a
            className="text-zinc-400 hover:text-zinc-300 transition p-1"
            aria-label="Follow on GitHub"
            title="Follow on GitHub"
            href="https://github.com/JavierBalonga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-300 transition p-1"
            aria-label="Follow on LinkedIn"
            title="Follow on LinkedIn"
            href="https://www.linkedin.com/in/javier-balonga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-300 transition p-1"
            aria-label="Follow on Twitch"
            title="Follow on Twitch"
            href="https://www.twitch.tv/metalit0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitchIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
