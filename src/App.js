import React, { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  let state = useSelector((state) => state);
  const [anscheck, setanscheck] = useState();
  const [rightscorecheck, setrightscorecheck] = useState(0);
  const [wrongscorecheck, setwrongscorecheck] = useState(0);
  const [questions, setquestions] = useState(state.QUESTIONS);
  const [index, setindex] = useState(0);
  const [mytimer, setmytimer] = useState(15);

  let total_length = questions.length - 1;
  let nextquestion = () => {
    if (!anscheck) {
      alert("please select Option");
    } else if (index === total_length) {
      let submitbtn = document.getElementById("submit");
      let nextbtn = document.getElementById("nextbtn");
      submitbtn.style.visibility = "visible";
      nextbtn.disabled = true;
      Scoreupdate();
    } else {
      setindex(index + 1);
      Scoreupdate();
      setanscheck(0);
    }
  };

  const Scoreupdate = () => {
    if (anscheck === "true") {
      setrightscorecheck(rightscorecheck + 1);
    } else {
      setwrongscorecheck(wrongscorecheck + 1);
    }
  };
  let finalresultdiv = () => {
    clearTimeout(timerset);
    let resultdiv = document.getElementById("FR");
    resultdiv.style.zIndex = 1;
  };

  const priviousquestion = () => {
    if (index === 0) {
    } else {
      setindex(index - 1);
    }
  };

  const btndataget = (v) => {
    let rightans = questions[index].correctAns;
    let selectedop = v;
    if (rightans === selectedop) {
      setanscheck("true");
    } else {
      setanscheck("false");
    }
  };
  var timerset = setTimeout(() => {
    setmytimer(mytimer - 1);
  }, 1000);

  if (mytimer === 0) {
    clearTimeout(timerset);
    let resultdiv = document.getElementById("FR");
    resultdiv.style.zIndex = 1;
    return (
      <div id="FR" className="finalresult">
        <p>
          <b> Time's up </b> 'your Attempted Questions are
          <b> {rightscorecheck + wrongscorecheck} </b> out of
          <b> {total_length + 1}</b>
        </p>
        <h2>Happy Result</h2>
        <div className="content">
          <h3 className="one">
            <i className="fa fa-check coloradjust" aria-hidden="true"></i>(
            {rightscorecheck})
          </h3>
          <h3 className="two">
            <i class="fa fa-times" aria-hidden="true"></i>({wrongscorecheck})
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Quiz App</h1>
        <div className="maindiv">
          <div className="time">
            <span>
              Question: {index + 1}/{total_length + 1}
            </span>
            <span>Timer:{mytimer}</span>
          </div>
          <h3 className="qstn">{questions[index].question}</h3>
          {questions[index].options.map((v, i) => {
            return (
              <button
                key={i}
                name={questions[index].correctAns}
                onClick={() => btndataget(v)}
                className="btn btn-light op"
              >
                {v}
              </button>
            );
          })}

          <div className="btnsdiv">
            <button
              className="btn btn-primary"
              disabled={true}
              onClick={priviousquestion}
            >
              <i className="fa fa-caret-left" aria-hidden="true"></i>
            </button>
            <button
              className="btn btn-primary"
              id="nextbtn"
              onClick={() => {
                nextquestion();
              }}
            >
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </button>
            <button
              className="btn btn-primary bigbtn"
              id="submit"
              onClick={() => {
                finalresultdiv();
              }}
            >
              Submit
            </button>

            <div id="FR" className="finalresult">
              <h2>Happy Result</h2>
              <div className="content">
                <h3 className="one">
                  <i className="fa fa-check coloradjust" aria-hidden="true"></i>
                  ({rightscorecheck})
                </h3>
                <h3 className="two">
                  <i class="fa fa-times" aria-hidden="true"></i>(
                  {wrongscorecheck})
                </h3>
              </div>
            </div>
            {/* <div className="scorechart">
            <h3>Right Ans:{rightscorecheck}</h3>
            <h3>Wrong Ans:{wrongscorecheck}</h3>
          </div> */}
          </div>
          <div className="fotr">
            <p>@RIGHTS RESERVED JawanPak Student -Muhammad Nawaz "Quiz App"</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
