import { Message } from './models/Message';
import { MessageCodec } from './services/MessageCodec';

// Example usage
try {
    const message = new Message();
    message.headers.set('Content-Type', 'application/json');
    message.headers.set('Authorization', 'Bearer 1234567890');

    const payloadString = 'hello';
    const payloadBytes = new TextEncoder().encode(payloadString);
    message.payload = payloadBytes;

    // Encode the message
    const codec = new MessageCodec();
    const encodedMessage = codec.encode(message);

    console.log('Encoded message:', encodedMessage);

    // Decode the message
    const decodedMessage = codec.decode(encodedMessage);

    const decodedPayloadString = new TextDecoder().decode(decodedMessage.payload);

    console.log('Decoded message:');
    console.log('Headers:', decodedMessage.headers);
    console.log('Payload:', decodedPayloadString);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);
    }
}
