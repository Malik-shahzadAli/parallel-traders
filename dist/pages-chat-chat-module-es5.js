function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"], {
  /***/
  "./src/app/pages/chat/chat.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/chat/chat.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppPagesChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat.model */
    "./src/app/pages/chat/chat.model.ts");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/pages/chat/chat.service.ts");
    /* harmony import */


    var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/content-header/content-header.component */
    "./src/app/shared/content-header/content-header.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["sidenav"];

    function ChatComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 32, 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ChatComponent_div_6_Template_span_mouseleave_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

          var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          return _r204.closeMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_6_Template_button_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          return _r201.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "volume_mute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Clear chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r195.currentChat.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r195.currentChat.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r205);
      }
    }

    function ChatComponent_mat_list_item_14_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_mat_list_item_14_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "highlight_off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_mat_list_item_14_mat_icon_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "schedule");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_mat_list_item_14_mat_icon_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not_interested");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_mat_list_item_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_mat_list_item_14_Template_mat_list_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r215);

          var chat_r209 = ctx.$implicit;

          var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r214.getChat(chat_r209);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_mat_list_item_14_mat_icon_6_Template, 2, 0, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_mat_list_item_14_mat_icon_7_Template, 2, 0, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_mat_list_item_14_mat_icon_8_Template, 2, 0, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatComponent_mat_list_item_14_mat_icon_9_Template, 2, 0, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r209 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", chat_r209.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r209.author, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", chat_r209.authorStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Online");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Offline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Away");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Do not disturb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r209.authorStatus);
      }
    }

    function ChatComponent_mat_list_17_mat_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var talk_r217 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", talk_r217.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", talk_r217.my ? "bg-primary" : "bg-accent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](talk_r217.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, talk_r217.date, "dd MMMM, yyyy 'at' HH:mm"));
      }
    }

    function ChatComponent_mat_list_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_mat_list_17_mat_list_item_1_Template, 9, 7, "mat-list-item", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r198.talks);
      }
    }

    function ChatComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select a interlocutor for talk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_mat_card_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChatComponent_mat_card_19_Template_input_keyup_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r218.sendMessage($event);
        })("ngModelChange", function ChatComponent_mat_card_19_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r220.newMessage = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "attach_file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_mat_card_19_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r221.sendMessage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r200.newMessage);
      }
    }

    function ChatComponent_img_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
      }

      if (rf & 2) {
        var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r202.currentChat.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatComponent_h2_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r203.currentChat.author);
      }
    }

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(appSettings, chatService) {
        _classCallCheck(this, ChatComponent);

        this.appSettings = appSettings;
        this.chatService = chatService;
        this.userImage = 'assets/img/users/user.jpg';
        this.sidenavOpen = true;
        this.settings = this.appSettings.settings;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chats = this.chatService.getChats();

          if (window.innerWidth <= 768) {
            this.sidenavOpen = false;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          window.innerWidth <= 768 ? this.sidenavOpen = false : this.sidenavOpen = true;
        }
      }, {
        key: "getChat",
        value: function getChat(obj) {
          if (this.talks) {
            this.talks.length = 2;
          }

          this.talks = this.chatService.getTalk();
          this.talks.push(obj);
          this.currentChat = obj;
          this.talks.forEach(function (talk) {
            if (!talk.my) {
              talk.image = obj.image;
            }
          });

          if (window.innerWidth <= 768) {
            this.sidenav.close();
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage($event) {
          if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
            if (this.talks) {
              this.talks.push(new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newMessage, new Date(), true));
              this.newMessage = '';
              var chatContainer = document.querySelector('.chat-content');

              if (chatContainer) {
                setTimeout(function () {
                  var nodes = chatContainer.querySelectorAll('.mat-list-item');
                  var newChatTextHeight = nodes[nodes.length - 1];
                  chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
                });
              }
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.talks) this.talks.length = 2;
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      hostBindings: function ChatComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ChatComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])],
      decls: 48,
      vars: 16,
      consts: [[3, "title", "hideBreadcrumb", "hasBgImage"], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "px-2", "chat-toolbar"], ["fxLayout", "row"], ["mat-icon-button", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "p-0", "chat"], [1, "chat-container"], ["autoFocus", "false", 1, "chat-sidenav", "mat-elevation-z1", 3, "opened", "mode"], ["sidenav", ""], ["perfectScrollbar", "", 1, "p-0", "chat-sidenav-list"], [3, "click", 4, "ngFor", "ngForOf"], ["perfectScrollbar", "", 1, "chat-content"], ["class", "p-0", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "h-100 empty", 4, "ngIf"], ["class", "chat-actions", 4, "ngIf"], ["mode", "over", "position", "end", "autoFocus", "false", 1, "person-info-sidenav", "mat-elevation-z1"], ["personInfo", ""], ["perfectScrollbar", "", 1, "p-0", "h-100"], [1, "bg-primary", "w-100", "text-center"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-2"], ["class", "py-2", 3, "src", 4, "ngIf"], ["class", "pb-3", 4, "ngIf"], ["matListIcon", "", 1, "secondary-text-color"], ["matLine", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "p-0"], ["matListAvatar", "", 1, "author-img", 3, "src"], [1, "author-name"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["personMenuTrigger", "matMenuTrigger"], ["xPosition", "before"], ["personMenu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [3, "click"], ["matListAvatar", "", 3, "src"], ["matLine", "", "fxLayout", "row", "fxLayoutAlign", "none center", 1, "secondary-text-color"], [3, "ngSwitch"], ["class", "chat-status-icon", 4, "ngSwitchCase"], [1, "author-status"], [1, "chat-status-icon"], ["class", "talk-item", 4, "ngFor", "ngForOf"], [1, "talk-item"], ["matLine", "", 1, "message"], [3, "ngClass"], ["matLine", "", 1, "message-date"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "h-100", "empty"], [1, "chat-actions"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "w-100"], ["matInput", "", "placeholder", "Enter your text...", 3, "ngModel", "keyup", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "scenter center"], ["mat-icon-button", "", "type", "button"], ["mat-mini-fab", "", "color", "primary", "type", "button", 3, "click"], [1, "py-2", 3, "src"], [1, "pb-3"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r222);

            var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return _r196.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_div_6_Template, 28, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-nav-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatComponent_mat_list_item_14_Template, 12, 8, "mat-list-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_mat_list_17_Template, 2, 1, "mat-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatComponent_div_18_Template, 5, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChatComponent_mat_card_19_Template, 11, 1, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-drawer", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r222);

            var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return _r201.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ChatComponent_img_30_Template, 1, 1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ChatComponent_h2_31_Template, 2, 1, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "mail_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "author@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "(202) 756-9756");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2903 Avenue Z, Brooklyn, NY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pb-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Chat")("hideBreadcrumb", false)("hasBgImage", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentChat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sidenavOpen)("mode", ctx.sidenavOpen ? "side" : "over");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("actions-visible", ctx.talks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.talks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.talks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.talks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentChat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentChat);
        }
      },
      directives: [_shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__["ContentHeaderComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListAvatarCssMatStyler"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: [".chat-container[_ngcontent-%COMP%] {\n  height: calc(100vh - (56px + 56px + 148px));\n}\n\n.chat-toolbar[_ngcontent-%COMP%] {\n  background: transparent !important;\n  height: 40px;\n  margin-top: -40px;\n}\n\n.chat-toolbar[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n\n.chat-toolbar[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.chat[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.chat[_ngcontent-%COMP%]   .chat-actions[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.chat[_ngcontent-%COMP%]   .talk-item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  height: 100%;\n}\n\n.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  white-space: unset;\n  text-overflow: unset;\n}\n\n.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 14px;\n}\n\n.chat[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 220px;\n  height: 220px;\n  width: 220px;\n  opacity: 0.4;\n}\n\n.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.8;\n}\n\n.chat-status-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  line-height: 22px;\n  margin-right: 6px;\n}\n\n.author-status[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.chat-sidenav[_ngcontent-%COMP%] {\n  border-right: 1px solid transparent;\n  overflow: hidden;\n}\n\n.chat-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  height: calc(100vh - (56px + 56px + 174px));\n}\n\n.chat-content.actions-visible[_ngcontent-%COMP%] {\n  height: calc(100vh - (56px + 56px + 254px));\n}\n\n.chat-sidenav-list[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.person-info-sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n}\n\n.person-info-sidenav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.person-info-sidenav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n\n@media (max-width: 960px) {\n  .chat-container[_ngcontent-%COMP%] {\n    height: calc(100vh - (56px + 56px + 130px));\n  }\n\n  .chat-content[_ngcontent-%COMP%] {\n    height: calc(100vh - (56px + 56px + 154px));\n  }\n  .chat-content.actions-visible[_ngcontent-%COMP%] {\n    height: calc(100vh - (56px + 56px + 236px));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9EOlxccGFycmxlbCBwb3J0Zm9saW9cXHRoZW1lZm9yZXN0LTFadnJrQU5LLWFubnVsYXItYW5ndWxhci1tYXRlcmlhbC1kZXNpZ24tYWRtaW4tdGVtcGxhdGVcXGFubnVsYXJcXGFubnVsYXIvc3JjXFxhcHBcXHBhZ2VzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQ0FBQTtBQ0RKOztBREdBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1I7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQ0NSOztBREFRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0VaOztBRENJO0VBQ0ksWUFBQTtBQ0NSOztBREVRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBWjs7QURFUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQVo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FERUE7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsMkNBQUE7QUNFSjs7QURESTtFQUNJLDJDQUFBO0FDR1I7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FESEk7RUFDSSxnQkFBQTtBQ0tSOztBREhJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0tSOztBREFBO0VBQ0k7SUFDSSwyQ0FBQTtFQ0dOOztFRERFO0lBQ0ksMkNBQUE7RUNJTjtFREhNO0lBQ0ksMkNBQUE7RUNLVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jaGF0LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtdG9vbGJhci1oZWlnaHR9ICsgI3skZm9vdGVyLXRvb2xiYXItaGVpZ2h0fSArIDE0OHB4KSk7XHJcbn1cclxuLmNoYXQtdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIC5hdXRob3ItaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxuICAgIC5hdXRob3ItbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgICBcclxufVxyXG4uY2hhdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAuY2hhdC1hY3Rpb25ze1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9ICAgIFxyXG4gICAgLnRhbGstaXRlbXtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZXtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7ICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlLWRhdGV7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgLmVtcHR5e1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jaGF0LXN0YXR1cy1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbi5hdXRob3Itc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jaGF0LXNpZGVuYXZ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICAgXHJcbn1cclxuLmNoYXQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLXRvb2xiYXItaGVpZ2h0fSArICN7JGZvb3Rlci10b29sYmFyLWhlaWdodH0gKyAxNzRweCkpO1xyXG4gICAgJi5hY3Rpb25zLXZpc2libGV7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMjU0cHgpKTtcclxuICAgIH1cclxufVxyXG4uY2hhdC1zaWRlbmF2LWxpc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wZXJzb24taW5mby1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHsgXHJcbiAgICAuY2hhdC1jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMTMwcHgpKTtcclxuICAgIH1cclxuICAgIC5jaGF0LWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMTU0cHgpKTtcclxuICAgICAgICAmLmFjdGlvbnMtdmlzaWJsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMjM2cHgpKTtcclxuICAgICAgICB9ICBcclxuICAgIH0gIFxyXG59IiwiLmNoYXQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDU2cHggKyA1NnB4ICsgMTQ4cHgpKTtcbn1cblxuLmNoYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG4uY2hhdC10b29sYmFyIC5hdXRob3ItaW1nIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cbi5jaGF0LXRvb2xiYXIgLmF1dGhvci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2hhdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2hhdCAuY2hhdC1hY3Rpb25zIHtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5jaGF0IC50YWxrLWl0ZW0ge1xuICBwYWRkaW5nOiA2cHggMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNoYXQgLm1lc3NhZ2Uge1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xufVxuLmNoYXQgLm1lc3NhZ2Ugc3BhbiB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNoYXQgLm1lc3NhZ2UtZGF0ZSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5jaGF0IC5lbXB0eSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgb3BhY2l0eTogMC40O1xufVxuLmNoYXQgLmVtcHR5IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNoYXQtc3RhdHVzLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmF1dGhvci1zdGF0dXMge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jaGF0LXNpZGVuYXYge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNoYXQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICg1NnB4ICsgNTZweCArIDE3NHB4KSk7XG59XG4uY2hhdC1jb250ZW50LmFjdGlvbnMtdmlzaWJsZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICg1NnB4ICsgNTZweCArIDI1NHB4KSk7XG59XG5cbi5jaGF0LXNpZGVuYXYtbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBlcnNvbi1pbmZvLXNpZGVuYXYge1xuICB3aWR0aDogMjgwcHg7XG59XG4ucGVyc29uLWluZm8tc2lkZW5hdiBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucGVyc29uLWluZm8tc2lkZW5hdiBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5jaGF0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDU2cHggKyA1NnB4ICsgMTMwcHgpKTtcbiAgfVxuXG4gIC5jaGF0LWNvbnRlbnQge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICg1NnB4ICsgNTZweCArIDE1NHB4KSk7XG4gIH1cbiAgLmNoYXQtY29udGVudC5hY3Rpb25zLXZpc2libGUge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICg1NnB4ICsgNTZweCArIDIzNnB4KSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.scss'],
          providers: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]]
        }]
      }], function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
        }, {
          type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
        }];
      }, {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sidenav']
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/chat/chat.model.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/chat/chat.model.ts ***!
    \******************************************/

  /*! exports provided: Chat */

  /***/
  function srcAppPagesChatChatModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat", function () {
      return Chat;
    });

    var Chat = function Chat(image, author, authorStatus, text, date, my) {
      _classCallCheck(this, Chat);

      this.image = image;
      this.author = author;
      this.authorStatus = authorStatus;
      this.text = text;
      this.date = date;
      this.my = my;
    };
    /***/

  },

  /***/
  "./src/app/pages/chat/chat.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/chat/chat.module.ts ***!
    \*******************************************/

  /*! exports provided: routes, ChatModule */

  /***/
  function srcAppPagesChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
      return ChatModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat.component */
    "./src/app/pages/chat/chat.component.ts");

    var routes = [{
      path: '',
      component: _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
      pathMatch: 'full'
    }];

    var ChatModule = function ChatModule() {
      _classCallCheck(this, ChatModule);
    };

    ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChatModule
    });
    ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChatModule_Factory(t) {
        return new (t || ChatModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, {
        declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/chat/chat.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/chat/chat.service.ts ***!
    \********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppPagesChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chat.model */
    "./src/app/pages/chat/chat.model.ts");

    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes();
    var chats = [new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false)];
    var talks = [new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Annular Admin Template?', new Date(year, month, day - 2, hour, minute + 3), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, Annular is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), true)];

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService() {
        _classCallCheck(this, ChatService);
      }

      _createClass(ChatService, [{
        key: "getChats",
        value: function getChats() {
          return chats;
        }
      }, {
        key: "getTalk",
        value: function getTalk() {
          return talks;
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)();
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-chat-chat-module-es5.js.map