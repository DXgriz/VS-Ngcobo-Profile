


document.addEventListener('DOMContentLoaded', function () {
    
    const skillsData = [
        { name: 'HTML', percentage: 80 },
        { name: 'CSS', percentage: 75 },
        {name: 'Javascript',percentage: 60},
        {name: 'CSS3', percentage: 60},
        {name: 'HTML5', percentage: 95},
        {name: 'Analytical & Problem-Solving', percentage: 80},
        {name: 'Technical & Technical Support', percentage: 80},
        {name: 'Android Mobile Development', percentage: 65},
        {name: 'Web Development', percentage: 97},
        {name: 'RDBMS (SQL Databases) & NoSQL Databases', percentage: 75},
        {name: 'C# .NET', percentage: 80},
        {name: 'J2EE', percentage: 99},
        {name: 'Java Programming', percentage: 100},
        {name: 'Object Oriented Programming', percentage: 100}
       
    ];

   
    function generateSkillsHTML() {
        const skillsSection = document.getElementById('skills');

        skillsData.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill');

            const skillHeading = document.createElement('h3');
            skillHeading.textContent = skill.name;

            const skillBar = document.createElement('div');
            skillBar.classList.add('skill-bar');

            const skillLevel = document.createElement('div');
            skillLevel.classList.add('skill-level');
            skillLevel.style.width = skill.percentage + '%';
            skillLevel.textContent = skill.percentage + '%';

            skillBar.appendChild(skillLevel);
            skillDiv.appendChild(skillHeading);
            skillDiv.appendChild(skillBar);

            skillsSection.appendChild(skillDiv);
        });
    }


    generateSkillsHTML();
});
