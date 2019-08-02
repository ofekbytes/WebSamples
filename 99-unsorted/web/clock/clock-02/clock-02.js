function printTime() {
      var d = new Date();
      var hours = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds();
      var pmOrAm = "AM";
      if (hours > 12) {
        hours = 1;
        pmOrAm = "PM";
      } else if (mins < 10) {
        mins = "0" + mins;
      } else {
        hours = hours;
        mins = mins;
      }
      
      document.getElementById("time").innerHTML = hours + ":" + mins + ":" + secs + " " + pmOrAm;
    }