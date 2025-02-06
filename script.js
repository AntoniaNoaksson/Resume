document.addEventListener('DOMContentLoaded', function () {
    // Profile Image
    const profileImg = document.getElementById('profile-img');
    profileImg.src = 'img/profilbild.jpg';

    // About Me
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML =
        'I am a driven and ambitious frontend developer at the beginning of my career, and I thrive in both independent and team settings. I am organized, structured, solutions-oriented, and take responsibility for my tasks. I am always seeking new ways to develop myself and look forward to applying my knowledge in practice during an internship period.';

    // Education
    const education = [
        {
            name: 'Frontend Development - IT-Högskolan',
            period: '2024-08-19 - 2026-06-05'
        },
        { name: 'Web Development 1', period: '2024-01-08 - 2024-03-15' },
        { name: 'Programming 1', period: '2023-10-16 - 2023-12-22' }
    ];

    const educationList = document.getElementById('education-list');
    education.forEach((edu) => {
        const li = document.createElement('li');
        li.innerHTML = `${edu.name} - ${edu.period}`;
        educationList.appendChild(li);
    });

    // Skills
    const skills = [
        'Web Development: HTML, CSS, JavaScript, React, Vue.js',
        'UX/UI Design: User-centered design and prototyping',
        'Time Management: Ability to prioritize and complete tasks efficiently and on time',
        'Communication: Both written and verbal communication to explain technical solutions',
        'Creativity and Innovation: Thinking outside the box to create user-friendly solutions',
        'Customer Focus: Ability to create user-centered solutions by understanding the customer’s needs and requirements',
        'Quick Learner: Curiosity and willingness to continuously grow with new technologies and tools'
    ];

    const skillsList = document.getElementById('skills-list');
    skills.forEach((skill) => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Tools
    const tools = [
        'Design Tools: Figma',
        'Code Editor & IDE: VS Code',
        'Version Control: Git, GitHub',
        'Project Management: Trello',
        'Communication: Teams'
    ];

    const toolsList = document.getElementById('tools-list');
    tools.forEach((tool) => {
        const li = document.createElement('li');
        li.textContent = tool;
        toolsList.appendChild(li);
    });

    // Experience
    const experiences = [
        { title: 'Frontend Developer - IT-Högskolan', period: '2024-2026' },
        {
            title: 'Care Assistant, Attendo Vegagatan',
            period: 'September 2022 - October 2023'
        }
    ];

    const experienceList = document.getElementById('experience-list');
    experiences.forEach((exp) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${exp.title}</strong> - ${exp.period}`;
        experienceList.appendChild(li);
    });
});
