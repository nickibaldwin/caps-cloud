'use strict';

const AWS = require('aws-sdk');
const faker = require('faker');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:190574491949:pickup.fifo';

// const payload = {
//   Message: 'Delivered',
//   TopicArn: topic,
// };


setInterval(async () => {
  
  try {
    const message = {
      orderId: faker.datatype.uuid(),
      customer: faker.name.findName(),
      vendorId: `arn:aws:sqs:us-west-2:190574491949:1-800-VendorQueue`,
      TopicArn: topic
    };
    
    // sns is a instance from the AWS SNS module
    // and it gives us the ability to publish a message
    // with details from up above (payload)
    const response = await sns.publish(message);
    console.log(message);
  } catch (e) {
    console.error(e);
  }
});