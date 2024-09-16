"use strict";
window.addEventListener('load', () => {
    let name = localStorage.getItem('nameform');
    let email = localStorage.getItem('emailform');
    let phone = localStorage.getItem('phoneform');
    let dob = localStorage.getItem('dobform');
    let pob = localStorage.getItem('pobform');
    let nationality = localStorage.getItem('nationalityform');
    let religion = localStorage.getItem('religionform');
    let detailsedu1 = localStorage.getItem('detailseduform1');
    let citydetails = localStorage.getItem('cityform');
    let detailsedu2 = localStorage.getItem('detailseduform2');
    let detailsedu3 = localStorage.getItem('detailseduform3');
    let detailsexp1 = localStorage.getItem('detailsexpform1');
    let detailsexp2 = localStorage.getItem('detailsexpform2');
    let detailsexp3 = localStorage.getItem('detailsexpform3');
    let address = localStorage.getItem('addressform');
    let detailskill1 = localStorage.getItem('detailskillform1');
    let detailskill2 = localStorage.getItem('detailskillform2');
    let detailskill3 = localStorage.getItem('detailskillform3');
    let gender = localStorage.getItem('genderform');
    let profilepic = localStorage.getItem('profileform');
    document.getElementById('nameform').textContent = name;
    document.getElementById('emailform').textContent = email;
    document.getElementById('phoneform').textContent = phone;
    document.getElementById('dobform').textContent = dob;
    document.getElementById('pobform').textContent = pob;
    document.getElementById('cityform').textContent = citydetails;
    document.getElementById('nationalityform').textContent = nationality;
    document.getElementById('religionform').textContent = religion;
    //document.getElementById('educationform')!.textContent = education;
    //document.getElementById('skillform')!.textContent = skill;
    //document.getElementById('experienceform')!.textContent = experience;
    document.getElementById('detailseduform1').textContent = detailsedu1;
    document.getElementById('detailseduform2').textContent = detailsedu2;
    document.getElementById('detailseduform3').textContent = detailsedu3;
    document.getElementById('detailsexpform1').textContent = detailsexp1;
    document.getElementById('detailsexpform2').textContent = detailsexp2;
    document.getElementById('detailsexpform3').textContent = detailsexp3;
    document.getElementById('detailskillform1').textContent = detailskill1;
    document.getElementById('detailskillform2').textContent = detailskill2;
    document.getElementById('detailskillform3').textContent = detailskill3;
    document.getElementById('addressform').textContent = address;
    document.getElementById('genderform').textContent = gender;
    if (profilepic) {
        document.getElementById('profilepicpreview').src = profilepic;
    }
    const username = name ? name.toLowerCase().replace(/\s+/g, '') : 'user';
    const baseUrl = 'https://resume-builder-zartashimran.vercel.app';
    const uniqueResumeUrl = `${baseUrl}/ ${username}`;
    //set resume link in the  Dom
    const resumeLink = document.getElementById('resumeLink');
    resumeLink.setAttribute('href', uniqueResumeUrl);
    resumeLink.textContent = uniqueResumeUrl;
    //copy link 
    document.getElementById('copyLinkBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
            alert('Resume link copied to clipboard');
        });
    });
});
document.getElementById('editBtn').addEventListener('click', () => {
    window.history.back();
});
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});
