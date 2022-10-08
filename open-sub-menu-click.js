document.addEventListener("click", documentActions);

    function documentActions(e) {

        const targetElement = e.target;

        if (targetElement.closest(".menu-item-has-children")) {

            if (targetElement.classList.contains("menu-item-has-children")) {
               e.preventDefault(); 
            }

                const activeLink = document.querySelector('._sub-menu-open');
                const activeLinkItem = document.querySelector('._sub-menu-open-link');

                if (activeLink && activeLink !== targetElement) {
                    activeLink.classList.remove('_sub-menu-open');
                }   

                if (activeLinkItem && activeLinkItem !== targetElement) {
                    activeLinkItem.classList.remove('_sub-menu-open-link');
                }   

                if (targetElement.classList.contains("_sub-menu-open-link")) {
                    targetElement.closest(".menu-item-has-children").classList.remove("_sub-menu-open"); 
                } else {
                    targetElement.closest(".menu-item-has-children").classList.add("_sub-menu-open");   
                }   

                
                targetElement.classList.toggle("_sub-menu-open-link"); 
     
                
        }

    }
    
