(this["webpackJsonp@loagsword/pokemon-react-app"]=this["webpackJsonp@loagsword/pokemon-react-app"]||[]).push([[0],{25:function(e,n,a){e.exports=a(35)},33:function(e,n,a){},35:function(e,n,a){"use strict";a.r(n);var t=a(3),m=a.n(t),c=a(18),o=a(24),r=a(8),s=a(15);function l({pokemon:e}){return m.a.createElement("div",{className:"pokemon"},m.a.createElement("div",{className:"pokemon__name"},m.a.createElement("p",null,e.name)),m.a.createElement("div",{className:"pokemon__meta"},m.a.createElement("span",null,e.maxHP),m.a.createElement("span",null,e.maxCP)),m.a.createElement("div",{className:"pokemon__image"},m.a.createElement("img",{src:e.image,alt:e.name})),m.a.createElement("div",{className:"pokemon__attacks"},e.attacks.special.slice(0,3).map(e=>m.a.createElement("span",{key:"".concat(e.name,"-").concat(e.damage)},e.name))))}var i=a(19),p=a(12);function u(){const e=Object(i.a)(["\n    query pokemons($first: Int!) {\n        pokemons(first: $first) {\n            id\n            name\n            image\n            maxHP\n            maxCP\n            attacks {\n                special {\n                    name\n                    damage\n                }\n            }\n        }   \n    }\n"]);return u=function(){return e},e}const k=a.n(p)()(u());function d(){const e=Object(s.a)(k,{variables:{first:9}}).data,n=(void 0===e?{}:e).pokemons,a=void 0===n?[]:n;return m.a.createElement("div",{className:"container"},a&&a.map(e=>m.a.createElement(l,{key:e.id,pokemon:e})))}function E(){const e=new o.a({uri:"https://graphql-pokemon.now.sh"});return m.a.createElement(r.a,{client:e},m.a.createElement("main",null,m.a.createElement(d,null)))}a(33);Object(c.render)(m.a.createElement(E,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.6742bd3f.chunk.js.map