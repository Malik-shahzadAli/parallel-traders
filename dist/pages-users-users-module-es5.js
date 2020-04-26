function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"], {
  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js ***!
    \********************************************************************************/

  /*! exports provided: BackendService */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__BackendServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http-status-codes */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js");
    /* harmony import */


    var _delay_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delay-response */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /**
     * Base class for in-memory web api back-ends
     * Simulate the behavior of a RESTy web api
     * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
     * Conforms mostly to behavior described here:
     * http://www.restapitutorial.com/lessons/httpmethods.html
     */


    var BackendService =
    /** @class */
    function () {
      function BackendService(inMemDbService, config) {
        if (config === void 0) {
          config = {};
        }

        this.inMemDbService = inMemDbService;
        this.config = new _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"]();
        this.requestInfoUtils = this.getRequestInfoUtils();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host

        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')

        Object.assign(this.config, config);
      }

      Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: function get() {
          if (!this.dbReadySubject) {
            // first time the service is called.
            this.dbReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.resetDb();
          }

          return this.dbReadySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (r) {
            return r;
          }));
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Process Request and return an Observable of Http Response object
       * in the manner of a RESTy web api.
       *
       * Expect URI pattern in the form :base/:collectionName/:id?
       * Examples:
       *   // for store with a 'customers' collection
       *   GET api/customers          // all customers
       *   GET api/customers/42       // the character with id=42
       *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
       *   GET api/customers.json/42  // ignores the ".json"
       *
       * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
       * Examples:
       *     POST commands/resetDb,
       *     GET/POST commands/config - get or (re)set the config
       *
       *   HTTP overrides:
       *     If the injected inMemDbService defines an HTTP method (lowercase)
       *     The request is forwarded to that method as in
       *     `inMemDbService.get(requestInfo)`
       *     which must return either an Observable of the response type
       *     for this http library or null|undefined (which means "keep processing").
       */

      BackendService.prototype.handleRequest = function (req) {
        var _this = this; //  handle the request when there is an in-memory database


        return this.dbReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function () {
          return _this.handleRequest_(req);
        }));
      };

      BackendService.prototype.handleRequest_ = function (req) {
        var _this = this;

        var url = req.urlWithParams ? req.urlWithParams : req.url; // Try override parser
        // If no override parser or it returns nothing, use default parser

        var parser = this.bind('parseRequestUrl');
        var parsed = parser && parser(url, this.requestInfoUtils) || this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.db[collectionName];
        var reqInfo = {
          req: req,
          apiBase: parsed.apiBase,
          collection: collection,
          collectionName: collectionName,
          headers: this.createHeaders({
            'Content-Type': 'application/json'
          }),
          id: this.parseId(collection, collectionName, parsed.id),
          method: this.getRequestMethod(req),
          query: parsed.query,
          resourceUrl: parsed.resourceUrl,
          url: url,
          utils: this.requestInfoUtils
        };
        var resOptions;

        if (/commands\/?$/i.test(reqInfo.apiBase)) {
          return this.commands(reqInfo);
        }

        var methodInterceptor = this.bind(reqInfo.method);

        if (methodInterceptor) {
          // InMemoryDbService intercepts this HTTP method.
          // if interceptor produced a response, return it.
          // else InMemoryDbService chose not to intercept; continue processing.
          var interceptorResponse = methodInterceptor(reqInfo);

          if (interceptorResponse) {
            return interceptorResponse;
          }

          ;
        }

        if (this.db[collectionName]) {
          // request is for a known collection of the InMemoryDbService
          return this.createResponse$(function () {
            return _this.collectionHandler(reqInfo);
          });
        }

        if (this.config.passThruUnknownUrl) {
          // unknown collection; pass request thru to a "real" backend.
          return this.getPassThruBackend().handle(req);
        } // 404 - can't handle this request


        resOptions = this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () {
          return resOptions;
        });
      };
      /**
       * Add configured delay to response observable unless delay === 0
       */


      BackendService.prototype.addDelay = function (response) {
        var d = this.config.delay;
        return d === 0 ? response : Object(_delay_response__WEBPACK_IMPORTED_MODULE_3__["delayResponse"])(response, d || 500);
      };
      /**
       * Apply query/search parameters as a filter over the collection
       * This impl only supports RegExp queries on string properties of the collection
       * ANDs the conditions together
       */


      BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
          value.forEach(function (v) {
            return conditions.push({
              name: name,
              rx: new RegExp(decodeURI(v), caseSensitive)
            });
          });
        });
        var len = conditions.length;

        if (!len) {
          return collection;
        } // AND the RegExp conditions


        return collection.filter(function (row) {
          var ok = true;
          var i = len;

          while (ok && i) {
            i -= 1;
            var cond = conditions[i];
            ok = cond.rx.test(row[cond.name]);
          }

          return ok;
        });
      };
      /**
       * Get a method from the `InMemoryDbService` (if it exists), bound to that service
       */


      BackendService.prototype.bind = function (methodName) {
        var fn = this.inMemDbService[methodName];
        return fn ? fn.bind(this.inMemDbService) : undefined;
      };

      BackendService.prototype.bodify = function (data) {
        return this.config.dataEncapsulation ? {
          data: data
        } : data;
      };

      BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
      };

      BackendService.prototype.collectionHandler = function (reqInfo) {
        // const req = reqInfo.req;
        var resOptions;

        switch (reqInfo.method) {
          case 'get':
            resOptions = this.get(reqInfo);
            break;

          case 'post':
            resOptions = this.post(reqInfo);
            break;

          case 'put':
            resOptions = this.put(reqInfo);
            break;

          case 'delete':
            resOptions = this.delete(reqInfo);
            break;

          default:
            resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].METHOD_NOT_ALLOWED, 'Method not allowed');
            break;
        } // If `inMemDbService.responseInterceptor` exists, let it morph the response options


        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
      };
      /**
       * Commands reconfigure the in-memory web api service or extract information from it.
       * Commands ignore the latency delay and respond ASAP.
       *
       * When the last segment of the `apiBase` path is "commands",
       * the `collectionName` is the command.
       *
       * Example URLs:
       *   commands/resetdb (POST) // Reset the "database" to its original state
       *   commands/config (GET)   // Return this service's config object
       *   commands/config (POST)  // Update the config (e.g. the delay)
       *
       * Usage:
       *   http.post('commands/resetdb', undefined);
       *   http.get('commands/config');
       *   http.post('commands/config', '{"delay":1000}');
       */


      BackendService.prototype.commands = function (reqInfo) {
        var _this = this;

        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.method;
        var resOptions = {
          url: reqInfo.url
        };

        switch (command) {
          case 'resetdb':
            resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT;
            return this.resetDb(reqInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function () {
              return _this.createResponse$(function () {
                return resOptions;
              }, false
              /* no latency delay */
              );
            }));

          case 'config':
            if (method === 'get') {
              resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK;
              resOptions.body = this.clone(this.config); // any other HTTP method is assumed to be a config update
            } else {
              var body = this.getJsonBody(reqInfo.req);
              Object.assign(this.config, body);
              this.passThruBackend = undefined; // re-create when needed

              resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT;
            }

            break;

          default:
            resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }

        return this.createResponse$(function () {
          return resOptions;
        }, false
        /* no latency delay */
        );
      };

      BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
        return {
          body: {
            error: "" + message
          },
          url: url,
          headers: this.createHeaders({
            'Content-Type': 'application/json'
          }),
          status: status
        };
      };
      /**
       * Create a cold response Observable from a factory for ResponseOptions
       * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
       * @param withDelay - if true (default), add simulated latency delay from configuration
       */


      BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) {
          withDelay = true;
        }

        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
      };
      /**
       * Create a cold Observable of ResponseOptions.
       * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
       */


      BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
        var _this = this;

        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (responseObserver) {
          var resOptions;

          try {
            resOptions = resOptionsFactory();
          } catch (error) {
            var err = error.message || error;
            resOptions = _this.createErrorResponseOptions('', _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].INTERNAL_SERVER_ERROR, "" + err);
          }

          var status = resOptions.status;

          try {
            resOptions.statusText = Object(_http_status_codes__WEBPACK_IMPORTED_MODULE_2__["getStatusText"])(status);
          } catch (e) {
            /* ignore failure */
          }

          if (Object(_http_status_codes__WEBPACK_IMPORTED_MODULE_2__["isSuccess"])(status)) {
            responseObserver.next(resOptions);
            responseObserver.complete();
          } else {
            responseObserver.error(resOptions);
          }

          return function () {}; // unsubscribe function
        });
      };

      BackendService.prototype.delete = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            url = _a.url; // tslint:disable-next-line:triple-equals

        if (id == undefined) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }

        var exists = this.removeById(collection, id);
        return {
          headers: headers,
          status: exists || !this.config.delete404 ? _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT : _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND
        };
      };
      /**
       * Find first instance of item in collection by `item.id`
       * @param collection
       * @param id
       */


      BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) {
          return item.id === id;
        });
      };
      /**
       * Generate the next available id for item in this collection
       * Use method from `inMemDbService` if it exists and returns a value,
       * else delegates to `genIdDefault`.
       * @param collection - collection of items with `id` key property
       */


      BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');

        if (genId) {
          var id = genId(collection, collectionName); // tslint:disable-next-line:triple-equals

          if (id != undefined) {
            return id;
          }
        }

        return this.genIdDefault(collection, collectionName);
      };
      /**
       * Default generator of the next available id for item in this collection
       * This default implementation works only for numeric ids.
       * @param collection - collection of items with `id` key property
       * @param collectionName - name of the collection
       */


      BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
          throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }

        var maxId = 0;
        collection.reduce(function (prev, item) {
          maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
      };

      BackendService.prototype.get = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            query = _a.query,
            url = _a.url;
        var data = collection; // tslint:disable-next-line:triple-equals

        if (id != undefined && id !== '') {
          data = this.findById(collection, id);
        } else if (query) {
          data = this.applyQuery(collection, query);
        }

        if (!data) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }

        return {
          body: this.bodify(this.clone(data)),
          headers: headers,
          status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK
        };
      };
      /**
       * Get location info from a url, even on server where `document` is not defined
       */


      BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
          // get the document iff running in browser
          var doc = typeof document === 'undefined' ? undefined : document; // add host info to url before parsing.  Use a fake host when not in browser.

          var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
          url = url.startsWith('/') ? base + url : base + '/' + url;
        }

        return Object(_interfaces__WEBPACK_IMPORTED_MODULE_4__["parseUri"])(url);
      };

      ;
      /**
       * get or create the function that passes unhandled requests
       * through to the "real" backend.
       */

      BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
      };
      /**
       * Get utility methods from this service instance.
       * Useful within an HTTP method override
       */


      BackendService.prototype.getRequestInfoUtils = function () {
        var _this = this;

        return {
          createResponse$: this.createResponse$.bind(this),
          findById: this.findById.bind(this),
          isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
          getConfig: function getConfig() {
            return _this.config;
          },
          getDb: function getDb() {
            return _this.db;
          },
          getJsonBody: this.getJsonBody.bind(this),
          getLocation: this.getLocation.bind(this),
          getPassThruBackend: this.getPassThruBackend.bind(this),
          parseRequestUrl: this.parseRequestUrl.bind(this)
        };
      };

      BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) {
          return item.id === id;
        });
      };
      /** Parse the id as a number. Return original value if not a number. */


      BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
          // Can't confirm that `id` is a numeric type; don't parse as a number
          // or else `'42'` -> `42` and _get by id_ fails.
          return id;
        }

        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
      };
      /**
       * return true if can determine that the collection's `item.id` is a number
       * This implementation can't tell if the collection is empty so it assumes NO
       * */


      BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        return !!(collection && collection[0]) && typeof collection[0].id === 'number';
      };
      /**
       * Parses the request URL into a `ParsedRequestUrl` object.
       * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
       *
       * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
       *   When apiBase=undefined and url='http://localhost/api/collection/42'
       *     {base: 'api/', collectionName: 'collection', id: '42', ...}
       *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
       *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
       *   When apiBase='/' and url='http://localhost/collection'
       *     {base: '/', collectionName: 'collection', id: undefined, ...}
       *
       * The actual api base segment values are ignored. Only the number of segments matters.
       * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
       *
       * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
       */


      BackendService.prototype.parseRequestUrl = function (url) {
        try {
          var loc = this.getLocation(url);
          var drop = this.config.rootPath.length;
          var urlRoot = '';

          if (loc.host !== this.config.host) {
            // url for a server on a different host!
            // assume it's collection is actually here too.
            drop = 1; // the leading slash

            urlRoot = loc.protocol + '//' + loc.host + '/';
          }

          var path = loc.path.substring(drop);
          var pathSegments = path.split('/');
          var segmentIx = 0; // apiBase: the front part of the path devoted to getting to the api route
          // Assumes first path segment if no config.apiBase
          // else ignores as many path segments as are in config.apiBase
          // Does NOT care what the api base chars actually are.

          var apiBase = void 0; // tslint:disable-next-line:triple-equals

          if (this.config.apiBase == undefined) {
            apiBase = pathSegments[segmentIx++];
          } else {
            apiBase = Object(_interfaces__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(this.config.apiBase.trim());

            if (apiBase) {
              segmentIx = apiBase.split('/').length;
            } else {
              segmentIx = 0; // no api base at all; unwise but allowed.
            }
          }

          apiBase += '/';
          var collectionName = pathSegments[segmentIx++]; // ignore anything after a '.' (e.g.,the "json" in "customers.json")

          collectionName = collectionName && collectionName.split('.')[0];
          var id = pathSegments[segmentIx++];
          var query = this.createQueryMap(loc.query);
          var resourceUrl = urlRoot + apiBase + collectionName + '/';
          return {
            apiBase: apiBase,
            collectionName: collectionName,
            id: id,
            query: query,
            resourceUrl: resourceUrl
          };
        } catch (err) {
          var msg = "unable to parse url '" + url + "'; original error: " + err.message;
          throw new Error(msg);
        }
      }; // Create entity
      // Can update an existing entity too if post409 is false.


      BackendService.prototype.post = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            req = _a.req,
            resourceUrl = _a.resourceUrl,
            url = _a.url;
        var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

        if (item.id == undefined) {
          try {
            item.id = id || this.genId(collection, collectionName);
          } catch (err) {
            var emsg = err.message || '';

            if (/id type is non-numeric/.test(emsg)) {
              return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].UNPROCESSABLE_ENTRY, emsg);
            } else {
              console.error(err);
              return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
            }
          }
        }

        if (id && id !== item.id) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].BAD_REQUEST, "Request id does not match item.id");
        } else {
          id = item.id;
        }

        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);

        if (existingIx === -1) {
          collection.push(item);
          headers.set('Location', resourceUrl + '/' + id);
          return {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].CREATED
          };
        } else if (this.config.post409) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        } else {
          collection[existingIx] = item;
          return this.config.post204 ? {
            headers: headers,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT
          } : // successful; no content
          {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK
          }; // successful; return entity
        }
      }; // Update existing entity
      // Can create an entity too if put404 is false.


      BackendService.prototype.put = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            req = _a.req,
            url = _a.url;
        var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

        if (item.id == undefined) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "Missing '" + collectionName + "' id");
        }

        if (id && id !== item.id) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        } else {
          id = item.id;
        }

        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);

        if (existingIx > -1) {
          collection[existingIx] = item;
          return this.config.put204 ? {
            headers: headers,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT
          } : // successful; no content
          {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK
          }; // successful; return entity
        } else if (this.config.put404) {
          // item to update not found; use POST to create new item for this id.
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        } else {
          // create new item for id not found
          collection.push(item);
          return {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].CREATED
          };
        }
      };

      BackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);

        if (ix > -1) {
          collection.splice(ix, 1);
          return true;
        }

        return false;
      };
      /**
       * Tell your in-mem "database" to reset.
       * returns Observable of the database because resetting it could be async
       */


      BackendService.prototype.resetDb = function (reqInfo) {
        var _this = this;

        this.dbReadySubject.next(false);
        var db = this.inMemDbService.createDb(reqInfo);
        var db$ = db instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? db : typeof db.then === 'function' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(db) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(db);
        db$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (d) {
          _this.db = d;

          _this.dbReadySubject.next(true);
        });
        return this.dbReady;
      };

      return BackendService;
    }(); //# sourceMappingURL=backend.service.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js ***!
    \*******************************************************************************/

  /*! exports provided: delayResponse */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__DelayResponseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "delayResponse", function () {
      return delayResponse;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Replaces use of RxJS delay. See v0.5.4.

    /** adds specified delay (in ms) to both next and error channels of the response observable */


    function delayResponse(response$, delayMs) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
          nextPending = true;
          setTimeout(function () {
            observer.next(value);

            if (completePending) {
              observer.complete();
            }
          }, delayMs);
        }, function (error) {
          return setTimeout(function () {
            return observer.error(error);
          }, delayMs);
        }, function () {
          completePending = true;

          if (!nextPending) {
            observer.complete();
          }
        });
        return function () {
          return subscription.unsubscribe();
        };
      });
    } //# sourceMappingURL=delay-response.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js ***!
    \********************************************************************************************/

  /*! exports provided: HttpClientBackendService */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__HttpClientBackendServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientBackendService", function () {
      return HttpClientBackendService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-status-codes */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };
    /**
     * For Angular `HttpClient` simulate the behavior of a RESTy web api
     * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
     * Conforms mostly to behavior described here:
     * http://www.restapitutorial.com/lessons/httpmethods.html
     *
     * ### Usage
     *
     * Create an in-memory data store class that implements `InMemoryDbService`.
     * Call `config` static method with this service class and optional configuration object:
     * ```
     * // other imports
     * import { HttpClientModule } from '@angular/common/http';
     * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
     *
     * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
     * @NgModule({
     *  imports: [
     *    HttpModule,
     *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
     *    ...
     *  ],
     *  ...
     * })
     * export class AppModule { ... }
     * ```
     */


    var HttpClientBackendService =
    /** @class */
    function (_super) {
      __extends(HttpClientBackendService, _super);

      function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;

        _this.xhrFactory = xhrFactory;
        return _this;
      }

      HttpClientBackendService.prototype.handle = function (req) {
        try {
          return this.handleRequest(req);
        } catch (error) {
          var err = error.message || error;
          var resOptions_1 = this.createErrorResponseOptions(req.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].INTERNAL_SERVER_ERROR, "" + err);
          return this.createResponse$(function () {
            return resOptions_1;
          });
        }
      }; ////  protected overrides /////


      HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
      };

      HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
      };

      HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
      };

      HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map = new Map();

        if (search) {
          var params_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromString: search
          });
          params_1.keys().forEach(function (p) {
            return map.set(p, params_1.getAll(p));
          });
        }

        return map;
      };

      HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return resOptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (opts) {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](opts);
        }));
      };

      HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpXhrBackend"](this.xhrFactory);
        } catch (ex) {
          ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
          throw ex;
        }
      };

      HttpClientBackendService = __decorate([__param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __metadata("design:paramtypes", [_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfigArgs"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]])], HttpClientBackendService);

      HttpClientBackendService.ɵfac = function HttpClientBackendService_Factory(t) {
        return new (t || HttpClientBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryDbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]));
      };

      HttpClientBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpClientBackendService,
        factory: function factory(t) {
          return HttpClientBackendService.ɵfac(t);
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientBackendService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryDbService"]
          }, {
            type: _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfigArgs"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"]]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]
          }];
        }, null);
      })();

      return HttpClientBackendService;
    }(_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]); //# sourceMappingURL=http-client-backend.service.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js ***!
    \*****************************************************************************************************/

  /*! exports provided: httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__HttpClientInMemoryWebApiModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpClientInMemBackendServiceFactory", function () {
      return httpClientInMemBackendServiceFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientInMemoryWebApiModule", function () {
      return HttpClientInMemoryWebApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony import */


    var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-client-backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js"); ////// HttpClient-Only version ////


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }; // Internal - Creates the in-mem backend for the HttpClient module
    // AoT requires factory to be exported


    function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
      var backend = new _http_client_backend_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientBackendService"](dbService, options, xhrFactory);
      return backend;
    }

    var HttpClientInMemoryWebApiModule =
    /** @class */
    function () {
      function HttpClientInMemoryWebApiModule() {}

      HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
      /**
      *  Redirect the Angular `HttpClient` XHR calls
      *  to in-memory data store that implements `InMemoryDbService`.
      *  with class that implements InMemoryDbService and creates an in-memory database.
      *
      *  Usually imported in the root application module.
      *  Can import in a lazy feature module too, which will shadow modules loaded earlier
      *
      * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
      * @param {InMemoryBackendConfigArgs} [options]
      *
      * @example
      * HttpInMemoryWebApiModule.forRoot(dbCreator);
      * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
      */

      HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
          ngModule: HttpClientInMemoryWebApiModule_1,
          providers: [{
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"],
            useClass: dbCreator
          }, {
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"],
            useValue: options
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"],
            useFactory: httpClientInMemBackendServiceFactory,
            deps: [_interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]]
          }]
        };
      };
      /**
      *
      * Enable and configure the in-memory web api in a lazy-loaded feature module.
      * Same as `forRoot`.
      * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
      */


      HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
      };

      var HttpClientInMemoryWebApiModule_1;
      HttpClientInMemoryWebApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HttpClientInMemoryWebApiModule
      });
      HttpClientInMemoryWebApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HttpClientInMemoryWebApiModule_Factory(t) {
          return new (t || HttpClientInMemoryWebApiModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientInMemoryWebApiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], function () {
          return [];
        }, null);
      })();

      return HttpClientInMemoryWebApiModule;
    }(); //# sourceMappingURL=http-client-in-memory-web-api.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js ***!
    \**********************************************************************************/

  /*! exports provided: STATUS, STATUS_CODE_INFO, getStatusText, isSuccess */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__HttpStatusCodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STATUS", function () {
      return STATUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STATUS_CODE_INFO", function () {
      return STATUS_CODE_INFO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStatusText", function () {
      return getStatusText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSuccess", function () {
      return isSuccess;
    });

    var STATUS = {
      CONTINUE: 100,
      SWITCHING_PROTOCOLS: 101,
      OK: 200,
      CREATED: 201,
      ACCEPTED: 202,
      NON_AUTHORITATIVE_INFORMATION: 203,
      NO_CONTENT: 204,
      RESET_CONTENT: 205,
      PARTIAL_CONTENT: 206,
      MULTIPLE_CHOICES: 300,
      MOVED_PERMANTENTLY: 301,
      FOUND: 302,
      SEE_OTHER: 303,
      NOT_MODIFIED: 304,
      USE_PROXY: 305,
      TEMPORARY_REDIRECT: 307,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      PAYMENT_REQUIRED: 402,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      METHOD_NOT_ALLOWED: 405,
      NOT_ACCEPTABLE: 406,
      PROXY_AUTHENTICATION_REQUIRED: 407,
      REQUEST_TIMEOUT: 408,
      CONFLICT: 409,
      GONE: 410,
      LENGTH_REQUIRED: 411,
      PRECONDITION_FAILED: 412,
      PAYLOAD_TO_LARGE: 413,
      URI_TOO_LONG: 414,
      UNSUPPORTED_MEDIA_TYPE: 415,
      RANGE_NOT_SATISFIABLE: 416,
      EXPECTATION_FAILED: 417,
      IM_A_TEAPOT: 418,
      UPGRADE_REQUIRED: 426,
      INTERNAL_SERVER_ERROR: 500,
      NOT_IMPLEMENTED: 501,
      BAD_GATEWAY: 502,
      SERVICE_UNAVAILABLE: 503,
      GATEWAY_TIMEOUT: 504,
      HTTP_VERSION_NOT_SUPPORTED: 505,
      PROCESSING: 102,
      MULTI_STATUS: 207,
      IM_USED: 226,
      PERMANENT_REDIRECT: 308,
      UNPROCESSABLE_ENTRY: 422,
      LOCKED: 423,
      FAILED_DEPENDENCY: 424,
      PRECONDITION_REQUIRED: 428,
      TOO_MANY_REQUESTS: 429,
      REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
      UNAVAILABLE_FOR_LEGAL_REASONS: 451,
      VARIANT_ALSO_NEGOTIATES: 506,
      INSUFFICIENT_STORAGE: 507,
      NETWORK_AUTHENTICATION_REQUIRED: 511
    };
    /*tslint:disable:quotemark max-line-length one-line */

    var STATUS_CODE_INFO = {
      '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
      },
      '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
      },
      '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
      },
      '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
      },
      '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
      },
      '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
      },
      '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
      },
      '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
      },
      '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
      },
      '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
      },
      '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
      },
      '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
      },
      '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
      },
      '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
      },
      '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
      },
      '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
      },
      '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
      },
      '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
      },
      '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
      },
      '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
      },
      '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
      },
      '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
      },
      '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
      },
      '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
      },
      '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
      },
      '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
      },
      '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
      },
      '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
      },
      '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
      },
      '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
      },
      '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
      },
      '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
      },
      '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
      },
      '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
      },
      '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
      },
      '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
      },
      '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
      },
      '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
      },
      '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
      },
      '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
      },
      '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
      },
      '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
      },
      '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
      },
      '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
      },
      '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
      },
      '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
      },
      '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
      },
      '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
      },
      '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
      },
      '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
      },
      '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
      },
      '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
      },
      '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
      },
      '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
      },
      '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
      },
      '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
      }
    };
    /**
     * get the status text from StatusCode
     */

    function getStatusText(status) {
      return STATUS_CODE_INFO[status].text || 'Unknown Status';
    }
    /**
     * Returns true if the the Http Status Code is 200-299 (success)
     */


    function isSuccess(status) {
      return status >= 200 && status < 300;
    }

    ; //# sourceMappingURL=http-status-codes.js.map

    /***/
  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js ***!
    \*****************************************************************************************/

  /*! exports provided: InMemoryWebApiModule */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__InMemoryWebApiModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryWebApiModule", function () {
      return InMemoryWebApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony import */


    var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-client-in-memory-web-api.module */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js"); ////// For apps with both Http and HttpClient ////


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var InMemoryWebApiModule =
    /** @class */
    function () {
      function InMemoryWebApiModule() {}

      InMemoryWebApiModule_1 = InMemoryWebApiModule;
      /**
      *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
      *  to in-memory data store that implements `InMemoryDbService`.
      *  with class that implements InMemoryDbService and creates an in-memory database.
      *
      *  Usually imported in the root application module.
      *  Can import in a lazy feature module too, which will shadow modules loaded earlier
      *
      * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
      * @param {InMemoryBackendConfigArgs} [options]
      *
      * @example
      * InMemoryWebApiModule.forRoot(dbCreator);
      * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
      */

      InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
          ngModule: InMemoryWebApiModule_1,
          providers: [{
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"],
            useClass: dbCreator
          }, {
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"],
            useValue: options
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"],
            useFactory: _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__["httpClientInMemBackendServiceFactory"],
            deps: [_interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]]
          }]
        };
      };
      /**
       *
       * Enable and configure the in-memory web api in a lazy-loaded feature module.
       * Same as `forRoot`.
       * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
       */


      InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule_1.forRoot(dbCreator, options);
      };

      var InMemoryWebApiModule_1;
      InMemoryWebApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InMemoryWebApiModule
      });
      InMemoryWebApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InMemoryWebApiModule_Factory(t) {
          return new (t || InMemoryWebApiModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryWebApiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], function () {
          return [];
        }, null);
      })();

      return InMemoryWebApiModule;
    }(); //# sourceMappingURL=in-memory-web-api.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js ***!
    \**********************************************************************/

  /*! exports provided: BackendService, STATUS, STATUS_CODE_INFO, getStatusText, isSuccess, HttpClientBackendService, InMemoryWebApiModule, httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule, InMemoryDbService, InMemoryBackendConfigArgs, InMemoryBackendConfig, parseUri, removeTrailingSlash */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return _backend_service__WEBPACK_IMPORTED_MODULE_0__["BackendService"];
    });
    /* harmony import */


    var _http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./http-status-codes */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "STATUS", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["STATUS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "STATUS_CODE_INFO", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["STATUS_CODE_INFO"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStatusText", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["getStatusText"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSuccess", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["isSuccess"];
    });
    /* harmony import */


    var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http-client-backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientBackendService", function () {
      return _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientBackendService"];
    });
    /* harmony import */


    var _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./in-memory-web-api.module */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryWebApiModule", function () {
      return _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"];
    });
    /* harmony import */


    var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./http-client-in-memory-web-api.module */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "httpClientInMemBackendServiceFactory", function () {
      return _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__["httpClientInMemBackendServiceFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientInMemoryWebApiModule", function () {
      return _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"];
    });
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDbService", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryDbService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfigArgs", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfigArgs"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfig", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseUri", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["parseUri"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["removeTrailingSlash"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js ***!
    \***************************************************************************/

  /*! exports provided: InMemoryDbService, InMemoryBackendConfigArgs, InMemoryBackendConfig, parseUri, removeTrailingSlash */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__InterfacesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDbService", function () {
      return InMemoryDbService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfigArgs", function () {
      return InMemoryBackendConfigArgs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfig", function () {
      return InMemoryBackendConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseUri", function () {
      return parseUri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function () {
      return removeTrailingSlash;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
    * Interface for a class that creates an in-memory database
    *
    * Its `createDb` method creates a hash of named collections that represents the database
    *
    * For maximum flexibility, the service may define HTTP method overrides.
    * Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
    * If a request has a matching method, it will be called as in
    * `get(info: requestInfo, db: {})` where `db` is the database object described above.
    */


    var InMemoryDbService =
    /** @class */
    function () {
      function InMemoryDbService() {}

      return InMemoryDbService;
    }();
    /**
    * Interface for InMemoryBackend configuration options
    */


    var InMemoryBackendConfigArgs =
    /** @class */
    function () {
      function InMemoryBackendConfigArgs() {}

      return InMemoryBackendConfigArgs;
    }(); /////////////////////////////////

    /**
    *  InMemoryBackendService configuration options
    *  Usage:
    *    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
    *
    *  or if providing separately:
    *    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
    */


    var InMemoryBackendConfig =
    /** @class */
    function () {
      function InMemoryBackendConfig(config) {
        if (config === void 0) {
          config = {};
        }

        Object.assign(this, {
          // default config:
          caseSensitiveSearch: false,
          dataEncapsulation: false,
          delay: 500,
          delete404: false,
          passThruUnknownUrl: false,
          post204: true,
          post409: false,
          put204: true,
          put404: false,
          apiBase: undefined,
          host: undefined,
          rootPath: undefined // default value is actually set in InMemoryBackendService ctor

        }, config);
      }

      InMemoryBackendConfig = __decorate([__metadata("design:paramtypes", [InMemoryBackendConfigArgs])], InMemoryBackendConfig);

      InMemoryBackendConfig.ɵfac = function InMemoryBackendConfig_Factory(t) {
        return new (t || InMemoryBackendConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InMemoryBackendConfigArgs));
      };

      InMemoryBackendConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InMemoryBackendConfig,
        factory: function factory(t) {
          return InMemoryBackendConfig.ɵfac(t);
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryBackendConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: InMemoryBackendConfigArgs
          }];
        }, null);
      })();

      return InMemoryBackendConfig;
    }();
    /** Return information (UriInfo) about a URI  */


    function parseUri(str) {
      // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
      // tslint:disable-next-line:max-line-length
      var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var m = URL_REGEX.exec(str);
      var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
      };
      var keys = Object.keys(uri);
      var i = keys.length;

      while (i--) {
        uri[keys[i]] = m[i] || '';
      }

      return uri;
    }

    function removeTrailingSlash(path) {
      return path.replace(/\/$/, '');
    } //# sourceMappingURL=interfaces.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
    \*************************************************************************/

  /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

  /***/
  function node_modulesNgxPagination__ivy_ngcc__DistNgxPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DEFAULT_STYLES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DEFAULT_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
      return NgxPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
      return PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
      return PaginationControlsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r819 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r819);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.previous();
        })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r819);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r816 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r816.previousLabel + " " + ctx_r816.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r816.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r816.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r817.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r817.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r811.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r811.getCurrent());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.isFirstPage());
      }
    }

    function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r826 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r826);

          var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.setCurrent(page_r821.value);
        })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r826);

          var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.setCurrent(page_r821.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r822 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r822.screenReaderPageLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r821.label === "..." ? page_r821.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r821.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r823 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r823.screenReaderCurrentLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r821.label === "..." ? page_r821.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r821.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r821 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r811.getCurrent() === page_r821.value)("ellipsis", page_r821.label === "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.getCurrent() !== page_r821.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.getCurrent() === page_r821.value);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r834 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r834);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.next();
        })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r834);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r831 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r831.nextLabel + " " + ctx_r831.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r831.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r831.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r832 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r832.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r832.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r811.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r811.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.isLastPage());
      }
    }

    function PaginationControlsComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r812 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r812.responsive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r812.screenReaderPaginationLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r812.directionLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r811.getCurrent(), " / ", _r811.getLastPage(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r811.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r812.directionLinks);
      }
    }

    var PaginationService =
    /** @class */
    function () {
      function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
      }

      PaginationService.prototype.defaultId = function () {
        return this.DEFAULT_ID;
      };
      /**
       * Register a PaginationInstance with this service. Returns a
       * boolean value signifying whether the instance is new or
       * updated (true = new or updated, false = unchanged).
       */


      PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
          instance.id = this.DEFAULT_ID;
        }

        if (!this.instances[instance.id]) {
          this.instances[instance.id] = instance;
          return true;
        } else {
          return this.updateInstance(instance);
        }
      };
      /**
       * Check each property of the instance and update any that have changed. Return
       * true if any changes were made, else return false.
       */


      PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;

        for (var prop in this.instances[instance.id]) {
          if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
          }
        }

        return changed;
      };
      /**
       * Returns the current page number.
       */


      PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
          return this.instances[id].currentPage;
        }
      };
      /**
       * Sets the current page number.
       */


      PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
          var instance = this.instances[id];
          var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (page <= maxPage && 1 <= page) {
            this.instances[id].currentPage = page;
            this.change.emit(id);
          }
        }
      };
      /**
       * Sets the value of instance.totalItems
       */


      PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
          this.instances[id].totalItems = totalItems;
          this.change.emit(id);
        }
      };
      /**
       * Sets the value of instance.itemsPerPage.
       */


      PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
          this.instances[id].itemsPerPage = itemsPerPage;
          this.change.emit(id);
        }
      };
      /**
       * Returns a clone of the pagination instance object matching the id. If no
       * id specified, returns the instance corresponding to the default id.
       */


      PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) {
          id = this.DEFAULT_ID;
        }

        if (this.instances[id]) {
          return this.clone(this.instances[id]);
        }

        return {};
      };
      /**
       * Perform a shallow clone of an object.
       */


      PaginationService.prototype.clone = function (obj) {
        var target = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }

        return target;
      };

      PaginationService.ɵfac = function PaginationService_Factory(t) {
        return new (t || PaginationService)();
      };

      PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PaginationService,
        factory: function factory(t) {
          return PaginationService.ɵfac(t);
        }
      });
      return PaginationService;
    }();

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

    var PaginatePipe =
    /** @class */
    function () {
      function PaginatePipe(service) {
        this.service = service; // store the values from the last time the pipe was invoked

        this.state = {};
      }

      PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
          var _id = args.id || this.service.defaultId();

          if (this.state[_id]) {
            return this.state[_id].slice;
          } else {
            return collection;
          }
        }

        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);

        if (!serverSideMode && collection instanceof Array) {
          perPage = +perPage || LARGE_NUMBER;
          start = (instance.currentPage - 1) * perPage;
          end = start + perPage;
          var isIdentical = this.stateIsIdentical(id, collection, start, end);

          if (isIdentical) {
            return this.state[id].slice;
          } else {
            var slice = collection.slice(start, end);
            this.saveState(id, collection, slice, start, end);
            this.service.change.emit(id);
            return slice;
          }
        } else {
          if (emitChange) {
            this.service.change.emit(id);
          } // save the state for server-side collection to avoid null
          // flash as new data loads.


          this.saveState(id, collection, collection, start, end);
          return collection;
        }
      };
      /**
       * Create an PaginationInstance object, using defaults for any optional properties not supplied.
       */


      PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
          id: config.id != null ? config.id : this.service.defaultId(),
          itemsPerPage: +config.itemsPerPage || 0,
          currentPage: +config.currentPage || 1,
          totalItems: +config.totalItems || collection.length
        };
      };
      /**
       * Ensure the argument passed to the filter contains the required properties.
       */


      PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) {
          return !(prop in config);
        });

        if (0 < missing.length) {
          throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
      };
      /**
       * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
       * array for a given id. This means that the next time the pipe is run on this collection & id, we just
       * need to check that the collection, start and end points are all identical, and if so, return the
       * last sliced array.
       */


      PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
          collection: collection,
          size: collection.length,
          slice: slice,
          start: start,
          end: end
        };
      };
      /**
       * For a given id, returns true if the collection, size, start and end values are identical.
       */


      PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];

        if (!state) {
          return false;
        }

        var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

        if (!isMetaDataIdentical) {
          return false;
        }

        return state.slice.every(function (element, index) {
          return element === collection[start + index];
        });
      };

      PaginatePipe = __decorate$1([__metadata("design:paramtypes", [PaginationService])], PaginatePipe);

      PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
        return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService));
      };

      PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "paginate",
        type: PaginatePipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'paginate',
            pure: false
          }]
        }], function () {
          return [{
            type: PaginationService
          }];
        }, null);
      })();

      return PaginatePipe;
    }();
    /**
     * The default template and styles for the pagination links are borrowed directly
     * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
     */


    var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
    var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function coerceToBoolean(input) {
      return !!input && input !== 'false';
    }
    /**
     * The default pagination controls component. Actually just a default implementation of a custom template.
     */


    var PaginationControlsComponent =
    /** @class */
    function () {
      function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
      }

      Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function get() {
          return this._responsive;
        },
        set: function set(value) {
          this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
        return new (t || PaginationControlsComponent)();
      };

      PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationControlsComponent,
        selectors: [["pagination-controls"]],
        inputs: {
          maxSize: "maxSize",
          previousLabel: "previousLabel",
          nextLabel: "nextLabel",
          screenReaderPaginationLabel: "screenReaderPaginationLabel",
          screenReaderPageLabel: "screenReaderPageLabel",
          screenReaderCurrentLabel: "screenReaderCurrentLabel",
          directionLinks: "directionLinks",
          autoHide: "autoHide",
          responsive: "responsive",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]],
        template: function PaginationControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
              return ctx.pageChange.emit($event);
            })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
              return ctx.pageBoundsCorrection.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r811.pages.length <= 1));
          }
        },
        directives: function directives() {
          return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]];
        },
        styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsComponent;
    }();

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
     * This directive is what powers all pagination controls components, including the default one.
     * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
     * with the pagination controls.
     */


    var PaginationControlsDirective =
    /** @class */
    function () {
      function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;

        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change.subscribe(function (id) {
          if (_this.id === id) {
            _this.updatePageLinks();

            _this.changeDetectorRef.markForCheck();

            _this.changeDetectorRef.detectChanges();
          }
        });
      }

      PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
          this.id = this.service.defaultId();
        }

        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
      };
      /**
       * Go to the previous page
       */


      PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
      };
      /**
       * Go to the next page
       */


      PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
      };
      /**
       * Returns true if current page is first page
       */


      PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
      };
      /**
       * Returns true if current page is last page
       */


      PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
      };
      /**
       * Set the current page number.
       */


      PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
      };
      /**
       * Get the current page number.
       */


      PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
      };
      /**
       * Returns the last page number
       */


      PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);

        if (inst.totalItems < 1) {
          // when there are 0 or fewer (an error case) items, there are no "pages" as such,
          // but it makes sense to consider a single, empty page as the last page.
          return 1;
        }

        return Math.ceil(inst.totalItems / inst.itemsPerPage);
      };

      PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
      };

      PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
          console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
      };
      /**
       * Updates the page links and checks that the current page is valid. Should run whenever the
       * PaginationService.change stream emits a value matching the current ID, or when any of the
       * input values changes.
       */


      PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;

        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);

        if (correctedCurrentPage !== inst.currentPage) {
          setTimeout(function () {
            _this.pageBoundsCorrection.emit(correctedCurrentPage);

            _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
          });
        } else {
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
      };
      /**
       * Checks that the instance.currentPage property is within bounds for the current page range.
       * If not, return a correct value for currentPage, or the current value if OK.
       */


      PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

        if (totalPages < instance.currentPage && 0 < totalPages) {
          return totalPages;
        } else if (instance.currentPage < 1) {
          return 1;
        }

        return instance.currentPage;
      };
      /**
       * Returns an array of Page objects to use in the pagination controls.
       */


      PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;

        while (i <= totalPages && i <= paginationRange) {
          var label = void 0;
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
          var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
          } else {
            label = pageNumber;
          }

          pages.push({
            label: label,
            value: pageNumber
          });
          i++;
        }

        return pages;
      };
      /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */


      PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);

        if (i === paginationRange) {
          return totalPages;
        } else if (i === 1) {
          return i;
        } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
          } else {
            return i;
          }
        } else {
          return i;
        }
      };

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsDirective = __decorate$3([__metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);

      PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
        return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PaginationControlsDirective,
        selectors: [["pagination-template"], ["", "pagination-template", ""]],
        inputs: {
          maxSize: "maxSize",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        exportAs: ["paginationApi"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
          }]
        }], function () {
          return [{
            type: PaginationService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsDirective;
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxPaginationModule =
    /** @class */
    function () {
      function NgxPaginationModule() {}

      NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxPaginationModule
      });
      NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxPaginationModule_Factory(t) {
          return new (t || NgxPaginationModule)();
        },
        providers: [PaginationService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, {
          declarations: function declarations() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return NgxPaginationModule;
    }();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-pagination.js.map

    /***/

  },

  /***/
  "./src/app/pages/users/user-dialog/user-dialog.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/users/user-dialog/user-dialog.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserDialogComponent */

  /***/
  function srcAppPagesUsersUserDialogUserDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function () {
      return UserDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.model */
    "./src/app/pages/users/user.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    function UserDialogComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username isn't long enough, minimum of 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password isn't long enough, minimum of 6 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_p_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r48.user.settings.registrationDate, "dd MMMM, yyyy 'at' HH:mm"));
      }
    }

    function UserDialogComponent_p_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last joined date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r49.user.settings.joinedDate, "dd MMMM, yyyy 'at' HH:mm"));
      }
    }

    function UserDialogComponent_mat_option_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", color_r53.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", color_r53.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r53.viewValue);
      }
    }

    function UserDialogComponent_span_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDialogComponent_span_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserDialogComponent =
    /*#__PURE__*/
    function () {
      function UserDialogComponent(dialogRef, user, fb) {
        _classCallCheck(this, UserDialogComponent);

        this.dialogRef = dialogRef;
        this.user = user;
        this.fb = fb;
        this.passwordHide = true;
        this.colors = [{
          value: 'gradient-purple',
          viewValue: 'Purple'
        }, {
          value: 'gradient-indigo',
          viewValue: 'Indigo'
        }, {
          value: 'gradient-teal',
          viewValue: 'Teal'
        }, {
          value: 'gradient-blue',
          viewValue: 'Blue'
        }, {
          value: 'gradient-orange',
          viewValue: 'Orange'
        }, {
          value: 'gradient-green',
          viewValue: 'Green'
        }, {
          value: 'gradient-pink',
          viewValue: 'Pink'
        }, {
          value: 'gradient-red',
          viewValue: 'Red'
        }, {
          value: 'gradient-amber',
          viewValue: 'Amber'
        }, {
          value: 'gradient-gray',
          viewValue: 'Gray'
        }, {
          value: 'gradient-brown',
          viewValue: 'Brown'
        }, {
          value: 'gradient-lime',
          viewValue: 'Lime'
        }];
        this.form = this.fb.group({
          id: null,
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
          profile: this.fb.group({
            name: null,
            surname: null,
            birthday: null,
            gender: null,
            image: null
          }),
          work: this.fb.group({
            company: null,
            position: null,
            salary: null
          }),
          contacts: this.fb.group({
            email: null,
            phone: null,
            address: null
          }),
          social: this.fb.group({
            facebook: null,
            twitter: null,
            google: null
          }),
          settings: this.fb.group({
            isActive: null,
            isDeleted: null,
            registrationDate: null,
            joinedDate: null,
            bgColor: null
          })
        });
      }

      _createClass(UserDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.user) {
            this.form.setValue(this.user);
          } else {
            this.user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
            this.user.profile = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserProfile"]();
            this.user.work = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserWork"]();
            this.user.contacts = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserContacts"]();
            this.user.social = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserSocial"]();
            this.user.settings = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserSettings"]();
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return UserDialogComponent;
    }();

    UserDialogComponent.ɵfac = function UserDialogComponent_Factory(t) {
      return new (t || UserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    UserDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDialogComponent,
      selectors: [["app-user-dialog"]],
      decls: 90,
      vars: 18,
      consts: [["mat-dialog-title", ""], [4, "ngIf"], ["mat-dialog-content", ""], [1, "user-form", 3, "formGroup"], [1, "vertical-tabs"], ["label", "Basic"], ["fxLayout", "column", 1, "form-field-outer"], [1, "w-100"], ["matInput", "", "formControlName", "username", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["label", "Personal", "formGroupName", "profile"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], ["matInput", "", "placeholder", "Surname", "formControlName", "surname"], ["matInput", "", "placeholder", "Birthday", "formControlName", "birthday", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["birthday", ""], ["formControlName", "gender"], ["value", "male", "labelPosition", "before"], ["value", "female", "labelPosition", "before"], ["matInput", "", "placeholder", "Image url", "formControlName", "image"], ["label", "Work", "formGroupName", "work"], ["matInput", "", "placeholder", "Company", "formControlName", "company"], ["matInput", "", "placeholder", "Position", "formControlName", "position"], ["matInput", "", "placeholder", "Salary", "formControlName", "salary"], ["matPrefix", ""], ["matSuffix", ""], ["label", "Contacts", "formGroupName", "contacts"], ["matInput", "", "placeholder", "Email", "formControlName", "email"], ["matInput", "", "placeholder", "Phone", "formControlName", "phone"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], ["label", "Social life", "formGroupName", "social"], ["matInput", "", "placeholder", "Facebook", "formControlName", "facebook"], ["matInput", "", "placeholder", "Twitter", "formControlName", "twitter"], ["matInput", "", "placeholder", "Google", "formControlName", "google"], ["label", "Settings", "formGroupName", "settings"], ["formControlName", "isActive", 1, "pb-3"], ["formControlName", "isDeleted", 1, "pb-3"], ["class", "pb-3", 4, "ngIf"], ["placeholder", "Choose bg color", "formControlName", "bgColor", "name", "bgColor"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "pb-3"], [1, "mx-1"], [3, "value"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "p-2", 3, "ngClass"], [1, "mx-3"]],
      template: function UserDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDialogComponent_span_1_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDialogComponent_span_2_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-placeholder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserDialogComponent_mat_error_15_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserDialogComponent_mat_error_16_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-placeholder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "vpn_key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDialogComponent_Template_mat_icon_click_23_listener($event) {
            return ctx.passwordHide = !ctx.passwordHide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserDialogComponent_mat_error_25_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserDialogComponent_mat_error_26_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-radio-group", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-radio-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-radio-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-tab", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "$\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-tab", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-tab", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-tab", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-checkbox", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-checkbox", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Blocked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, UserDialogComponent_p_79_Template, 6, 4, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, UserDialogComponent_p_80_Template, 6, 4, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, UserDialogComponent_mat_option_83_Template, 5, 3, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, UserDialogComponent_span_86_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, UserDialogComponent_span_87_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDialogComponent_Template_button_click_88_listener($event) {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.username.hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility" : "visibility_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.password.hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.form.value)("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPlaceholder"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".user-form[_ngcontent-%COMP%]   .form-field-outer[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.user-form[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1kaWFsb2cvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXItZGlhbG9nXFx1c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2VyLWRpYWxvZy91c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWZvcm17XHJcbiAgICAuZm9ybS1maWVsZC1vdXRlcntcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LXJhZGlvLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbn0iLCIudXNlci1mb3JtIC5mb3JtLWZpZWxkLW91dGVyIHtcbiAgd2lkdGg6IDI4MHB4O1xufVxuLnVzZXItZm9ybSAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-dialog',
          templateUrl: './user-dialog.component.html',
          styleUrls: ['./user-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _user_model__WEBPACK_IMPORTED_MODULE_3__["User"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/users/user.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/users/user.model.ts ***!
    \*******************************************/

  /*! exports provided: User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings */

  /***/
  function srcAppPagesUsersUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfile", function () {
      return UserProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserWork", function () {
      return UserWork;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserContacts", function () {
      return UserContacts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSocial", function () {
      return UserSocial;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettings", function () {
      return UserSettings;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };

    var UserProfile = function UserProfile() {
      _classCallCheck(this, UserProfile);
    };

    var UserWork = function UserWork() {
      _classCallCheck(this, UserWork);
    };

    var UserContacts = function UserContacts() {
      _classCallCheck(this, UserContacts);
    };

    var UserSocial = function UserSocial() {
      _classCallCheck(this, UserSocial);
    };

    var UserSettings = function UserSettings() {
      _classCallCheck(this, UserSettings);
    };
    /***/

  },

  /***/
  "./src/app/pages/users/users.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/users/users.component.ts ***!
    \************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppPagesUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/pages/users/users.service.ts");
    /* harmony import */


    var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-dialog/user-dialog.component */
    "./src/app/pages/users/user-dialog/user-dialog.component.ts");
    /* harmony import */


    var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/content-header/content-header.component */
    "./src/app/shared/content-header/content-header.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _theme_pipes_search_user_search_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../theme/pipes/search/user-search.pipe */
    "./src/app/theme/pipes/search/user-search.pipe.ts");

    function UsersComponent_div_20_div_1_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
      }

      if (rf & 2) {
        var user_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r59.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UsersComponent_div_20_div_1_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }

      if (rf & 2) {
        var user_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r59.settings.isDeleted);
      }
    }

    function UsersComponent_div_20_div_1_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_20_div_1_h4_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r59.profile.name, " ", user_r59.profile.surname, "");
      }
    }

    function UsersComponent_div_20_div_1_h4_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User blocked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_20_div_1_span_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_20_div_1_span_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unblock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_div_20_div_1_img_4_Template, 1, 3, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersComponent_div_20_div_1_img_5_Template, 1, 2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersComponent_div_20_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UsersComponent_div_20_div_1_h4_19_Template, 2, 2, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsersComponent_div_20_div_1_h4_20_Template, 2, 0, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-menu", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function UsersComponent_div_20_div_1_Template_span_mouseleave_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          return _r65.closeMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_Template_button_click_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var user_r59 = ctx.$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r74.openUserDialog(user_r59);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_Template_button_click_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var user_r59 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r75.deleteUser(user_r59);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_Template_button_click_38_listener($event) {
          var user_r59 = ctx.$implicit;
          return user_r59.settings.isDeleted = !user_r59.settings.isDeleted;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UsersComponent_div_20_div_1_span_41_Template, 2, 0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UsersComponent_div_20_div_1_span_42_Template, 2, 0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "card_membership");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "mail_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "call");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "location_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r59 = ctx.$implicit;

        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", user_r59.settings.isDeleted ? "" : user_r59.settings.bgColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r59.profile.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r59.profile.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.facebook.com/" + user_r59.social.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://twitter.com/" + user_r59.social.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://plus.google.com/" + user_r59.social.google, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r59.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r59.work.position);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r59.contacts.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r59.contacts.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r59.contacts.address);
      }
    }

    var _c0 = function _c0(a1) {
      return {
        itemsPerPage: 6,
        currentPage: a1
      };
    };

    function UsersComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_20_div_1_Template, 65, 20, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "UserSearchPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r54.users, ctx_r54.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r54.page)));
      }
    }

    function UsersComponent_div_21_div_1_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
      }

      if (rf & 2) {
        var user_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r78.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UsersComponent_div_21_div_1_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }

      if (rf & 2) {
        var user_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r78.settings.isDeleted);
      }
    }

    function UsersComponent_div_21_div_1_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_21_div_1_h4_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r78.profile.name, " ", user_r78.profile.surname, "");
      }
    }

    function UsersComponent_div_21_div_1_h4_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User blocked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_21_div_1_span_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_21_div_1_span_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unblock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_21_div_1_mat_icon_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "person_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_21_div_1_mat_icon_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_div_21_div_1_img_4_Template, 1, 3, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersComponent_div_21_div_1_img_5_Template, 1, 2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersComponent_div_21_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsersComponent_div_21_div_1_h4_20_Template, 2, 2, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UsersComponent_div_21_div_1_h4_21_Template, 2, 0, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function UsersComponent_div_21_div_1_Template_span_mouseleave_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          return _r84.closeMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_21_div_1_Template_button_click_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var user_r78 = ctx.$implicit;

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r95.openUserDialog(user_r78);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_21_div_1_Template_button_click_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var user_r78 = ctx.$implicit;

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r96.deleteUser(user_r78);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_21_div_1_Template_button_click_39_listener($event) {
          var user_r78 = ctx.$implicit;
          return user_r78.settings.isDeleted = !user_r78.settings.isDeleted;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "block");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UsersComponent_div_21_div_1_span_42_Template, 2, 0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UsersComponent_div_21_div_1_span_43_Template, 2, 0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "business");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "card_membership");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "mail_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "call");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "location_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "event_available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "date_range");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, UsersComponent_div_21_div_1_mat_icon_91_Template, 2, 0, "mat-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, UsersComponent_div_21_div_1_mat_icon_92_Template, 2, 0, "mat-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r78 = ctx.$implicit;

        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", user_r78.settings.isDeleted ? "" : user_r78.settings.bgColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r78.profile.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r78.profile.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.facebook.com/" + user_r78.social.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://twitter.com/" + user_r78.social.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://plus.google.com/" + user_r78.social.google, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.work.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.work.position);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.work.salary);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.contacts.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.contacts.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.contacts.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blocked", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Registration ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 29, user_r78.settings.registrationDate, "dd MMMM, yyyy 'at' HH:mm"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](89, 32, user_r78.settings.joinedDate, "dd MMMM, yyyy 'at' HH:mm"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r78.settings.isDeleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.settings.isDeleted ? "Blocked" : "Active");
      }
    }

    function UsersComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_21_div_1_Template, 95, 35, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "UserSearchPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r55.users, ctx_r55.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r55.page)));
      }
    }

    function UsersComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pagination-controls", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UsersComponent_div_22_Template_pagination_controls_pageChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.onPageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(appSettings, dialog, usersService) {
        _classCallCheck(this, UsersComponent);

        this.appSettings = appSettings;
        this.dialog = dialog;
        this.usersService = usersService;
        this.showSearch = false;
        this.viewType = 'grid';
        this.settings = this.appSettings.settings;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this2 = this;

          this.users = null; //for show spinner each time

          this.usersService.getUsers().subscribe(function (users) {
            return _this2.users = users;
          });
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          var _this3 = this;

          this.usersService.addUser(user).subscribe(function (user) {
            return _this3.getUsers();
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var _this4 = this;

          this.usersService.updateUser(user).subscribe(function (user) {
            return _this4.getUsers();
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          var _this5 = this;

          this.usersService.deleteUser(user.id).subscribe(function (user) {
            return _this5.getUsers();
          });
        }
      }, {
        key: "changeView",
        value: function changeView(viewType) {
          this.viewType = viewType;
          this.showSearch = false;
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          this.getUsers();
          document.getElementById('main').scrollTop = 0;
        }
      }, {
        key: "openUserDialog",
        value: function openUserDialog(user) {
          var _this6 = this;

          var dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UserDialogComponent"], {
            data: user
          });
          dialogRef.afterClosed().subscribe(function (user) {
            if (user) {
              user.id ? _this6.updateUser(user) : _this6.addUser(user);
            }
          });
          this.showSearch = false;
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])],
      decls: 24,
      vars: 14,
      consts: [[3, "icon", "title", "desc", "hideBreadcrumb", "hasBgImage"], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "px-2", "user-toolbar"], ["fxLayout", "row"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 1, "mx-2", 3, "click"], [1, "user-search"], [1, "user-search-input"], ["matInput", "", "placeholder", "Search user by name...", "name", "search", 3, "ngModel", "ngModelChange"], [1, "users-wrapper", "p-2"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "user-spinner", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-md", "33.3", "fxFlex.md", "50", "fxFlex.sm", "50", "class", "p-2", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-md", "33.3", "fxFlex.md", "50", "fxFlex.sm", "50", 1, "p-2"], ["fxLayout", "row", 1, "p-0", "user-content"], ["fxFlex", "35", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", 3, "ngClass"], [1, "user-img"], ["class", "transition mb-2", 3, "src", "blocked", 4, "ngIf"], ["src", "assets/img/users/default-user.jpg", "class", "transition mb-2", 3, "blocked", 4, "ngIf"], ["class", "warn-color block-icon", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "social-icons"], ["target", "_blank", 3, "href"], ["viewBox", "0 0 24 24", 1, "mat-icon", "mat-icon-sm", "mx-1"], ["d", "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"], ["d", "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"], ["d", "M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"], ["fxFlex", "65", 1, "user-details"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["class", "user-name px-2", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", "matMenuTrigger"], ["xPosition", "before", "overlapTrigger", "true"], ["menu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "click"], [4, "ngIf"], [1, "info-list", "mx-2"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "secondary-text-color"], [1, "transition", "mb-2", 3, "src"], ["src", "assets/img/users/default-user.jpg", 1, "transition", "mb-2"], [1, "warn-color", "block-icon"], [1, "user-name", "px-2"], ["fxFlex", "100", "class", "p-2", 4, "ngFor", "ngForOf"], ["fxFlex", "100", 1, "p-2"], [1, "p-0", "user-content"], ["fxFlex", "20", "fxFlex.xs", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", 3, "ngClass"], ["fxFlex", "80", "fxFlex.xs", "70", "fxLayout", "row wrap", "fxLayout.xs", "column", 1, "user-details"], [1, "w-100"], ["fxFlex", "30", "fxFlex.xs", "100", "fxLayout", "column", 1, "info-list", "px-2"], ["fxFlex", "40", "fxFlex.xs", "100", "fxLayout", "column", 1, "info-list", "px-2"], ["class", "secondary-text-color", 4, "ngIf"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "3", 1, "annular-pagination", 3, "pageChange"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "user-spinner"], ["color", "accent"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_3_listener($event) {
            return ctx.openUserDialog(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "person_add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_6_listener($event) {
            return ctx.showSearch = !ctx.showSearch;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_13_listener($event) {
            return ctx.changeView("grid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "view_module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_16_listener($event) {
            return ctx.changeView("list");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "view_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsersComponent_div_20_Template, 4, 9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UsersComponent_div_21_Template, 4, 9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UsersComponent_div_22_Template, 4, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UsersComponent_div_23_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pb-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "supervisor_account")("title", "Users")("desc", "View information about the users, search, add, edit or delete any user.")("hideBreadcrumb", false)("hasBgImage", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewType == "grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewType == "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.users);
        }
      },
      directives: [_shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["PaginationControlsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["PaginatePipe"], _theme_pipes_search_user_search_pipe__WEBPACK_IMPORTED_MODULE_20__["UserSearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
      styles: [".users-wrapper {\n  position: relative;\n  min-height: 150px;\n}\n\n.user-toolbar {\n  background: transparent !important;\n  height: 40px;\n  margin-top: -40px;\n}\n\n.user-details {\n  position: relative;\n}\n\n.user-details .user-name {\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.user-content .more-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.user-content .user-img {\n  position: relative;\n  text-align: center;\n}\n\n.user-content .user-img .social-icons a {\n  color: #fff;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon.block-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .info-list {\n  position: relative;\n}\n\n.user-content .info-list span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 8px;\n}\n\n.user-content .info-list p {\n  padding: 2px 0;\n}\n\n.user-content .info-list p:first-child {\n  padding-top: 8px;\n}\n\n.user-content .info-list p:last-child {\n  padding-bottom: 8px;\n}\n\n.user-content .info-list.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  font-size: 14px;\n}\n\n.user-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n  width: 100px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBREZHO0VBQ0ssZ0JBQUE7RUFDQSx5QkFBQTtBQ0lSOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURGUTtFQUNJLFdBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJWjs7QURIWTtFQUNJLFlBQUE7QUNLaEI7O0FERlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSVo7O0FEREk7RUFDSSxrQkFBQTtBQ0dSOztBREZRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNJWjs7QURGUTtFQUNJLGNBQUE7QUNJWjs7QURIWTtFQUNJLGdCQUFBO0FDS2hCOztBREhZO0VBQ0ksbUJBQUE7QUNLaEI7O0FERlE7RUFDSSxZQUFBO0FDSVo7O0FEQUE7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREZJO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNJUjs7QURGSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDSVI7O0FERkk7RUFDSSxrQkFBQTtBQ0lSOztBREZJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDSVI7O0FEREE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFBTyxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7QUNPaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vycy13cmFwcGVye1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuLnVzZXItdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxufVxyXG4udXNlci1kZXRhaWxze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAudXNlci1uYW1le1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH0gICAgXHJcbn1cclxuLnVzZXItY29udGVudHtcclxuICAgIC5tb3JlLWJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbWd7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuc29jaWFsLWljb25zIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAmLmJsb2NrZWR7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29uLmJsb2NrLWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDk2cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm8tbGlzdHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgJi5ibG9ja2Vke1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG4udXNlci1zZWFyY2h7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICB9XHJcbn1cclxuLnVzZXItc3Bpbm5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OjA7XHJcbn0iLCIudXNlcnMtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTUwcHg7XG59XG5cbi51c2VyLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG4udXNlci1kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVzZXItZGV0YWlscyAudXNlci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnVzZXItY29udGVudCAubW9yZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4udXNlci1jb250ZW50IC51c2VyLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbWcgLnNvY2lhbC1pY29ucyBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udXNlci1jb250ZW50IC51c2VyLWltZyBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWltZyBpbWcuYmxvY2tlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW1nIC5tYXQtaWNvbi5ibG9jay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IC04cHg7XG4gIGZvbnQtc2l6ZTogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICB3aWR0aDogOTZweDtcbn1cbi51c2VyLWNvbnRlbnQgLmluZm8tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51c2VyLWNvbnRlbnQgLmluZm8tbGlzdCBzcGFuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLnVzZXItY29udGVudCAuaW5mby1saXN0IHAge1xuICBwYWRkaW5nOiAycHggMDtcbn1cbi51c2VyLWNvbnRlbnQgLmluZm8tbGlzdCBwOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi51c2VyLWNvbnRlbnQgLmluZm8tbGlzdCBwOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLnVzZXItY29udGVudCAuaW5mby1saXN0LmJsb2NrZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi51c2VyLXNlYXJjaCB7XG4gIHdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udXNlci1zZWFyY2ggLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzZweDtcbn1cbi51c2VyLXNlYXJjaCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi51c2VyLXNlYXJjaCAubWF0LWlucHV0LWVsZW1lbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1zZWFyY2guc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnVzZXItc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          providers: [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]]
        }]
      }], function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/users/users.data.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/users/users.data.ts ***!
    \*******************************************/

  /*! exports provided: UsersData */

  /***/
  function srcAppPagesUsersUsersDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersData", function () {
      return UsersData;
    });

    var UsersData =
    /*#__PURE__*/
    function () {
      function UsersData() {
        _classCallCheck(this, UsersData);
      }

      _createClass(UsersData, [{
        key: "createDb",
        value: function createDb() {
          var users = [{
            id: 1,
            username: "pretty",
            password: "pretty123",
            profile: {
              name: "Ashley",
              surname: "Ahlberg",
              birthday: new Date(1981, 2, 29),
              gender: "female",
              image: "assets/img/profile/ashley.jpg"
            },
            work: {
              company: "Google",
              position: "Product designer",
              salary: 5000
            },
            contacts: {
              email: "ashley@gmail.com",
              phone: "(202) 756-9756",
              address: "Washington"
            },
            social: {
              facebook: "ashley_ahlberg",
              twitter: "ashley_ahlberg",
              google: "ashley_ahlberg"
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2012-10-13T12:20:40.511Z",
              joinedDate: "2017-04-21T18:25:43.511Z",
              bgColor: "gradient-purple"
            }
          }, {
            id: 2,
            username: "bruno.V",
            password: "bruno123",
            profile: {
              name: "Bruno",
              surname: "Vespa",
              birthday: new Date(1992, 11, 20),
              gender: "male",
              image: "assets/img/profile/bruno.jpg"
            },
            work: {
              company: "Dell EMC",
              position: "Sale manager",
              salary: 17000
            },
            contacts: {
              email: "bruno@dell.com",
              phone: "(415) 231-0332",
              address: "San Francisco"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: false,
              isDeleted: false,
              registrationDate: "2011-01-05T08:45:23.511Z",
              joinedDate: "2017-05-20T18:25:43.511Z",
              bgColor: "gradient-teal"
            }
          }, {
            id: 3,
            username: "andy.79",
            password: "andy123",
            profile: {
              name: "Andy",
              surname: "Warhol",
              birthday: new Date(1979, 10, 21),
              gender: "male",
              image: "assets/img/avatars/avatar-3.png"
            },
            work: {
              company: "Adecco",
              position: "Product manager",
              salary: 13000
            },
            contacts: {
              email: "andy@adecco.com",
              phone: "(212) 457-2308",
              address: "New York"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2014-11-01T19:35:43.511Z",
              joinedDate: "2017-06-28T15:25:43.511Z",
              bgColor: "gradient-amber"
            }
          }, {
            id: 4,
            username: "julia.a",
            password: "julia123",
            profile: {
              name: "Julia",
              surname: "Aniston",
              birthday: new Date(1982, 6, 18),
              gender: "female",
              image: "assets/img/profile/julia.jpg"
            },
            work: {
              company: "Apple",
              position: "Sales manager",
              salary: 18000
            },
            contacts: {
              email: "julia@apple.com",
              phone: "(224) 267-1346",
              address: "Illinois, Chicago"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2015-12-06T11:10:20.511Z",
              joinedDate: "2017-06-29T15:15:40.511Z",
              bgColor: "gradient-brown"
            }
          }, {
            id: 5,
            username: "lusia.m",
            password: "lusia123",
            profile: {
              name: "Lusia",
              surname: "Manuel",
              birthday: new Date(1992, 12, 2),
              gender: "female",
              image: "assets/img/avatars/avatar-7.png"
            },
            work: {
              company: "Alphabet",
              position: "Office manager",
              salary: 10000
            },
            contacts: {
              email: "lusia@alphabet.com",
              phone: "(224) 267-1346",
              address: "California, Los Angeles"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: true,
              registrationDate: "2014-01-10T10:20:20.511Z",
              joinedDate: "2017-06-28T12:20:40.511Z",
              bgColor: "gradient-indigo"
            }
          }, {
            id: 6,
            username: "adam.82",
            password: "adam123",
            profile: {
              name: "Adam",
              surname: "Sandler",
              birthday: new Date(1987, 12, 24),
              gender: "male",
              image: "assets/img/profile/adam.jpg"
            },
            work: {
              company: "General Electric",
              position: "Product manager",
              salary: 21000
            },
            contacts: {
              email: "adam@gen-el.com",
              phone: "(224) 267-1346",
              address: "Texas, Houston"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: false,
              isDeleted: false,
              registrationDate: "2016-11-16T12:20:20.511Z",
              joinedDate: "2017-06-27T14:20:40.511Z",
              bgColor: "gradient-green"
            }
          }, {
            id: 7,
            username: "tereza.s",
            password: "tereza123",
            profile: {
              name: "Tereza",
              surname: "Stiles",
              birthday: new Date(1979, 7, 9),
              gender: "female",
              image: "assets/img/profile/tereza.jpg"
            },
            work: {
              company: "Southwest Airlines",
              position: "Sale manager",
              salary: 31000
            },
            contacts: {
              email: "tereza@airlines.com",
              phone: "(214) 617-2614",
              address: "Texas, Dallas"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2010-10-12T16:20:20.511Z",
              joinedDate: "2017-06-29T15:20:40.511Z",
              bgColor: "gradient-pink"
            }
          }, {
            id: 8,
            username: "michael.b",
            password: "michael123",
            profile: {
              name: "Michael",
              surname: "Blair",
              birthday: new Date(1978, 11, 15),
              gender: "male",
              image: "assets/img/profile/michael.jpg"
            },
            work: {
              company: "Microsoft",
              position: "Software developer",
              salary: 50000
            },
            contacts: {
              email: "michael@microsoft.com",
              phone: "(267) 388-1637",
              address: "Pennsylvania, Philadelphia"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2009-08-12T16:20:20.511Z",
              joinedDate: "2017-06-30T11:30:40.511Z",
              bgColor: "gradient-gray"
            }
          }, {
            id: 9,
            username: "michelle.81",
            password: "michelle123",
            profile: {
              name: "Michelle",
              surname: "Ormond",
              birthday: new Date(1981, 11, 18),
              gender: "female",
              image: "assets/img/avatars/avatar-5.png"
            },
            work: {
              company: "Starbucks",
              position: "Sale manager",
              salary: 15000
            },
            contacts: {
              email: "michelle@starbucks.com",
              phone: "(267) 388-1637",
              address: "Washington, Seattle"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: false,
              isDeleted: true,
              registrationDate: "2012-11-10T18:20:20.511Z",
              joinedDate: "2015-03-29T17:20:40.511Z",
              bgColor: "gradient-lime"
            }
          }];
          return {
            users: users
          };
        }
      }]);

      return UsersData;
    }();
    /***/

  },

  /***/
  "./src/app/pages/users/users.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/users/users.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, UsersModule */

  /***/
  function srcAppPagesUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users.component */
    "./src/app/pages/users/users.component.ts");
    /* harmony import */


    var _users_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./users.data */
    "./src/app/pages/users/users.data.ts");
    /* harmony import */


    var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-dialog/user-dialog.component */
    "./src/app/pages/users/user-dialog/user-dialog.component.ts");

    var routes = [{
      path: '',
      component: _users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
      pathMatch: 'full'
    }];

    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };

    UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UsersModule
    });
    UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UsersModule_Factory(t) {
        return new (t || UsersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_users_data__WEBPACK_IMPORTED_MODULE_10__["UsersData"], {
        delay: 500
      }), ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, {
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_users_data__WEBPACK_IMPORTED_MODULE_10__["UsersData"], {
            delay: 500
          }), ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
          declarations: [_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]],
          entryComponents: [_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/users/users.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/users/users.service.ts ***!
    \**********************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppPagesUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UsersService =
    /*#__PURE__*/
    function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.url = "api/users";
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.url);
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          return this.http.post(this.url, user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.url, user);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http.delete(this.url + "/" + id);
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-users-users-module-es5.js.map