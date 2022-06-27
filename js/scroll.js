const sr=ScrollReveal();
sr.reveal('.hero .banner-text', {
    duration: 2000,
    origin:'bottom',
    distance:'80px'
});
sr.reveal('.hero .banner-img', {
    delay: 500,
    duration: 2000
});
sr.reveal('.hero .contact', {
    duration: 2000,
    origin:'left',
    distance:'30px'
});

sr.reveal('.service .heading', {
    duration: 2000,
    origin:'bottom',
    distance:'80px'
});
sr.reveal('.service .card:nth-child(1)', {
    delay: 500,
    duration: 2000,
    origin:'left',
    distance:'80px'
});
sr.reveal('.service .card:nth-child(2)', {
    duration: 2000
});
sr.reveal('.service .card:nth-child(3)', {
    delay: 500,
    duration: 2000,
    origin:'right',
    distance:'80px'
});

sr.reveal('.work .heading', {
    duration: 2000,
    origin:'bottom',
    distance:'80px'
});
sr.reveal('.work .project:nth-child(odd)', {
    duration: 2000,
    origin:'top',
    distance:'80px'
});
sr.reveal('.work .project:nth-child(even)', {
    duration: 2000,
    origin:'bottom',
    distance:'80px'
});
sr.reveal('.work .see-more', {
    delay: 700,
    duration: 2000,
    origin:'right',
    distance:'80px'
});

sr.reveal('.team .team-info', {
    duration: 2000,
    origin:'left',
    distance:'80px'
});
sr.reveal('.team .team-members', {
    duration: 2000,
    origin:'right',
    distance:'80px'
});

sr.reveal('.clients blockquote', {
    duration: 2000,
    origin:'left',
    distance:'80px'
});
sr.reveal('.clients .quote-author', {
    delay: 100,
    duration: 2000,
    origin:'top',
    distance:'80px'
});