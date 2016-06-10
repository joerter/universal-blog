/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(7);
	var path = __webpack_require__(8);
	var posts = __webpack_require__(9);

	var app = express();

	app.use(express.static(path.join(__dirname, 'public')));

	app.get('/api/post/:id?', function (req, res) {
	  var id = req.params.id;
	  if (!id) {
	    res.json(posts);
	  } else {
	    var post = posts.find(function (p) {
	      return p.id == id;
	    });
	    if (post) res.json(post);else res.status(404).send('Not Found');
	  }
	});

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Universal Blog</title>\n  </head>\n  <body>\n    <div id="app">' + appHtml + '</div> \n    <script src="/bundle.js"></script>\n  </body>\n  </html>\n  ';
	}

	var PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
	  console.log('Express running at localhost: ' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _Post = __webpack_require__(6);

	var _Post2 = _interopRequireDefault(_Post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.Route, { path: '/:postId/:postName' })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Post = __webpack_require__(6);

	var _Post2 = _interopRequireDefault(_Post);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var allPostsUrl = '/api/post';

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	    _this.state = {
	      posts: []
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var request = new XMLHttpRequest();
	      request.open('GET', allPostsUrl, true);
	      request.setRequestHeader('Content-type', 'application/json');

	      request.onload = function () {
	        if (request.status === 200) {
	          _this2.setState({
	            posts: JSON.parse(request.response)
	          });
	        }
	      };

	      request.send();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var posts = this.state.posts.map(function (post) {
	        var linkTo = '/' + post.id + '/' + post.slug;

	        return _react2.default.createElement(
	          'li',
	          { key: post.id },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: linkTo },
	            post.title
	          )
	        );
	      });

	      var _props$params = this.props.params;
	      var postId = _props$params.postId;
	      var postName = _props$params.postName;

	      var postTitle = void 0,
	          postContent = void 0;
	      if (postId && postName) {
	        var post = this.state.posts.find(function (p) {
	          return p.id == postId;
	        });
	        postTitle = post.title;
	        postContent = post.content;
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Posts'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          posts
	        ),
	        postTitle && postContent ? _react2.default.createElement(_Post2.default, { title: postTitle, content: postContent }) : _react2.default.createElement(
	          'h1',
	          null,
	          'Welcome to the Universal Blog!'
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Post = function Post(_ref) {
	  var title = _ref.title;
	  var content = _ref.content;
	  return _react2.default.createElement(
	    'div',
	    null,
	    ' ',
	    _react2.default.createElement(
	      'h3',
	      null,
	      title
	    ),
	    ' ',
	    _react2.default.createElement(
	      'p',
	      null,
	      content
	    ),
	    ' '
	  );
	};

	exports.default = Post;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	module.exports = [{
	  id: 0,
	  title: 'Building a Universal JavaScript App',
	  slug: 'buiding-a-universal-javascript-app',
	  content: 'Street art 8-bit photo booth, aesthetic kickstarter organic raw denim hoodie non kale chips pour-over occaecat. Banjo non ea, enim assumenda forage excepteur typewriter dolore ullamco. Pickled meggings dreamcatcher ugh, church-key brooklyn portland freegan normcore meditation tacos aute chicharrones skateboard polaroid. Delectus affogato assumenda heirloom sed, do squid aute voluptate sartorial. Roof party drinking vinegar franzen mixtape meditation asymmetrical. Yuccie flexitarian est accusamus, yr 3 wolf moon aliqua mumblecore waistcoat freegan shabby chic. Irure 90\'s commodo, letterpress nostrud echo park cray assumenda stumptown lumbersexual magna microdosing slow-carb dreamcatcher bicycle rights. Scenester sartorial duis, pop-up etsy sed man bun art party bicycle rights delectus fixie enim. Master cleanse esse exercitation, twee pariatur venmo eu sed ethical. Plaid freegan chambray, man braid aesthetic swag exercitation godard schlitz. Esse placeat VHS knausgaard fashion axe cred. In cray selvage, waistcoat 8-bit excepteur duis schlitz. Before they sold out bicycle rights fixie excepteur, drinking vinegar normcore laboris 90\'s cliche aliqua 8-bit hoodie post-ironic. Seitan tattooed thundercats, kinfolk consectetur etsy veniam tofu enim pour-over narwhal hammock plaid.'
	}, {
	  id: 1,
	  title: 'Learning React',
	  slug: 'learning-react',
	  content: 'excepteur typewriter dolore ullamco. Pickled meggings dreamcatcher ugh, church-key brooklyn portland freegan normcore meditation tacos aute chicharrones skateboard polaroid. Delectus affogato assumenda heirloom sed, do squid aute voluptate sartorial. Roof party drinking vinegar franzen mixtape meditation asymmetrical. Yuccie flexitarian est accusamus, yr 3 wolf moon aliqua mumblecore waistcoat freegan shabby chic. Irure 90\'s commodo, letterpress nostrud echo park cray assumenda stumptown lumbersexual magna microdosing slow-carb dreamcatcher bicycle rights. Scenester sartorial duis, pop-up etsy sed man bun art party bicycle rights delectus fixie enim. Master cleanse esse exercitation, twee pariatur venmo eu sed ethical. Plaid freegan chambray, man braid aesthetic swag exercitation godard schlitz. Esse placeat VHS knausgaard fashion axe cred. In cray selvage, waistcoat 8-bit excepteur duis schlitz. Before they sold out bicycle rights fixie excepteur, drinking vinegar normcore laboris 90\'s cliche aliqua 8-bit hoodie post-ironic. Seitan tattooed thundercats, kinfolk consectetur etsy veniam tofu enim pour-over narwhal hammock plaid.'
	}, {
	  id: 2,
	  title: 'Expert Node',
	  slug: 'expert-node',
	  content: 'franzen mixtape meditation asymmetrical. Yuccie flexitarian est accusamus, yr 3 wolf moon aliqua mumblecore waistcoat freegan shabby chic. Irure 90\'s commodo, letterpress nostrud echo park cray assumenda stumptown lumbersexual magna microdosing slow-carb dreamcatcher bicycle rights. Scenester sartorial duis, pop-up etsy sed man bun art party bicycle rights delectus fixie enim. Master cleanse esse exercitation, twee pariatur venmo eu sed ethical. Plaid freegan chambray, man braid aesthetic swag exercitation godard schlitz. Esse placeat VHS knausgaard fashion axe cred. In cray selvage, waistcoat 8-bit excepteur duis schlitz. Before they sold out bicycle rights fixie excepteur, drinking vinegar normcore laboris 90\'s cliche aliqua 8-bit hoodie post-ironic. Seitan tattooed thundercats, kinfolk consectetur etsy veniam tofu enim pour-over narwhal hammock plaid.'
	}, {
	  id: 3,
	  title: 'Debugging Node Apps',
	  slug: 'debugging-node-apps',
	  content: 'accusamus, yr 3 wolf moon aliqua mumblecore waistcoat freegan shabby chic. Irure 90\'s commodo, letterpress nostrud echo park cray assumenda stumptown lumbersexual magna microdosing slow-carb dreamcatcher bicycle rights. Scenester sartorial duis, pop-up etsy sed man bun art party bicycle rights delectus fixie enim. Master cleanse esse exercitation, twee pariatur venmo eu sed ethical. Plaid freegan chambray, man braid aesthetic swag exercitation godard schlitz. Esse placeat VHS knausgaard fashion axe cred. In cray selvage, waistcoat 8-bit excepteur duis schlitz. Before they sold out bicycle rights fixie excepteur, drinking vinegar normcore laboris 90\'s cliche aliqua 8-bit hoodie post-ironic. Seitan tattooed thundercats, kinfolk consectetur etsy veniam tofu enim pour-over narwhal hammock plaid.'
	}, {
	  id: 4,
	  title: 'Exploring ES2015',
	  slug: 'exploring-es2015',
	  content: 'voluptate sartorial. Roof party drinking vinegar franzen mixtape meditation asymmetrical. Yuccie flexitarian est accusamus, yr 3 wolf moon aliqua mumblecore waistcoat freegan shabby chic. Irure 90\'s commodo, letterpress nostrud echo park cray assumenda stumptown lumbersexual magna microdosing slow-carb dreamcatcher bicycle rights. Scenester sartorial duis, pop-up etsy sed man bun art party bicycle rights delectus fixie enim. Master cleanse esse exercitation, twee pariatur venmo eu sed ethical. Plaid freegan chambray, man braid aesthetic swag exercitation godard schlitz. Esse placeat VHS knausgaard fashion axe cred. In cray selvage, waistcoat 8-bit excepteur duis schlitz. Before they sold out bicycle rights fixie excepteur, drinking vinegar normcore laboris 90\'s cliche aliqua 8-bit hoodie post-ironic. Seitan tattooed thundercats, kinfolk consectetur etsy veniam tofu enim pour-over narwhal hammock plaid.'
	}];

/***/ }
/******/ ]);