type = "application/javascript" >
    $(document).ready(function () {
        $("#my-calendar").zabuto_calendar({ language: "lt" });
    });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});