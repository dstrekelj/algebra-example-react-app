import { useEffect, useState } from "react";
import { RandomQuote as Component } from "../components/RandomQuote";

export function RandomQuote(props) {
  const [state, setState] = useState({
    quote: "Lorem ipsum",
    author: "Domagoj",
  });

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((json) =>
        setState({
          quote: json.value,
          author: "Anonymous",
        }),
      )
      .catch((error) => console.error(error));
  }, []);

  return <Component quote={state.quote} author={state.author} />;
}
