const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "5989135ebc716eafe45c8d72475156b9-us18",
  server: "us18",
});

const run = async () => {
  const response = await client.campaigns.sendTestEmail("a744060ab1", {
    test_emails: ["education24to7@gmail.com"],
    send_type: "plaintext",
  });
  console.log(response);
};

run();
