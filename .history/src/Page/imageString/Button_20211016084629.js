import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.css";

const slides = [
  { id: 0, url: "photo-1551989137-334bd6577da3?ixlib=rb-1.2.1&w=3450&q=80" },
  {
    id: 1,
    url: "photo-1501560379-05951a742668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80",
  },
  { id: 2, url: "photo-1551989137-b8ad7595d020?ixlib=rb-1.2.1&w=3300&q=80" },
  {
    id: 3,
    url: "photo-1503058474900-cb76710f9cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80",
  },
];

const Button = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
      }}
    />
  ));
};

render(<App />, document.getElementById("root"));
