
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
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'Symbol_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_3");
//Edge symbol end:'Symbol_3'

//=========================================================

//Edge symbol: 'Symbol_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_4");
//Edge symbol end:'Symbol_4'

//=========================================================

//Edge symbol: 'Symbol_5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_5");
//Edge symbol end:'Symbol_5'
})(jQuery,AdobeEdge,"EDGE-33079507");