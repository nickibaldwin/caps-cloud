'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: `https://sqs.us-west-2.amazonaws.com/190574491949/1-800-VendorQueue`,
  handleMessage: async (message) => {
    console.log(message.Body);
  }
});

app.start();