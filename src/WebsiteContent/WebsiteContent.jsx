import React, { useCallback, useState } from "react";

import { Form } from "semantic-ui-react";

import config from "../config/config.json";

const WebsiteContent = () => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleTextAreaChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handlePost = async () => {
    await fetch(config.WEBSITE.WEBSITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        title,
        content: message,
      }),
    });
  };

  return (
    <Form>
      <Form.Field>
        <span>
          <label>Website Url: </label>
          <a href="http://www.wchan-labs.com" target="_blank" rel="noreferrer">www.wchan-labs.com</a>
        </span>
      </Form.Field>
      <Form.TextArea
        label="Post Title:"
        placeholder="Title of Post"
        onChange={handleTitleChange}
        value={title}
      />
      <Form.TextArea
        label="Add Website Content"
        placeholder="Content to add to Business Website"
        onChange={handleTextAreaChange}
        value={message}
      />
      <Form.Button primary onClick={handlePost}>
        Post to Website
      </Form.Button>
    </Form>
  );
};

export { WebsiteContent };
