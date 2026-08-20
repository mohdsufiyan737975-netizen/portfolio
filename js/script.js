document.getElementById("contactform").addEventListener("submit", function(e) {

    // Form ko normally submit hone se rokna
    e.preventDefault();


    // User ki information lena

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;


    // Email ka message banana

    const body =
`Hello Sufiyan,

Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${name}`;


    // Email address
    // YAHAN APNA ACTUAL EMAIL LIKHNA

    const mailto =
        `mailto:mohdsufiyan737975@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;


    // Email application open karna

    window.location.href = mailto;

});