# PersonalProfile

- to run make sure you have node modules installed.

- run command is "npm run dev" this will launch the node server and react app in their development build concurrently.

Personal Profile, this webapp was designed and produced to operate as a basic portfolio set up with a personal description and list of primary skills.

My background is a live rendering processing sketch which is wrapped in a react ref system - see my p5 components to see how that works.

I chose to develop this idea to primarily host examples of my past processing work in a gallery format.
So you can see some of my work. The image containers if clicked launch a link to the gist so people can read through the code/fork the code and produce their own or seek inspiration for their own projects.

I made a contact system using a SMTP Simple Mail Transport protocol using nodemailer.
To take user input from a contact form and pass through my API to send emails to a "business email" for me to read.
This works and has a email validation system in place which checks to make sure there is an @ symbol in there.

There may be some errors caused by the contact form running locally on your machine as the security protocols used for google may block the app from sending emails due to your ip address being different to mine but it does work and will work if put into production build hosted on something like heroku.
