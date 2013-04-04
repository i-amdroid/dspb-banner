
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("drupaler-04").hide();sym.$("drupaler-walk-03").hide();sym.$("drupaler-walk-02").hide();sym.$("drupaler-walk-01").hide();sym.$("man-stop").hide();sym.$("drupaler7").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11250,function(sym,e){sym.$("man").hide();sym.$("man-stop").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11750,function(sym,e){sym.$("drupaler-walk-01").hide();sym.$("drupaler-walk-02").hide();sym.$("drupaler-01").show();sym.$("drupaler-02").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8750,function(sym,e){sym.$("drupaler-walk-04").hide();sym.$("drupaler-04").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.$("drupaler-01").hide();sym.$("drupaler-02").hide();sym.$("drupaler-03").hide();sym.$("drupaler-04").hide();sym.$("drupaler-walk-01").show();sym.$("drupaler-walk-02").show();sym.$("drupaler-walk-03").show();sym.$("drupaler-walk-04").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.$("drupaler-walk-04").hide();sym.$("drupaler-walk-03").hide();sym.$("drupaler-04").show();sym.$("drupaler-03").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.$("man-stop").hide();sym.$("drupaler7").show();sym.$("count").html(Drupal.settings.dspb.memberCount);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anchor}","click",function(sym,e){window.open("http://drupalspb.org/opros/prostoy-opros","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'cloud-1'
(function(symbolName){})("cloud-1");
//Edge symbol end:'cloud-1'

//=========================================================

//Edge symbol: 'cloud-2'
(function(symbolName){})("cloud-2");
//Edge symbol end:'cloud-2'

//=========================================================

//Edge symbol: 'drupaler'
(function(symbolName){})("drupaler");
//Edge symbol end:'drupaler'

//=========================================================

//Edge symbol: 'drupaler-walk'
(function(symbolName){})("drupaler-walk");
//Edge symbol end:'drupaler-walk'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){var count1=sym.getVariable("count1");sym.setVariable("count1",count1+1);if(count1<6){sym.play("start");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("count1",1);sym.play("start");});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){var count2=sym.getVariable("count2");sym.setVariable("count2",count2+1);if(count2<6){sym.play("start2");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("count2",1);sym.play("start2");});
//Edge binding end
})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'Symbol_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){var count3=sym.getVariable("count3");sym.setVariable("count3",count3+1);if(count3<6){sym.play("start3");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("count3",1);sym.play("start3");});
//Edge binding end
})("Symbol_3");
//Edge symbol end:'Symbol_3'

//=========================================================

//Edge symbol: 'Symbol_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){var count4=sym.getVariable("count4");sym.setVariable("count4",count4+1);if(count4<6){sym.play("start4");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("count4",1);sym.play("start4");});
//Edge binding end
})("Symbol_4");
//Edge symbol end:'Symbol_4'

//=========================================================

//Edge symbol: 'Symbol_5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){var count5=sym.getVariable("count5");sym.setVariable("count5",count5+1);if(count5<6){sym.play("start5");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.setVariable("count5",1);sym.play("start5");});
//Edge binding end
})("Symbol_5");
//Edge symbol end:'Symbol_5'
})(jQuery,AdobeEdge,"EDGE-33079507");