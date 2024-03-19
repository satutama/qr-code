"use strict";(self.webpackChunktest_gh=self.webpackChunktest_gh||[]).push([[14],{2014:(_,d,l)=>{l.r(d),l.d(d,{CalculatorComponent:()=>m,OPERATOR:()=>c});var s=l(6814),t=l(5879),i=l(6223),p=l(7394);let u=(()=>{class a{constructor(){this.firstOperand=(0,t.tdS)(null),this.secondOperand=(0,t.tdS)(null),this.currentInput=(0,t.tdS)(null),this.operator=(0,t.tdS)(null),this.memory=(0,t.tdS)(null)}applyOperator(e,o){switch(e){case c.DELETE:this.deleteMemories(o);break;case c.ADD:this.operatorClicked(c.ADD,o);break;case c.SUBSTRACT:this.operatorClicked(c.SUBSTRACT,o);break;case c.DIVIDE:this.operatorClicked(c.DIVIDE,o);break;case c.MULTIPLY:this.operatorClicked(c.MULTIPLY,o);break;case c.EVALUATE:this.evaluate(o);break;case c.RESET:this.deleteMemories()}}operatorClicked(e,o){const n=this.firstOperand(),r=this.secondOperand(),g=this.operator();if(o||0===o)if(this.operator.set(e),this.secondOperand.set(null),r||!n)this.firstOperand.set(Number(o)),this.memory.set(`${this.firstOperand()} ${e} `),this.currentInput.set(null);else if(n){const h=this.calculate(n,Number(o),g);this.firstOperand.set(h),this.memory.set(`${this.firstOperand()} ${e} `),this.currentInput.set(null)}}evaluate(e){const o=this.firstOperand()??null,n=this.secondOperand()??null,r=this.operator();if(r&&!n&&(e||0===e)&&(o||0===o)){this.secondOperand.set(e),this.memory.set(`${this.firstOperand()} ${r} ${this.secondOperand()}`);const g=this.calculate(o,e,r);this.currentInput.set(g)}}deleteMemories(e){this.firstOperand.set(null),this.secondOperand.set(null),this.operator.set(null),this.memory.set(null),this.currentInput.set(e||null)}calculate(e,o,n){switch(n){case c.ADD:return e+o;case c.MULTIPLY:return e*o;case c.DIVIDE:return e/o;case c.SUBSTRACT:return e-o;default:return 0}}static#t=this.\u0275fac=function(o){return new(o||a)};static#n=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var c=function(a){return a.DELETE="delete",a.ADD="+",a.SUBSTRACT="-",a.MULTIPLY="*",a.DIVIDE="/",a.EVALUATE="=",a.RESET="reset",a}(c||{});let m=(()=>{class a{constructor(e){this.calculatorService=e,this.operator=c,this.themeControl=new i.cw({theme:new i.NI(1,{nonNullable:!0})}),this.selectedTheme=(0,t.tdS)(JSON.parse(window.localStorage.getItem("calculatorTheme")??"1")),this.memory=this.calculatorService.memory,this.calculationControl=new i.NI(null),this.subscriptions=new p.w0,(0,t.cEC)(()=>{window.localStorage.setItem("calculatorTheme",JSON.stringify(this.selectedTheme()))})}ngOnInit(){console.log(this.selectedTheme()),this.themeControl.controls.theme.setValue(this.selectedTheme()),this.subscriptions.add(this.themeListener())}ngOnDestroy(){this.subscriptions.unsubscribe()}appendNumber(e){this.calculationControl.setValue(this.calculationControl.value?`${this.calculationControl.value}${e}`:e)}applyOperator(e){const o=Number(this.calculationControl.value);this.calculatorService.applyOperator(e,o);const n=this.calculatorService.currentInput()?.toString()||null;this.calculationControl.setValue(n)}themeListener(){return this.themeControl.controls.theme.valueChanges.subscribe(e=>this.selectedTheme.set(e))}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(u))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-calculator"]],standalone:!0,features:[t.jDz],decls:64,vars:4,consts:[[1,"min-h-full","min-w-96",3,"ngClass"],[1,"flex","flex-col","p-5","max-w-96","mx-auto"],[1,"grid","grid-cols-4","my-8","items-end"],[1,"col-span-2","default-color","text-2xl","font-bold"],[1,"default-color","text-xs","text-center","font-semibold"],[1,"flex","flex-col","ml-3"],[1,"hidden"],[3,"formGroup"],[1,"flex","justify-between","px-2","font-semibold"],["for","first",1,"default-color","text-xs"],["for","second",1,"default-color","text-xs"],["for","third",1,"default-color","text-xs"],[1,"mt-[5px]","flex","justify-between","rounded-3xl","p-1","button-container"],["id","first","name","state-d","type","radio","value","1","formControlName","theme","aria-label","Theme 1",1,"appearance-none","cursor-pointer","size-4","rounded-3xl","theme-radio"],["id","second","name","state-d","type","radio","value","2","formControlName","theme","aria-label","Theme 2",1,"appearance-none","cursor-pointer","size-4","rounded-3xl","theme-radio"],["id","third","name","state-d","type","radio","value","3","formControlName","theme","aria-label","Theme 3",1,"appearance-none","cursor-pointer","size-4","rounded-3xl","theme-radio"],[1,"relative","w-full","rounded-xl","text-right","text-3xl","font-bold","p-5","result-container"],[1,"absolute","top-1","right-6","text-base","default-color"],["type","text",1,"appearance-none","w-full","text-right","text-3xl","font-bold","default-color","result-container",3,"formControl"],[1,"button-container","rounded-xl","mt-4"],[1,"p-6","grid","grid-cols-4","gap-4","text-xl"],[1,"font-mono","border-b-4","font-semibold","rounded-md","text-2xl","p-2","main-button",3,"click"],[1,"font-mono","font-semibold","border-b-4","rounded-md","text-2xl","p-2","secondary-button",3,"click"],[1,"font-mono","font-semibold","border-b-4","rounded-md","text-2xl","p-2","secondary-button","col-span-2",3,"click"],[1,"font-mono","col-span-2","font-semibold","border-b-4","rounded-md","text-2xl","p-2","third-button",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"calc"),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"THEME"),t.qZA(),t.TgZ(7,"fieldset",5)(8,"legend",6),t._uU(9,"Select Theme"),t.qZA(),t.TgZ(10,"form",7)(11,"div",8)(12,"label",9),t._uU(13,"1"),t.qZA(),t.TgZ(14,"label",10),t._uU(15,"2"),t.qZA(),t.TgZ(16,"label",11),t._uU(17,"3"),t.qZA()(),t.TgZ(18,"div",12),t._UZ(19,"input",13)(20,"input",14)(21,"input",15),t.qZA()()()(),t.TgZ(22,"div",16)(23,"div",17),t._uU(24),t.qZA(),t._UZ(25,"input",18),t.qZA(),t.TgZ(26,"div",19)(27,"div",20)(28,"button",21),t.NdJ("click",function(){return n.appendNumber("7")}),t._uU(29,"7"),t.qZA(),t.TgZ(30,"button",21),t.NdJ("click",function(){return n.appendNumber("8")}),t._uU(31,"8"),t.qZA(),t.TgZ(32,"button",21),t.NdJ("click",function(){return n.appendNumber("9")}),t._uU(33,"9"),t.qZA(),t.TgZ(34,"button",22),t.NdJ("click",function(){return n.applyOperator(n.operator.DELETE)}),t._uU(35,"DEL"),t.qZA(),t.TgZ(36,"button",21),t.NdJ("click",function(){return n.appendNumber("4")}),t._uU(37,"4"),t.qZA(),t.TgZ(38,"button",21),t.NdJ("click",function(){return n.appendNumber("5")}),t._uU(39,"5"),t.qZA(),t.TgZ(40,"button",21),t.NdJ("click",function(){return n.appendNumber("6")}),t._uU(41,"6"),t.qZA(),t.TgZ(42,"button",21),t.NdJ("click",function(){return n.applyOperator(n.operator.ADD)}),t._uU(43,"+"),t.qZA(),t.TgZ(44,"button",21),t.NdJ("click",function(){return n.appendNumber("1")}),t._uU(45,"1"),t.qZA(),t.TgZ(46,"button",21),t.NdJ("click",function(){return n.appendNumber("2")}),t._uU(47,"2"),t.qZA(),t.TgZ(48,"button",21),t.NdJ("click",function(){return n.appendNumber("3")}),t._uU(49,"3"),t.qZA(),t.TgZ(50,"button",21),t.NdJ("click",function(){return n.applyOperator(n.operator.SUBSTRACT)}),t._uU(51,"-"),t.qZA(),t.TgZ(52,"button",21),t.NdJ("click",function(){return n.appendNumber(".")}),t._uU(53,"."),t.qZA(),t.TgZ(54,"button",21),t.NdJ("click",function(){return n.appendNumber("0")}),t._uU(55,"0"),t.qZA(),t.TgZ(56,"button",21),t.NdJ("click",function(){return n.applyOperator(n.operator.DIVIDE)}),t._uU(57,"/"),t.qZA(),t.TgZ(58,"button",21),t.NdJ("click",function(){return n.applyOperator(n.operator.MULTIPLY)}),t._uU(59,"x"),t.qZA(),t.TgZ(60,"button",23),t.NdJ("click",function(){return n.applyOperator(n.operator.RESET)}),t._uU(61,"RESET"),t.qZA(),t.TgZ(62,"button",24),t.NdJ("click",function(){return n.applyOperator(n.operator.EVALUATE)}),t._uU(63,"="),t.qZA()()()()()),2&o&&(t.Q6J("ngClass",1==n.selectedTheme()?"dark-calculator":2==n.selectedTheme()?"light-calculator":"violet-calculator"),t.xp6(10),t.Q6J("formGroup",n.themeControl),t.xp6(14),t.Oqu(n.memory()),t.xp6(1),t.Q6J("formControl",n.calculationControl))},dependencies:[s.ez,s.mk,i.u5,i._Y,i.Fj,i._,i.JJ,i.JL,i.UX,i.oH,i.sg,i.u],styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.container[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.container[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.container[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.container[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.container[_ngcontent-%COMP%]{max-width:1536px}}.pointer-events-none[_ngcontent-%COMP%]{pointer-events:none}.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.right-3[_ngcontent-%COMP%]{right:.75rem}.right-6[_ngcontent-%COMP%]{right:1.5rem}.right-72[_ngcontent-%COMP%]{right:18rem}.top-1[_ngcontent-%COMP%]{top:.25rem}.top-24[_ngcontent-%COMP%]{top:6rem}.top-52[_ngcontent-%COMP%]{top:13rem}.z-10[_ngcontent-%COMP%]{z-index:10}.col-span-2[_ngcontent-%COMP%]{grid-column:span 2 / span 2}.col-start-1[_ngcontent-%COMP%]{grid-column-start:1}.row-start-1[_ngcontent-%COMP%]{grid-row-start:1}.m-auto[_ngcontent-%COMP%]{margin:auto}.mx-0[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.mx-3[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}.mx-8[_ngcontent-%COMP%]{margin-left:2rem;margin-right:2rem}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.my-0[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.my-4[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.my-8[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:.25rem}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mb-5[_ngcontent-%COMP%]{margin-bottom:1.25rem}.mb-7[_ngcontent-%COMP%]{margin-bottom:1.75rem}.ml-3[_ngcontent-%COMP%]{margin-left:.75rem}.mr-1[_ngcontent-%COMP%]{margin-right:.25rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mr-4[_ngcontent-%COMP%]{margin-right:1rem}.mt-10[_ngcontent-%COMP%]{margin-top:2.5rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-5[_ngcontent-%COMP%]{margin-top:1.25rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-7[_ngcontent-%COMP%]{margin-top:1.75rem}.mt-8[_ngcontent-%COMP%]{margin-top:2rem}.mt-9[_ngcontent-%COMP%]{margin-top:2.25rem}.mt-\\__ph-0__[_ngcontent-%COMP%]{margin-top:5px}.block[_ngcontent-%COMP%]{display:block}.flex[_ngcontent-%COMP%]{display:flex}.grid[_ngcontent-%COMP%]{display:grid}.hidden[_ngcontent-%COMP%]{display:none}.size-4[_ngcontent-%COMP%]{width:1rem;height:1rem}.size-44[_ngcontent-%COMP%]{width:11rem;height:11rem}.size-5[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}.h-10[_ngcontent-%COMP%]{height:2.5rem}.h-12[_ngcontent-%COMP%]{height:3rem}.h-14[_ngcontent-%COMP%]{height:3.5rem}.h-4[_ngcontent-%COMP%]{height:1rem}.h-6[_ngcontent-%COMP%]{height:1.5rem}.h-\\__ph-0__[_ngcontent-%COMP%]{height:calc(100vh - 196px)}.h-full[_ngcontent-%COMP%]{height:100%}.min-h-full[_ngcontent-%COMP%]{min-height:100%}.w-1\\/2[_ngcontent-%COMP%]{width:50%}.w-24[_ngcontent-%COMP%]{width:6rem}.w-4[_ngcontent-%COMP%]{width:1rem}.w-6[_ngcontent-%COMP%]{width:1.5rem}.w-80[_ngcontent-%COMP%]{width:20rem}.w-full[_ngcontent-%COMP%]{width:100%}.min-w-96[_ngcontent-%COMP%]{min-width:24rem}.min-w-\\__ph-0__[_ngcontent-%COMP%]{min-width:280px}.max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.max-w-96[_ngcontent-%COMP%]{max-width:24rem}.max-w-\\__ph-0__[_ngcontent-%COMP%]{max-width:500px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.list-none[_ngcontent-%COMP%]{list-style-type:none}.appearance-none[_ngcontent-%COMP%]{appearance:none}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col[_ngcontent-%COMP%]{flex-direction:column}.flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.items-end[_ngcontent-%COMP%]{align-items:flex-end}.items-center[_ngcontent-%COMP%]{align-items:center}.items-baseline[_ngcontent-%COMP%]{align-items:baseline}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-10[_ngcontent-%COMP%]{gap:2.5rem}.gap-20[_ngcontent-%COMP%]{gap:5rem}.gap-4[_ngcontent-%COMP%]{gap:1rem}.gap-8[_ngcontent-%COMP%]{gap:2rem}.self-center[_ngcontent-%COMP%]{align-self:center}.justify-self-end[_ngcontent-%COMP%]{justify-self:end}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.rounded[_ngcontent-%COMP%]{border-radius:.25rem}.rounded-2xl[_ngcontent-%COMP%]{border-radius:1rem}.rounded-3xl[_ngcontent-%COMP%]{border-radius:1.5rem}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-md[_ngcontent-%COMP%]{border-radius:.375rem}.rounded-xl[_ngcontent-%COMP%]{border-radius:.75rem}.rounded-t-lg[_ngcontent-%COMP%]{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border[_ngcontent-%COMP%]{border-width:1px}.border-b-2[_ngcontent-%COMP%]{border-bottom-width:2px}.border-b-4[_ngcontent-%COMP%]{border-bottom-width:4px}.border-solid[_ngcontent-%COMP%]{border-style:solid}.border-none[_ngcontent-%COMP%]{border-style:none}.border-b-slate-200[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:rgb(226 232 240 / var(--tw-border-opacity))}.bg-white[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-1[_ngcontent-%COMP%]{padding:.25rem}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.p-5[_ngcontent-%COMP%]{padding:1.25rem}.p-6[_ngcontent-%COMP%]{padding:1.5rem}.px-2[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}.px-3[_ngcontent-%COMP%]{padding-left:.75rem;padding-right:.75rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.px-8[_ngcontent-%COMP%]{padding-left:2rem;padding-right:2rem}.px-9[_ngcontent-%COMP%]{padding-left:2.25rem;padding-right:2.25rem}.py-0[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-4[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}.py-5[_ngcontent-%COMP%]{padding-top:1.25rem;padding-bottom:1.25rem}.pl-10[_ngcontent-%COMP%]{padding-left:2.5rem}.pl-5[_ngcontent-%COMP%]{padding-left:1.25rem}.pr-14[_ngcontent-%COMP%]{padding-right:3.5rem}.pr-4[_ngcontent-%COMP%]{padding-right:1rem}.pr-5[_ngcontent-%COMP%]{padding-right:1.25rem}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.font-hanken[_ngcontent-%COMP%]{font-family:Hanken,Arial,sans-serif}.font-mono[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-nunitoSans[_ngcontent-%COMP%]{font-family:NunitoSans,Arial,sans-serif}.text-2xl[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem}.text-3xl[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}.text-5xl[_ngcontent-%COMP%]{font-size:3rem;line-height:1}.text-6xl[_ngcontent-%COMP%]{font-size:3.75rem;line-height:1}.text-base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-xl[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.lowercase[_ngcontent-%COMP%]{text-transform:lowercase}.text-\\[color\\:hsl\\(292\\[_ngcontent-%COMP%], 16\\%\\[_ngcontent-%COMP%], 49\\%\\)\\][_ngcontent-%COMP%]{--tw-text-opacity: 1;color:hsl(292 16% 49% / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-800[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-slate-200[_ngcontent-%COMP%]{--tw-shadow-color: #e2e8f0;--tw-shadow: var(--tw-shadow-colored)}.shadow-slate-300[_ngcontent-%COMP%]{--tw-shadow-color: #cbd5e1;--tw-shadow: var(--tw-shadow-colored)}.filter[_ngcontent-%COMP%]{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.dark-calculator[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(222 26% 31% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .default-color[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark-calculator[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(224 36% 15% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .theme-radio[_ngcontent-%COMP%]:checked{--tw-bg-opacity: 1;background-color:hsl(6 63% 50% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .theme-radio[_ngcontent-%COMP%]:hover:checked{--tw-bg-opacity: 1;background-color:hsl(6 63% 62% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(223 31% 20% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(28 16% 65% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(30 25% 89% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(221 14% 31% / var(--tw-text-opacity))}.dark-calculator[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(30 25% 99% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(224 28% 35% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(225 21% 49% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark-calculator[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(225 21% 52% / var(--tw-bg-opacity))}.dark-calculator[_ngcontent-%COMP%]   .third-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(6 70% 34% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(6 63% 50% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark-calculator[_ngcontent-%COMP%]   .third-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(6 63% 60% / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(0 0% 90% / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]   .default-color[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:hsl(60 10% 19% / var(--tw-text-opacity))}.light-calculator[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(0 0% 93% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(60 10% 19% / var(--tw-text-opacity))}.light-calculator[_ngcontent-%COMP%]   .theme-radio[_ngcontent-%COMP%]:checked{--tw-bg-opacity: 1;background-color:hsl(25 98% 40% / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]   .theme-radio[_ngcontent-%COMP%]:hover:checked{--tw-bg-opacity: 1;background-color:hsl(25 98% 63% / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(0 5% 81% / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(35 11% 61% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(45 7% 89% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(60 10% 19% / var(--tw-text-opacity))}.light-calculator[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(185 58% 25% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(185 42% 37% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.light-calculator[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(185 48% 50% / var(--tw-bg-opacity))}.light-calculator[_ngcontent-%COMP%]   .third-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(25 99% 27% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(25 98% 40% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.light-calculator[_ngcontent-%COMP%]   .third-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(25 98% 52% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(268 75% 9% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]   .default-color[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:hsl(52 100% 62% / var(--tw-text-opacity))}.violet-calculator[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(268 71% 12% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(52 100% 62% / var(--tw-text-opacity))}.violet-calculator[_ngcontent-%COMP%]   .theme-radio[_ngcontent-%COMP%]:checked{--tw-bg-opacity: 1;background-color:hsl(176 100% 44% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]   .theme-radio[_ngcontent-%COMP%]:hover:checked{--tw-bg-opacity: 1;background-color:hsl(176 100% 60% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:hsl(268 71% 12% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(290 70% 36% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(268 47% 21% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(52 100% 62% / var(--tw-text-opacity))}.violet-calculator[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(268 47% 34% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(285 91% 52% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(281 89% 26% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.violet-calculator[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(281 89% 40% / var(--tw-bg-opacity))}.violet-calculator[_ngcontent-%COMP%]   .third-button[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:hsl(177 92% 70% / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(176 100% 44% / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(198 20% 13% / var(--tw-text-opacity))}.violet-calculator[_ngcontent-%COMP%]   .third-button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:hsl(176 100% 60% / var(--tw-bg-opacity))}.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:text-\\[color\\:hsl\\(292\\[_ngcontent-%COMP%], 16\\%\\[_ngcontent-%COMP%], 49\\%\\)\\][_ngcontent-%COMP%]:hover{--tw-text-opacity: 1;color:hsl(292 16% 49% / var(--tw-text-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:border-none)[_ngcontent-%COMP%]{border-style:none}[_ngcontent-%COMP%]:is(.dark   .dark\\:border-b-slate-600)[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-bottom-color:rgb(71 85 105 / var(--tw-border-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:bg-slate-600)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(71 85 105 / var(--tw-bg-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:bg-slate-700)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(51 65 85 / var(--tw-bg-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:bg-slate-800)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:text-slate-200)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:text-slate-300)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity))}[_ngcontent-%COMP%]:is(.dark   .dark\\:shadow-slate-700)[_ngcontent-%COMP%]{--tw-shadow-color: #334155;--tw-shadow: var(--tw-shadow-colored)}[_ngcontent-%COMP%]:is(.dark   .dark\\:shadow-slate-800)[_ngcontent-%COMP%]{--tw-shadow-color: #1e293b;--tw-shadow: var(--tw-shadow-colored)}@media (min-width: 640px){.sm\\:grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:shadow-lg[_ngcontent-%COMP%]{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}@media (min-width: 768px){.md\\:m-auto[_ngcontent-%COMP%]{margin:auto}.md\\:mt-0[_ngcontent-%COMP%]{margin-top:0}.md\\:h-auto[_ngcontent-%COMP%]{height:auto}.md\\:w-auto[_ngcontent-%COMP%]{width:auto}.md\\:max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.md\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}.md\\:justify-between[_ngcontent-%COMP%]{justify-content:space-between}}@media (min-width: 1024px){.lg\\:h-44[_ngcontent-%COMP%]{height:11rem}.lg\\:w-1\\/2[_ngcontent-%COMP%]{width:50%}.lg\\:max-w-7xl[_ngcontent-%COMP%]{max-width:80rem}.lg\\:grid-cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row[_ngcontent-%COMP%]{flex-direction:row}.lg\\:gap-10[_ngcontent-%COMP%]{gap:2.5rem}.lg\\:overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}}@media (forced-colors: active){.forced-colors\\:hidden[_ngcontent-%COMP%]{display:none}}']})}return a})()}}]);