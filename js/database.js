/* Demo-only data layer. Browser storage is NOT suitable for real medical records. */
const DB={key:'swasthya_demo_accounts_v1',session:'swasthya_demo_session_v1',
 read(){try{return JSON.parse(localStorage.getItem(this.key)||'[]')}catch{return []}},
 write(data){localStorage.setItem(this.key,JSON.stringify(data))},
 sessionUser(){try{return JSON.parse(sessionStorage.getItem(this.session)||'null')}catch{return null}},
 setSession(user){sessionStorage.setItem(this.session,JSON.stringify(user))},
 clearSession(){sessionStorage.removeItem(this.session)},
 seed(){let users=this.read();if(!users.length){users=[{id:'demo-patient-01',name:'Aarav Kumar',email:'patient@demo.in',phone:'9000000001',password:'demo123',role:'Patient / Citizen',location:'Kakinada, Andhra Pradesh',createdAt:new Date().toISOString()},{id:'demo-doctor-01',name:'Dr. Meera Rao',email:'doctor@demo.in',phone:'9000000002',password:'demo123',role:'Doctor',location:'Visakhapatnam, Andhra Pradesh',createdAt:new Date().toISOString()}];this.write(users)}},
 register(data){let users=this.read();if(users.some(u=>u.email.toLowerCase()===data.email.toLowerCase()))throw Error('An account with this email already exists.');let user={...data,id:'usr_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString()};users.push(user);this.write(users);return user},
 login(identifier,password){let user=this.read().find(u=>(u.email.toLowerCase()===identifier.toLowerCase()||u.phone===identifier)&&u.password===password);if(!user)throw Error('Account not found or password is incorrect.');return user},
 update(id,patch){let users=this.read(),i=users.findIndex(u=>u.id===id);if(i<0)throw Error('Profile not found');users[i]={...users[i],...patch};this.write(users);return users[i]}
};
DB.seed();
