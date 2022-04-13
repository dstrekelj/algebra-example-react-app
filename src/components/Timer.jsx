import { useState, useEffect } from "react";

export function Timer(props) {
  const [time, setTime] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((state) => state + 1);
    }, 1000);

    return () => {
      console.log("interval");
      clearInterval(intervalId);
      setIsStopped(true);
    };
  }, []);

  useEffect(() => {
    console.log("isStopped", isStopped);
    if (isStopped) {
      props.onStop(time);
    }

    return () => {
      console.log("isStopped", isStopped);
      if (isStopped) {
        props.onStop(time);
      }
    };
  }, [isStopped, props, time]);

  return <div>{time} s</div>;
}
