async function loadCommonParts() {
    try {
        // ヘッダーの読み込み
        const headerResponse = await fetch('./header.html');
        const headerHTML = await headerResponse.text();
        document.getElementById('header-container').innerHTML = headerHTML;

        // サイドバーの読み込み
        const sidebarResponse = await fetch('./sidebar.html');
        const sidebarHTML = await sidebarResponse.text();
        document.getElementById('sidebar-container').innerHTML = sidebarHTML;

        // フッターの読み込み
        const footerResponse = await fetch('./footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerHTML;
    } catch (error) {
        console.error('共通部分の読み込みに失敗しました:', error);
    }
}

window.addEventListener('DOMContentLoaded', loadCommonParts);

