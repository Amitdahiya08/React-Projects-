import ContentGenerator from "../components/ContentGenerator";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-4">
        <ContentGenerator
          title="AI-Powered Blog Generator"
          paragraph="Effortlessly create detailed, engaging, and informative blog posts with our AI-powered generator. Provide your topic or main idea, and let the AI craft a professional blog tailored to your audience."
          placeholderText="Enter your blog topic or idea here..."
          promptText="Generate a complete blog for"
        />
      </div>
    </div>
  );
};

export default Blog;
