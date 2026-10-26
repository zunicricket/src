import { useState } from 'react'
import './App.css'

const categories = [
  {
    id: 'blackmail',
    title: 'Threats or Blackmail',
    icon: '⚠️',
    description: 'Someone is threatening or blackmailing you online.',
    steps: [
      'Do not send money, more photos or personal information.',
      'Keep relevant messages and account details if it is safe.',
      'Report the account on the platform where the threats happened.',
      'Use the official NCCIA portal below to make a cybercrime complaint.'
    ]
  },
  {
    id: 'photos',
    title: 'Private Photo Threats',
    icon: '🔒',
    description: 'Someone is threatening to share your private photos.',
    steps: [
      'Do not blame yourself. You deserve support and safety.',
      'Do not send more photos or money because of threats.',
      'Keep evidence of the threat if it is safe. Do not forward private images.',
      'Report the account to the relevant platform and contact the official complaint portal below.'
    ]
  },
  {
    id: 'fake',
    title: 'Fake Account or Impersonation',
    icon: '👤',
    description: 'Someone is pretending to be you or using your identity.',
    steps: [
      'Save the account username and profile link if safe.',
      'Report the fake account through the platform’s impersonation option.',
      'Tell a trusted person if you need help.',
      'If there is harassment or another cybercrime, use the official NCCIA portal below.'
    ]
  },
  {
    id: 'bullying',
    title: 'Online Bullying or Abuse',
    icon: '💬',
    description: 'Someone is sending abusive messages or harassing you online.',
    steps: [
      'Avoid replying if it could make the situation worse.',
      'Save relevant messages if it is safe to do so.',
      'Block or report the account when you feel ready.',
      'For serious or repeated harassment, consider submitting a complaint through the official portal below.'
    ]
  },
  {
    id: 'other',
    title: 'Other Online Harassment',
    icon: '🛡️',
    description: 'Your situation does not match the categories above.',
    steps: [
      'Think about what happened and which platform was involved.',
      'Keep relevant evidence safely if you can.',
      'Do not share passwords, CNIC details or private material with strangers.',
      'Read the official complaint instructions and ask a trusted person for help if needed.'
    ]
  }
]

