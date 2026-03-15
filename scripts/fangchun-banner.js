(function () {
    const introSection = document.getElementById('intro');
    if (!introSection) return;

    const banner = document.createElement('section');
    banner.className = 'py-8 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 dark:from-pink-950/30 dark:via-rose-950/30 dark:to-pink-950/30 border-y border-pink-100/70 dark:border-pink-900/40';
    banner.setAttribute('aria-label', '2026 纺春祭提示');

    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

    const card = document.createElement('div');
    card.className = 'rounded-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-md border border-pink-200/60 dark:border-pink-900/40 shadow-sm px-5 py-4 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3';

    const left = document.createElement('div');
    left.className = 'flex items-start gap-3';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'w-14 h-14 rounded-2xl bg-transparent flex items-center justify-center shrink-0';
    iconWrap.innerHTML = '<img src="https://github.com/ASR258/P.O.P-unOfficial-site/blob/main/resource/logo2.png?raw=true" alt="P.O.B Logo" class="w-12 h-12 object-contain">';

    const textWrap = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'text-base md:text-lg font-bold leading-snug text-secondary';
    title.textContent = '2026 纺春祭 定档5.23';

    const subtitle = document.createElement('a');
    subtitle.className = 'text-sm text-secondary mt-1 font-bold inline-flex items-center gap-2 hover:underline underline-offset-4';
    subtitle.href = 'https://m.q.qq.com/a/s/ee0077974f4bbac3465315ac49079a14?via=2016_1';
    subtitle.target = '_blank';
    subtitle.rel = 'noopener noreferrer';
    subtitle.innerHTML = '点击报名 <i class="fa-solid fa-arrow-up-right-from-square"></i>';

    textWrap.appendChild(title);
    textWrap.appendChild(subtitle);

    left.appendChild(iconWrap);
    left.appendChild(textWrap);

    const right = document.createElement('div');
    right.className = 'flex items-center gap-3';

    const btn = document.createElement('a');
    btn.className = 'inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold text-white bg-secondary hover:bg-pink-600 shadow-sm transition';
    btn.href = '#about';
    btn.innerHTML = '先逛逛部门 <i class="fa-solid fa-arrow-right ml-2"></i>';

    right.appendChild(btn);

    card.appendChild(left);
    card.appendChild(right);
    container.appendChild(card);
    banner.appendChild(container);

    introSection.insertAdjacentElement('afterend', banner);

    title.style.fontFamily = '"STKaiti", "KaiTi", "Kaiti SC", "DFKai-SB", serif';
    title.style.letterSpacing = '0.08em';
})();
