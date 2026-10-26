

import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('CyberSakhi backend is running!')
})



app.post('/chat', (req, res) => {
  const message = String(req.body.message || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const has = (...words) =>
    words.some(word => message.includes(word))

  let reply = ''

  // Greeting
  if (
    /^(hi|hello|hey|salam|assalam|aoa)\b/.test(message)
  ) {
    reply =
      'Assalam-o-alaikum! 💜 Main CyberSakhi hoon. Aap picture sharing, blackmail, bullying ya kisi aur online safety problem ke bare mein pooch sakti hain.'
  }

  // Blackmail aur paisay mangna
  else if (
    has(
      'blackmail', 'blackmailing', 'blacmail',
      'dhamki', 'paisy do', 'paise do',
      'paisa do', 'money do', 'paysy do',
      'paisy', 'paise mang', 'black mail'
    )
  ) {
    reply =
      '💜 Mujhe afsos hai ke aap is situation se guzar rahi hain. Aapki ghalti nahi ke koi aapko dhamka raha hai.\n\n' +
      '1. Paise na bhejein aur mazeed private photos na bhejein.\n' +
      '2. Chat, account link aur dhamki ke screenshots evidence ke liye mehfooz rakhein. Unhein aage share na karein.\n' +
      '3. Kisi trusted adult ya bharosemand shakhs ko batayein.\n' +
      '4. Account ko platform par report karein aur safe ho to block karein.\n' +
      '5. Pakistan mein cybercrime complaint ke liye official NCCIA portal check karein: https://complaint.nccia.gov.pk/\n\n' +
      'Kya woh shakhs abhi aapse paise maang raha hai ya photo share karne ki dhamki de raha hai?'
  }

  // Picture ya photo upload/share ho chuki hai
  else if (
    has(
      'picture', 'pic', 'photo', 'pitcher',
      'pick', 'tasveer', 'tasvir', 'image'
    ) &&
    has(
      'upload', 'share', 'post', 'leak',
      'viral', 'internet', 'online',
      'lag gai', 'lag gayi', 'ho gai',
      'ho gayi', 'kar di', 'kar di ha',
      'kar di hai', 'chali gai', 'chali gayi'
    )
  ) {
    reply =
      '💜 Pareshan na hon, hum step by step dekhtay hain ke aap kya kar sakti hain.\n\n' +
      '1. Jis app ya website par photo hai, us post aur account ko report karein aur removal request dein.\n' +
      '2. Post ka link, username aur relevant messages evidence ke liye save karein. Photo ko dobara forward na karein.\n' +
      '3. Kisi trusted adult ko batayein taake woh aapki help kar sake.\n' +
      '4. Agar koi photo ke zariye blackmail kar raha hai, paise na bhejein aur mazeed photos na bhejein.\n' +
      '5. Pakistan mein official cybercrime complaint portal check karein: https://complaint.nccia.gov.pk/\n\n' +
      'Aap mujhe bata sakti hain: photo social media par upload hui hai, ya koi aapko upload karne ki dhamki de raha hai?'
  }

  // Advice ya madad mangna
  else if (
    has(
      'advice', 'mashwara', 'kya karu',
      'kia karu', 'kya karun', 'kia karun',
      'help me', 'madad chahiye',
      'meri help', 'mujhe help', 'muja help',
      'batao kya', 'batao ab', 'ab kya'
    )
  ) {
    reply =
      '💜 Main aapki help karne ke liye yahan hoon. Aap apna masla bata sakti hain.\n\n' +
      'Kya aapki photo online share hui hai, koi aapko blackmail kar raha hai, ya aapko online bullying ka samna hai? Main usi ke mutabiq steps bataungi.'
  }

  // Online bullying
  else if (
    has(
      'bullying', 'bully', 'harass',
      'harassment', 'tang kar', 'tang karta',
      'tang karti', 'gali', 'abuse',
      'online tang', 'mazaq urata'
    )
  ) {
    reply =
      '💜 Online bullying ka samna karna mushkil ho sakta hai, lekin aapko akelay handle karne ki zaroorat nahi.\n\n' +
      '1. Messages aur account ka evidence save karein.\n' +
      '2. Platform par report karein aur zaroorat par block karein.\n' +
      '3. Kisi trusted adult ya bharosemand shakhs se baat karein.\n' +
      '4. Apni privacy settings check karein.\n\n' +
      'Kya bullying messages ke zariye ho rahi hai ya koi aapki photo share kar raha hai?'
  }

  // Account hacking
  else if (
    has(
      'hack', 'hacked', 'account chori',
      'password chori', 'login nahi',
      'account access'
    )
  ) {
    reply =
      'Apne account ki official recovery use karein. Safe device se password change karein, two-factor authentication on karein aur unknown sessions se logout karein. OTP ya password kisi ko na dein.'
  }

  // OTP aur scams
  else if (
    has(
      'otp', 'verification code', 'phishing',
      'fraud', 'scam', 'fake link'
    )
  ) {
    reply =
      'Apna OTP, password ya verification code kisi ko na dein. Suspicious links se bachein. Agar details share kar chuki hain, to official app ya website se password change karein aur account security check karein.'
  }

  // Fake account
  else if (
    has(
      'fake account', 'fake profile',
      'nakli account', 'meri id bana',
      'impersonation'
    )
  ) {
    reply =
      'Fake account ka profile link aur relevant screenshots save karein. Platform par fake account ya impersonation ke option se report karein. Kisi trusted adult ko bhi batayein.'
  }

  // Stalking
  else if (
    has(
      'stalk', 'stalking', 'location track',
      'follow me', 'location pata'
    )
  ) {
    reply =
      'Apni live location sharing aur privacy settings check karein. Evidence save karein, trusted adult ko batayein aur agar aapko foran khatra ho to safe jagah par ja kar local emergency help lein.'
  }

  // Complaint
  else if (
    has('complaint', 'complain', 'report', 'nccia')
  ) {
    reply =
      'Relevant messages, account link aur screenshots save karein. Platform par report karein. Pakistan mein cybercrime complaint ke liye official NCCIA portal check karein: https://complaint.nccia.gov.pk/'
  }

  // Thanks
  else if (
    has('thank', 'thanks', 'shukriya')
  ) {
    reply =
      'Aapka welcome! 💜 Agar aapko kisi online safety issue mein help chahiye, to apna masla bata sakti hain.'
  }

  

  res.json({ reply })
})
  


app.listen(PORT, () => {
  console.log('CyberSakhi backend running at http://localhost:' + PORT)
})


