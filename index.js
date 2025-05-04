const firstName = "Keitumetse";
const lastName = "Mokwena";
const bio = `I am Keitumetse Mokwena, a South African hailing from Hammanskraal. I am a trailblazing young teacher with a passion for both education and technology. My journey is one of determination, curiosity, and a desire to make a difference. As a math and NSTech educator, I realized the immense potential technology holds for transforming education. I believe that every student deserves access to quality learning experiences, regardless of their background. Venturing into Tech, driven by my curiosity and a desire to empower my students, I decided to venture into the tech world. I saw firsthand how technology could enhance learning, engage students, and open doors to new opportunities. With unwavering determination, I embarked on a path to bridge the gap between education and technology.`;
const phoneNumbers = ["0784123755", "0662633231"];
const socialLinks = {
  facebook: "https://www.facebook.com/keitumetse.keitumokwena",
  linkedin: "https://www.linkedin.com/in/keitumetse-mokwena-5b75aa156",
};


document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".bio h1");
  const bioElement = document.querySelector(".bio p");
  const phoneElement = document.querySelector("footer p");
  const facebookLink = document.querySelector(".fa-facebook");
  const linkedinLink = document.querySelector(".fa-linkedin");

  nameElement.textContent = `${firstName} ${lastName}`;
  bioElement.textContent = bio;
  phoneElement.textContent = `Phone: ${phoneNumbers.join(" / ")}`;
  facebookLink.href = socialLinks.facebook;
  linkedinLink.href = socialLinks.linkedin;
});

const degrees = [
  { degree: "Bachelor of Education", institution: "Unisa", graduationYear: 2024 },
  { degree: "National Diploma in Management Assistant", institution: "Tswane North TVET College", graduationYear: 2019 },
  { degree: "Matric", institution: "Kgaphamadi High School", graduationYear: 2012 },
];

const projects = [
  "Women Techsters Cohort 2.5 Software Development (Group 4)",
  "Africa Agility Clear-Climate",
];

const workingExperience = [
  "Peer Tutor for Computer Practice: Tshwane North Tvet College, 2020 June to November",
  "Personal Assistant: Tshwane North Tvet College, 2017 to 2019",
  "Till Packer: Shoprite, 2014 June to January 2015",
];

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".bio h1").textContent = `${firstName} ${lastName}`;
  document.querySelector(".bio ul li:nth-child(2)").textContent = `Email: ${email}`;
  document.querySelector(".bio ul li:nth-child(3)").textContent = `Phone: ${phoneNumbers.join(" / ")}`;
  document.querySelector(".bio ul li:nth-child(4)").textContent = `Location: ${location}`;

  const educationList = document.querySelector(".bio h3:contains('Educational Background') + ul");
  degrees.forEach((degree) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${degree.degree} from ${degree.institution}, ${degree.graduationYear}`;
    educationList.appendChild(listItem);
  });

  const projectsList = document.querySelector(".bio h3:contains('Projects') + ul");
  projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project;
    projectsList.appendChild(listItem);
  });

  const experienceList = document.querySelector(".bio h3:contains('Working Experience') + ul");
  workingExperience.forEach((experience) => {
    const listItem = document.createElement("li");
    listItem.textContent = experience;
    experienceList.appendChild(listItem);
  });
});

function handleFormSubmit(event) {
  event.preventDefault()
  // console.log(event);

  // console.log(document);
  const emailInput = document.getElementById("email")
  const messageInput = document.getElementById("message")

  // console.log(emailInput);
  const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid
  console.log(isEmailValid);
  let isMessageValid = messageInput.value.trim() !== '';
  console.log({ isMessageValid });

  const isFormValid = isEmailValid && isMessageValid

  if (isFormValid) {
    // grab our data from the form
    const formData = new FormData(event.target);
    console.log(formData);
  
    fetch('https://formspree.io/f/xpzvkoyp', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful form submission
      console.log('Form submitted successfully!', data);
    })
    .catch(error => {
      // Handle error
      console.error('There was an error submitting the form:', error);
    });
  }
}