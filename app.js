const password = "abc";
    let attempts = 0;

    function askPassword() {

      const a = prompt("Enter password here:");

      if (a === password) {
        document.getElementById('done').innerText = "Access Granted!";
      } else {
        attempts++;

        if (attempts === 1) {
          document.getElementById('a2').innerText = " Attempts remaining: 2";
        } else if (attempts === 2) {
          document.getElementById('last').innerText = " This is your last attempt!";
        } else if (attempts === 3) {
          document.getElementById('freeze').innerText = " Your account is frozen! try again";
          return;
        }

        setTimeout(askPassword, 100);
      }
    }

    function tryagain(){
         location.reload();
    }