const {InvalidEventNameError} = require("../../js/error-handling/exceptions");
const {Event, getTagLine, createEvent} = require("../../js/events/event");

/* TAG LINE TEST */

test("Test tag line returns sold out when no tickets left", () => {
    const event = new Event(1, "Best of 90s Punk!", 40.00, 100, 0);
    const tagLine = getTagLine(event, 10, true);

    expect(tagLine).toBe("Event Sold Out!");
});

describe("createEvent", () => {
    test("Throws error when name is not a string", () => {

        expect(() => createEvent(1, 25.00, 200)).toThrow(new InvalidEventNameError("Event name cannot exceed 200 characters"));

    });

    test("Throws error when name exceeds limit", () => {
        const name = "longEventName".repeat(20).substring(0,201);

        expect(() => createEvent(name, 25.00, 200)).toThrow(new InvalidEventNameError("Event name cannot exceed 200 characters"));

    });
});