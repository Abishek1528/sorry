import { useState, useEffect } from 'react'
import './App.css'
import Teddy from './Teddy.jsx'

const messages = [
 "I'm really sorry, you mean so much to me 🥺❤️ I did it just for fun, i wont do itt again da pattuu 🫂💗", 
 "You are my happiness, my peace, and the one who cares for me in ways nobody else does 🥹🫶🏻 I'm sorryyy, my happiness 💖🎀", 
 "In this whole world, you are the one who matters the most to me 🌍❤️ No one could ever take your place in my heart 🫂💕 I will always come back to you without any hesitation, alwaysss 🥹💗✨",
]

const noteParagraphs = [
  "I'm sorrryyy Yashiiii 🥺❤️🫂 naa inimeyy intha thappu pannamaataa, naa overahh pesama irukaaa summa fun thann panaaann 🥹💗 ipdilaam enkitaa pesamaah pogaathaaa, nee enkitaa pesamaah irukkurathu enakku romba kashtamaah irukuu 😔❤️‍🩹",
  "Enakku nu en life la irukkura oru paasam nee thaan 🥹💕 unnaaiyum un paasathaiyum un care-aiyum romba romba pudikkum cutieeee 🫶🏻🎀 un care thaan enakku ellame pattu 🥺💖 nee thaan en forever happiness 🫶🏻✨",
  "Nee enkitaa pesura time la thaan naa romba happy ah irupen Yashiiii ❤️ un kooda pesurathu enakku avlo special, athunaala nee ipdi pesama irukkumbothu enakku romba kashtamaah irukku 😔💗 please, en mela kovama irunthaalum konjam pesu 🥺🫂",
  "En life la naa intha alavukku paasam laam pathathey illa cutieeee 🥹❤️ nee thaan enakku first ah intha alavukku paasatha kaamichirukaaa 🫂💗 soo enakku en motha ulagamum un care than thaan bujjjuu 🥺🫶🏻 nee enkitta pesama irunthaa ennaala atha accept pannika mudiyala, romba bad ah feel panrennn 😔❤️‍🩹",
  "Nee yosikalaam ithu enna periya vishayamaa nu na tha konjam neramla pesida poranu, aana en life la enakku nu irukkura romba special aana vishayam nee thaan cutieeee 🥹💕 appadi irukkumbothu nee enkitta pesama irunthaa naa enna pannuven sollu 🥺🫂 You matter to me more than you know bujjjuuu 🥹💖🎀",
  "I'm really really sorrryyy Yashiiii 😭❤️‍🩹 please forgive me, en chellakuttyyy 🥺🫶🏻💕",
]

// ----- typewriter hook: types paragraphs one after another -----
function useTypewriter(lines, { charSpeed = 38, linePause = 700 } = {}) {
  const [displayed, setDisplayed] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed([])
    setDone(false)
    let cancelled = false
    let charIndex = 0
    let lineIndex = 0
    let currentText = ''

    const typeLine = () => {
      if (cancelled) return
      if (lineIndex >= lines.length) {
        setDone(true)
        return
      }
      const line = lines[lineIndex]
      if (charIndex <= line.length) {
        currentText = line.slice(0, charIndex)
        setDisplayed((prev) => {
          const next = [...prev]
          next[lineIndex] = currentText
          return next
        })
        charIndex++
        setTimeout(typeLine, charSpeed)
      } else {
        // line finished, move to next line
        lineIndex++
        charIndex = 0
        currentText = ''
        setTimeout(typeLine, linePause)
      }
    }

    typeLine()
    return () => {
      cancelled = true
    }
  }, [lines, charSpeed, linePause])

  return { displayed, done }
}

function Page1({ onNext }) {
  return (
    <div className="page page-1">
      <div className="teddy-wrap">
        <div className="ring" />
        <img
          src="/blushing-teddy.jpg"
          alt="blushing teddy"
          className="teddy-image"
        />
      </div>

      <h1 className="script-title">Hey cutiepie</h1>
      <p className="subtitle">Do you even know how cute you are?</p>

      <button className="pink-btn" onClick={onNext}>
        let's check 🥺🥺
      </button>
    </div>
  )
}

