const generateEmployee = (data) => {
   
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link href="style-template.css" rel="stylesheet" />
        <title>Emplyee Template</title>
      </head>
      <body>
      <header class="banner" style="
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 5px 75px 5px;
      height: 125px;
      background-color: #dc4c64;
      color: aliceblue;
    ">
        <h1 class="banner-text">My Team</h1>
      </header>
        <div class="row">
          <div class= "col d-flex justify-content-center">
            <div class="card" style="width: 200px">
              <div class="card-header text-white bg-primary border-bottom-0">${data.name}</div>
              <div class="card-header text-white bg-primary">${data.role}</div>
              <div class="card-body">
                <p class="card-text">${data.id}</p>
                <p class="card-text">${data.email}</p>
                <p class="card-text">${data.officeNumber
                  // , data.github, data.school
                }</p>
              </div>
            </div>
        </div>
      </body>
    </html>
    
  `;
};

// const generateEmployeeCSS = () => {
//   return `
//   .banner {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 5px 5px 75px 5px;
//     height: 125px;
//     background-color: #DC4C64;
//     color: aliceblue;
// };

// .display-card {
//     display: flex;
//     align-items: center;
//     justify-content: center;
// };`
// };

module.exports = generateEmployee
// module.exports = generateEmployeeCSS