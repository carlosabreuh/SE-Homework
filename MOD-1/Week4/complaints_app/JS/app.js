$(() => {
  $("button").on('click', function (event) {
          event.preventDefault();
          console.log(event.target);

          const userInput = event.target.innerHTML.toUpperCase();
          let numberOfRequest = $("input")[0].value;
          if (!(numberOfRequest)) {
              numberOfRequest = 10;
          }

          $.ajax({
              url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
              type: "GET",
              data: {
                  '$limit': numberOfRequest,
                  agency: "NYPD",
                  borough: userInput,
              },
          }).then(
              function (data) {
                  console.log(data);
                  for (let i = 0; i < data.length; i++) {
                      let entry = $("<p>");
                      entry.text(`${data[i].descriptor}`);
                      let button = $("<button>");
                      button.text("Police Response");
                      let response = $("<span>");
                      response.text(`${data[i].resolution_description}`).hide();
                      button.click(() => {
                          response.toggle();
                      });
                      entry.append(button);
                      entry.append(response);
                      $("#container").append(entry);
                  }
              },
              function () {
                  console.log("bad request");
              }
          );
      });
});
