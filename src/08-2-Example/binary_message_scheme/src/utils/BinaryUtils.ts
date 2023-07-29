export class BinaryUtils {
  /**
   * Converts a string to a Uint8Array of bytes.
   * @param str The string to be converted.
   * @returns Uint8Array representation of the string.
   */
  public static stringToBytes(str: string): Uint8Array {
    const encoder = new TextEncoder();
    return encoder.encode(str);
  }

  /**
   * Converts a Uint8Array of bytes to a string.
   * @param bytes The Uint8Array to be converted.
   * @returns The decoded string.
   */
  public static bytesToString(bytes: Uint8Array): string {
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
  }

  /**
   * Searches for the first occurrence of a sub-array (search) within a larger array (source).
   * @param source The source Uint8Array to search in.
   * @param search The Uint8Array to search for.
   * @returns The index of the first occurrence, or -1 if not found.
   */
  public static indexOf(source: Uint8Array, search: Uint8Array): number {
    let sourceIndex = 0;
    let searchIndex = 0;

    while (sourceIndex < source.length && searchIndex < search.length) {
      if (source[sourceIndex] === search[searchIndex]) {
        sourceIndex++;
        searchIndex++;
      } else {
        sourceIndex -= searchIndex - 1;
        searchIndex = 0;
      }
    }

    if (searchIndex === search.length) {
      return sourceIndex - searchIndex;
    }

    return -1;
  }

  /**
   * Concatenates multiple Uint8Arrays into a single Uint8Array.
   * @param arrays An array of Uint8Arrays to be concatenated.
   * @returns The concatenated Uint8Array.
   */
  public static concatArrays(arrays: Uint8Array[]): Uint8Array {
    const totalLength = arrays.reduce((length, arr) => length + arr.length, 0);
    const result = new Uint8Array(totalLength);

    let offset = 0;

    for (const arr of arrays) {
      result.set(arr, offset);
      offset += arr.length;
    }

    return result;
  }
}