function Page2({ onNext }) {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const target = 120
    const duration = 2600
    const start = performance.now()

    let raf
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setPercent(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  const done = percent >= 120

  return (
    <div className="page page-2">
      <p className="measuring">Measuring your cuteness... ⏳</p>
      <h2 className="percent">{percent}%</h2>

      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${Math.min((percent / 120) * 100, 100)}%` }}
        />
      </div>

      <p className={`warning ${done ? 'show' : ''}`}>
        ⚠️ WARNING: TOO CUTE TO HANDLE
      </p>

      <button className={`pink-btn ${done ? 'show' : ''}`} onClick={onNext}>
        Continue →
      </button>
    </div>
  )
}

function Page3({ onNext }) {
  const [revealed, setRevealed] = useState([false, false, false])

  const toggle = (i) => {
    setRevealed((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  return (
    <div className="page page-3">
      <div className="heart-icon">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#b02a55">
          <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.3.8-1.2 2.2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.5 16.4 12 21 12 21z" />
        </svg>
      </div>

      <h1 className="script-title">Tap each one to reveal</h1>

      <div className="cards">
        {messages.map((msg, i) => (
          <button
            key={i}
            className={`card ${revealed[i] ? 'revealed' : 'hidden'}`}
            onClick={() => toggle(i)}
          >
            {revealed[i] ? (
              <span className="card-text">{msg}</span>
            ) : (
              <svg className="card-heart" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b02a55" strokeWidth="1.8">
                <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.3.8-1.2 2.2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.5 16.4 12 21 12 21z" />
              </svg>
            )}
          </button>
        ))}
      </div>

      <button className="pink-btn" onClick={onNext}>See more →</button>
    </div>
  )
}

// ----- Page 4: A little note for you, tap to open -----
function Page4({ onOpen }) {
  return (
    <div className="page page-4">
      <h1 className="script-title note-title">A little note for you</h1>

      <button className="note-card" onClick={onOpen}>
        <div className="note-heart-btn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.3.8-1.2 2.2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.5 16.4 12 21 12 21z" />
          </svg>
        </div>
        <span className="note-tap-text">Tap to open</span>
      </button>
    </div>
  )
}

// ----- Page 5: the typed note -----
function Page5({ onNext }) {
  const { displayed, done } = useTypewriter(noteParagraphs)

  return (
    <div className="page page-5">
      <h1 className="script-title note-title">A little note for you</h1>

      <div className="note-image-wrap">
        <img
          src="/sorry-cat.jpg"
          alt="cute sorry cat"
          className="note-image"
        />
      </div>

      <div className="note-heart-divider">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#ff4d83">
          <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.3.8-1.2 2.2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.5 16.4 12 21 12 21z" />
        </svg>
      </div>

      <div className="typed-note">
        {displayed.map((text, i) => (
          <p key={i} className="typed-line">
            {text}
            {!done && i === displayed.length - 1 && (
              <span className="cursor">|</span>
            )}
          </p>
        ))}
      </div>

      <div className="note-footer">
        <svg className="footer-heart" width="36" height="36" viewBox="0 0 24 24" fill="#ff4d83">
          <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2 0 3.4 1.1 4.2 2.3.8-1.2 2.2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.5 16.4 12 21 12 21z" />
        </svg>
      </div>

      <button className="pink-btn" onClick={onNext}>
        One more thing... 🥺
      </button>
    </div>
  )
}

function Page6() {
  const [yesButtonCount, setYesButtonCount] = useState(0)
  const [accepted, setAccepted] = useState(false)

  const addMoreYesButtons = () => {
    setYesButtonCount((count) => (count === 0 ? 10 : count + 20))
  }

  return (
    <div className="page page-6">
      <div className="teddy-wrap page-6-teddy">
        <div className="ring" />
        <img
          src="/innocent-teddy.jpg"
          alt="An innocent teddy bear"
          className="teddy-image"
        />
      </div>

      <section className="question-paper" aria-label="A little question">
        <h1 className="paper-title">A tiny question for you...</h1>
        <p className="paper-message">
          Ippahhh enmelaa kovam pochaahhh 🥺👉🏻👈🏻 enkitaa olungaa pesuviyaaa neee 🥹❤️ naaa
          rombaaa paavamlaaa 😭🫂💗 ipppahhh enkitaa pesuuviyaa yashii 🥺🎀💕
        </p>

        {accepted ? (
          <div className="accepted-message" role="status">
            <span>You are my chellakuttyyyyy!</span>
            <span className="popping-heart" aria-hidden="true">❤️</span>
          </div>
        ) : (
          <div className="answer-actions">
            <button
              className="pink-btn answer-yes"
              onClick={() => setAccepted(true)}
            >
              Pesuvan 💗
            </button>
            <button className="paper-no-btn" onClick={addMoreYesButtons}>
              Pesamataa 🙈
            </button>
          </div>
        )}
      </section>

      {yesButtonCount > 0 && !accepted && (
        <>
          <p className="surprise-message" role="status">
            I knew you would click this! There is a small surprise for youuu 🎁💗
          </p>
          <div className="answer-field" aria-label="More Pesuvan buttons">
            {Array.from({ length: yesButtonCount }, (_, index) => {
              const offset = Math.sin((index + 1) * 12.9898) * 4
              const rotation = Math.sin((index + 1) * 78.233) * 7

              return (
                <button
                  key={index}
                  className="pink-btn scattered-yes"
                  style={{
                    '--button-offset': `${offset}px`,
                    '--button-rotation': `${rotation}deg`,
                  }}
                  onClick={() => setAccepted(true)}
                >
                  Pesuvan 💗
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <div className="app">
      {page === 1 && <Page1 onNext={() => setPage(2)} />}
      {page === 2 && <Page2 onNext={() => setPage(3)} />}
      {page === 3 && <Page3 onNext={() => setPage(4)} />}
      {page === 4 && <Page4 onOpen={() => setPage(5)} />}
      {page === 5 && <Page5 onNext={() => setPage(6)} />}
      {page === 6 && <Page6 />}

      <button
        className="back-btn"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        aria-label="back"
      >
        ←
      </button>
    </div>
  )
}
