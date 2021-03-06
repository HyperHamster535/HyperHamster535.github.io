    maxImages = 5

    document.getElementById("main-site-title").style.backgroundImage = "url('/assets/slideshow" + Math.ceil(Math.random() * maxImages) + ".png')"

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function coolTitle(){
        titleText = document.getElementById("main-site-title-text");
        targetTitleText = "Pr0x1mas.github.io"

        for (i = 0; i < 9; i++){
            await sleep(100);
            titleText.textContent = targetTitleText.substr(0, i) + "_";
        }

        if(screen.width > 600){
            await sleep(100);
            for (i = 9; i < targetTitleText.length + 1; i++){
                await sleep(100);
                titleText.textContent = targetTitleText.substr(0, i) + "_";
            }
        } else {
            i = i - 1;
        }
        await sleep(100);
        titleText.textContent = targetTitleText.substr(0, i);

        document.getElementById("down-icon").style.opacity = 100;

        
    }

    function nextImage(){
        document.getElementById("main-site-title").style.backgroundImage = "url('/assets/slideshow" + Math.ceil(Math.random() * maxImages) + ".png')"
    }

    async function runImageSlideshow(){
        bgImage = document.getElementById("main-site-title");
        while(true){
            await sleep(5000);
            nextImage();
            
        }
    }

    function setHiResImg(){
        document.getElementById("main-site-title").style.backgroundImage = "url('/assets/slideshow1.png')"
    }

    function scrollDown(){
        window.scrollTo({
        top: window.innerHeight - 56,
        left: 0,
        behavior: 'smooth'
    });
    }

    document.getElementById("channel-trailer").style.height = (document.getElementById("channel-trailer").clientWidth / 16)*9
    coolTitle();
    runImageSlideshow();