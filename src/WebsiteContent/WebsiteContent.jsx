import React from "react";

import { Form } from "semantic-ui-react";

const WebsiteContent = () => {
  return (
    <Form>
      <Form.Field>
        <span>
          <label>Website Url:</label> <a href="_blank">Input URL here</a>
        </span>
      </Form.Field>
      <Form.TextArea
        label="Add Website Content"
        placeholder="Content to add to Business Website"
      />
      <Form.Button primary>
        Post to Website
      </Form.Button>
    </Form>
  );
};

export { WebsiteContent };
