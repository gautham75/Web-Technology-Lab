const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// Port 7000 is used by default because modern browsers (Chrome/Edge) block port 6000 (ERR_UNSAFE_PORT).
// You can change it to 6000 if needed: const PORT = 6000;
const PORT = process.env.PORT || 7000;

// MongoDB connection URL and Database
const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'mydb';
const collectionName = 'users';

const client = new MongoClient(mongoUrl);

// Utility function to escape HTML entities to prevent XSS
function escapeHTML(str) {
  return String(str ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

async function startServer() {
  try {
    // 1. Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to MongoDB server.');
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);

    // 2. Create HTTP Server
    const server = http.createServer(async (req, res) => {
      try {
        // Route: Home Page (GET /)
        if (req.method === 'GET' && req.url === '/') {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          fs.createReadStream(path.join(__dirname, 'home.html')).pipe(res);
        }

        // Route: Form Submission (POST /server)
        else if (req.method === 'POST' && req.url === '/server') {
          let rawData = '';

          // Receive data streams
          req.on('data', chunk => {
            rawData += chunk;
          });

          // Process full payload
          req.on('end', async () => {
            try {
              const formData = new URLSearchParams(rawData);

              const name = (formData.get('name') || '').trim();
              const password = formData.get('password') || '';
              const age = parseInt(formData.get('age'), 10);
              const mobile = (formData.get('mobile') || '').trim();
              const email = (formData.get('email') || '').trim();
              const gender = formData.get('gender') || '';
              const state = formData.get('state') || '';
              const skills = formData.getAll('skills'); // Multiple checkboxes

              // Server-side validation
              if (!name || !password || isNaN(age) || !mobile || !email || !gender || !state || skills.length === 0) {
                res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(`
                  <h2 style="color:red; text-align:center; margin-top:50px;">Validation Error: All fields are mandatory!</h2>
                  <p style="text-align:center;"><a href="/">Go Back</a></p>
                `);
              }

              // Object to store in MongoDB
              const newUser = {
                name,
                password,
                age,
                mobile,
                email,
                gender,
                state,
                skills,
                submittedAt: new Date()
              };

              // Insert into MongoDB
              const insertResult = await usersCollection.insertOne(newUser);
              console.log('1 document inserted with _id:', insertResult.insertedId);

              // Retrieve the inserted record from MongoDB to verify and display
              const savedUser = await usersCollection.findOne({ _id: insertResult.insertedId });

              // Prepare row data for table
              const rows = [
                ['Name', savedUser.name],
                ['Password', savedUser.password],
                ['Age', savedUser.age],
                ['Mobile Number', savedUser.mobile],
                ['Email', savedUser.email],
                ['Gender', savedUser.gender],
                ['State', savedUser.state],
                ['Skills', Array.isArray(savedUser.skills) ? savedUser.skills.join(', ') : savedUser.skills]
              ];

              const tableHtmlRows = rows
                .map(([field, value]) => `
                  <tr>
                    <th>${escapeHTML(field)}</th>
                    <td>${escapeHTML(value)}</td>
                  </tr>
                `)
                .join('');

              // Send response displaying the user-submitted details table
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
              res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>User Submitted Details</title>
                  <style>
                    body {
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                      background-color: #f8fafc;
                      padding: 40px 20px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    }

                    .container {
                      background: white;
                      padding: 30px;
                      border-radius: 10px;
                      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
                      max-width: 600px;
                      width: 100%;
                    }

                    h1 {
                      color: #0000cc;
                      text-align: center;
                      margin-bottom: 25px;
                      font-size: 32px;
                      font-weight: bold;
                      text-decoration: underline;
                    }

                    table {
                      width: 100%;
                      border-collapse: collapse;
                      margin-top: 15px;
                      font-size: 16px;
                    }

                    th, td {
                      border: 1px solid #7f99b2;
                      padding: 12px 16px;
                      text-align: left;
                    }

                    th {
                      color: #000080;
                      width: 40%;
                      font-weight: 500;
                    }

                    td {
                      color: #1e293b;
                    }

                    .action-box {
                      margin-top: 25px;
                      text-align: center;
                    }

                    .action-box a {
                      display: inline-block;
                      background-color: #0b57d0;
                      color: white;
                      text-decoration: none;
                      padding: 10px 22px;
                      border-radius: 6px;
                      font-weight: 600;
                      transition: background-color 0.2s;
                    }

                    .action-box a:hover {
                      background-color: #0842a0;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <h1>User Submitted Details</h1>
                    <table>
                      <tbody>
                        ${tableHtmlRows}
                      </tbody>
                    </table>

                    <div class="action-box">
                      <a href="/">Register Another User</a>
                    </div>
                  </div>
                </body>
                </html>
              `);
            } catch (err) {
              console.error('Error handling submission:', err);
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error: Unable to process registration.');
            }
          });
        } else {
          // Route not found
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      } catch (serverErr) {
        console.error('Server error:', serverErr);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
      }
    });

    // 3. Start Listening
    server.listen(PORT, () => {
      console.log(`=======================================================`);
      console.log(`Server successfully started!`);
      console.log(`Access the application at: http://localhost:${PORT}`);
      console.log(`MongoDB database: "${dbName}", collection: "${collectionName}"`);
      console.log(`=======================================================`);
    });

  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

startServer();
