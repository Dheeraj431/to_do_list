function getdate() {
        var today = new Date();

        var options = {
                weekday: "long",
                day: "numeric",
                month: "long"
        };

        var day = today.toLocaleDateString("en-US", options);
        return day;
}

module.exports = getdate;
