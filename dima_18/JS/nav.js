function langChangArabic() {
  document.getElementById("E").className = "contact1";
  document.getElementById("E1").className = "About1";
  document.getElementById("A").className = "contact";
  document.getElementById("A1").className = "About";
  document.getElementById("arabic").className="langchanghide";
  document.getElementById("english").className="langchangapper";
  }
  function langChangEnglish() {
    document.getElementById("E").className = "contact";
    document.getElementById("E1").className = "About";
    document.getElementById("A").className = "contact1";
    document.getElementById("A1").className = "About1";
    document.getElementById("arabic").className="langchangapper";
    document.getElementById("english").className="langchanghide";
    }
function dropIt() {
  const dr = document.getElementById("drpit");
  (dr.className=="dropdown")?dr.className="dropdown1":dr.className="dropdown";
}
function langChangEnglish1() {
  document.getElementById("E2").className = "contact2";
  document.getElementById("E12").className = "About2";
  document.getElementById("A2").className = "contact12";
  document.getElementById("A12").className = "About12";
  document.getElementById("arabic1").className="langchangapper1";
  document.getElementById("english1").className="langchanghide1";
  }
  function langChangArabic1() {
    document.getElementById("E2").className = "contact12";
    document.getElementById("E12").className = "About12";
    document.getElementById("A2").className = "contact2";
    document.getElementById("A12").className = "About2";
    document.getElementById("arabic1").className="langchanghide1";
    document.getElementById("english1").className="langchangapper1";
    }
