const express = require('express'),
			bodyParser = require('body-parser'),
			cookieParser = require('cookie-parser'),
			app = express(),
			router = express.Router(),
			pi = require('./server/pi'),
			path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

router.get('/pi', pi);

app.use('/api',router);

app.listen(app.get('port'), function() {
	console.log('Server started on port',app.get('port'));
});
