document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-auth-tab]').forEach(b=>b.addEventListener('click',()=>{authMode=b.dataset.authTab;renderAuth()}));let user=Auth.current();if(user)renderApp(user);else renderAuth()});
if('serviceWorker' in navigator && location.protocol==='https:'){navigator.serviceWorker.register('./sw.js').catch(()=>{});}
