import React from "react";

import { Form, Input } from "semantic-ui-react";

const AccountingContent = () => {
  return (
    <Form>
      <Form.Field>
        <span>
          <label>QuickBooks:</label>
        </span>
      </Form.Field>
      <Form.Field label="Transaction: " control={Input} placeholder="Amount" />
      <Form.Button primary>
        Create Transaction
      </Form.Button>
    </Form>
  );
};

export { AccountingContent };
