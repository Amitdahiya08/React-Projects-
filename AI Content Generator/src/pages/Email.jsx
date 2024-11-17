import ContentGenerator from "../components/ContentGenerator";
import Navbar from "../components/Navbar";

const Email = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-4">
        <ContentGenerator
          title="AI-Powered Email Generator"
          paragraph="Compose professional, impactful emails effortlessly. Provide your email purpose or key points, and let the AI craft a polished email tailored to your recipient and intent."
          placeholderText="Enter the purpose or key points of the email..."
          promptText="Generate a professional email for"
        />
      </div>
    </div>
  );
};

export default Email;
