export interface PageMetadata {
  name: string;
  path: string;
  description?: string;
  ogImg?: string;
  twitterImg?: string;
}

export const DEFAULT_METADATA = {
  name: "",
  description: "Native zkEVM Layer 2 for Ethereum",
  ogImg: "/images/level-up-metadata.png",
};

const routes: PageMetadata[] = [
  {
    name: "Native zkEVM Layer 2 for Ethereum",
    path: "/",
  },
  // TODO: Revive this route when we have challenges
  // {
  //   name: "Challenges",
  //   path: "/challenges",
  // },
  // {
  //   name: "Challenge Detail",
  //   path: "/challenges/:Id",
  // },
  {
    name: "Solidity",
    path: "/solidity",
  },
  {
    name: "Solidity Challenges",
    path: "/solidity/:Slug",
  },
  {
    name: "Hackathon",
    path: "/hackathon",
  },
  {
    name: "Content",
    path: "/content",
  },
  {
    name: "Content",
    path: "/content/:Slug",
  },
  {
    name: "Podcast",
    path: "/podcast",
  },
  {
    name: "Grants",
    path: "/grants",
  },
  {
    name: "Learn More",
    path: "/learn-more",
  },
];

export default routes;