const platformGuides = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: '💬',
    steps: [
      'Open the chat with the person you want to report.',
      'Tap the contact name or open the chat menu.',
      'Choose Report and follow the instructions.',
      'If it is safe, you may also block the contact.'
    ],
    url: 'https://faq.whatsapp.com/',
    button: 'WhatsApp Help Center'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: '🎵',
    steps: [
      'Open the profile of the account you want to report.',
      'Tap Share or the options menu.',
      'Choose Report and select the relevant reason.',
      'Follow the instructions to submit your report.'
    ],
    url: 'https://support.tiktok.com/en/safety-hc/report-a-problem/report-a-user',
    button: 'TikTok Help Center'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📸',
    steps: [
      'Open the profile, post or message you want to report.',
      'Open its options menu.',
      'Choose Report and select the relevant reason.',
      'Follow the instructions on screen.'
    ],
    url: 'https://help.instagram.com/',
    button: 'Instagram Help Center'
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    icon: '👻',
    steps: [
      'Press and hold the account or content you want to report.',
      'Tap Report.',
      'Choose the reason that matches the problem.',
      'Follow the instructions to submit your report.'
    ],
    url: 'https://help.snapchat.com/',
    button: 'Snapchat Help Center'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '👥',
    steps: [
      'Open the profile, post or content you want to report.',
      'Open its options menu.',
      'Choose Report or Find support or report, if shown.',
      'Select a reason and follow the instructions.'
    ],
    url: 'https://www.facebook.com/help/',
    button: 'Facebook Help Center'
  },
  {
    id: 'messenger',
    name: 'Messenger',
    icon: '✉️',
    steps: [
      'Open the conversation you want to report.',
      'Open the conversation details or options.',
      'Look for Report and choose the relevant reason.',
      'Follow the instructions provided by Messenger.'
    ],
    url: 'https://www.facebook.com/help/messenger-app/',
    button: 'Messenger Help Center'
  }
]
const romanUrduText = {
  'Your safety, your choice': 'Aap ki safety, aap ka faisla',
  'You are not alone.': 'Aap akelay nahi hain.',
  'A safe place to understand your options when someone harasses, threatens or blackmails you online.':
    'Yeh aik mehfooz jagah hai jahan aap online harassment, dhamki ya blackmail ki surat mein apne options samajh sakte hain.',
  'Choose language:': 'Zabaan chunein:',
  'Language switching will be added in a future update.':
    'Aap ki chuni hui zabaan mein rehnumai yahan dikhai jayegi.',
  'Get help now': 'Abhi madad hasil karein',
  'Hide safety guide': 'Safety guide chhupayein',
  'First, protect yourself': 'Sab se pehle apni hifazat karein',
  'Do not send more photos, money or personal information.':
    'Mazeed photos, paise ya zaati maloomat na bhejein.',
  'Save relevant messages and account details if it is safe.':
    'Agar mehfooz ho, to zaroori messages aur account ki details sambhal kar rakhein.',
  'Block and report the account when you feel ready.':
    'Jab aap munasib samjhein, account ko block aur report karein.',
  'Talk to a trusted person if you need support.':
    'Agar madad chahiye ho, to kisi bharosemand shakhs se baat karein.',
  'What happened to you?': 'Aap ke saath kya hua?',
  'Select the option that best matches your situation. We will show you the next steps.':
    'Apni situation ke mutabiq option chunein. Hum aap ko aglay steps batayenge.',
  'Your next steps': 'Aap ke aglay steps',
  'Report on your social media platform':
    'Apne social media platform par report karein',
  'Choose the platform where the harassment happened. Follow its instructions to report the account or content.':
    'Woh platform chunein jahan harassment hui. Account ya content report karne ke liye diye gaye steps follow karein.',
  'Ready to make an official complaint?':
    'Kya aap official complaint karna chahti/chahtay hain?',
  'Open Official NCCIA Portal': 'Official NCCIA Portal kholein',
  'Choose another category': 'Doosri category chunein',
  'Privacy first': 'Privacy sab se pehle',
  'Your safety and choices matter.':
   'Aap ki safety aur aap ke faislay aham hain.',
  'Online harassment': 'Online harassment',
  'Get guidance for threats, bullying and blackmail.':
    'Dhamki, bullying aur blackmail ke liye rehnumai hasil karein.',
  'Find support': 'Madad hasil karein',
  'Consider reaching out to someone you trust.':
    'Kisi bharosemand shakhs se madad lene par ghour karein.',
  'Threats or Blackmail': 'Dhamki ya Blackmail',
  'Someone is threatening or blackmailing you online.':
    'Koi aap ko online dhamki de raha hai ya blackmail kar raha hai.',
  'Private Photo Threats': 'Private Photos ki Dhamki',
  'Someone is threatening to share your private photos.':
    'Koi aap ki private photos share karne ki dhamki de raha hai.',
  'Fake Account or Impersonation': 'Fake Account ya Naqal',
  'Someone is pretending to be you or using your identity.':
    'Koi aap ban kar doosron se baat kar raha hai ya aap ki pehchan istemal kar raha hai.',
  'Online Bullying or Abuse': 'Online Bullying ya Bad-sulooki',
  'Someone is sending abusive messages or harassing you online.':
    'Koi aap ko online bure messages bhej raha hai ya pareshan kar raha hai.',
  'Other Online Harassment': 'Doosri Online Harassment',
 
'Your situation does not match the categories above.':
  'Aap ki situation upar di gayi categories se mukhtalif hai.',
'Do not send money, more photos or personal information.':
  'Paise, mazeed photos ya zaati maloomat na bhejein.',
'Keep relevant messages and account details if it is safe.':
  'Agar mehfooz ho, to zaroori messages aur account ki details sambhal kar rakhein.',
'Report the account on the platform where the threats happened.':
  'Jis platform par dhamki mili, usi par account report karein.',

'You can open the official National Cyber Crime Investigation Agency (NCCIA) complaint portal and follow its instructions. You will submit your complaint on the official website, not through CyberSakhi.':
  'Aap NCCIA ke official complaint portal par ja kar uski hidayaat follow kar sakte hain. Complaint official website par submit hogi, CyberSakhi ke zariye nahi.',
'If you are in immediate danger, contact local emergency services or a trusted adult.':
  'Agar aap foran khatre mein hain, to local emergency services ya kisi bharosemand baray se rabta karein.',

  'Open the chat with the person you want to report.':
    'Jis shakhs ko report karna hai, uski chat kholo.',
  'Tap the contact name or open the chat menu.':
    'Contact ke naam par tap karo ya chat ka menu kholo.',
  'Choose Report and follow the instructions.':
    'Report select karo aur di gayi hidayaat follow karo.',
  'If it is safe, you may also block the contact.':
    'Agar mehfooz ho, to contact ko block bhi kar sakte ho.',
  'Open the profile of the account you want to report.':
    'Jis account ko report karna hai, uski profile kholo.',
  'Tap Share or the options menu.':
    'Share ya options menu par tap karo.',
  'Choose Report and select the relevant reason.':
    'Report select karo aur munasib wajah chuno.',
  'Follow the instructions to submit your report.':
    'Report submit karne ke liye di gayi hidayaat follow karo.',
  'Open the profile, post or message you want to report.':
    'Jis profile, post ya message ko report karna hai, use kholo.',
  'Open its options menu.':
    'Uska options menu kholo.',
  'Follow the instructions on screen.':
    'Screen par di gayi hidayaat follow karo.',
  'Press and hold the account or content you want to report.':
    'Jis account ya content ko report karna hai, us par press karke rakho.',
  'Tap Report.':
    'Report par tap karo.',
  'Choose the reason that matches the problem.':
    'Apne maslay ke mutabiq wajah chuno.',
  'Open the profile, post or content you want to report.':
    'Jis profile, post ya content ko report karna hai, use kholo.',
  'Choose Report or Find support or report, if shown.':
    'Agar option nazar aaye to Report ya Find support or report chuno.',
  'Select a reason and follow the instructions.':
    'Wajah chuno aur di gayi hidayaat follow karo.',
  'Open the conversation you want to report.':
    'Jis conversation ko report karna hai, use kholo.',
  'Open the conversation details or options.':
    'Conversation ki details ya options kholo.',
  'Look for Report and choose the relevant reason.':
    'Report ka option dhoondo aur munasib wajah chuno.',
  'Follow the instructions provided by Messenger.':
    'Messenger ki di hui hidayaat follow karo.'

}




