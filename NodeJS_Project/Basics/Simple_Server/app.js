import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //   res.end("Satyam Tiwari");
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<h1>This is / path </h1>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'/> <button type='submit'>send</button></form>"
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    // res.writeHead(302);
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //   else if (url === "/login") {
  //     res.write("<h1>Welcome to login page</h1>");
  //     res.end();
  //   }else if (url === "/signup") {
  //     res.write("<h2>Signup form</h2>");
  //     res.end();
  //   } else {
  //     res.write("Wrong path");
  //     res.end();
  //   }

  //   switch (url) {
  //     case "/":
  //       res.write("<h1>This is / path </h1>");
  //       res.end();
  //       break;
  //     case "/login":
  //       res.write("<h1>Login Page</h1>");
  //       res.end();
  //       break;
  //     case "/satyam":
  //       res.write("Welcome satyam tiwari");
  //       res.end();
  //       break;
  //     default:
  //       res.write("Wrong Path");
  //       res.end();
  //   }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on https://localhost:${PORT}`);
});
