/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-04").hide();
         sym.$("drupaler-walk-03").hide();
         sym.$("drupaler-walk-02").hide();
         sym.$("drupaler-walk-01").hide();
         
         sym.$("man-stop").hide();
         
         sym.$("drupaler7").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("man").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("man-stop").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         
         sym.$("drupaler-walk-01").hide();
         sym.$("drupaler-walk-02").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         
         sym.$("drupaler-01").show();
         sym.$("drupaler-02").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-walk-04").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-04").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-01").hide();
         sym.$("drupaler-02").hide();
         sym.$("drupaler-03").hide();
         sym.$("drupaler-04").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-walk-01").show();
         sym.$("drupaler-walk-02").show();
         sym.$("drupaler-walk-03").show();
         sym.$("drupaler-walk-04").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-walk-04").hide();
         sym.$("drupaler-walk-03").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("drupaler-04").show();
         sym.$("drupaler-03").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.$("man-stop").hide();
         sym.$("drupaler7").show();
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("count").html(Drupal.settings.dspb.memberCount);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_anchor}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://drupalspb.org/opros/prostoy-opros", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'cloud-1'
   (function(symbolName) {   
   
   })("cloud-1");
   //Edge symbol end:'cloud-1'

   //=========================================================
   
   //Edge symbol: 'cloud-2'
   (function(symbolName) {   
   
   })("cloud-2");
   //Edge symbol end:'cloud-2'

   //=========================================================
   
   //Edge symbol: 'drupaler'
   (function(symbolName) {   
   
   })("drupaler");
   //Edge symbol end:'drupaler'

   //=========================================================
   
   //Edge symbol: 'drupaler-walk'
   (function(symbolName) {   
   
   })("drupaler-walk");
   //Edge symbol end:'drupaler-walk'

})(jQuery, AdobeEdge, "EDGE-33079507");