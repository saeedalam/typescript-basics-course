const {Event, getTagLine, createEvent} = require("../../js/events/event");

test("Test tag line returns sold out when no tickets left", () => {
    const event = new Event(1, "Best of 90s Punk!", 40.00, 100, 0);
    const tagLine = getTagLine(event, 10, true);

    expect(tagLine).toBe("Event Sold Out!");
});