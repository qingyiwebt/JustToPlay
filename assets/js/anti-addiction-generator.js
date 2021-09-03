let template = `<div style="padding-inline: 2rem; font-size: 1.5rem; background-color: white;"><h1>孩子沉迷{device}，真相竟然是...</h1>
九月四日，{family_name}女士向我社反应，自己的孩子小{family_name}一到周末就玩{device}，每天都盯着{device}看一下午。我社记者随即安排进入调查。<br><br>
据了解，小{family_name}受网络“{industry}”圈子里的网友教唆，正在玩一款叫“{software}”的游戏。但接下来，令人触目惊心的真相露出了。<br><br>
记者在网上调查,发现“{software}”竟是付费软件，且费用高达令人膛目结舌的每年{cost}人民币。看到这里，{family_name}女士都要晕过去了。<br><br>
小{family_name}说道，他的同学每个人都有两三款{kind}，他们没有未成年识别，没有防沉迷机制，没有消费限制，甚至不用实名注册都能使用，很多用户会把一整天的时间投入其中,对青少年的负面影响不可估量。目前,我社正准备与{family_name}女士一同将此家软件的开发商举报，以响应国家的防沉迷号召，为青少年创造一个更好的成长环境。<br></div>`;
doOnLoaded(function() {
    /**
     * @type {HTMLElement}
     */
    let renderer = getElement('#renderer');
    getElement('#generate').addEventListener('click', async function() {
        renderer.innerHTML =
            template.replaceAll('{industry}', getValue('#industry'))
            .replaceAll('{software}', getValue('#software'))
            .replaceAll('{kind}', getValue('#kind'))
            .replaceAll('{device}', getValue('#device'))
            .replaceAll('{family_name}', getValue('#family_name'))
            .replaceAll('{cost}', getValue('#cost'));
        renderer.visible(true);
        let width = renderer.clientWidth;
        let height = renderer.clientHeight;

        let canvas = await html2canvas(renderer, {
            width: width,
            heigth: height,
            windowHeight: width,
            windowWidth: height,
            scale: 8,
            scrollX: 0,
            scrollY: 0,
            y: 0,
            useCORS: true,
        });
        getElement('.result-area').visible(true);
        let base64Url = canvas.toDataURL();
        let resultElement = getElement('#result');
        resultElement.src = base64Url;
        renderer.visible(false);
    });

});