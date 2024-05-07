"use client";

const ResumeButton = () => {
  const handleDownload = () => {
    const filePath = "/resume.pdf";
    const downloadLink = document.createElement("a");

    downloadLink.href = filePath;
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="p-1  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full sm:w-fit w-full bg-transparent  text-[#121212] "
    >
      <span className="block bg-[#121212] hover:slate-800 rounded-full px-6 py-3 text-white">
        Download Cv
      </span>
    </button>
  );
};

export default ResumeButton;
