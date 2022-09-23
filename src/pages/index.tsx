import avatar from "../../public/img/profile.jpg";
import { socialLinks } from "../social-links.array";
import { skills } from "../skills.array";
import styled from "styled-components";
import { Center, CenterYAlign } from "../components/center";
import { Chip } from "../components/chip";
import { Avatar } from "../components/avatar";
import { Card } from "../components/card";
import { Layout } from "../components/layout";
import { description, keywords, title } from "../seo";
import Head from "next/head";

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Links = socialLinks.map(({ alt, icon, href, size }) => {
  const Icon = icon;

  return (
    <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
      <Icon height={size} width={size} />
    </a>
  );
});

const Skill = styled.span`
  margin: 0.3rem 0.25rem;
`;

const Skills = skills.map((value) => (
  <Skill as={Chip} key={value}>
    {value}
  </Skill>
));

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  line-height: 1.334;
  letter-spacing: 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  transition: color ease ${({ theme }) => theme.transitionDelay};
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
`;

const Profile: NextPageWithLayout = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={"/img/profile.jpg"} />
    </Head>
    <ProfileCard>
      <Center>
        <Avatar src={avatar} size={150} alt={title} />
      </Center>

      <Title>{title}</Title>
      <Description>{description}</Description>

      <Center wrapItems>{Skills}</Center>
      <Center yAlign={CenterYAlign.AROUND}>{Links}</Center>
    </ProfileCard>
  </>
);

Profile.getLayout = (page) => <Layout center>{page}</Layout>;

export default Profile;
