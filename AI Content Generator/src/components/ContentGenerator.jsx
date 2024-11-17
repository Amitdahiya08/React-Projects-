import { useState } from "react";
import Markdown from "react-markdown";

const ContentGenerator = ({ title, paragraph, placeholderText, promptText }) => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [prompt, setPrompt] = useState("");
  const [res, setRes] = useState("");
  const [loader, setLoader] = useState(false);

  const generateRes = async () => {
    if (prompt === "") {
      alert("Please enter your topic");
      document.getElementById("prompt").focus();
    } else {
      setLoader(true);
      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(`${promptText} ${prompt}`);
        setRes(result.response.text());
        setPrompt(""); 
      } catch (error) {
        console.error("Error generating content:", error);
        alert("An error occurred while generating content.");
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-6">
      <h2 className="text-[60px] font-[500] text-center mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        {paragraph}
      </p>
      <div className="w-full max-w-md flex flex-col items-center">
        <textarea
          id="prompt"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          className="min-w-[50vw] min-h-[130px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none mb-4"
          placeholder={placeholderText}
        ></textarea>
        <button
          onClick={generateRes}
          className="bg-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Generate Content
        </button>
      </div>
      {loader && (
        <div className="flex items-center justify-center mt-8">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent border-dashed rounded-full animate-spin"></div>
          <p className="text-lg text-purple-600 mt-4">Generating content...</p>
        </div>
      )}
      {res && (
        <div className="res px-[100px] my-[20px] py-[20px] bg-gray-100 rounded-lg shadow-lg">
          <Markdown className="prose lg:prose-xl">{res}</Markdown>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
