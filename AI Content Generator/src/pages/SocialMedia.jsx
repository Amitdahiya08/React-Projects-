import ContentGenerator from "../components/ContentGenerator";
import Navbar from "../components/Navbar";

const SocialMedia = () => {
  return (
    <>
      <Navbar />
      <ContentGenerator
        title="Social Media Content Generator"
        paragraph="Create engaging and impactful social media posts effortlessly with our AI-powered generator. Provide your key message or topic, and let the AI craft compelling captions, hashtags, and content ideas tailored to your platform and audience."
        placeholderText="Enter your topic or key message here..."
        promptText="Give a complete Social Media Content Script for"
      />
    </>
  );
};

export default SocialMedia;
