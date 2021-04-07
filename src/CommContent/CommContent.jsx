import React from "react";

import { Form, Divider, Input } from "semantic-ui-react";

const CommContent = () => {
  return (
    <>
      <Form>
        <Form.Field>
          <span>
            <label>Slack:</label> <a href="_blank">Slack</a>
          </span>
        </Form.Field>
        <Form.TextArea placeholder="Message in Slack" />
        <Form.Button primary compact>
          Send
        </Form.Button>
      </Form>
      <Divider />
      <Form>
        <Form.Field>
          <span>
            Email: <a href="_blank">Email Address</a>
          </span>
        </Form.Field>
        <Form.Field label="To: " control={Input} placeholder="Email Address" />
        <Form.TextArea placeholder="Email Message" />
        <Form.Button primary compact>
          Send Email
        </Form.Button>
      </Form>
    </>
  );
};

export { CommContent };
