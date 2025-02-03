import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import "./Counter.css";

function WelcomePage() {
  const imageUrls = [
    "https://www.dropbox.com/scl/fi/mw9avo1d2e9hqngmb1txt/Dani-7.jpg?rlkey=sv9d9sctsp6jflnb8mg64f3u1&st=3w7i9xt8&raw=1",
    "https://www.dropbox.com/scl/fi/qz120g7qasli6t0bwtphe/Dani-2.jpg?rlkey=umqsdyw35nbk5py4l559hpnj9&st=d5dly62i&raw=1",
    "https://www.dropbox.com/scl/fi/2dehwr67jcw2vfri9f3mo/Dani-3.jpg?rlkey=lrsmu021l2hl692ot1ya4azlh&st=z4r1nmcd&raw=1",
    "https://www.dropbox.com/scl/fi/pm0zka3nb9o54oqj0uetf/Dani-4.jpg?rlkey=bobwtfve8bq7efftae46et9fu&st=7ftq03pb&raw=1",
    "https://www.dropbox.com/scl/fi/ubzfmyo65ryouph3ekm5a/Dani-5.jpg?rlkey=z898c13g78s8gp20agif4pns6&st=pp3ot29s&raw=1",
    "https://www.dropbox.com/scl/fi/id2rw8sz4ezk3kewv9wa1/Dani-6.jpg?rlkey=lg0jlxum5f1sd3vr0dcayotim&st=d2fvmr76&raw=1",
    "https://www.dropbox.com/scl/fi/6y71v63rru22ilyiztqj6/Dani-8.jpg?rlkey=p2wnuwcbhcsd1z7xkogqnpe97&st=obvpylp1&raw=1",
    "https://www.dropbox.com/scl/fi/vyiciu72j66k93glo0atn/Dani-9.jpg?rlkey=4r5l1v169dlsnmkw1yaa4yvi3&st=hx553t56&raw=1",
    "https://www.dropbox.com/scl/fi/4tskl8qta1lppc1pksgll/Dani-10.jpg?rlkey=40czte0ca2x5bmu4msx3uip3k&st=6h7vc4y7&raw=1",
    "https://www.dropbox.com/scl/fi/qyo6zf1zqzgkd18ugf7cp/Dani-1.jpg?rlkey=jcuaz2voposro3gptx2zctgpf&st=ncsdl23r&raw=1",
    "https://www.dropbox.com/scl/fi/5p289xmckjw8o4ienhorv/Photo-2024-12-05-10-22-42-PM.jpg?rlkey=yyrxef323z8vq07xvyyius4ex&st=6aocb6a9&raw=1",
  ];
  const startDate = new Date("2025-01-18T00:00:00");

  const handleNotify = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Daniella pressed the button!" }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error || "Failed to send notification.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="main-container">
      <div className="welcome-page">
        <h1>I love you too, Daniella❤️</h1>

        <div className="flower-container">
          <div className="stem">
            <div className="leaf-1"></div>
            <div className="leaf-2"></div>
          </div>
          <div className="rose">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="petal"
                style={{ "--rotate": `${i * 30}deg` }}
              ></div>
            ))}
          </div>
          <div className="mud"></div>
        </div>
      </div>

      <div className="gallery-section">
        <h2>Our Memories</h2>
        <div className="gallery">
          {imageUrls.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
      <div className="message">
        <p className="message-container">
          Dear Daniella, <br></br>
          <br></br>I know I have made mistakes, and I am really sorry. I have
          been Hurting you. Disrespecting you. Never charishing you as much as
          you deserve. You mean the world to me, and these past couple days has
          been really tough for me to go through. Walking a path with no
          purpose. You mean the world to me, and I can't do this without you.
          You are my life, I am a souless body without you.
          <br></br>
          <br></br>I know I can't undo the done, but I can promise you that I
          will do what I can to keep you happy and make you mine. If there is
          even a small love within you for me, we can make it work. There is no
          greater pain than regret. And I don't want to be 80 and still thinking
          about you. So, I rather try and fail a 100 times before I will ever
          give up on you.
          <br></br>
          <br></br>
          When the walls of a house starts breaking down, we dont go looking for
          new houses, we repair it. So why give up on us when we still have the
          power to rebuild it?
          <br></br>
          <br></br>
          With all my love,
          <br></br>Tenzin
        </p>
      </div>
      <Counter startDate={startDate} />
      <div className="notify-container">
        <p className="caution">WARNING: IRREVERSIBLE ACTION</p>
        <p className="message">
          The button you see below is directly connected to me. I know we both
          have faced challenges, but those dont have to define us anymore. Press
          this button and you will summon me at 8 Fisher St within 45mins.{" "}
          <span id="span1">
            (Ps. call 911 before pressing this button, and I will still be there
            before any of them show up.)
          </span>
        </p>
        <button className="notify-button" onClick={handleNotify}>
          Reconnect
        </button>
      </div>

      <div className="quotes"> Untill death do us part...</div>
    </div>
  );
}

export default WelcomePage;
