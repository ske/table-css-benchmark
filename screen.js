const Screen = function() {};

Screen.prototype.width = 320;
Screen.prototype.height = 200;
Screen.prototype.root = false;
Screen.prototype.getWidth = function() {
    return this.width;
}
Screen.prototype.getHeight = function() {
    return this.height;
}

Screen.prototype.set = function(x,y,c) {
    var p = this.root.find(".p_"+x+"_"+y);
    p.css('background-color',c);
}

Screen.prototype.init = function(rootEl) {
    this.root = rootEl;
    this.root.html('<table cellspacing="0" cellpadding="0"><tbody></tbody><table>');
    let rows = this.root.find('tbody');
    for (var y=0; y<this.height; y++) {
        var cols = "";
        for (var x=0; x<this.width; x++) {
            cols += '<td class="p p_'+x+"_"+y+'"></td>';
        }
        rows.append('<tr>' + cols + '</tr>');
    }
}
