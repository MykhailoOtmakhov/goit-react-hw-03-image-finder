(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3-8Jf"}},13:function(e,t,a){e.exports={Button:"Button_Button__1Rie3"}},19:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(10),i=a.n(c),s=(a(19),a(3)),l=a(4),u=a(6),h=a(5),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleEsc=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEsc)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Overlay",children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:"",alt:""})})})}}]),a}(r.Component),g=a(7),b=a.n(g),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageTag:""},e.handleTagChange=function(t){e.setState({imageTag:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageTag.trim()?(e.props.onSubmit(e.state.imageTag),e.setState({imageTag:""})):alert("Enter some word!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:b.a.Searchbar,children:Object(n.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(n.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageTag,onChange:this.handleTagChange})]})})}}]),a}(r.Component),j=a(9),p=a.n(j),f=function(e){var t=e.webimg;return Object(n.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t,alt:"",className:p.a.ImageGalleryItemImage})})},v=a(11),O=a.n(v);var y=function(e){var t=e.image.hits;return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)(f,{webimg:a,largeimg:r},t)}))})})},S=(a(20),a(12)),x=a.n(S),I=a(13),_=a.n(I),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("button",{className:_.a.Button,children:"More..."})}}]),a}(r.Component);var F={fetchImage:function(e){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=1&key=").concat("19192524-a42a2a32afb109ad508e945f7","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e ".concat(e)))}))}},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:null,error:null,status:"idle",page:1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.imageTag!==this.props.imageTag&&(this.setState({status:"pending"}),F.fetchImage(this.props.imageTag).then((function(e){return a.setState({image:e,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.image,a=e.error,r=e.status;return"idle"===r?Object(n.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u0442\u044c"}):"pending"===r?Object(n.jsxs)("div",{children:["\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c...",Object(n.jsx)(x.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})]}):"rejected"===r?Object(n.jsx)("h1",{children:a.message}):"resolved"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y,{image:t}),Object(n.jsx)(w,{})]}):void 0}}]),a}(r.Component),T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:" ",loading:!1,showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({imageTag:t}),console.log(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(this.state.imageTag,"&page=1&key=19192524-a42a2a32afb109ad508e945f7&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){return e.setState({image:t})})).finally((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(k,{imageTag:this.state.imageTag}),Object(n.jsx)(m,{onClose:this.toggleModal})]})}}]),a}(r.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),C()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1fpJq",SearchForm:"Searchbar_SearchForm__10uPd",SearchFormButton:"Searchbar_SearchFormButton__1MxZU",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3Olsd",SearchFormInput:"Searchbar_SearchFormInput__2okAh"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Rz2y",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3Vvim"}}},[[42,1,2]]]);
//# sourceMappingURL=main.1c9d6e27.chunk.js.map