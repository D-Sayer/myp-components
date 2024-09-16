import React from "react";
import * as ProgressBar from "@radix-ui/react-progress";
import "./styles.css";

const Progress = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressBar.Root className="ProgressRoot" value={progress}>
      <ProgressBar.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressBar.Root>
  );
};

export { Progress };
