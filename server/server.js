import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('CyberSakhi backend is running!')
})

app.post('/chat', (req, res) => {
  const message = String(req.body.message || '').toLowerCase().trim()
  let reply = ''

  if (message.includes('blackmail') || message.includes('dhamki') || message.includes('extort')) {
    reply = 'Agar koi aapko blackmail kar raha hai, messages aur screenshots save karein. Kisi trusted adult ko batayein aur https://complaint.nccia.gov.pk/ par complaint karne par ghour karein.'
  } else if (message.includes('photo') || message.includes('picture') || message.includes('private') || message.includes('tasveer')) {
    reply = 'Private photo ki dhamki ko serious lein. Evidence save karein, photo forward na karein, trusted adult ko batayein aur platform par report karein.'
  } else if (message.includes('fake account') || message.includes('fake profile') || message.includes('nakli')) {
    reply = 'Fake account ka link aur screenshots save karein aur social media platform par report karein.'
  } else if (message.includes('bullying') || message.includes('harass') || message.includes('abuse') || message.includes('tang')) {
    reply = 'Harassment ke messages save karein, account report ya block karein agar safe ho, aur trusted adult se help lein.'
  } else if (message.includes('hello') || message.includes('hi') || message.includes('salam')) {
    reply = 'Assalam-o-alaikum! Main CyberSakhi hoon. Aap apna online safety ka masla bata sakte hain.'
  } else {
    reply = 'Mujhe aapka masla samajhne ke liye thori aur detail chahiye. Kya masla blackmail, private photo, fake account, ya online bullying se related hai?'
  }

  res.json({ reply })
})

app.listen(PORT, () => {
  console.log('CyberSakhi backend running at http://localhost:' + PORT)
})
