(this["webpackJsonpgraphql-anime"]=this["webpackJsonpgraphql-anime"]||[]).push([[0],{10:function(e,n,a){e.exports={wrapper:"CharacterStaff_wrapper__3stsb",card:"CharacterStaff_card__2SCc-",photo:"CharacterStaff_photo__21LdM",photoRight:"CharacterStaff_photoRight__3f-Jd",description:"CharacterStaff_description__3MLfL",descriptionRight:"CharacterStaff_descriptionRight__1LlFX"}},14:function(e,n,a){e.exports={charWrapper:"ItemCard_charWrapper__2mUFn",bg:"ItemCard_bg__1Coo7",wrapper:"ItemCard_wrapper__26Eib",container:"ItemCard_container__2sXSf",img:"ItemCard_img__uNth-",movieInfo:"ItemCard_movieInfo__1iZn9",title:"ItemCard_title__vDvFg",rating:"ItemCard_rating__7UyjZ",movieSuggestions:"ItemCard_movieSuggestions__IELHZ",movieSuggestionsCard:"ItemCard_movieSuggestionsCard__3LeH1",synopsis:"ItemCard_synopsis__O4DPg",movieTechData:"ItemCard_movieTechData__hPOHa",genresWrapper:"ItemCard_genresWrapper__1B4iP",studios:"ItemCard_studios__3kZiI"}},21:function(e,n,a){e.exports={container:"Search_container__38w3k",group:"Search_group__22keK",bar:"Search_bar__2Wq7H",highlight:"Search_highlight__7lpJY",inputHighlighter:"Search_inputHighlighter__3SrZ6"}},26:function(e,n,a){e.exports={charWrapper:"Character_charWrapper__3qsVJ",bg:"Character_bg__3IZtJ",wrapper:"Character_wrapper__HYeDn",titleCard:"Character_titleCard__2XjqI",synopsis:"Character_synopsis__1KbB7"}},55:function(e,n,a){},56:function(e,n,a){},57:function(e,n,a){},67:function(e,n,a){},69:function(e,n,a){"use strict";a.r(n);var t,c,i,r,s,d,j,l,o=a(2),h=a.n(o),b=a(46),g=a.n(b),m=(a(55),a(28)),O=a(8),u=a(86),x=a(9),p=(a(56),a(23)),v=a(84),f=Object(v.a)(t||(t=Object(p.a)(["\n  query Page($page: Int) {\n    Page(page: $page, perPage: 20) {\n      pageInfo {\n        total\n      }\n      media {\n        id\n        title {\n          english\n          native\n        }\n        status\n        type\n        season\n        genres\n        episodes\n        seasonYear\n        coverImage {\n          large\n        }\n      }\n    }\n  }\n"]))),_=Object(v.a)(c||(c=Object(p.a)(["\n  query Page($page: Int, $search: String) {\n    Page(page: $page, perPage: 20) {\n      pageInfo {\n        total\n      }\n      media(search: $search) {\n        id\n        title {\n          english\n          native\n        }\n        status\n        type\n        season\n        genres\n        episodes\n        seasonYear\n        coverImage {\n          large\n        }\n      }\n    }\n  }\n"]))),I=Object(v.a)(i||(i=Object(p.a)(["\n  query Media($id: Int) {\n    Media(id: $id) {\n      title {\n        english\n        native\n      }\n      description\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      season\n      seasonYear\n      episodes\n      duration\n      countryOfOrigin\n      coverImage {\n        extraLarge\n        color\n      }\n      bannerImage\n      genres\n      averageScore\n      studios {\n        nodes {\n          name\n          id\n        }\n      }\n      siteUrl\n      recommendations(perPage: 6, sort: [RATING_DESC, ID]) {\n        pageInfo {\n          total\n        }\n        nodes {\n          id\n          rating\n          mediaRecommendation {\n            id\n            title {\n              userPreferred\n              native\n            }\n            status(version: 2)\n            coverImage {\n              large\n            }\n          }\n        }\n      }\n      characters(sort: [ROLE, RELEVANCE, ID], perPage: 10) {\n        edges {\n          role\n          id\n          voiceActors(language: JAPANESE) {\n            id\n            name {\n              full\n            }\n            image {\n              medium\n            }\n          }\n          node {\n            id\n            name {\n              full\n              native\n            }\n            image {\n              medium\n            }\n            age\n            gender\n          }\n        }\n      }\n    }\n  }\n"]))),N=Object(v.a)(r||(r=Object(p.a)(["\n  query characters($name: String, $page: Int) {\n    Page(page: $page, perPage: 20) {\n      pageInfo {\n        total\n      }\n      characters(search: $name) {\n        name {\n          full\n          native\n        }\n        image {\n          large\n        }\n        gender\n        dateOfBirth {\n          year\n          month\n          day\n        }\n        age\n        id\n        siteUrl\n      }\n    }\n  }\n"]))),P=Object(v.a)(s||(s=Object(p.a)(["\n  query character($id: Int) {\n    Character(id: $id) {\n      name {\n        full\n        native\n      }\n      image {\n        large\n      }\n      id\n      gender\n      dateOfBirth {\n        month\n        day\n      }\n      description(asHtml: true)\n      age\n      siteUrl\n      media {\n        edges {\n          node {\n            id\n            title {\n              english\n              native\n            }\n            coverImage {\n              large\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),S=Object(v.a)(d||(d=Object(p.a)(["\n  query media($id: Int, $page: Int) {\n    Media(id: $id) {\n      id\n      characters(page: $page, sort: [ROLE, RELEVANCE, ID]) {\n        pageInfo {\n          total\n          perPage\n          currentPage\n          lastPage\n          hasNextPage\n        }\n        edges {\n          role\n          id\n          voiceActors(language: JAPANESE) {\n            id\n            name {\n              full\n            }\n            image {\n              medium\n            }\n          }\n          node {\n            id\n            name {\n              full\n              native\n            }\n            image {\n              medium\n            }\n            age\n            gender\n          }\n        }\n      }\n    }\n  }\n"]))),C=Object(v.a)(j||(j=Object(p.a)(["\n  query media($id: Int, $page: Int) {\n    Media(id: $id) {\n      recommendations(page: $page, perPage: 25, sort: [RATING_DESC, ID]) {\n        pageInfo {\n          total\n        }\n        nodes {\n          id\n          rating\n\n          mediaRecommendation {\n            genres\n            episodes\n            seasonYear\n            id\n            title {\n              english\n              native\n            }\n            status(version: 2)\n            coverImage {\n              large\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),y=Object(v.a)(l||(l=Object(p.a)(["\n  query Media($id: Int, $page: Int) {\n    Page(page: 1) {\n      studios(id: $id, sort: SEARCH_MATCH) {\n        name\n        id\n        media(page: $page) {\n          pageInfo {\n            total\n          }\n          nodes {\n            id\n            title {\n              romaji\n              english\n              native\n              userPreferred\n            }\n            coverImage {\n              extraLarge\n              large\n              medium\n              color\n            }\n            seasonYear\n          }\n        }\n      }\n    }\n  }\n"]))),M=(a(57),a(0)),E=function(){return Object(M.jsxs)("div",{className:"lds-roller",children:[Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{})]})},$=a(50),w=function(e){var n,a,t=e.totalPages,c=e.currentPage,i=e.changePage;t<=10?(n=1,a=t):c<=6?(n=1,a=10):c+4>=t?(n=t-9,a=t):(n=c-5,a=c+4);var r=Object($.a)(Array(a+1-n).keys()).map((function(e){return n+e})).map((function(e){return Object(M.jsx)("li",{children:Object(M.jsx)("span",{onClick:function(){return i(e)},className:c===e?"active":"",children:e})},e)}));return Object(M.jsxs)("ul",{className:"pagination",children:[Object(M.jsx)("li",{children:Object(M.jsx)("span",{onClick:function(){i(1)},children:"To start"})}),Object(M.jsx)("li",{children:Object(M.jsx)("span",{onClick:function(){if(1===c||c<1)return!1;i(c-1)},children:"Prev"})}),r,Object(M.jsx)("li",{children:Object(M.jsx)("span",{onClick:function(){if(c>t||c===t)return!1;i(c+1)},children:"Next"})}),Object(M.jsx)("li",{children:Object(M.jsx)("span",{onClick:function(){i(t)},children:"To end"})})]})},A=a(7),D=function(e){var n=e.data,a=n.age,t=n.gender,c=n.id,i=n.image.large,r=n.name,s=r.full,d=r.native,j=n.siteUrl,l=n.dateOfBirth,o=l.day,h=l.month;return Object(M.jsxs)("div",{className:"cardChar",children:[Object(M.jsxs)("div",{className:"card-image",children:[Object(M.jsx)("img",{src:i,alt:i}),Object(M.jsx)("h2",{className:"character-title",children:s}),Object(M.jsx)("h3",{children:d})]}),Object(M.jsxs)("div",{className:"card-content",children:[Object(M.jsxs)("div",{children:["Gender:",t]}),Object(M.jsxs)("div",{children:["Age: ",a]}),Object(M.jsxs)("p",{children:["Birthday: ",o,".",h]})]}),Object(M.jsxs)("div",{className:"card-action",children:[Object(M.jsx)(A.b,{to:"/character/".concat(c),children:"More info"}),Object(M.jsx)("a",{href:j,children:"Watch on website"})]})]})},k=(a(67),a(21)),R=a.n(k),L=function(e){var n=e.inputHandler;return Object(M.jsxs)("div",{className:R.a.group,children:[Object(M.jsx)("input",{onChange:n,type:R.a.text,required:!0}),Object(M.jsx)("span",{className:R.a.highlight}),Object(M.jsx)("span",{className:R.a.bar}),Object(M.jsx)("label",{children:"Character name"})]})},q=function(e){var n=e.handleInput,a=Object(o.useState)(""),t=Object(O.a)(a,2),c=t[0],i=t[1];return Object(M.jsx)("div",{children:Object(M.jsxs)("div",{className:R.a.container,children:[Object(M.jsx)("h2",{children:"Search characters: "}),Object(M.jsx)(L,{inputHandler:function(e){e.preventDefault(),i(e.target.value),n(c)}})]})})},H=function(){var e=Object(o.useState)([]),n=Object(O.a)(e,2),a=n[0],t=n[1],c=Object(o.useState)(1),i=Object(O.a)(c,2),r=i[0],s=i[1],d=Object(o.useState)(""),j=Object(O.a)(d,2),l=j[0],h=j[1],b=Object(u.a)(N,{variables:{name:l,page:r}}),g=b.data,m=b.loading,x=g&&!m?Math.ceil(g.Page.pageInfo.total/20):1;Object(o.useEffect)((function(){m||t(g.Page.characters)}),[g]);return Object(M.jsxs)("div",{children:[Object(M.jsx)(q,{handleInput:function(e){h(e)}}),Object(M.jsx)("div",{className:"characters-inner",children:!m&&a?a.map((function(e){return Object(M.jsx)(D,{data:e})})):Object(M.jsx)(E,{})}),x?Object(M.jsx)(w,{currentPage:r,totalPages:x,changePage:function(e){s(e)}}):null]})},W=function(){return Object(M.jsxs)("div",{className:"header",children:[Object(M.jsx)(A.b,{to:"/",href:"#default",className:"logo",children:"Anime App"}),Object(M.jsxs)("div",{className:"header-right",children:[Object(M.jsx)(A.b,{to:"/",href:"#home",children:"Home"}),Object(M.jsx)(A.b,{to:"/search-anime",href:"#contact",children:"Search Anime"}),Object(M.jsx)(A.b,{to:"/search-character",href:"#contact",children:"Search Character"})]})]})},T=function(e){var n=e.preloader,a=e.img,t=Object(o.useState)(!1),c=Object(O.a)(t,2),i=c[0],r=c[1],s=new Image;return s.src=a,s.onload=function(){r(!0)},i?Object(M.jsx)("img",{src:a,alt:a}):Object(M.jsx)("img",{src:n,alt:a})},B=a(14),F=a.n(B),Y=a.p+"static/media/empty.817176e3.png",J=a(10),U=a.n(J),Z=function(e){var n=e.id,a=e.fullname,t=e.image,c=e.role,i=e.voiceActor,r=(i=void 0===i?{}:i).name,s=(r=void 0===r?{}:r).full,d=void 0===s?"":s,j=i.image,l=(j=void 0===j?{}:j).medium,o=void 0===l?"":l;return Object(M.jsxs)("div",{className:U.a.card,children:[Object(M.jsx)("div",{className:U.a.photo,children:Object(M.jsx)(T,{preloader:Y,img:t})}),Object(M.jsxs)("div",{className:U.a.description,children:[Object(M.jsx)(A.b,{to:"/character/".concat(n),children:Object(M.jsx)("h3",{children:a})}),Object(M.jsx)("h4",{children:c})]}),Object(M.jsx)("div",{className:U.a.descriptionRight,children:Object(M.jsx)("h3",{children:d})}),Object(M.jsx)("div",{className:U.a.photoRight,children:Object(M.jsx)(T,{preloader:Y,img:o})})]})},G=function(e){var n=e.characters.edges;return n?Object(M.jsx)("div",{className:U.a.wrapper,children:n?n.map((function(e){var n=e.node,a=n.name,t=a.full,c=a.native,i=n.image.medium,r=n.age,s=n.id,d=e.role,j=e.voiceActors;return Object(M.jsx)(Z,{fullname:t,native:c,age:r,image:i,role:d,id:s,voiceActor:j[0]},s)})):""}):Object(M.jsx)(E,{})},V=a(26),X=a.n(V),K=function(e){var n=e.id,a=e.limg,t=e.english,c=e.ntitle;return Object(M.jsx)("div",{className:X.a.titleCard,children:Object(M.jsx)(A.b,{to:"/anime/".concat(n),children:Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:a,alt:a}),Object(M.jsx)("span",{children:Object(M.jsx)("h3",{children:t||c})})]})})},n+Math.random())},z=function(e){var n=e.data,a=e.id,t=n.title,c=t.native,i=t.english,r=n.description,s=n.duration,d=n.season,j=n.seasonYear,l=n.startDate,o=l.year,h=l.month,b=l.day,g=n.endDate,m=g.year,O=g.month,u=g.day,x=n.episodes,p=n.bannerImage,v=n.studios.nodes,f=n.siteUrl,_=n.countryOfOrigin,I=n.coverImage,N=I.extraLarge,P=I.color,S=n.averageScore,C=n.genres,y=n.characters,E=n.recommendations.nodes;return Object(M.jsxs)("div",{className:F.a.bg,children:[Object(M.jsx)("div",{className:F.a.wrapper,style:{backgroundImage:"url(".concat(p,")"),backgroundColor:P},children:Object(M.jsxs)("div",{className:F.a.container,children:[Object(M.jsx)("div",{className:F.a.img,children:Object(M.jsx)(T,{img:N,preloader:Y})}),Object(M.jsxs)("div",{className:F.a.movieInfo,children:[Object(M.jsx)("div",{className:F.a.title,children:Object(M.jsxs)("h2",{style:{color:"white",fontSize:"40px"},children:[" ",i]})}),Object(M.jsx)("div",{className:F.a.title,children:Object(M.jsx)("h3",{children:c})}),Object(M.jsx)("div",{children:o}),Object(M.jsx)("div",{className:F.a.genresWrapper,children:C?C.map((function(e){return Object(M.jsxs)("span",{children:[e,"/"]},e+Math.random())})):""}),Object(M.jsxs)("div",{className:F.a.rating,children:[Object(M.jsx)("img",{src:"https://yts.mx/assets/images/website/logo-imdb.svg",alt:"imdb"}),Object(M.jsxs)("span",{children:["\u2605 ",S]})]})]})]})}),Object(M.jsxs)("div",{className:F.a.synopsis,children:[Object(M.jsx)("h3",{children:"Synopsis"}),Object(M.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}),Object(M.jsxs)("div",{className:F.a.movieTechData,children:[Object(M.jsxs)("div",{children:["Episodes: ",x]}),Object(M.jsxs)("div",{children:["Duration: ",s]}),Object(M.jsxs)("div",{children:["Season: ",d]}),Object(M.jsxs)("div",{children:["Season year: ",j]}),Object(M.jsxs)("div",{children:["Country of origin: ",_]}),Object(M.jsxs)("div",{children:["Start date: ",b,".",h,".",o," "]}),Object(M.jsxs)("div",{children:["End date: ",u,".",O,".",m," "]})]}),Object(M.jsxs)("div",{className:F.a.studios,children:[Object(M.jsx)("h3",{children:"Studios:"}),v?v.map((function(e){return Object(M.jsx)("div",{children:Object(M.jsx)(A.b,{to:"/studio/".concat(e.id),children:e.name})})})):null]}),Object(M.jsxs)("div",{children:[Object(M.jsx)(A.b,{to:"/anime/characters/".concat(a),children:Object(M.jsx)("h2",{className:"h2-black",children:"Characters "})}),Object(M.jsx)(G,{characters:y})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)(A.b,{to:"/anime/recomendations/".concat(a),children:Object(M.jsx)("h2",{className:"h2-black",children:"Recommendations"})}),Object(M.jsx)("div",{className:F.a.charWrapper,children:E?E.map((function(e){var n=e.mediaRecommendation,a=n.id,t=n.coverImage.large,c=n.title,i=c.userPreferred,r=c.native;return Object(M.jsx)(K,{id:a,english:i,ntitle:r,limg:t},a+Math.random())})):null})]}),Object(M.jsx)("a",{href:f,children:"Chech on site"})]})]})},Q=Object(x.e)((function(e){var n=e.match.params.id,a=Object(u.a)(I,{variables:{id:n}}),t=a.data,c=a.loading;return c?Object(M.jsx)(E,{}):Object(M.jsx)("div",{children:!c&&t?Object(M.jsx)(z,{data:t.Media,id:n}):""})})),ee=function(e){var n=e.data,a=n=n.mediaRecommendation?n.mediaRecommendation:n,t=a.title,c=a.id,i=a.coverImage,r=a.episodes,s=a.seasonYear,d=a.genres,j=d.length>3?d.slice(0,3):d;return Object(M.jsx)("div",{className:"card",children:Object(M.jsxs)(A.b,{to:"/anime/".concat(c),children:[Object(M.jsxs)("div",{className:"img-inner",children:[Object(M.jsx)(T,{preloader:Y,img:i.large}),Object(M.jsxs)("div",{className:"card-desc",children:[Object(M.jsx)("h2",{style:{color:"white"},children:t.english}),Object(M.jsx)("h2",{style:{color:"white"},children:t.native}),"Season year - ",s,Object(M.jsx)("br",{}),Object(M.jsxs)("ul",{children:[Object(M.jsx)("h3",{children:"Genres:"}),j?j.map((function(e){return Object(M.jsx)("li",{children:e},e+Math.random())})):""]}),Object(M.jsx)("br",{}),Object(M.jsxs)("div",{children:["Episodes - ",r]}),Object(M.jsx)("div",{className:"card-link"})]})]}),Object(M.jsx)("h2",{className:"card-title",children:null===t.english||""===t.english?t.native:t.english})]})})},ne=a.p+"static/media/notfound.6eab02e4.png",ae=function(){return Object(M.jsx)("div",{className:"notFound",children:Object(M.jsx)("img",{src:ne,alt:"notFound"})})},te=function(e){var n=e.page,a=e.loading,t=e.list,c=e.totalPages,i=e.changePage;return Object(M.jsxs)("div",{className:"cards-inner",children:[a?Object(M.jsx)(E,{}):null,Object(M.jsx)("div",{className:"cards",children:t?t.map((function(e){return Object(M.jsx)(ee,{data:e},e.id+Math.random())})):""}),c?Object(M.jsx)(w,{totalPages:c,currentPage:n,changePage:i}):Object(M.jsx)(ae,{})]})},ce=Object(x.e)((function(e){var n=e.match.params.id,a=Object(u.a)(P,{variables:{id:n}}),t=a.data;if(a.loading)return Object(M.jsx)(E,{});var c=t.Character,i=c.age,r=c.dateOfBirth,s=r.day,d=r.month,j=c.description,l=c.gender,o=c.image.large,h=c.media,b=c.name,g=b.full,m=b.native,O=c.siteUrl;return Object(M.jsxs)("div",{style:{backgroundColor:"white"},children:[Object(M.jsxs)("div",{className:U.a.bg+" "+X.a.bg,style:{margin:"0 auto",maxWidth:"1100px",display:"flex",justifyContent:"space-between"},children:[Object(M.jsx)("div",{className:U.a.wrapper+" "+X.a.wrapper,children:Object(M.jsxs)("div",{className:U.a.container,children:[Object(M.jsx)("div",{className:U.a.img,children:Object(M.jsx)(T,{img:o,preloader:Y})}),Object(M.jsxs)("div",{className:U.a.movieInfo,children:[Object(M.jsx)("div",{className:U.a.title,children:Object(M.jsx)("h2",{className:"h2-black",children:g})}),Object(M.jsx)("div",{className:U.a.title,children:Object(M.jsx)("h3",{children:m})})]})]})}),Object(M.jsxs)("div",{className:U.a.synopsis+" "+X.a.synopsis,children:[Object(M.jsx)("h3",{children:"Synopsis"}),Object(M.jsx)("div",{dangerouslySetInnerHTML:{__html:j}}),Object(M.jsxs)("div",{className:U.a.movieTechData,children:[Object(M.jsx)("div",{children:l}),Object(M.jsxs)("div",{children:["Age: ",i||"no info"]}),Object(M.jsxs)("div",{children:["Birthday: ",s&&d?{day:s}+"."+{month:d}:"no info"]})]}),Object(M.jsx)("a",{href:O,children:"Chech on site"})]})]}),Object(M.jsx)("h2",{className:"h2-black",children:"Media: "}),Object(M.jsx)("div",{className:X.a.charWrapper,children:h?h.edges.map((function(e){var n=e.node,a=n.id,t=n.coverImage.large,c=n.title,i=c.english,r=c.native;return Object(M.jsx)(K,{id:a,english:i,ntitle:r,limg:t},a+Math.random())})):""})]})})),ie=Object(x.e)((function(e){var n=e.match.params.id,a=Object(o.useState)(1),t=Object(O.a)(a,2),c=t[0],i=t[1],r=Object(u.a)(S,{variables:{id:n,page:c}}),s=r.data,d=r.loading,j=Object(o.useState)([]),l=Object(O.a)(j,2),h=l[0],b=l[1],g=s&&!d?Math.ceil(s.Media.characters.pageInfo.total/25):1;Object(o.useEffect)((function(){d||b(s.Media.characters.edges)}),[s]);return d?Object(M.jsx)(E,{}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:U.a.wrapper,children:d?Object(M.jsx)(ae,{}):h.map((function(e){var n=e.role,a=e.voiceActors,t=e.node,c=t.id,i=t.age,r=(t.gender,t.image.medium),s=t.name,d=s.full,j=s.native;return Object(M.jsx)(Z,{id:c,age:i,fullname:d,voiceActor:a[0],image:r,role:n,native:j},c+Math.random())}))}),Object(M.jsx)(w,{totalPages:g,currentPage:c,changePage:function(e){i(e)}})]})})),re=Object(x.e)((function(e){var n=Object(o.useState)([]),a=Object(O.a)(n,2),t=a[0],c=a[1],i=Object(o.useState)(1),r=Object(O.a)(i,2),s=r[0],d=r[1],j=e.match.params.id,l=Object(u.a)(C,{variables:{id:j,page:s}}),h=l.data,b=l.loading,g=h&&!b?Math.ceil(h.Media.recommendations.pageInfo.total/25):1;Object(o.useEffect)((function(){b||c(h.Media.recommendations.nodes)}),[h]);var m=function(e){d(e)};return b?Object(M.jsx)(E,{}):Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:F.a.charWrapper,children:Object(M.jsx)(te,{changePage:m,totalPages:g,page:s,list:t,loading:b})}),Object(M.jsx)(w,{totalPages:g,currentPage:s,changePage:m})]})})),se=Object(x.e)((function(e){var n=e.match.params.id,a=Object(o.useState)([]),t=Object(O.a)(a,2),c=t[0],i=t[1],r=Object(o.useState)(""),s=Object(O.a)(r,2),d=s[0],j=s[1],l=Object(o.useState)(1),h=Object(O.a)(l,2),b=h[0],g=h[1],m=Object(u.a)(y,{variables:{id:n,page:b}}),x=m.data,p=m.loading;Object(o.useEffect)((function(){p||(i(x.Page.studios[0].media.nodes),j(x.Page.studios[0].name))}),[x]);var v=x&&!p?Math.ceil(x.Page.studios[0].media.pageInfo.total/25):1;return p?Object(M.jsx)(E,{}):Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:d}),Object(M.jsx)("div",{className:"charWrapper",children:!p&&c?c.map((function(e){var n=e.id,a=e.coverImage.large,t=e.title,c=t.english,i=t.native;return Object(M.jsx)(K,{id:n,english:c,ntitle:i,limg:a},n+Math.random())})):""}),Object(M.jsx)(w,{totalPages:v,currentPage:b,changePage:function(e){g(e)}})]})})),de=function(e){var n=e.error;return Object(M.jsx)("div",{children:Object(M.jsxs)("h2",{style:{color:"white"},children:[" ",n.message]})})},je=function(){var e=Object(o.useState)(""),n=Object(O.a)(e,2),a=n[0],t=n[1],c=Object(o.useState)(1),i=Object(O.a)(c,2),r=i[0],s=i[1],d=Object(u.a)(_,{variables:{search:a,page:r}}),j=d.data,l=d.loading,h=d.error,b=Object(o.useState)([]),g=Object(O.a)(b,2),m=g[0],x=g[1],p=j&&!l?Math.ceil(j.Page.pageInfo.total/20):1;Object(o.useEffect)((function(){l||h||x(j.Page.media)}),[j]);return h?Object(M.jsx)(de,{error:h}):l?Object(M.jsx)(E,{}):Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{className:R.a.container,children:[Object(M.jsx)("h2",{children:"Search anime: "}),Object(M.jsx)(L,{inputHandler:function(e){e.preventDefault(),t(e.target.value)}})]}),Object(M.jsx)("div",{className:"cards-inner",children:Object(M.jsx)(te,{list:m,loading:l,changePage:function(e){s(e)},totalPages:p,page:r})})]})};var le=function(e){var n=Object(o.useState)(1),a=Object(O.a)(n,2),t=a[0],c=a[1],i=Object(u.a)(f,{variables:{page:t}}),r=i.data,s=i.loading,d=Object(o.useState)([]),j=Object(O.a)(d,2),l=j[0],h=j[1];Object(o.useEffect)((function(){s||h(r.Page.media)}),[r]);var b=function(e){c(e)};return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(W,{}),Object(M.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(M.jsx)(te,{list:l,loading:s,changePage:b,totalPages:4185,page:t})}}),Object(M.jsx)(x.a,{exact:!0,path:"/graphql-anime-app",render:function(){return Object(M.jsx)(te,{list:l,loading:s,changePage:b,totalPages:4185,page:t})}}),Object(M.jsx)(x.a,{exact:!0,path:"/search-anime",component:je}),Object(M.jsx)(x.a,{exact:!0,path:"/anime/:id?",component:function(){return Object(M.jsx)(Q,Object(m.a)({},e))}}),Object(M.jsx)(x.a,{exact:!0,path:"/search-character",component:H}),Object(M.jsx)(x.a,{exact:!0,path:"/character/:id?",component:function(){return Object(M.jsx)(ce,Object(m.a)({},e))}}),Object(M.jsx)(x.a,{exact:!0,path:"/anime/characters/:id?",component:function(){return Object(M.jsx)(ie,Object(m.a)({},e))}}),Object(M.jsx)(x.a,{exact:!0,path:"/anime/recomendations/:id?",component:function(){return Object(M.jsx)(re,Object(m.a)({},e))}}),Object(M.jsx)(x.a,{exact:!0,path:"/studio/:id?",component:function(){return Object(M.jsx)(se,Object(m.a)({},e))}})]})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;a(e),t(e),c(e),i(e),r(e)}))},he=a(82),be=a(83),ge=a(85),me=new be.a({uri:"https://graphql.anilist.co",cache:new ge.a});g.a.render(Object(M.jsx)(h.a.StrictMode,{children:Object(M.jsx)(he.a,{client:me,children:Object(M.jsx)(A.a,{children:Object(M.jsx)(le,{})})})}),document.getElementById("root")),oe()}},[[69,1,2]]]);
//# sourceMappingURL=main.2f626827.chunk.js.map