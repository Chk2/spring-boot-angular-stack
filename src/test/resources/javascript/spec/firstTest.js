describe('A test', function () {
    var subject = null;

    describe('when true', function () {
        beforeEach(function() {
            subject = true;
        });

        it('is expected to be true', function () {
            expect(subject).toBe(true);
        });
    });

    describe('when false', function () {
        beforeEach(function() {
            subject = false;
        });

        it('is expected to be false', function () {
            expect(subject).toBe(false);
        });
    });
});