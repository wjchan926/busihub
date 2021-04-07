import React, { useState, useCallback } from "react";

import { Form } from "semantic-ui-react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import config from "../config/config.json";
import "./SocialContent.css";

const SocialContent = () => {
  const [message, setMessage] = useState("");

  const handleTextAreaChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  return (
    <>
      <div className="SocialContentContainer">
        <div className="SocialContentColumn">
          <Form>
            <Form.TextArea
              label="Tweet Content:"
              placeholder="Type Content to Tweet"
              onChange={handleTextAreaChange}
              value={message}
            />
            <Form.Button
              onClick={() => {
                // Hit AWS Lambda gateway endpoint with the message in the body
                alert(message);
              }}
              primary
              compact
            >
              Tweet
            </Form.Button>
          </Form>
        </div>
        <div className="SocialContentColumn">
          <TwitterTimelineEmbed
            sourceType={config.SOCIAL_CONTENT.SOURCE_TYPE}
            screenName={config.SOCIAL_CONTENT.TWITTER_HANDLE}
            options={{ height: 400 }}
          />
        </div>
      </div>
    </>
  );
};

export { SocialContent };
