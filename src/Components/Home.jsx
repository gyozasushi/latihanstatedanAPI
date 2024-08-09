import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import getDreamMessage from '../Components/dreaminfo';
import { getRandomCharacter } from './Chara';
import { QuotesComponent } from './dreamsqoutes'; 

function Home() {
  const [name, setName] = useState('');
  const [dream, setDream] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isDreamSubmitted, setIsDreamSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [character, setCharacter] = useState(getRandomCharacter());
  const [dreamPlaceholder, setDreamPlaceholder] = useState('ketik cita-citamu');  

  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      setErrorMessage('Tenang kok aku gabakal nyebarin nama mu.');
      setCharacter(getRandomCharacter());
    } else {
      setErrorMessage('');
      setIsNameSubmitted(true);
      setCharacter(getRandomCharacter());
      setDreamPlaceholder('waktu kecil kamu mau jadi apa');
    }
  };

  const handleDreamSubmit = (event) => {
    event.preventDefault();
    if (dream.trim() === '') {
      setErrorMessage('Tidak apa-apa jika kita bingung akan pilihan kita, apapun itu yang ingin kita pilih tetaplah bangga akan pilihanmu yaaa😁😽😸');
      setIsDreamSubmitted(false);
      setCharacter(getRandomCharacter());
    } else {
      const message = getDreamMessage(dream);
      if (message.includes('Cita-cita yang Anda pilih tidak tersedia')) {
        setErrorMessage(message);
        setMotivationalMessage('');
        setIsDreamSubmitted(false);
      } else {
        setErrorMessage('');
        setMotivationalMessage(message);
        setIsDreamSubmitted(true);
      }
      setCharacter(getRandomCharacter());
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-bg">
        {/* <img src={bghome} alt="background" /> */}
      </div>
      <Container fluid className="home-content">
        <Row className="justify-content-center gap-3">
          <Col xs={5} md={2}>
            <img
              src={character}
              alt="character"
              className="character-img"
            />
          </Col>
          <Col xs={9} md={6} className="text-container">
            <p>
              {isNameSubmitted
                ? (isDreamSubmitted
                  ? (errorMessage
                    ? errorMessage
                    : `Wahh, cita-cita kamu keren banget, ${name}! ${motivationalMessage}`
                  )
                  : 'Apa cita-citamu?'
                )
                : 'Siapa sih namamu?'
              }
            </p>
          </Col>
          {isDreamSubmitted && (
          <Container>
            <QuotesComponent /> {/* Menambahkan QuotesComponent di sini */}
          </Container>
        )}
        </Row>
        <Container>
          {!isNameSubmitted ? (
            <>
              <form onSubmit={handleNameSubmit}>
                <Row className="justify-content-center mt-3">
                  <Col xs={12} md={6} lg={4}>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Perkenalan dulu yuk"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                  <Col xs="auto">
                    <button type="submit" className="btn btn-dark">
                      Yuk
                    </button>
                  </Col>
                </Row>
              </form>
            </>
          ) : (
            <form onSubmit={handleDreamSubmit}>
              <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} lg={4}>
                  <input
                    type="text"
                    className="form-control"
                    value={dream}
                    onChange={(e) => setDream(e.target.value)}
                    placeholder={dreamPlaceholder}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center mt-3 pb-3">
                <Col xs="auto">
                  <button type="submit" className="btn btn-dark">
                    Kayanya itu sih
                  </button>
                </Col>
              </Row>
            </form>
          )}
        </Container>
      </Container>
    </section>
  );
}

export default Home;
