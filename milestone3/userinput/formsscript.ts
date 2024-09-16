
const forms = document.getElementById('form') as HTMLFormElement;
const generateresume= document.getElementById('btn');
forms.addEventListener('submit', (e)=>{
    e.preventDefault();


const names= document.getElementById('name') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const dob = document.getElementById('dob') as HTMLInputElement;
const pob = document.getElementById('pob') as HTMLInputElement;
const nationality = document.getElementById('nationality') as HTMLInputElement;
const religion = document.getElementById('religion') as HTMLInputElement;
const gender= document.getElementById('gender') as HTMLSelectElement;
const detailsedu1 = document.getElementById('education1') as HTMLTextAreaElement;
const detailsedu2= document.getElementById('education2') as HTMLTextAreaElement;
const detailsedu3 = document.getElementById('education3') as HTMLTextAreaElement;
const detailskill1 = document.getElementById('skills1') as HTMLTextAreaElement;
const detailskill2 = document.getElementById('skills2') as HTMLTextAreaElement;
const detailskill3 = document.getElementById('skills3') as HTMLTextAreaElement;
const detailsexp1 = document.getElementById('experience1') as HTMLTextAreaElement;
const detailsexp2 = document.getElementById('experience2') as HTMLTextAreaElement;
const detailsexp3 = document.getElementById('experience3') as HTMLTextAreaElement;
const citydetails = document.getElementById('city') as HTMLInputElement;
const address = document.getElementById('address') as HTMLInputElement;
//const experience = document.getElementById('experience') as HTMLTextAreaElement;
const profilepic= document.getElementById('profilepic') as HTMLInputElement;



window.open('../dynamicresume/dynamic.html');

localStorage.setItem('nameform', names.value);
localStorage.setItem('emailform', email.value);
localStorage.setItem('phonefrom', phone.value);
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
localStorage.setItem('cityform' , citydetails.value) ;


if(profilepic.files && profilepic.files[0]){
 const reader = new FileReader();
 reader.onload = function(){
const base64Image = reader.result as string;

localStorage.setItem('profileform', base64Image);
window.location.href = '../dynamicresume/dynamic.html';
};

reader.readAsDataURL(profilepic.files[0]);
 }

 else{
    window.location.href = '../dynamicresume/dynamic.html';
 }
console.log(localStorage.getItem('profileform'));

 })