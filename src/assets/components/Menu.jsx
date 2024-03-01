import React from "react";


function Menu(){


    function handleClick() {
        document.getElementById("myDropdown").classList.toggle("show");
        console.log("clicked");
    }

      // Close the dropdown menu if the user clicks outside of it
      window.onClick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    return(
        <>
            <div className="dropdown">
                <button onClick={handleClick} className="dropbtn">MENU</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
            </div>
            </div>
        </>
    )
}

export default Menu;