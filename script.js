document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active-tab'));

            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active-tab');
        });
    });
});

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}


(function(){
    emailjs.init("hlR64aNOEccyGFhRz");
  })();
  
  function sendEmail(event) {
    event.preventDefault();
  
    const form = document.getElementById('contactForm');
    const name = form.elements['Name'].value;
    const email = form.elements['Email'].value;
    const message = form.elements['Message'].value;
  
    emailjs.send('service_6wgf2ye', 'template_q75m0ni', {
      from_name: name,
      from_email: email,
      message: message
    }).then((response) => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)  
    form.reset(); 
    }).catch((error) => {
      console.error('Error!', error);
      alert('Failed to send email. Please try again later.');
    });
};


const msg = document.getElementById("msg")
  

