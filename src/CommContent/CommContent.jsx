import React, { useState, useCallback } from "react";

import { Form } from "semantic-ui-react";

import config from "../config/config.json";

const CommContent = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSubjectChange = useCallback((e) => {
    setSubject(e.target.value);
  }, []);

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleToChange = useCallback((e) => {
    setTo(e.target.value);
  }, []);
  const handleFromChange = useCallback((e) => {
    setFrom(e.target.value);
  }, []);
  const handleEmail = async () => {
    await fetch(config.COMM_CONTENT.EMAIL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        text: message,
        subject: subject,
      }),
    });
  };

  return (
    <>
      <Form autoComplete="off">
        <Form.Field>
          <span>
            <strong>Send an Email</strong>
          </span>
        </Form.Field>
        <Form.Input label="From:" onChange={handleFromChange} value={from} />
        <Form.Input label="To:" onChange={handleToChange} value={to} />
        <Form.Input
          label="Subject:"
          placeholder="Email Subject"
          onChange={handleSubjectChange}
          value={subject}
        />
        <Form.TextArea
          label="Message:"
          placeholder="Email Message"
          onChange={handleMessageChange}
          value={message}
        />
        <Form.Button
          primary
          compac
          onClick={handleEmail}
          disabled={
            !Boolean(message) ||
            !Boolean(subject) ||
            !Boolean(to) ||
            !Boolean(from)
          }
        >
          Send Email
        </Form.Button>
      </Form>
    </>
  );
};

export { CommContent };
