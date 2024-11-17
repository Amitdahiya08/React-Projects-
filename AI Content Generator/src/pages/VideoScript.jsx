import ContentGenerator from "../components/ContentGenerator";
import Navbar from "../components/Navbar";

const VideoScript = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-4">
        <ContentGenerator
          title="Video Script Generator"
          paragraph="Craft compelling and professional video scripts with ease. Provide your video idea or topic, and let the AI generate engaging scripts tailored to your audience and purpose."
          placeholderText="Enter your video idea or topic here..."
          promptText="Generate a complete video script for"
        />
      </div>
    </div>
  );
};

export default VideoScript;
