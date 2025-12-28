function scrollToAndShow(targetId) {
    const allSections = document.querySelectorAll('.Data_Collection, .Data_Prepare_Clean, .Model_Training_Evaluation, .Results');
    const targetElement = document.getElementById(targetId);

    const isCurrentlyHidden = targetElement.classList.contains('hidden');
    
    allSections.forEach(section => {
        if (section.id === targetId) {
            
            if (isCurrentlyHidden) {
                section.classList.remove('hidden'); 
                section.classList.add('visible');
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
            } else {
                section.classList.add('hidden'); 
            }
            
        } else {
            section.classList.add('hidden');
        }
    });

}