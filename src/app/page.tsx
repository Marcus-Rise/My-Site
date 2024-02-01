import avatar from "./opengraph-image.jpg";
import type { FC } from "react";
import { Chip } from "@/components/chip";
import { Avatar } from "@/components/avatar";
import { ChipsLimited } from "@/components/chips-limited";
import { content } from "@/content";
import metaConfig from "@/meta-config.cjs";

const Links = content.socialLinks.map(({ alt, icon, href, size }) => (
  <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
    {icon({ height: size, width: size })}
  </a>
));
const Skills = content.skills.map((value) => <Chip key={value}>{value}</Chip>);
const SKILLS_LIMIT = 3;

const text = content.descriptionItems.map((item) => (
  <p key={item} className={"m-0 text-md"}>
    {item}
  </p>
));

const Profile: FC = () => (
  <main className={"flex items-center justify-center min-h-screen w-full"}>
    <div
      className={
        "bg-background flex flex-col items-center justify-center gap-5 py-4 px-6 min-h-screen md:min-h-fit md:h-fit md:rounded-lg md:w-[25rem]"
      }
    >
      <section className={"flex flex-col items-center gap-5"}>
        <Avatar src={avatar} size={150} alt={metaConfig.title} />
        <h1 className={"text-center m-0 text-2xl"}>{metaConfig.title}</h1>
        <p className={"text-center text-sm"}>{content.slogan}</p>
      </section>

      <section className={"flex flex-col items-center gap-5"}>
        {text}
        <div className={"flex justify-center items-center flex-wrap gap-2 overflow-hidden"}>
          <ChipsLimited limit={SKILLS_LIMIT}>{Skills}</ChipsLimited>
        </div>
        <div className={"flex justify-center items-center gap-6"}>{Links}</div>
      </section>
    </div>
  </main>
);

export default Profile;
