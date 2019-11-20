$(function() {   
    /* modal 
    ===========================*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(Event) {
        Event.preventDefault();
        
       let $this = $(this);
       let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
    });
    modalClose.on("click", function(Event) {
        Event.preventDefault();
        
       let $this = $(this);
       let modalParent = $this.parents('.modal');
        
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });
    
   
});