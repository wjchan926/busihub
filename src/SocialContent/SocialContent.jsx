import React, { useState, useCallback } from "react";

import { Form } from "semantic-ui-react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import short from "short-uuid";

import "./SocialContent.css";

const SocialContent = () => {
  const [message, setMessage] = useState("");
  const [timelineKey, setTimelineKey] = useState(short.generate());

  const handleTextAreaChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleTweet = async () => {
    await fetch(process.env.REACT_APP_TWITTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "x-api-key": process.env.REACT_APP_TWITTER_API_KEY,
      },
      mode: "no-cors",
      body: JSON.stringify({
        statusMessage: message,
      }),
    });

    setTimelineKey(short.generate());
    setMessage("");
  };

  return (
    <>
      <div className="SocialContentContainer">
        <div className="SocialContentColumn">
          <Form autoComplete="off">
            <Form.TextArea
              label="Tweet Content:"
              placeholder="Type Content to Tweet"
              onChange={handleTextAreaChange}
              value={message}
            />
            <Form.Button
              onClick={handleTweet}
              primary
              compact
              disabled={!Boolean(message)}
            >
              Tweet
            </Form.Button>
          </Form>
        </div>
        <div className="SocialContentColumn">
          <TwitterTimelineEmbed
            key={timelineKey}
            sourceType={process.env.REACT_APP_SOURCE_TYPE}
            screenName={process.env.REACT_APP_TWITTER_HANDLE}
            options={{ height: 400 }}
          />
        </div>
      </div>
    </>
  );
};

export { SocialContent };
