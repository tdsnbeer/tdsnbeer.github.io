const q=document.getElementById('q'),items=[...document.querySelectorAll('.posts li')];
if(q)q.addEventListener('input',()=>{const w=q.value.toLowerCase().split(/\s+/).filter(Boolean);
items.forEach(li=>{const t=li.dataset.k;li.hidden=!w.every(x=>t.includes(x))})});
