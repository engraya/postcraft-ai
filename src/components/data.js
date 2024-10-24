import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits of PostCraft AI",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Saves Time",
      desc: "Cut down hours spent brainstorming and drafting social media posts. PostCraft AI generates professional content in seconds, freeing up time for other priorities.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boosts Engagement",
      desc: "Create highly engaging, platform-specific content that resonates with your audience, increasing likes, comments, and shares.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Improves Consistency",
      desc: "Maintain a consistent posting schedule effortlessly with content always ready to go, improving your online presence and follower engagement.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Features of PostCraft AI",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "AI-Powered Content Generation",
      desc: "Generate high-quality, engaging content in seconds using advanced AI algorithms tailored to your brand’s voice and audience preferences.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Platform-Specific Content",
      desc: "Customize content for major platforms like Instagram, Facebook, Twitter, LinkedIn, and more, ensuring the right tone and style for each channel.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Customizable Output",
      desc: "Adjust the generated content's tone, length, and keywords to perfectly match your brand’s personality and messaging.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
