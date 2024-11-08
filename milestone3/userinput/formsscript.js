"use strict";
const forms = document.getElementById('form');
const generateresume = document.getElementById('btn');
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const names = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const dob = document.getElementById('dob');
    const pob = document.getElementById('pob');
    const nationality = document.getElementById('nationality');
    const religion = document.getElementById('religion');
    const gender = document.getElementById('gender');
    const detailsedu1 = document.getElementById('education1');
    const detailsedu2 = document.getElementById('education2');
    const detailsedu3 = document.getElementById('education3');
    const detailskill1 = document.getElementById('skills1');
    const detailskill2 = document.getElementById('skills2');
    const detailskill3 = document.getElementById('skills3');
    const detailsexp1 = document.getElementById('experience1');
    const detailsexp2 = document.getElementById('experience2');
    const detailsexp3 = document.getElementById('experience3');
    const citydetails = document.getElementById('city');
    const address = document.getElementById('address');
    const profilepic = document.getElementById('profilepic');
    window.open('../dynamicresume/dynamic.html');
    localStorage.setItem('nameform', names.value);
    localStorage.setItem('emailform', email.value);
    localStorage.setItem('phoneform', phone.value);
    localStorage.setItem('detailseduform1', detailsedu1.value);
    localStorage.setItem('detailseduform2', detailsedu2.value);
    localStorage.setItem('detailseduform3', detailsedu3.value);
    localStorage.setItem('religionform', religion.value);
    localStorage.setItem('nationalityform', nationality.value);
    localStorage.setItem('dobform', dob.value);
    localStorage.setItem('pobform', pob.value);
    localStorage.setItem('genderform', gender.value);
    localStorage.setItem('detailsexpform1', detailsexp1.value);
    localStorage.setItem('detailsexpform2', detailsexp2.value);
    localStorage.setItem('detailsexpform3', detailsexp3.value);
    localStorage.setItem('detailskillform1', detailskill1.value);
    localStorage.setItem('detailskillform2', detailskill2.value);
    localStorage.setItem('detailskillform3', detailskill3.value);
    localStorage.setItem('addressform', address.value);
    localStorage.setItem('cityform', citydetails.value);
    if (profilepic.files && profilepic.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64Image = reader.result;
            localStorage.setItem('profileform', base64Image);
            window.location.href = '../dynamicresume/dynamic.html';
        };
        reader.readAsDataURL(profilepic.files[0]);
    }
    else {
        window.location.href = '../dynamicresume/dynamic.html';
    }
    console.log(localStorage.getItem('profileform'));
});
