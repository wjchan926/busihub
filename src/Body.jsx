import React from "react";

import WebsiteContent from "./WebsiteContent";
import SocialContent from "./SocialContent";
import CommContent from "./CommContent";
// import AccountingContent from "./AccountingContent";

import { Tab } from "semantic-ui-react";

import "./App.css";

const Body = () => {
  const panes = [
    {
      menuItem: "Website",
      render: () => (
        <Tab.Pane>
          <WebsiteContent />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Social Media",
      render: () => (
        <Tab.Pane>
          <SocialContent />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Communication",
      render: () => (
        <Tab.Pane>
          <CommContent />
        </Tab.Pane>
      ),
    },
    // {
    //   menuItem: "Accounting",
    //   render: () => (
    //     <Tab.Pane>
    //       <AccountingContent />
    //     </Tab.Pane>
    //   ),
    // },
  ];

  return (
    <div className="Body-Content">
      <Tab
        menu={{ fluid: true, vertical: true }}
        grid={{ paneWidth: 12, tabWidth: 3 }}
        panes={panes}
      />
    </div>
  );
};

export default Body;
