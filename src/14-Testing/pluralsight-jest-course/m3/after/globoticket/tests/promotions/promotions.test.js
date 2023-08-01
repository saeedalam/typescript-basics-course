const promotions = require("../../js/promotions/promotions");

describe("generateReferralCode", () => {
    test("Referral code contains userId", () => {
        const userId = '1234';
        const referralCode = promotions.generateReferralCode(userId);

        expect(referralCode).toContain(userId);
        expect(referralCode).toMatch(userId);
    });

    test("Referral code has correct format", () => {
        const userId = '1234';
        const referralCode = promotions.generateReferralCode(userId);

        expect(referralCode).toMatch(/#FRIEND-#\d+-#1234/);
    });
});