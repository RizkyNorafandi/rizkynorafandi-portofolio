import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState<string>("");
  const fullText = "<HelloWorld/>";
  const typingSpeed = 100; // ms per character
  const completionDelay = 1000; // ms before calling onComplete

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        const completionTimer = setTimeout(onComplete, completionDelay);

        return () => clearTimeout(completionTimer);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [onComplete, fullText, typingSpeed, completionDelay]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 shadow-[0_0_15px_#3b82f6]"
          style={{
            width: `${(text.length / fullText.length) * 100}%`,
            transition: `width ${typingSpeed}ms linear`,
          }}
        />
      </div>
    </div>
  );
};
