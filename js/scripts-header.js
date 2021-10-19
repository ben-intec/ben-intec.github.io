class ScriptsHeader extends HTMLElement{
    connectedCallback(){
        const menu_items = ['Home','Todo','Todos','Users'];
        const menu_src = ['index.html','todo.html','todos.html','users.html'];
        let html_menu = '';

        for (let i = 0; i < menu_items.length; i++) {
            html_menu += '<li ';
            html_menu += ' class="';
            html_menu += menu_items[i];
            html_menu += '"><a href="';
            html_menu += menu_src[i];
            html_menu += '">';
            html_menu += menu_items[i];
            html_menu += '</a></li>\n';
        }

        this.innerHTML = '<header id="navigation"><ul class="primary-nav">\n' + html_menu + ' </ul></header>'
    }
}
customElements.define("script-header", ScriptsHeader)