document.addEventListener("DOMContentLoaded", function () {
    function updateTimeAndDate() {
        const currentTimeUTC = new Date().toUTCString();
        const currentTimeMSK = new Date().toLocaleString("ru-RU", {
            timeZone: "Europe/Moscow"
        });
        const currentDate = new Date().toLocaleDateString("ru-RU");

        document.getElementById("time").innerText = `Now: ${currentTimeUTC} (UTC) / ${currentTimeMSK} (MSK)`;
        document.getElementById("date").innerText = `Date: ${currentDate}`;
    }

    function updateSocialLink() {
        const socialLinks = ["Link 1", "Link 2", "Link 3"]; // Links
        let currentIndex = 0;

        document.getElementById("social-link").innerText = socialLinks[currentIndex];

        setInterval(() => {
            currentIndex = (currentIndex + 1) % socialLinks.length;
            document.getElementById("social-link").innerText = socialLinks[currentIndex];
        }, 5000);
    }

    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000);
    updateSocialLink();
});
