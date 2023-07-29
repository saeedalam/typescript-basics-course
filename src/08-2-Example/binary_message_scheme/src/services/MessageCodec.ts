import { Message } from '../models/Message';
import { BinaryUtils } from '../utils/BinaryUtils';

export class MessageCodec {
  private static readonly MAX_HEADER_LENGTH = 1023;
  private static readonly MAX_HEADERS = 63;
  private static readonly MAX_PAYLOAD_SIZE = 256 * 1024; // 256 KiB

  /**
   * Encodes a message  into a binary format.
   * @param message - The message to be encoded.
   * @returns The encoded message as a Uint8Array.
   */
  public encode(message: Message): Uint8Array {
    try {
      this.validateHeaders(message.headers);
      this.validatePayloadSize(message.payload);

      const headerBytes = this.encodeHeaders(message.headers);
      const separator = BinaryUtils.stringToBytes('\n');

      const payload = message.payload;

      const encodedMessage = new Uint8Array(headerBytes.length + separator.length + payload.length);

      encodedMessage.set(headerBytes, 0);
      encodedMessage.set(separator, headerBytes.length);
      encodedMessage.set(payload, headerBytes.length + separator.length);

      return encodedMessage;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to encode message: ${error.message}`);
      } else {
        throw new Error(`Failed to encode message: ${error}`);
      }
    }
  }

  /**
   * Decodes a binary message back into headers and payload.
   * @param data - The binary message to be decoded.
   * @returns The decoded message as a Message object.
   */
  public decode(data: Uint8Array): Message {
    try {
      this.validatePayloadSize(data);
      const separator = BinaryUtils.stringToBytes('\n');

      const separatorIndex = BinaryUtils.indexOf(data, separator);

      const headerBytes = data.slice(0, separatorIndex);
      const payload = data.slice(separatorIndex + separator.length);

      const headers = this.decodeHeaders(headerBytes);

      const message = new Message();
      message.headers = headers;
      message.payload = payload;

      return message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to encode message: ${error.message}`);
      } else {
        throw new Error(`Failed to encode message: ${error}`);
      }
    }
  }

  private validateHeaders(headers: Map<string, string>) {
    if (headers.size > MessageCodec.MAX_HEADERS) {
      throw new Error('Exceeded maximum header count');
    }

    for (const [name, value] of headers.entries()) {
      if (name.length > MessageCodec.MAX_HEADER_LENGTH || value.length > MessageCodec.MAX_HEADER_LENGTH) {
        throw new Error('Header name or value exceeds maximum length');
      }
    }
  }

  private validatePayloadSize(payload: Uint8Array) {
    if (payload.length > MessageCodec.MAX_PAYLOAD_SIZE) {
      throw new Error('Exceeded maximum payload size');
    }
  }

  private encodeHeaders(headers: Map<string, string>): Uint8Array {
    const headerCount = headers.size;
    if (headerCount > MessageCodec.MAX_HEADERS) {
      throw new Error('Exceeded maximum header count');
    }

    const headerBytes: Uint8Array[] = [];

    for (const [key, value] of headers) {
      const nameBytes = BinaryUtils.stringToBytes(key);
      const valueBytes = BinaryUtils.stringToBytes(value);

      if (nameBytes.length > MessageCodec.MAX_HEADER_LENGTH || valueBytes.length > MessageCodec.MAX_HEADER_LENGTH) {
        throw new Error('Header name or value exceeds maximum length');
      }

      const nameLengthBytes = new Uint8Array(2);
      const valueLengthBytes = new Uint8Array(2);

      nameLengthBytes[0] = nameBytes.length >> 8;
      nameLengthBytes[1] = nameBytes.length & 0xff;
      valueLengthBytes[0] = valueBytes.length >> 8;
      valueLengthBytes[1] = valueBytes.length & 0xff;

      headerBytes.push(nameLengthBytes, valueLengthBytes, nameBytes, valueBytes);
    }

    return BinaryUtils.concatArrays(headerBytes);
  }

  private decodeHeaders(headerBytes: Uint8Array): Map<string, string> {
    const headers = new Map<string, string>();

    let currentIndex = 0;

    while (currentIndex < headerBytes.length) {
      const nameLength = (headerBytes[currentIndex] << 8) | headerBytes[currentIndex + 1];
      const valueLength = (headerBytes[currentIndex + 2] << 8) | headerBytes[currentIndex + 3];

      currentIndex += 4;

      const nameBytes = headerBytes.slice(currentIndex, currentIndex + nameLength);
      currentIndex += nameLength;
      const valueBytes = headerBytes.slice(currentIndex, currentIndex + valueLength);
      currentIndex += valueLength;

      const name = BinaryUtils.bytesToString(nameBytes);
      const value = BinaryUtils.bytesToString(valueBytes);

      headers.set(name, value);
    }

    return headers;
  }
}

