'use strict';
const uuid = require('uuid').v4;
const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueUrl: `https://sqs.us-west-2.amazonaws.com/190574491949/1-800-VendorQueue`,
  region: `us-west-2`,
});


let counter = 0;

setInterval(async () => {

  try {
    const message = {
      orderId: faker.datatype.uuid,
      customer: faker.name.findName(),
      vendorId: 'arn:aws:sqs:us-west-2:190574491949:1-800-VendorQueue',
      topicArn: topic
    };

    // this produces a new "item" (which is the message above)
    // and sends it to our sqs queue
    const response = await producer.send(message);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}, Math.floor(Math.random() * 1000));
