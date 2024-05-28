function animateText(element, text) {
    return new Promise((resolve, reject) => {
        let animated = false;

        let splitedElement = text.split("");
        element.textContent = "";

        for (let i = 0; i < splitedElement.length; i++) {
            let span = `<span class="htt">${splitedElement[i]}</span>`;
        
            element.innerHTML += span;
        }



        let timer = setInterval(startAnimation, 100);
        let counter = 0;

        function startAnimation() {

            if (counter >= splitedElement.length){
                stopAnimation();
                animated = true;
                resolve(animated);
                return animated;
            }
            
            let span = element.querySelectorAll("span")[counter];
            span.classList.add("active");

            counter ++;
        }

        function stopAnimation() {
            clearInterval(timer);
            timer = null;
            return;
        }
    });
}

export default animateText;