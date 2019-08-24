const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = __dirname+'/token.json';

drive={
    upload(){
        fs.readFile(__dirname+'/credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
           authorize(JSON.parse(content), uploadFile);
        });
        function authorize(credentials, callback) {
            const { client_secret, client_id, redirect_uris } = credentials.installed;
            const oAuth2Client = new google.auth.OAuth2(
                client_id, client_secret, redirect_uris[0]);
        
            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err) return getAccessToken(oAuth2Client, callback);
                oAuth2Client.setCredentials(JSON.parse(token));
                callback(oAuth2Client);//list files and upload file
        
            });
        }
        function getAccessToken(oAuth2Client, callback) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, async (err, token) => {
                    if (err) return console.error('Error retrieving access token', err);
                    oAuth2Client.setCredentials(token);
                    // Store the token to disk for later program executions
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return console.error(err);
                        console.log('Token stored to', TOKEN_PATH);
                    });
                    const returnValue = await callback(oAuth2Client);
                    console.log(returnValue)
                });
            });
        }
        function uploadFile(auth) {
            const drive = google.drive({ version: 'v3', auth });
            var fileMetadata = {
                'name': 'file.pdf'
            };
            var media = {
                mimeType: 'application/pdf',
                body: fs.createReadStream(__dirname+'/file.pdf')
            };
            drive.files.create({
                resource: fileMetadata,
                media: media,
                // fields: 'id'
            }, function (err, res) {
                if (err) {
                    // Handle error
                    console.log(err);
                } else {
                    console.log('File in uploadFile:', res.data);
                 //   response.json({"data1":res.data});
                    return(res.data.id)
                    
                }
            });
        }
    },
    list(ris){
        fs.readFile(__dirname+'/credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            authorize(JSON.parse(content), listFiles);
        });
        function authorize(credentials, callback) {
            const { client_secret, client_id, redirect_uris } = credentials.installed;
            const oAuth2Client = new google.auth.OAuth2(
                client_id, client_secret, redirect_uris[0]);
        
            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err) return getAccessToken(oAuth2Client, callback);
                oAuth2Client.setCredentials(JSON.parse(token));
                callback(oAuth2Client);//list files and upload file
        
            });
        }
        function getAccessToken(oAuth2Client, callback) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) return console.error('Error retrieving access token', err);
                    oAuth2Client.setCredentials(token);
                    // Store the token to disk for later program executions
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return console.error(err);
                        console.log('Token stored to', TOKEN_PATH);
                    });
                    callback(oAuth2Client);
                });
            });
        }
        function listFiles(auth) {
            const drive = google.drive({ version: 'v3', auth });
            getList(drive, '');
        }
        function getList(drive, pageToken) {
            drive.files.list({
                corpora: 'user',
                pageSize: 10,
                //q: "name='elvis233424234'",
                pageToken: pageToken ? pageToken : '',
                fields: 'nextPageToken, files(*)',
            }, (err, res) => {
                if (err) return console.log('The API returned an error: ' + err);
                const files = res.data.files;
                if (files.length) {
                    console.log('Files:');
                    processList(files);
                    if (res.data.nextPageToken) {
                        getList(drive, res.data.nextPageToken);
                    }
        
                    // files.map((file) => {
                    //     console.log(`${file.name} (${file.id})`);
                    // });
                } else {
                    console.log('No files found.');
                }
            });
        }
        function processList(files) {
            console.log('Processing....');
            files.forEach(file => {
                // console.log(file.name + '|' + file.size + '|' + file.createdTime + '|' + file.modifiedTime);
                console.log(file.name + '---' + file.webViewLink);
               // ris.send({"data":file.webViewLink});
            });
        }
    }
}
module.exports=drive;