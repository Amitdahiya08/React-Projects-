import "../App.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => (
  <>
    <Navbar />
    <div className="flex items-center justify-center flex-col min-h-[30vh] ">
      <h2 className="text-4xl font-[500] text-center">
        A Free <span className="text-purple-600">AI Powered</span> Content Generator
        APP
      </h2>
      <p className="text-center text-lg mt-4 max-w-2xl">
        Our AI Video Generator app transforms your ideas into captivating scripts and visuals. 
        Whether you need promotional content, educational videos, or creative storytelling, 
        our cutting-edge AI ensures your videos are engaging, professional, and tailored to your audience.
      </p>
    </div>
    <div className="flex justify-center flex-row min-h-[30vh] ">
      <Card
        heading="Social Media Content Generator"
        details="Generate unique and engaging content using state-of-the-art AI models with just a few clicks!"
        imageUrl={"src/images/social-media-content-generator.webp"}
        route="/social-media-generator"
      />
      <Card
        heading="Video Script Generator"
        details="Generate unique and engaging content using state-of-the-art AI models with just a few clicks!"
        imageUrl={"src/images/video-script-generator.webp"}
        route="/video-script-generator"
      />
      <Card
        heading="Blog Content Generation"
        details="Generate unique and engaging content using state-of-the-art AI models with just a few clicks!"
        imageUrl={"src/images/blog-generation.webp"}
        route="/blog-generator"
      />
      <Card
        heading="Email Generator"
        details="Generate unique and engaging content using state-of-the-art AI models with just a few clicks!"
        imageUrl={"src/images/email-generaotr.webp"}
        route="/email-generator"
      />
    </div>
  </>
);

export default Home;
