import React from "react";
import "./index.styl";

const Post = ({ title, date, description, links, iframes }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{description}</p>
    <p>
      {links.map((link, j) => (
        <a key={link.name + j} href={link.url}>
          {link.name}
        </a>
      ))}
    </p>
    {iframes.map((url, i) => (
      <iframe
        key={`iframe-${i}`}
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`${url}`}
      />
    ))}
  </div>
);

export default Post;