function App() {
  const [language, setLanguage] = useState('English')
  const [showAbout, setShowAbout] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [chatOpen, setChatOpen] = useState(false)

const [chatMessages, setChatMessages] = useState([])
const [chatInput, setChatInput] = useState('')
const [chatLoading, setChatLoading] = useState(false)

const sendMessage = async () => {
  const message = chatInput.trim()

  if (!message || chatLoading) return

  setChatMessages((previous) => [
    ...previous,
    { role: 'user', text: message }
  ])
  setChatInput('')
  setChatLoading(true)

  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })

    if (!response.ok) {
      throw new Error('Server se jawab nahi mila')
    }

    const data = await response.json()

    setChatMessages((previous) => [
      ...previous,
      { role: 'bot', text: data.reply }
    ])
  } catch (error) {
    setChatMessages((previous) => [
      ...previous,
      {
        role: 'bot',
        text: 'Connection nahi ho saka. Check karein ke backend chal raha hai.'
      }
    ])
  } finally {
    setChatLoading(false)
  }
}

  const translate = (text) => {
    return language === 'Roman Urdu'
      ? romanUrduText[text] || text
      : text
  }
  const selected = categories.find(
    (category) => category.id === selectedCategory
  )

  return (
  <div className="app">

    {/* Chatbot yahan add hoga */}
  

{/* Floating chatbot button */}
<button
  className="chatbot-float-button"
  onClick={() => setChatOpen(!chatOpen)}
  aria-label={chatOpen ? "Close CyberSakhi chat" : "Open CyberSakhi chat"}
>
  {chatOpen ? "✕" : "💬"}
</button>

{/* Chat window sirf click par khulegi */}
{chatOpen && (
  <section className="chatbot-card floating-chat-window">
    <div className="chatbot-header">
      <div>
        <h2>💜 CyberSakhi</h2>
        <p>Online safety support</p>
      </div>

      <button
        className="chatbot-close-button"
        onClick={() => setChatOpen(false)}
        aria-label="Close chat"
      >
        ✕
      </button>
    </div>

    <div className="chat-messages">
      {chatMessages.map((message, index) => (
        <div
          key={index}
          className={`chat-message ${message.role}`}
        >
          <strong>
            {message.role === "user" ? "You" : "CyberSakhi"}:
          </strong>{" "}
          {message.text}
        </div>
      ))}

      {chatLoading && <p>CyberSakhi is replying...</p>}
    </div>

    <div className="chat-input-row">
      <input
        type="text"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder="Ask about online safety..."
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />

      <button onClick={sendMessage} disabled={chatLoading}>
        Send
      </button>
    </div>
  </section>
)}


<main>

        <section className="hero">
          <div className="welcome-icon">💜</div>
          <p className="hero-badge">YOUR SAFE SPACE ONLINE</p>
          <h1>Welcome to CyberSakhi</h1>
          <p className="hero-tagline">
            Your safety, your choice.
          </p>
          <p className="intro">
            You are not alone. Get clear guidance when facing online
            harassment, threats, bullying or blackmail.
          </p>
        </section>

        <div className="language">
          <label htmlFor="language">
  {translate('Choose language:')}
</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Roman Urdu</option>
          </select>
          
        </div>

        <button
          className="help-button"
          onClick={() => setShowHelp(!showHelp)}
        >
          
{showHelp
  ? translate('Hide safety guide')
  : `🆘 ${translate('Get help now')}`}

        </button>

        
{showHelp && (
  <section className="help-card">
    <h2>{translate('First, protect yourself')}</h2>
    <ol>
      <li>{translate('Do not send more photos, money or personal information.')}</li>
      <li>{translate('Save relevant messages and account details if it is safe.')}</li>
      <li>{translate('Block and report the account when you feel ready.')}</li>
      <li>{translate('Talk to a trusted person if you need support.')}</li>
    </ol>

            <p>
              If you are in immediate danger, contact local emergency
              services or a trusted adult.
            </p>
          </section>
        )}

        <section className="report-section">
         
<h2>{translate('What happened to you?')}</h2>

          
<p className="intro">
  {translate('Select the option that best matches your situation. We will show you the next steps.')}
</p>

<div className="problem-search">
  <input
    type="text"
    placeholder={language === 'Roman Urdu'
      ? 'Apna masla yahan likhein...'
      : 'Describe your problem...'}
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
  <button
    onClick={() => {
      const text = searchText.toLowerCase()

      const match = categories.find((category) =>
        (category.title + ' ' + category.description)
          .toLowerCase()
          .includes(text)
      )

      if (match) {
        setSelectedCategory(match.id)
      }
    }}
  >
    {language === 'Roman Urdu' ? 'Masla dhoondein' : 'Find my issue'}
  </button>
</div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`category-button ${
                  selectedCategory === category.id ? 'selected' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
              >
                <span className="category-icon">{category.icon}</span>
                
<strong>{translate(category.title)}</strong>
<span>{translate(category.description)}</span>

              </button>
            ))}
          </div>
        </section>

        {selected && (
          <section className="help-card report-guide">
           
<h2>{selected.icon} {translate('Your next steps')}</h2>
<p>{translate(selected.description)}</p>


            
<ol>
  {selected.steps.map((step, index) => (
    <li key={index}>{translate(step)}</li>
  ))}
</ol>

               
<div className="platform-guides">
  <h3>Report on your social media platform</h3>
  <p>
    Choose the platform where the harassment happened.
    Follow its instructions to report the account or content.
  </p>

  <div className="platform-grid">
    {platformGuides.map((platform) => (
      <article className="platform-card" key={platform.id}>
        <h3>{platform.icon} {platform.name}</h3>
        <ol>
  {platform.steps.map((step, index) => (
    <li key={index}>{translate(step)}</li>
  ))}
</ol>
        <a
          className="portal-button"
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {platform.button} ↗
        </a>
      </article>
    ))}
  </div>
</div>

  
<div className="official-portal">
  <h3>{translate('Ready to make an official complaint?')}</h3>

  <p>
    {translate('You can open the official National Cyber Crime Investigation Agency (NCCIA) complaint portal and follow its instructions. You will submit your complaint on the official website, not through CyberSakhi.')}
  </p>

  <a
    href="https://complaint.nccia.gov.pk/"
    target="_blank"
    rel="noreferrer"
  >
    {translate('Open Official NCCIA Portal')} ↗
  </a>

</div>
          

            <p className="small-note">
              Submitting a complaint does not guarantee that content will
              be removed or that an investigation will reach a particular
              outcome. Follow the official portal's instructions.
            </p>

            <button
              className="back-button"
              onClick={() => setSelectedCategory(null)}
            >
              Choose another category
            </button>
          </section>
        )}

        <div className="options">
          <article className="option-card">
            <span>🔒</span>
            <h2>Privacy first</h2>
            <p>Your safety and choices matter.</p>
          </article>

          <article className="option-card">
            <span>📱</span>
            <h2>Online harassment</h2>
            <p>Get guidance for threats, bullying and blackmail.</p>
          </article>

          <article className="option-card">
            <span>🤝</span>
            <h2>Find support</h2>
            <p>Consider reaching out to someone you trust.</p>
          </article>
        </div>

        <p className="notice">
          This is an early demo. CyberSakhi does not submit or save
          complaints. Your information is not sent to NCCIA by this app.
          Use the official portal for actual complaints.
        </p>
  
      </main>

      
      {showAbout && (
        <section className="about-section">
          <h2>About CyberSakhi</h2>
          <p>
            CyberSakhi is an online safety awareness platform
            that helps people understand what to do about online
            harassment, cyberbullying, blackmail, fake accounts,
            and threats involving private photos.
          </p>
          <p>
            It provides simple guidance, social media reporting
            instructions, and links to official cybercrime
            complaint resources in Pakistan.
          </p>
          <p>
            CyberSakhi promotes online safety, privacy, dignity,
            and awareness. It provides information and does not
            submit official complaints on the user's behalf.
          </p>

          <h3>Developed by Zinara</h3>
          <p>Student developer · CyberSakhi Project</p>
          <a
            href="https://github.com/zunicricket/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project on GitHub ↗
          </a>
        </section>
      )}

      <footer>
        CyberSakhi · Safety, dignity and support
        <br />
        <button
          className="about-button"
          onClick={() => setShowAbout(!showAbout)}
        >
          {showAbout ? 'Close About Us' : 'About Us'}
        </button>
      </footer>

    </div>
  )
}

export default App

    

