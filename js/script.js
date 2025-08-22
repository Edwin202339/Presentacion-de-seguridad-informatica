(function(){
    const slides = Array.from(document.querySelectorAll('.slide'));
    const totalSlides = slides.length;
    let current = 0;
    const currentEl = document.getElementById('current-slide');
    const totalEl = document.getElementById('total-slides');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const dotsContainer = document.getElementById('dots');
    const autoplayCheckbox = document.getElementById('autoplay');
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 5000;

    totalEl.textContent = totalSlides;

    function goTo(index){
        current = (index + totalSlides) % totalSlides;
        slides.forEach((s,i)=>{
            s.classList.toggle('active', i===current);
            if(i===current) s.focus();
        });
        currentEl.textContent = current+1;
        updateDots();
    }

    function next(){ goTo(current+1); }
    function prev(){ goTo(current-1); }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // Keyboard
    document.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight' || e.key === ' ') next();
        if(e.key === 'ArrowLeft') prev();
    });

    // Dots
    function buildDots(){
        for(let i=0;i<totalSlides;i++){
            const d = document.createElement('button');
            d.className = 'dot';
            d.setAttribute('aria-label', `Ir a diapositiva ${i+1}`);
            d.addEventListener('click', ()=>goTo(i));
            dotsContainer.appendChild(d);
        }
        updateDots();
    }

    function updateDots(){
        const ds = Array.from(dotsContainer.children);
        ds.forEach((d,i)=> d.classList.toggle('active', i===current));
    }

    // Autoplay
    function startAutoplay(){
        stopAutoplay();
        autoplayTimer = setInterval(()=>{ next(); }, AUTOPLAY_INTERVAL);
    }
    function stopAutoplay(){ if(autoplayTimer) clearInterval(autoplayTimer); autoplayTimer = null; }

    autoplayCheckbox.addEventListener('change', ()=>{
        if(autoplayCheckbox.checked) startAutoplay(); else stopAutoplay();
    });

    // Pause autoplay on hover/focus
    document.getElementById('presentation').addEventListener('mouseover', stopAutoplay);
    document.getElementById('presentation').addEventListener('mouseout', ()=>{ if(autoplayCheckbox.checked) startAutoplay(); });

    // Touch swipe support (simple)
    let touchStartX = null;
    document.addEventListener('touchstart', (e)=>{ touchStartX = e.touches[0].clientX; });
    document.addEventListener('touchend', (e)=>{
        if(touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if(Math.abs(dx) > 40){ if(dx < 0) next(); else prev(); }
        touchStartX = null;
    });

    // Initialize
    buildDots();
    goTo(0);
})();
