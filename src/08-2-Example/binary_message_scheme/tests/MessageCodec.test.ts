
import { MessageCodec } from '../src/services/MessageCodec';
import { Message } from '../src/models/Message';

describe('MessageCodec', () => {
  let codec: MessageCodec;

  beforeEach(() => {
    codec = new MessageCodec();
  });

  it('encode and decode a message with headers and payload', () => {
    const message = new Message();
    message.headers.set('Content-Type', 'application/json');
    message.headers.set('Authorization', 'Bearer 1234567890');
    message.payload = new TextEncoder().encode('hello');

    const encodedMessage = codec.encode(message);
    const decodedMessage = codec.decode(encodedMessage);

    expect(decodedMessage.headers.get('Content-Type')).toBe('application/json');
    expect(decodedMessage.headers.get('Authorization')).toBe('Bearer 1234567890');
    expect(decodedMessage.payload).toEqual(message.payload);
  });

  test('encode and decode a message with no headers and an empty payload', () => {
    const message = new Message();
    message.payload = new Uint8Array();

    const encodedMessage = codec.encode(message);
    const decodedMessage = codec.decode(encodedMessage);

    expect(decodedMessage.headers.size).toBe(0);
    expect(decodedMessage.payload).toEqual(message.payload);
  });

});
