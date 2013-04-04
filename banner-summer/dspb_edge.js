/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'space2',
            type:'image',
            rect:['-905px','-4px','1288px','129px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"space2.svg",'0px','0px']
         },
         {
            id:'bridge-r',
            type:'image',
            rect:['-187px','37px','121px','121px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bridge-r.png",'0px','0px']
         },
         {
            id:'bridge-l',
            type:'image',
            rect:['-99px','37px','121px','121px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bridge-l.png",'0px','0px']
         },
         {
            id:'spb2',
            type:'image',
            rect:['-908px','0px','1208px','121px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"spb2.svg",'0px','0px']
         },
         {
            id:'Group2',
            type:'group',
            rect:['34','26','121','121','auto','auto'],
            c:[
            {
               id:'drupaler-01',
               type:'rect',
               rect:['-232px','0px','auto','auto','auto','auto']
            },
            {
               id:'drupaler-walk-01',
               type:'rect',
               rect:['61px','62px','auto','auto','auto','auto']
            }]
         },
         {
            id:'Group3',
            type:'group',
            rect:['23','26','121','121','auto','auto'],
            c:[
            {
               id:'drupaler-02',
               type:'rect',
               rect:['-208px','46px','auto','auto','auto','auto']
            },
            {
               id:'drupaler-walk-02',
               type:'rect',
               rect:['148px','54px','auto','auto','auto','auto']
            }]
         },
         {
            id:'Group4',
            type:'group',
            rect:['12','26','121','121','auto','auto'],
            c:[
            {
               id:'drupaler-03',
               type:'rect',
               rect:['-187px','47px','auto','auto','auto','auto']
            },
            {
               id:'drupaler-walk-03',
               type:'rect',
               rect:['61px','62px','auto','auto','auto','auto']
            }]
         },
         {
            id:'Group',
            type:'group',
            rect:['1','26px','121','121','auto','auto'],
            c:[
            {
               id:'drupaler-04',
               type:'rect',
               rect:['59px','54px','auto','auto','auto','auto']
            },
            {
               id:'drupaler-walk-04',
               type:'rect',
               rect:['0px','0px','auto','auto','auto','auto']
            }]
         },
         {
            id:'man-stop',
            type:'image',
            rect:['90px','27px','121px','121px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"man-stop.svg",'0px','0px']
         },
         {
            id:'drupaler7',
            type:'rect',
            rect:['151','86','auto','auto','auto','auto']
         },
         {
            id:'cloud-12',
            type:'rect',
            rect:['-48','-41','auto','auto','auto','auto']
         },
         {
            id:'cloud-22',
            type:'rect',
            rect:['187','-29','auto','auto','auto','auto']
         },
         {
            id:'cloud-13',
            type:'rect',
            rect:['141px','24px','auto','auto','auto','auto']
         },
         {
            id:'cloud-23',
            type:'rect',
            rect:['198px','43px','auto','auto','auto','auto']
         },
         {
            id:'man',
            type:'image',
            rect:['256px','27px','121px','121px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"man.svg",'0px','0px']
         },
         {
            id:'our',
            type:'text',
            rect:['113px','33px','auto','auto','auto','auto'],
            text:"Нас уже ",
            align:"right",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(35,100,153,1.00)","700","none",""]
         },
         {
            id:'count',
            type:'text',
            rect:['158px','33px','auto','auto','auto','auto'],
            text:"много",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(35,100,153,1.00)","700","none",""]
         },
         {
            id:'join',
            type:'text',
            rect:['56px','-37px','auto','auto','auto','auto'],
            text:"Присоединяйся!",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(35,100,153,1.00)","700","none",""],
            transform:[]
         },
         {
            id:'anchor',
            type:'rect',
            rect:['0px','0px','300px','121px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'drupaler-03',
            symbolName:'drupaler'
         },
         {
            id:'cloud-12',
            symbolName:'cloud-1'
         },
         {
            id:'drupaler7',
            symbolName:'drupaler'
         },
         {
            id:'drupaler-04',
            symbolName:'drupaler'
         },
         {
            id:'drupaler-walk-01',
            symbolName:'drupaler-walk'
         },
         {
            id:'drupaler-02',
            symbolName:'drupaler'
         },
         {
            id:'drupaler-01',
            symbolName:'drupaler'
         },
         {
            id:'drupaler-walk-02',
            symbolName:'drupaler-walk'
         },
         {
            id:'cloud-23',
            symbolName:'cloud-2'
         },
         {
            id:'cloud-13',
            symbolName:'cloud-1'
         },
         {
            id:'drupaler-walk-04',
            symbolName:'drupaler-walk'
         },
         {
            id:'cloud-22',
            symbolName:'cloud-2'
         },
         {
            id:'drupaler-walk-03',
            symbolName:'drupaler-walk'
         }
         ]
      },
   states: {
      "Base State": {
         "${_our}": [
            ["color", "color", 'rgba(35,100,153,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '85px'],
            ["style", "font-size", '24px'],
            ["style", "top", '25px'],
            ["style", "text-align", 'right'],
            ["transform", "scaleY", '0'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0.515625']
         ],
         "${_cloud-12}": [
            ["style", "left", '17px'],
            ["style", "top", '-41px']
         ],
         "${_space2}": [
            ["style", "top", '-4px'],
            ["style", "height", '129px'],
            ["style", "left", '-905px'],
            ["style", "width", '1287.7788822395px']
         ],
         "${_spb2}": [
            ["style", "top", '0px'],
            ["style", "height", '121px'],
            ["style", "left", '-908.05px'],
            ["style", "width", '1208.0660718598px']
         ],
         "${_man}": [
            ["style", "top", '27px'],
            ["style", "height", '120.96666717529px'],
            ["style", "left", '256px'],
            ["style", "width", '120.96666717529px']
         ],
         "${_anchor}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "cursor", 'pointer']
         ],
         "${_join}": [
            ["color", "color", 'rgba(35,100,153,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '58px'],
            ["style", "font-size", '24px'],
            ["style", "top", '-37.5px'],
            ["transform", "scaleY", '1'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_drupaler-04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_drupaler-03}": [
            ["style", "top", '0px'],
            ["style", "left", '-232px']
         ],
         "${_bridge-r}": [
            ["style", "top", '37px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '121px'],
            ["style", "left", '-189px'],
            ["style", "width", '121px']
         ],
         "${_bridge-l}": [
            ["style", "top", '37px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '120.96666717529px'],
            ["style", "left", '-96.97px'],
            ["style", "width", '120.96666717529px']
         ],
         "${_cloud-23}": [
            ["style", "left", '-383px'],
            ["style", "top", '-29.97px']
         ],
         "${_drupaler-walk-01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_cloud-22}": [
            ["style", "left", '238px'],
            ["style", "top", '-41px']
         ],
         "${_drupaler-walk-04}": [
            ["style", "left", '-72px'],
            ["style", "top", '0px']
         ],
         "${_man-stop}": [
            ["style", "height", '121px'],
            ["style", "top", '27px'],
            ["style", "left", '90px'],
            ["style", "width", '121px']
         ],
         "${_Group}": [
            ["style", "top", '26px']
         ],
         "${_drupaler-walk-03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_cloud-13}": [
            ["style", "left", '-217px'],
            ["style", "top", '-37px']
         ],
         "${_drupaler-01}": [
            ["style", "left", '-232px'],
            ["style", "top", '0px']
         ],
         "${_count}": [
            ["style", "top", '25px'],
            ["color", "color", 'rgba(35,100,153,1.00)'],
            ["transform", "scaleY", '0'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '148px'],
            ["style", "font-size", '24px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '121px'],
            ["style", "width", '300px']
         ],
         "${_drupaler7}": [
            ["style", "left", '90px'],
            ["style", "top", '26px']
         ],
         "${_drupaler-02}": [
            ["style", "left", '-231.92px'],
            ["style", "top", '0px']
         ],
         "${_drupaler-walk-02}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 24000,
         autoPlay: true,
         timeline: [
            { id: "eid345", tween: [ "style", "${_drupaler-walk-02}", "left", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid356", tween: [ "style", "${_drupaler-walk-02}", "left", '79px', { fromValue: '0px'}], position: 10000, duration: 1500 },
            { id: "eid765", tween: [ "style", "${_join}", "top", '11.5px', { fromValue: '-37.5px'}], position: 13988, duration: 512, easing: "easeOutBack" },
            { id: "eid632", tween: [ "transform", "${_count}", "scaleY", '1', { fromValue: '0'}], position: 12500, duration: 339 },
            { id: "eid173", tween: [ "style", "${_drupaler-04}", "left", '0px', { fromValue: '0px'}], position: 9500, duration: 0 },
            { id: "eid210", tween: [ "style", "${_drupaler-04}", "left", '65px', { fromValue: '0px'}], position: 10000, duration: 1250 },
            { id: "eid201", tween: [ "style", "${_man}", "top", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "style", "${_man}", "top", '27px', { fromValue: '27px'}], position: 11000, duration: 0 },
            { id: "eid347", tween: [ "style", "${_drupaler-walk-03}", "left", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid354", tween: [ "style", "${_drupaler-walk-03}", "left", '65px', { fromValue: '0px'}], position: 10000, duration: 1250 },
            { id: "eid344", tween: [ "style", "${_drupaler-walk-01}", "left", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid357", tween: [ "style", "${_drupaler-walk-01}", "left", '79px', { fromValue: '0px'}], position: 10000, duration: 1500 },
            { id: "eid342", tween: [ "style", "${_drupaler-walk-01}", "top", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid753", tween: [ "style", "${_our}", "left", '83px', { fromValue: '85px'}], position: 12500, duration: 339 },
            { id: "eid631", tween: [ "transform", "${_count}", "scaleX", '1', { fromValue: '0'}], position: 12500, duration: 339 },
            { id: "eid3", tween: [ "style", "${_spb2}", "left", '-908.05px', { fromValue: '-908.05px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_spb2}", "left", '-908.05px', { fromValue: '-908.05px'}], position: 500, duration: 0 },
            { id: "eid18", tween: [ "style", "${_spb2}", "left", '-698.53px', { fromValue: '-908.05px'}], position: 2500, duration: 2250 },
            { id: "eid21", tween: [ "style", "${_spb2}", "left", '-466.52px', { fromValue: '-698.53px'}], position: 4750, duration: 2250 },
            { id: "eid5", tween: [ "style", "${_man}", "left", '256px', { fromValue: '256px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_man}", "left", '90px', { fromValue: '256px'}], position: 500, duration: 2000 },
            { id: "eid25", tween: [ "style", "${_man}", "left", '142px', { fromValue: '90px'}], position: 6500, duration: 500 },
            { id: "eid199", tween: [ "style", "${_man}", "left", '90px', { fromValue: '142px'}], position: 10000, duration: 1000 },
            { id: "eid137", tween: [ "style", "${_drupaler-01}", "top", '0px', { fromValue: '0px'}], position: 7000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_drupaler-01}", "top", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
            { id: "eid1148", tween: [ "style", "${_bridge-l}", "left", '135px', { fromValue: '-96.97px'}], position: 4750, duration: 2250 },
            { id: "eid127", tween: [ "style", "${_drupaler-01}", "left", '0.32px', { fromValue: '-232px'}], position: 4750, duration: 2250 },
            { id: "eid207", tween: [ "style", "${_drupaler-01}", "left", '68.25px', { fromValue: '0.32px'}], position: 10000, duration: 1250 },
            { id: "eid211", tween: [ "style", "${_drupaler-01}", "left", '79.25px', { fromValue: '68.25px'}], position: 11250, duration: 250 },
            { id: "eid769", tween: [ "style", "${_count}", "top", '42px', { fromValue: '25px'}], position: 14110, duration: 390, easing: "easeOutBack" },
            { id: "eid346", tween: [ "style", "${_drupaler-walk-02}", "top", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid170", tween: [ "style", "${_drupaler-04}", "top", '0px', { fromValue: '0px'}], position: 9500, duration: 0 },
            { id: "eid1156", tween: [ "transform", "${_bridge-l}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 2500, duration: 2250 },
            { id: "eid1154", tween: [ "transform", "${_bridge-l}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 7000, duration: 2000 },
            { id: "eid7", tween: [ "style", "${_cloud-12}", "top", '-41px', { fromValue: '-41px'}], position: 0, duration: 0 },
            { id: "eid349", tween: [ "style", "${_drupaler-walk-03}", "top", '0px', { fromValue: '0px'}], position: 8750, duration: 0 },
            { id: "eid1166", tween: [ "transform", "${_bridge-r}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 2500, duration: 2250 },
            { id: "eid1160", tween: [ "transform", "${_bridge-r}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 7000, duration: 2000 },
            { id: "eid522", tween: [ "style", "${_cloud-23}", "left", '-448px', { fromValue: '-383px'}], position: 0, duration: 2500 },
            { id: "eid460", tween: [ "style", "${_cloud-23}", "left", '-236px', { fromValue: '-448px'}], position: 2500, duration: 2250 },
            { id: "eid490", tween: [ "style", "${_cloud-23}", "left", '-39px', { fromValue: '-236px'}], position: 4750, duration: 2250 },
            { id: "eid494", tween: [ "style", "${_cloud-23}", "left", '-197px', { fromValue: '-39px'}], position: 7000, duration: 5000 },
            { id: "eid526", tween: [ "style", "${_cloud-23}", "left", '-484px', { fromValue: '-197px'}], position: 12000, duration: 8000 },
            { id: "eid530", tween: [ "style", "${_cloud-23}", "left", '-645px', { fromValue: '-484px'}], position: 20000, duration: 4000 },
            { id: "eid770", tween: [ "style", "${_our}", "top", '42px', { fromValue: '25px'}], position: 14110, duration: 390, easing: "easeOutBack" },
            { id: "eid134", tween: [ "style", "${_drupaler-02}", "top", '0px', { fromValue: '0px'}], position: 4750, duration: 0 },
            { id: "eid135", tween: [ "style", "${_drupaler-02}", "top", '0px', { fromValue: '0px'}], position: 7000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_drupaler-02}", "top", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
            { id: "eid520", tween: [ "style", "${_cloud-12}", "left", '-48px', { fromValue: '17px'}], position: 0, duration: 2500 },
            { id: "eid17", tween: [ "style", "${_cloud-12}", "left", '126.5px', { fromValue: '-48px'}], position: 2500, duration: 2250 },
            { id: "eid20", tween: [ "style", "${_cloud-12}", "left", '314.5px', { fromValue: '126.5px'}], position: 4750, duration: 2250 },
            { id: "eid492", tween: [ "style", "${_cloud-12}", "left", '156.5px', { fromValue: '314.5px'}], position: 7000, duration: 5000 },
            { id: "eid524", tween: [ "style", "${_cloud-12}", "left", '-130.5px', { fromValue: '156.5px'}], position: 12000, duration: 8000 },
            { id: "eid528", tween: [ "style", "${_cloud-12}", "left", '-291.5px', { fromValue: '-130.5px'}], position: 20000, duration: 4000 },
            { id: "eid748", tween: [ "style", "${_count}", "left", '184px', { fromValue: '148px'}], position: 12500, duration: 339 },
            { id: "eid519", tween: [ "style", "${_cloud-22}", "left", '173px', { fromValue: '238px'}], position: 0, duration: 2500 },
            { id: "eid19", tween: [ "style", "${_cloud-22}", "left", '322.5px', { fromValue: '173px'}], position: 2500, duration: 2250 },
            { id: "eid22", tween: [ "style", "${_cloud-22}", "left", '521.5px', { fromValue: '322.5px'}], position: 4750, duration: 2250 },
            { id: "eid491", tween: [ "style", "${_cloud-22}", "left", '363.5px', { fromValue: '521.5px'}], position: 7000, duration: 5000 },
            { id: "eid523", tween: [ "style", "${_cloud-22}", "left", '76.5px', { fromValue: '363.5px'}], position: 12000, duration: 8000 },
            { id: "eid527", tween: [ "style", "${_cloud-22}", "left", '-84.5px', { fromValue: '76.5px'}], position: 20000, duration: 4000 },
            { id: "eid1147", tween: [ "style", "${_bridge-r}", "left", '43px', { fromValue: '-189px'}], position: 4750, duration: 2250 },
            { id: "eid723", tween: [ "style", "${_our}", "opacity", '1', { fromValue: '0.515625'}], position: 12500, duration: 339 },
            { id: "eid129", tween: [ "style", "${_drupaler-03}", "left", '0.32px', { fromValue: '-232px'}], position: 4750, duration: 2250 },
            { id: "eid209", tween: [ "style", "${_drupaler-03}", "left", '66px', { fromValue: '0.32px'}], position: 10000, duration: 1250 },
            { id: "eid125", tween: [ "style", "${_drupaler-02}", "left", '0.42px', { fromValue: '-231.92px'}], position: 4750, duration: 2250 },
            { id: "eid208", tween: [ "style", "${_drupaler-02}", "left", '79px', { fromValue: '0.42px'}], position: 10000, duration: 1500 },
            { id: "eid633", tween: [ "transform", "${_our}", "scaleX", '1', { fromValue: '0'}], position: 12500, duration: 339 },
            { id: "eid139", tween: [ "style", "${_drupaler-03}", "top", '0px', { fromValue: '0px'}], position: 4750, duration: 0 },
            { id: "eid140", tween: [ "style", "${_drupaler-03}", "top", '0px', { fromValue: '0px'}], position: 7000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_drupaler-03}", "top", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
            { id: "eid521", tween: [ "style", "${_cloud-13}", "left", '-282px', { fromValue: '-217px'}], position: 0, duration: 2500 },
            { id: "eid461", tween: [ "style", "${_cloud-13}", "left", '-70px', { fromValue: '-282px'}], position: 2500, duration: 2250 },
            { id: "eid489", tween: [ "style", "${_cloud-13}", "left", '122px', { fromValue: '-70px'}], position: 4750, duration: 2250 },
            { id: "eid493", tween: [ "style", "${_cloud-13}", "left", '-36px', { fromValue: '122px'}], position: 7000, duration: 5000 },
            { id: "eid525", tween: [ "style", "${_cloud-13}", "left", '-323px', { fromValue: '-36px'}], position: 12000, duration: 8000 },
            { id: "eid529", tween: [ "style", "${_cloud-13}", "left", '-484px', { fromValue: '-323px'}], position: 20000, duration: 4000 },
            { id: "eid314", tween: [ "style", "${_drupaler-walk-04}", "left", '-72px', { fromValue: '-72px'}], position: 7000, duration: 0 },
            { id: "eid316", tween: [ "style", "${_drupaler-walk-04}", "left", '0px', { fromValue: '-72px'}], position: 7500, duration: 1250 },
            { id: "eid355", tween: [ "style", "${_drupaler-walk-04}", "left", '65px', { fromValue: '0px'}], position: 10000, duration: 1250 },
            { id: "eid462", tween: [ "style", "${_cloud-22}", "top", '-41px', { fromValue: '-41px'}], position: 2500, duration: 0 },
            { id: "eid241", tween: [ "style", "${_drupaler7}", "left", '90px', { fromValue: '90px'}], position: 11750, duration: 0 },
            { id: "eid634", tween: [ "transform", "${_our}", "scaleY", '1', { fromValue: '0'}], position: 12500, duration: 339 },
            { id: "eid237", tween: [ "style", "${_drupaler7}", "top", '26px', { fromValue: '26px'}], position: 11750, duration: 0 }         ]
      }
   }
},
"cloud-1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cloud-1',
      type: 'image',
      rect: ['0px','0px','167px','121px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud-1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cloud-1}": [
            ["style", "height", '121px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '167px']
         ],
         "${symbolSelector}": [
            ["style", "height", '121px'],
            ["style", "width", '167px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cloud-2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cloud-2',
      type: 'image',
      rect: ['0px','0px','120px','121px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud-2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cloud-2}": [
            ["style", "top", '0px'],
            ["style", "height", '120.99169754562px'],
            ["style", "left", '0px'],
            ["style", "width", '120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120.98332977295px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"drupaler": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-82px','-82px','284px','284px','auto','auto'],
      id: 'drupaler',
      transform: [{1:0,0:0},{},{},['0.426','0.426']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/drupaler.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_drupaler}": [
            ["style", "top", '-81.52px'],
            ["transform", "scaleY", '0.42594'],
            ["style", "left", '-81.52px'],
            ["transform", "scaleX", '0.42594']
         ],
         "${symbolSelector}": [
            ["style", "height", '120.96696px'],
            ["style", "width", '120.96696px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"drupaler-walk": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'drupaler-walk2',
      type: 'image',
      rect: ['0px','0px','121px','121px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drupaler-walk2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_drupaler-walk2}": [
            ["style", "top", '0px'],
            ["style", "height", '121px'],
            ["style", "left", '0px'],
            ["style", "width", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '121px'],
            ["style", "width", '121px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-33079507");
