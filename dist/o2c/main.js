(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\q.fornasier\Documents\locallab\over2craft\o2c\src\main.ts */"zUnb");


/***/ }),

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "Sy1n");



class HomeComponent {
    constructor() {
        this.tutoExtended = false;
        this.app = _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"];
    }
    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
    copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            this.fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            console.log('Async: Copying to clipboard was successful!');
        }, err => {
            console.error('Async: Could not copy text: ', err);
        });
    }
    copyIpAddress() {
        this.copyTextToClipboard('over2craft.com');
        const element = document.querySelector('#tuto #server-ip > button');
        element.innerHTML = this.copyIpSwapText;
        setTimeout(() => {
            element.innerHTML = this.copyIpInitialText;
        }, 1200);
    }
    onMouseLeaveIpAddress() {
        document.querySelector('#tuto #server-ip > button').innerHTML = this.copyIpInitialText;
    }
    /**
     * Call on opening #tuto
     */
    openTuto() {
        const element = document.getElementById('tuto');
        element.style.display = 'block';
        element.classList.add('animate__animated', 'animate__fadeInUp');
    }
    /**
     * Call at the end of the animation that open #tuto
     */
    openTutoEnd() {
        const tutoElement = document.getElementById('tuto');
        tutoElement.classList.remove('animate__animated', 'animate__fadeInUp');
        this.tutoExtended = true;
    }
    /**
     * Call on closing #tuto
     */
    closeTuto() {
        const element = document.getElementById('tuto');
        element.classList.add('animate__animated', 'animate__fadeOutDown');
    }
    /**
     * Call at the end of the animation that close #tuto
     */
    closeTutoEnd() {
        const tutoElement = document.getElementById('tuto');
        tutoElement.style.display = 'none';
        tutoElement.classList.remove('animate__animated', 'animate__fadeOutDown');
        this.tutoExtended = false;
    }
    ngOnInit() {
        particlesJS.load('particles-js', 'assets/particles.json', null);
        const tutoElement = document.getElementById('tuto');
        tutoElement.style.display = 'none';
        /**
         * Register event for animation ending
         */
        tutoElement.addEventListener('animationend', () => {
            if (this.tutoExtended) {
                this.closeTutoEnd();
            }
            else {
                this.openTutoEnd();
            }
        });
        const element = document.querySelector('#tuto #server-ip > button');
        this.copyIpSwapText = element.getAttribute('data-text-swap');
        this.copyIpInitialText = element.innerHTML;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 43, vars: 1, consts: [["id", "particles-js"], [1, "spacing"], ["id", "ip-address", 1, ""], [1, "arrow", 3, "click"], ["id", "ip-address-text"], ["aria-hidden", "true", 1, "fa", "fa-gamepad"], ["id", "tuto"], [1, "header", 3, "click"], [1, "fas", "fa-times"], [1, "body"], ["id", "server-ip"], ["data-text-swap", "Copi\u00E9 ", 3, "click", "mouseleave"], [1, "how-to-connect"], ["src", "/assets/images/minecraft_home_page.png", "alt", "Page d'accueil du menu minecraft"], ["src", "/assets/images/minecraft_multiplayer.png", "alt", "Section multijoueur du menu minecraft"], ["src", "/assets/images/minecraft_addserver.png", "alt", "Section multijoueur et ajouter un serveur du menu minecraft"], ["id", "copyright"], ["id", "welcome"], [2, "color", "#AA0000"], [2, "color", "white"], [2, "color", "#FFAA00"], [2, "color", "#AA00AA"], [2, "color", "#5555FF"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_3_listener() { return ctx.openTuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " over2craft.fr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_11_listener() { return ctx.closeTuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.copyIpAddress(); })("mouseleave", function HomeComponent_Template_button_mouseleave_15_listener() { return ctx.onMouseLeaveIpAddress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cliquez pour copier l'IP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Comment se connecter ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Tout droit r\u00E9serv\u00E9 \u00A9 Over2Craft 2020-2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " contact@over2craft.com\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "[Administrateur] Stalk3r77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "> Tu peux te connecter au serveur minecraft avec l'adresse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Over2Craft.fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "[Premium] Yekinox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "> Nous sommes actuellement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "x joueurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " connect\u00E9(s) ! Le serveur est en 1.16.X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Jouez maintenant en ", ctx.app.minecraftVersion, "");
    } }, styles: ["#particles-js[_ngcontent-%COMP%] {\r\n  z-index: -1;\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  display: block;\r\n  vertical-align: bottom;\r\n}\r\n\r\n#particles-js[_ngcontent-%COMP%] {\r\n  position:absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--primary-color);\r\n  background-image: url(\"/assets/images/02C.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-position: 50% 50%;\r\n}\r\n\r\n.count-particles[_ngcontent-%COMP%] {\r\n  background: #000022;\r\n  position: absolute;\r\n  top: 48px;\r\n  left: 0;\r\n  width: 80px;\r\n  color: #13E8E9;\r\n  font-size: .8em;\r\n  text-align: left;\r\n  text-indent: 4px;\r\n  line-height: 14px;\r\n  padding-bottom: 2px;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n.js-count-particles[_ngcontent-%COMP%] {\r\n  font-size: 1.1em;\r\n}\r\n\r\n#stats[_ngcontent-%COMP%], .count-particles[_ngcontent-%COMP%] {\r\n  -webkit-user-select: none;\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n#stats[_ngcontent-%COMP%] {\r\n  border-radius: 3px 3px 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.count-particles[_ngcontent-%COMP%] {\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n\r\n.spacing[_ngcontent-%COMP%] {\r\n  height: 80vh;\r\n}\r\n\r\n@media only screen and (max-width : 1224px) {\r\n  .spacing[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n  }\r\n}\r\n\r\n#welcome[_ngcontent-%COMP%] {\r\n  font-family: var(--font-family-primary);\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  padding: 1rem;\r\n  width: 70vw;\r\n  margin: auto;\r\n  display: none;\r\n}\r\n\r\n@keyframes float {\r\n  0% {\r\n    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n    transform: translatey(0px);\r\n  }\r\n  50% {\r\n    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\r\n    transform: translatey(-20px);\r\n  }\r\n  100% {\r\n    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n    transform: translatey(0px);\r\n  }\r\n}\r\n\r\n#ip-address[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n#ip-address[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: var(--minecraft-background);\r\n  padding: 0.2rem 0.5rem 0.2rem 0.5rem;\r\n  border-radius: 13px 13px 13px 13px;\r\n  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\r\n  transform: translatey(0px);\r\n  animation: float 6s ease-in-out infinite;\r\n  transition: all 0.5s 0s ease;\r\n}\r\n\r\n#ip-address[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover {\r\n  padding: 0.5rem;\r\n  border-radius: 40px 40px 40px 40px;\r\n}\r\n\r\n#ip-address[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > #ip-address-text[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  font-size: calc(var(--font-size) + 3px);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: width 0.5s ease-in-out, margin 0.5s ease-in-out, border-radius 0.25s ease-in-out, color 0.25s ease-in-out;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover, .arrow.auto[_ngcontent-%COMP%] {\r\n  color: rgba(179, 195, 58, 0);\r\n  transition: width 0.5s ease-in-out, margin 0.5s ease-in-out, border-radius 1s 0.25 ease-in-out, color 0.25s ease-in-out 0.25s;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover:before, .arrow.auto[_ngcontent-%COMP%]:before {\r\n  animation: tipUp 1s cubic-bezier(0, 0.6, 1, 0.4) infinite 0.5s;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover:after, .arrow.auto[_ngcontent-%COMP%]:after {\r\n  animation: tipUp 1s cubic-bezier(0, 0.6, 1, 0.4) infinite 0.5s;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  display: inline-block;\r\n  content: \"\";\r\n  width: 15px;\r\n  height: 15px;\r\n  color: var(--font-color-light);\r\n  border-top: 5px solid;\r\n  border-left: 5px solid;\r\n  transform: rotateZ(45deg);\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -17px;\r\n  margin-left: -13px;\r\n  transform: translateY(50px) rotateZ(45deg);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  display: inline-block;\r\n  content: \"\";\r\n  width: 15px;\r\n  height: 15px;\r\n  color: var(--font-color-light);\r\n  border-top: 5px solid;\r\n  border-left: 5px solid;\r\n  transform: rotateZ(45deg);\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -6px;\r\n  margin-left: -13px;\r\n  transform: translateY(50px) rotateZ(45deg);\r\n}\r\n\r\n@keyframes tipUp {\r\n  0% {\r\n    transform: translateY(50px) rotateZ(45deg);\r\n  }\r\n  100% {\r\n    transform: translateY(-70px) rotateZ(45deg);\r\n  }\r\n}\r\n\r\n@keyframes lineUp {\r\n  0% {\r\n    transform: translateY(50px);\r\n  }\r\n  100% {\r\n    transform: translateY(-70px);\r\n  }\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: 30vh;\r\n  background: white;\r\n  z-index: 2;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%] {\r\n  background: var(--minecraft-background);\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  font-size: calc(var(--font-size) + 5px);\r\n  text-align: center;\r\n  padding: 0.1rem;\r\n  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]    > body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   #server-ip[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   #server-ip[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  background: var(--primary-color);\r\n  font-size: calc(var(--font-size) + 2px);\r\n  font-family: var(--font-family-primary);\r\n  color: var(--font-color-light);\r\n  border: 0;\r\n  border-radius: 10px;\r\n  padding: 0.5rem 1rem 0.5rem 1rem;\r\n  margin-bottom: 3rem;\r\n  margin-top: 3rem;\r\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\r\n  transition: all 0.5s 0s ease;\r\n  outline: 0;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   #server-ip[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\r\n  padding: .7rem 1.2rem .7rem 1.2rem;\r\n  border-radius: 0;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   #server-ip[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: all 0.5s 0s ease;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   #server-ip[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover:after {\r\n  font-family: \"Font Awesome 5 Free\";\r\n  content:\"\\f0c5\";\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   #server-ip[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:focus {\r\n  content: 'copi\u00E9';\r\n  outline: 0;\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   .how-to-connect[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background: var(--minecraft-background);\r\n}\r\n\r\n#tuto[_ngcontent-%COMP%]   .how-to-connect[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  max-width: 90vw;\r\n  height: 50vh;\r\n}\r\n\r\n#copyright[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 10px;\r\n  bottom: 10px;\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsK0NBQStDO0VBQy9DLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0lBQzFDLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMkNBQTJDO0lBQzNDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsMENBQTBDO0lBQzFDLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBR3BDLGtDQUFrQztFQUNsQywwQ0FBMEM7RUFDMUMsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUt4Qyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBR2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUhBQXFIO0FBQ3ZIOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDZIQUE2SDtBQUMvSDs7QUFDQTtFQUNFLDhEQUE4RDtBQUNoRTs7QUFDQTtFQUNFLDhEQUE4RDtBQUNoRTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztBQUNGOztBQUNBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUdmLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2Qyx1Q0FBdUM7RUFDdkMsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsOENBQThDO0VBSTlDLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUlsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7QUFDWiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFydGljbGVzLWpzIHtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuY2FudmFzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4jcGFydGljbGVzLWpzIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvMDJDLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5jb3VudC1wYXJ0aWNsZXMge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMjI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDhweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGNvbG9yOiAjMTNFOEU5O1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmpzLWNvdW50LXBhcnRpY2xlcyB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuI3N0YXRzLCAuY291bnQtcGFydGljbGVzIHtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4jc3RhdHMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb3VudC1wYXJ0aWNsZXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG59XHJcblxyXG4uc3BhY2luZyB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjI0cHgpIHtcclxuICAuc3BhY2luZyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4jd2VsY29tZSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAyNXB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMjBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4jaXAtYWRkcmVzcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaXAtYWRkcmVzcyA+IHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWluZWNyYWZ0LWJhY2tncm91bmQpO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW0gMC4ycmVtIDAuNXJlbTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzcHggMTNweCAxM3B4IDEzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxM3B4IDEzcHggMTNweCAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHggMTNweCAxM3B4IDEzcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjYpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMHMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIDBzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgMHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwcyBlYXNlO1xyXG59XHJcblxyXG4jaXAtYWRkcmVzcyA+IHNwYW46aG92ZXIge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDQwcHggNDBweCA0MHB4IDQwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggNDBweCA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggNDBweCA0MHB4IDQwcHg7XHJcbn1cclxuXHJcbiNpcC1hZGRyZXNzID4gc3BhbiA+ICNpcC1hZGRyZXNzLXRleHQgPiBzcGFuIHtcclxuICBmb250LXNpemU6IGNhbGModmFyKC0tZm9udC1zaXplKSArIDNweCk7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQsIG1hcmdpbiAwLjVzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDAuMjVzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG4uYXJyb3c6aG92ZXIsIC5hcnJvdy5hdXRvIHtcclxuICBjb2xvcjogcmdiYSgxNzksIDE5NSwgNTgsIDApO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQsIG1hcmdpbiAwLjVzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIDAuMjUgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0IDAuMjVzO1xyXG59XHJcbi5hcnJvdzpob3ZlcjpiZWZvcmUsIC5hcnJvdy5hdXRvOmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uOiB0aXBVcCAxcyBjdWJpYy1iZXppZXIoMCwgMC42LCAxLCAwLjQpIGluZmluaXRlIDAuNXM7XHJcbn1cclxuLmFycm93OmhvdmVyOmFmdGVyLCAuYXJyb3cuYXV0bzphZnRlciB7XHJcbiAgYW5pbWF0aW9uOiB0aXBVcCAxcyBjdWJpYy1iZXppZXIoMCwgMC42LCAxLCAwLjQpIGluZmluaXRlIDAuNXM7XHJcbn1cclxuLmFycm93OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSByb3RhdGVaKDQ1ZGVnKTtcclxufVxyXG4uYXJyb3c6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSByb3RhdGVaKDQ1ZGVnKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0aXBVcCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpIHJvdGF0ZVooNDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzBweCkgcm90YXRlWig0NWRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbGluZVVwIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiN0dXRvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiN0dXRvIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taW5lY3JhZnQtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbiN0dXRvID4gLmhlYWRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICsgNXB4KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4xcmVtO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5cclxuI3R1dG8gPiBib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiN0dXRvICNzZXJ2ZXItaXAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3R1dG8gI3NlcnZlci1pcCA+IGJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICsgMnB4KTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMHMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyAwcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDBzIGVhc2U7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuI3R1dG8gI3NlcnZlci1pcCA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgcGFkZGluZzogLjdyZW0gMS4ycmVtIC43cmVtIDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4jdHV0byAjc2VydmVyLWlwID4gYnV0dG9uID4gaSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMHMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyAwcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDBzIGVhc2U7XHJcbn1cclxuXHJcbiN0dXRvICNzZXJ2ZXItaXAgPiBidXR0b246aG92ZXI6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICBjb250ZW50OlwiXFxmMGM1XCI7XHJcbn1cclxuXHJcbiN0dXRvICNzZXJ2ZXItaXAgPiBidXR0b246Zm9jdXMge1xyXG4gIGNvbnRlbnQ6ICdjb3Bpw6knO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbiN0dXRvIC5ob3ctdG8tY29ubmVjdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1pbmVjcmFmdC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuI3R1dG8gLmhvdy10by1jb25uZWN0ID4gaW1nIHtcclxuICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4jY29weXJpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0tfL":
/*!**********************************************!*\
  !*** ./src/app/modules/nav/nav.component.ts ***!
  \**********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavComponent {
    constructor() {
        this.navExtended = false;
    }
    ngOnInit() {
        const element = document.querySelector('#nav-items');
        element.addEventListener('animationend', () => {
            if (this.navExtended) {
                element.classList.remove('animate__backOutRight');
                element.style.display = 'none';
                this.navExtended = false;
            }
            else {
                element.classList.remove('animate__backInRight');
                this.navExtended = true;
            }
        });
    }
    /**
     * Open the top navbar on small screens
     */
    openNav() {
        if (this.navExtended === true) {
            return;
        }
        const element = document.querySelector('#nav-items');
        document.querySelector('.nav-item-extend').setAttribute('disabled', 'true');
        element.style.display = 'block';
        element.classList.add('animate__animated', 'animate__backInRight');
        element.addEventListener('animationend', () => {
        });
    }
    /**
     * Close the top navbar on small screens
     */
    closeNav() {
        if (this.navExtended === false) {
            return;
        }
        const element = document.querySelector('#nav-items');
        document.querySelector('.nav-item-extend').setAttribute('disabled', 'true');
        element.classList.add('animate__animated', 'animate__backOutRight');
    }
    /**
     * Toggle the top navbar on small screens
     */
    toggleNav() {
        if (this.navExtended) {
            this.closeNav();
            return;
        }
        this.openNav();
        const navItemExtend = document.querySelector('.nav-item-extend');
        navItemExtend.style.display = 'block';
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 18, vars: 0, consts: [[1, "nav", "animate__animated", "animate__bounce"], [1, "nav-item-extend", 3, "click"], [1, "fas", "fa-bars"], ["id", "nav-items"], ["routerLink", "", 1, "nav-item", "active"], ["routerLink", "votes", 1, "nav-item"], [1, "nav-item"], ["routerLink", "dons", 1, "nav-item"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_1_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voter et obtenir une r\u00E9compense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dynmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Classement de richesse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Faire un dons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T\u00E9l\u00E9charger les maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Archive du forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nav[_ngcontent-%COMP%] {\r\n  z-index: 20;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  background-image: var(--minecraft-background);\r\n  overflow: hidden;\r\n  box-shadow: 0 7px 5px 0 rgba(0,0,0,0.75);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 15px;\r\n  font-family: var(--font-family-primary);\r\n  border-left: 1px solid black;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.nav-item-extend[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n@media only screen and (min-width : 1451px) {\r\n  #nav-items[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 1450px) {\r\n\r\n  #nav-items[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .nav-item-extend[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%] {\r\n    display: inherit;\r\n  }\r\n\r\n  .nav-item-extend[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sNkNBQTZDO0VBQzdDLGdCQUFnQjtFQUdoQix3Q0FBd0M7QUFDMUM7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLDRCQUE0QjtBQUM5QjtBQUVBLHVDQUF1QztBQUN2QztFQUNFLHdDQUF3QztBQUMxQztBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFFQSw2QkFBNkI7QUFDN0I7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi5uYXYge1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1taW5lY3JhZnQtYmFja2dyb3VuZCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgN3B4IDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDdweCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDAgN3B4IDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi5uYXYgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktcHJpbWFyeSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG4ubmF2IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi8qIEFkZCBhbiBhY3RpdmUgY2xhc3MgdG8gaGlnaGxpZ2h0IHRoZSBjdXJyZW50IHBhZ2UgKi9cclxuLm5hdiBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdi1pdGVtLWV4dGVuZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTQ1MXB4KSB7XHJcbiAgI25hdi1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi8qIE5hdmJhciBmb3Igc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDUwcHgpIHtcclxuXHJcbiAgI25hdi1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtLWV4dGVuZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIC5uYXYtaXRlbS1leHRlbmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1NIu":
/*!**********************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "P4l9":
/*!******************************************************!*\
  !*** ./src/app/modules/loading/loading.component.ts ***!
  \******************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoadingComponent {
    constructor(router) {
        this.router = router;
        this.firstLoad = true;
        this.router.events.subscribe((e) => {
            this.navigationInterceptor(e);
        });
    }
    ngOnInit() {
        document.getElementById('loading-overlay').addEventListener('animationend', () => {
            document.getElementById('loading-overlay').style.display = 'none';
            document.getElementById('loading-overlay').classList.remove('animate__fadeOutUp');
        });
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            if (!this.firstLoad) {
                document.getElementById('progress').style.display = 'block';
                document.getElementById('progress').style.width = '80%';
            }
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            if (this.firstLoad) {
                setTimeout(() => {
                    const element = document.getElementById('loading-overlay');
                    element.style.display = 'block';
                    element.classList.add('animate__animated', 'animate__fadeOutUp');
                }, 1000);
                this.firstLoad = false;
            }
            else {
                document.getElementById('progress').style.width = '100%';
                setTimeout(() => {
                    document.getElementById('progress').style.display = 'none';
                }, 500);
            }
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
        }
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 14, vars: 0, consts: [["id", "loading-overlay"], [1, "wrap"], [1, "bounceball"], [1, "text"], [1, "minimal-info"], ["href", "http://over2craft.com/discord"], ["href", "mailto:contact@over2craft.com"], ["id", "progress"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Chargement...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " | Adresse IP de connexion over2craft.com | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "contact@over2craft.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
    } }, styles: ["#progress[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 2147483647;\r\n  top: 0;\r\n  left: 0px;\r\n  width: 0%;\r\n  height: 2px;\r\n  background: #0088CC;\r\n  border-radius: 1px;\r\n  transition: width 500ms ease-out, opacity 400ms linear;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUduQixrQkFBa0I7RUFLbEIsc0RBQXNEO0FBQ3hEIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9ncmVzcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogIzAwODhDQztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDFweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLW91dCwgb3BhY2l0eSA0MDBtcyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2Utb3V0LCBvcGFjaXR5IDQwMG1zIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLW91dCwgb3BhY2l0eSA0MDBtcyBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLW91dCwgb3BhY2l0eSA0MDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1vdXQsIG9wYWNpdHkgNDAwbXMgbGluZWFyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loading/loading.component */ "P4l9");
/* harmony import */ var _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav/nav.component */ "0tfL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_discord_discord_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/discord/discord.component */ "ZIM7");






class AppComponent {
    constructor() {
        this.title = 'Over2Craft';
    }
}
AppComponent.minecraftVersion = '1.16.X';
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-discord");
    } }, directives: [_modules_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _modules_discord_discord_component__WEBPACK_IMPORTED_MODULE_4__["DiscordComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UWXr":
/*!**************************************************!*\
  !*** ./src/app/modules/votes/votes.component.ts ***!
  \**************************************************/
/*! exports provided: VotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesComponent", function() { return VotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_votes_votes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/votes/votes.service */ "jde1");



class VotesComponent {
    constructor(votesService) {
        this.votesService = votesService;
    }
    ngOnInit() {
    }
    vote() {
    }
}
VotesComponent.ɵfac = function VotesComponent_Factory(t) { return new (t || VotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_votes_votes_service__WEBPACK_IMPORTED_MODULE_1__["VotesService"])); };
VotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VotesComponent, selectors: [["app-votes"]], decls: 117, vars: 0, consts: [["id", "vote-get-gift"], ["target", "_blank", "href", "https://www.serveurs-minecraft.org/vote.php?id=9107#form_vote"], ["src", "https://www.serveurs-minecraft.org/vote.php?id=9107#form_vote", "frameborder", "0", "scrolling", "no"], ["type", "text", "placeholder", "pseudo", 1, "input-text"], [1, "submit-btn"], [1, "fas", "fa-check"], ["id", "vote-top-month"], ["id", "vote-top-all"]], template: function VotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Etape 1 : Votez pour Over2Craft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cliquez sur le bouton \"votez pour Over2Craft\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " dans l'apper\u00E7u ci-desssous. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Si l'apper\u00E7u ne fonctionne pas, rendez-vous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ici");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Etape 2 : Obtenir votre r\u00E9compense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Classement de vote par mois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pseudo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Montant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Classement de vote total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Pseudo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Montant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "The table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "with two columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  margin-left: 5vh;\r\n  margin-right: 5vh;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width : 1224px) {\r\n  main[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin-top: 0;\r\n  }\r\n\r\n  main[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n  }\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: var(--font-color-light);\r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], main[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  display: flex; \r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%] {\r\n  flex: 1; \r\n  border: solid;\r\n  font-size: calc(var(--font-size) + 2px);\r\n  color: var(--font-color-light);\r\n  font-family: var(--font-family-primary);\r\n  background: transparent;\r\n  border: solid 3px;\r\n  border-color: var(--font-color-light);\r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%] {\r\n  border-radius: 15px 0 0 15px;\r\n  border-right: 0;\r\n  padding-left: 1rem;\r\n  outline: 0;\r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1rem 0.5rem 1rem;\r\n  border-radius: 0 15px 15px 0px;\r\n  border-left: 0;\r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n}\r\n\r\n\r\n\r\n#vote-get-gift[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  font-size: calc(var(--font-size) - 2px);\r\n}\r\n\r\n\r\n\r\nmain[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin-top: 10vh;\r\n  word-break: break-word;\r\n}\r\n\r\n\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--font-color-light);\r\n  padding: 8px;\r\n}\r\n\r\n\r\n\r\ntr[_ngcontent-%COMP%] {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n\r\n\r\nth[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background: var(--minecraft-background);\r\n  color: var(--font-color-light);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7Ozs7QUFJQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOzs7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7Ozs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7OztBQUVBO0VBQ0UsYUFBYSxFQUFFLGlDQUFpQztBQUNsRDs7OztBQUVBO0VBQ0UsT0FBTyxFQUFFLDhCQUE4QjtFQUN2QyxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtFQUM5Qix1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixxQ0FBcUM7QUFDdkM7Ozs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7OztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOzs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7Ozs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7Ozs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7Ozs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7Ozs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJ2b3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2aDtcclxuICBtYXJnaW4tcmlnaHQ6IDV2aDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjI0cHgpIHtcclxuICBtYWluIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgbWFpbiA+IGRpdiB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuI3ZvdGUtZ2V0LWdpZnQgPiBkaXYsIG1haW4gPiBkaXYge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiN2b3RlLWdldC1naWZ0IGZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7IC8qIGVxdWFsIGhlaWdodCBvZiB0aGUgY2hpbGRyZW4gKi9cclxufVxyXG5cclxuI3ZvdGUtZ2V0LWdpZnQgLmlucHV0LXRleHQsIC5zdWJtaXQtYnRuIHtcclxuICBmbGV4OiAxOyAvKiBhZGRpdGlvbmFsbHksIGVxdWFsIHdpZHRoICovXHJcbiAgYm9yZGVyOiBzb2xpZDtcclxuICBmb250LXNpemU6IGNhbGModmFyKC0tZm9udC1zaXplKSArIDJweCk7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1wcmltYXJ5KTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHNvbGlkIDNweDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4jdm90ZS1nZXQtZ2lmdCAuaW5wdXQtdGV4dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbiN2b3RlLWdldC1naWZ0IC5zdWJtaXQtYnRuIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiN2b3RlLWdldC1naWZ0IC5pbnB1dC10ZXh0OmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4jdm90ZS1nZXQtZ2lmdCAuc3VibWl0LWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpIC0gMnB4KTtcclxufVxyXG5cclxubWFpbiA+IGRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbnRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1pbmVjcmFmdC1iYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-votes',
                templateUrl: './votes.component.html',
                styleUrls: ['./votes.component.css']
            }]
    }], function () { return [{ type: _services_votes_votes_service__WEBPACK_IMPORTED_MODULE_1__["VotesService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/history/history.component */ "hZm8");
/* harmony import */ var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/not-found/not-found.component */ "1NIu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/home/home.component */ "0Pcf");
/* harmony import */ var _modules_discord_discord_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/discord/discord.component */ "ZIM7");
/* harmony import */ var _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/nav/nav.component */ "0tfL");
/* harmony import */ var _modules_donnations_donnations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/donnations/donnations.component */ "d+iX");
/* harmony import */ var _modules_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/loading/loading.component */ "P4l9");
/* harmony import */ var _modules_votes_votes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/votes/votes.component */ "UWXr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _modules_history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"],
        _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
        _modules_discord_discord_component__WEBPACK_IMPORTED_MODULE_8__["DiscordComponent"],
        _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
        _modules_donnations_donnations_component__WEBPACK_IMPORTED_MODULE_10__["DonnationsComponent"],
        _modules_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"],
        _modules_votes_votes_component__WEBPACK_IMPORTED_MODULE_12__["VotesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _modules_history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"],
                    _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                    _modules_discord_discord_component__WEBPACK_IMPORTED_MODULE_8__["DiscordComponent"],
                    _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                    _modules_donnations_donnations_component__WEBPACK_IMPORTED_MODULE_10__["DonnationsComponent"],
                    _modules_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"],
                    _modules_votes_votes_component__WEBPACK_IMPORTED_MODULE_12__["VotesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZIM7":
/*!******************************************************!*\
  !*** ./src/app/modules/discord/discord.component.ts ***!
  \******************************************************/
/*! exports provided: DiscordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordComponent", function() { return DiscordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DiscordComponent {
    constructor() { }
    openDiscord() {
        document.getElementById('discord').classList.remove('discord-reduced');
        document.getElementById('discord').classList.add('discord-not-reduced');
        document.getElementById('discord-reduce-bar-less').classList.remove('display-none');
        document.getElementById('discord-iframe').classList.remove('discord-iframe-reduced');
        document.getElementById('discord-reduce-bar-plus').classList.add('display-none');
        localStorage.setItem('discordOpened', 'true');
    }
    closeDiscord() {
        document.getElementById('discord').classList.add('discord-reduced');
        document.getElementById('discord').classList.remove('discord-not-reduced');
        document.getElementById('discord-reduce-bar-less').classList.add('display-none');
        document.getElementById('discord-iframe').classList.add('discord-iframe-reduced');
        document.getElementById('discord-reduce-bar-plus').classList.remove('display-none');
        localStorage.setItem('discordOpened', 'false');
    }
    ngOnInit() {
        if (localStorage.getItem('discordOpened') === 'false') {
            this.closeDiscord();
        }
        else {
            this.openDiscord();
        }
    }
}
DiscordComponent.ɵfac = function DiscordComponent_Factory(t) { return new (t || DiscordComponent)(); };
DiscordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscordComponent, selectors: [["app-discord"]], decls: 8, vars: 0, consts: [["id", "discord"], ["id", "discord-reduce-bar"], ["id", "discord-reduce-bar-less", 3, "click"], [1, "fas", "fa-times"], ["id", "discord-reduce-bar-plus", 1, "display-none", 3, "click"], [1, "fas", "fa-plus"], ["id", "discord-iframe", "src", "https://discord.com/widget?id=477823211459837981&theme=dark", "width", "350", "height", "500", "allowtransparency", "true", "sandbox", "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts", 2, "border", "0"]], template: function DiscordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscordComponent_Template_span_click_2_listener() { return ctx.closeDiscord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscordComponent_Template_span_click_4_listener() { return ctx.openDiscord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discord ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#discord[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: var(--secondary-color);\r\n  z-index: 10;\r\n}\r\n\r\n.discord-not-reduced[_ngcontent-%COMP%] {\r\n  border-radius: 14px 14px 14px 14px;\r\n  -moz-border-radius: 14px 14px 14px 14px;\r\n  -webkit-border-radius: 14px 14px 14px 14px;\r\n  border: 0 solid #000000;\r\n}\r\n\r\n.discord-reduced[_ngcontent-%COMP%] {\r\n  border-radius: 14px 14px 0 0;\r\n  -moz-border-radius: 14px 14px 0 0;\r\n  -webkit-border-radius: 14px 14px 0 0;\r\n  border: 0 solid #000000;\r\n}\r\n\r\n#discord-reduce-bar[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-align: right;\r\n  margin: 8px 7px 7px;\r\n}\r\n\r\n#discord-reduce-bar-less[_ngcontent-%COMP%], #discord-reduce-bar-plus[_ngcontent-%COMP%] {\r\n  font-family: var(--font-family-primary);\r\n  margin-top: 3px;\r\n  margin-right: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n.discord-iframe-reduced[_ngcontent-%COMP%] {\r\n display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QywwQ0FBMEM7RUFDMUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImRpc2NvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXNjb3JkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZGlzY29yZC1ub3QtcmVkdWNlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweCAxNHB4IDE0cHggMTRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDE0cHggMTRweCAxNHB4IDE0cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNHB4IDE0cHggMTRweCAxNHB4O1xyXG4gIGJvcmRlcjogMCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG4uZGlzY29yZC1yZWR1Y2VkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4IDE0cHggMCAwO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTRweCAxNHB4IDAgMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE0cHggMTRweCAwIDA7XHJcbiAgYm9yZGVyOiAwIHNvbGlkICMwMDAwMDA7XHJcbn1cclxuXHJcbiNkaXNjb3JkLXJlZHVjZS1iYXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW46IDhweCA3cHggN3B4O1xyXG59XHJcblxyXG4jZGlzY29yZC1yZWR1Y2UtYmFyLWxlc3MsICNkaXNjb3JkLXJlZHVjZS1iYXItcGx1cyB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXByaW1hcnkpO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaXNjb3JkLWlmcmFtZS1yZWR1Y2VkIHtcclxuIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discord',
                templateUrl: './discord.component.html',
                styleUrls: ['./discord.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "d+iX":
/*!************************************************************!*\
  !*** ./src/app/modules/donnations/donnations.component.ts ***!
  \************************************************************/
/*! exports provided: DonnationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnationsComponent", function() { return DonnationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DonnationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DonnationsComponent.ɵfac = function DonnationsComponent_Factory(t) { return new (t || DonnationsComponent)(); };
DonnationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonnationsComponent, selectors: [["app-donnations"]], decls: 40, vars: 0, consts: [["href", "https://www.paypal.com/donate?hosted_button_id=CYTW36URKFU9W", 1, "donate"]], template: function DonnationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Faire un dons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pourquoi les dons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Over2Craft est un serveur comunautaire. L'objectif pour les administrateurs et de rendre Over2Craft totalement autonome d'un point de vu h\u00E9bergement, c'est \u00E0 dire faire en sorte que les dons finance enti\u00E8rement, \u00E0 minima, les frais de location du/des serveur(s) d\u00E9di\u00E9(s). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Les dons servent uniquement \u00E0 Over2craft. Aucun membre du staff ni administrateur ne per\u00E7oit de revenu. Tout travail pour Over2Craft est b\u00E9n\u00E9vol.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Si les dons d\u00E9passent le co\u00FBt d'h\u00E9bergement d'Over2Craft, l'argent r\u00E9colt\u00E9 sera utilis\u00E9 pour d\u00E9velopper Over2Craft (publicit\u00E9, achat de plugins...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Co\u00FBt actuel d'Over2Craft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Over2Craft est actuellement h\u00E9berg\u00E9 par deux serveurs d\u00E9di\u00E9s chez SoYouStart.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "42\u20AC TTC. Hebergement du Freebuild et de Bungeecord. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "GAME-1 : Intel i7-4790K 4c / 8t 4GHz 16GB DDR3 1333MHz 1x120Go SSD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "47.99\u20AC. Hebergement du serveur event, des serveurs annexes, et stockage des fichiers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "E3-SAT-1-32 Intel Xeon E3-1245v2 4c / 8t 3,4GHz 32GB DDR3 1333 MHz SoftRaid 3x2To SATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Un projet de migration pour r\u00E9duire les frais li\u00E9 \u00E0 l'h\u00E9bergement est en cours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Donnateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " En faisant un dons, vous pouvez indiquer votre pseudo minecraft en commentaire de la page paypal. Ainsi, nous pourrons afficher votre pseudo parmis la liste des donnateurs. Les donnateurs qui donnent les sommes les plus cons\u00E9quentes seront distingu\u00E9s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Merci ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Merci \u00E0 tous ceux qui donnent, m\u00EAme les plus petite sommes. Over2Craft existe depuis plus de 10 ans, et nous souhaitons faire en sorte qu'il continue d'exister. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["main[_ngcontent-%COMP%] {\r\n  margin-top: 10vh;\r\n  margin-left: 25vw;\r\n  margin-right: 10vw;\r\n}\r\n\r\n@media only screen and (max-width : 1224px) {\r\n  main[_ngcontent-%COMP%] {\r\n    margin-left: 10vw;\r\n  }\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 5vh;\r\n  font-family: var(--font-family-secondary);\r\n}\r\n\r\n.donate[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: fixed;\r\n  top: 20vh;\r\n  left: 3vw;\r\n  text-decoration: none;\r\n  background: var(--secondary-color);\r\n  border-radius: 4px;\r\n  color: var(--font-color-light);\r\n  padding: 15px 25px 15px 25px;\r\n  text-shadow: 1px 1px 5px #666;\r\n  transition: all 800ms;\r\n}\r\n\r\n@media only screen and (max-width : 1224px) {\r\n  .donate[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: inherit;\r\n    left: inherit;\r\n  }\r\n}\r\n\r\n.donate[_ngcontent-%COMP%]:after {\r\n  border-left: 2px solid var(--font-color-light);\r\n  color: var(--font-color-light);\r\n  content: \"\\f004\";\r\n  font-family: \"Font Awesome 5 Free\";\r\n  padding-left: 15px;\r\n  margin-left: 15px;\r\n  transition: all 600ms 200ms;\r\n}\r\n\r\n.donate[_ngcontent-%COMP%]:hover:after {\r\n  border-left: 1px solid #008260;\r\n  color: #fff;\r\n  text-shadow: 0 0 10px #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbm5hdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUIiLCJmaWxlIjoiZG9ubmF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICBtYXJnaW4tbGVmdDogMjV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMjRweCkge1xyXG4gIG1haW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZG9uYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMjB2aDtcclxuICBsZWZ0OiAzdnc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjNjY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDgwMG1zO1xyXG4gIHRyYW5zaXRpb246IGFsbCA4MDBtcztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIyNHB4KSB7XHJcbiAgLmRvbmF0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IGluaGVyaXQ7XHJcbiAgICBsZWZ0OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLmRvbmF0ZTphZnRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XHJcbiAgY29udGVudDogXCJcXGYwMDRcIjtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDYwMG1zIDIwMG1zO1xyXG4gIHRyYW5zaXRpb246IGFsbCA2MDBtcyAyMDBtcztcclxufVxyXG5cclxuLmRvbmF0ZTpob3ZlcjphZnRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA4MjYwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonnationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donnations',
                templateUrl: './donnations.component.html',
                styleUrls: ['./donnations.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hZm8":
/*!******************************************************!*\
  !*** ./src/app/modules/history/history.component.ts ***!
  \******************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 2, vars: 0, template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "history works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jde1":
/*!*************************************************!*\
  !*** ./src/app/services/votes/votes.service.ts ***!
  \*************************************************/
/*! exports provided: VotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotesService", function() { return VotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class VotesService {
    constructor(http) {
        this.http = http;
    }
    voteOnMinecraftServerOrg() {
        console.log('test');
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('confirmation', 'true'),
            responseType: 'text'
        };
        this.http.post('https://www.serveurs-minecraft.org/vote.php?id=9107', '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => console.log(data), error => console.log(error))).subscribe();
    }
}
VotesService.ɵfac = function VotesService_Factory(t) { return new (t || VotesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VotesService, factory: VotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/home.component */ "0Pcf");
/* harmony import */ var _modules_history_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/history/history.component */ "hZm8");
/* harmony import */ var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/not-found/not-found.component */ "1NIu");
/* harmony import */ var _modules_donnations_donnations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/donnations/donnations.component */ "d+iX");
/* harmony import */ var _modules_votes_votes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/votes/votes.component */ "UWXr");









const routes = [
    { path: '', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'history', component: _modules_history_history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"] },
    { path: 'dons', component: _modules_donnations_donnations_component__WEBPACK_IMPORTED_MODULE_5__["DonnationsComponent"] },
    { path: 'votes', component: _modules_votes_votes_component__WEBPACK_IMPORTED_MODULE_6__["VotesComponent"] },
    { path: '**', component: _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map