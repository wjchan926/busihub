import React from "react";

import { Form } from "semantic-ui-react";

const SocialContent = () => {
  return (
    <Form>
      <Form.Field>
        <span>
          <label>Twitter:</label> <a href="_blank">Input Twitter handle here</a>
        </span>
      </Form.Field>
      <Form.TextArea
        label="Tweet Content:"
        placeholder="Type Content to Tweet"
      />
      <Form.Button primary compact tiny>
        Tweet
      </Form.Button>
    </Form>
  );
};

export { SocialContent };
